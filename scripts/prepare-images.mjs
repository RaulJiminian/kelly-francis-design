import { createHash } from 'node:crypto'
import { mkdir, readFile, readdir, rm, stat, writeFile } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'
import { projects } from '../src/data/projects.js'

const root = process.cwd()
const sourceRoot = path.join(root, 'assets')
const inputPath = path.join(sourceRoot, 'photo-manifest.json')
const outputRoot = path.join(root, 'public', 'assets', 'images')
const manifestPath = path.join(root, 'src', 'generated', 'image-manifest.json')
const requestedMode = process.env.VITE_CONTENT_MODE ?? process.env.CONTENT_MODE
const mode = requestedMode === 'publish' ? 'publish' : 'preview'
const widths = [480, 768, 960, 1280, 1600, 1920, 2560]
const formats = [
  { name: 'avif', options: { quality: 50 } },
  { name: 'webp', options: { quality: 78 } },
  { name: 'jpeg', options: { quality: 82, mozjpeg: true } },
]

const sourceManifest = JSON.parse(await readFile(inputPath, 'utf8'))
const ids = new Set()
const output = { schemaVersion: 1, generatedAt: null, images: {} }
const expectedFiles = new Set(['.gitkeep'])
const publishedImageIds = new Set(
  projects
    .filter((project) => project.status === 'published')
    .flatMap((project) => [
      project.coverImageId,
      ...project.galleryImageIds,
      ...project.comparisonPairs.flatMap((pair) => [
        ...(pair.beforeImageIds ?? [pair.beforeImageId]),
        pair.afterImageId,
      ]),
    ]),
)

function assert(condition, message) {
  if (!condition) throw new Error(message)
}

function normalizedSource(source) {
  const absolute = path.resolve(root, source)
  const relative = path.relative(sourceRoot, absolute)
  assert(relative && !relative.startsWith('..') && !path.isAbsolute(relative), `Photo source escapes assets/: ${source}`)
  return absolute
}

function parseAspectRatio(value) {
  if (Array.isArray(value) && value.length === 2) return Number(value[0]) / Number(value[1])
  if (typeof value === 'string' && value.includes(':')) {
    const [x, y] = value.split(':').map(Number)
    return x / y
  }
  return Number(value)
}

async function buildFamily(photo, sourceBytes, metadata, familyName, crop) {
  const ratio = crop ? parseAspectRatio(crop.aspectRatio) : metadata.width / metadata.height
  assert(Number.isFinite(ratio) && ratio > 0, `Invalid crop ratio for ${photo.id}/${familyName}`)
  const focalPoint = crop?.focalPoint ?? photo.focalPoint ?? { x: 0.5, y: 0.5 }
  const maxWidth = crop ? Math.min(metadata.width, Math.floor(metadata.height * ratio)) : metadata.width
  const familyWidths = [...new Set(widths.filter((width) => width <= maxWidth).concat(maxWidth))].sort((a, b) => a - b)
  const variants = {}

  for (const format of formats) {
    variants[format.name] = []
    for (const width of familyWidths) {
      const height = Math.max(1, Math.round(width / ratio))
      const settings = JSON.stringify({ id: photo.id, familyName, width, height, format })
      const hash = createHash('sha256').update(sourceBytes).update(settings).digest('hex').slice(0, 12)
      const fileName = `${photo.id}-${familyName}-${width}-${hash}.${format.name === 'jpeg' ? 'jpg' : format.name}`
      const outputPath = path.join(outputRoot, fileName)
      let pipeline = sharp(sourceBytes).rotate()

      if (crop) {
        const swapsAxes = [5, 6, 7, 8].includes(metadata.orientation)
        const orientedWidth = swapsAxes ? metadata.height : metadata.width
        const orientedHeight = swapsAxes ? metadata.width : metadata.height
        const sourceRatio = orientedWidth / orientedHeight
        const cropWidth = sourceRatio > ratio ? Math.round(orientedHeight * ratio) : orientedWidth
        const cropHeight = sourceRatio > ratio ? orientedHeight : Math.round(orientedWidth / ratio)
        const left = Math.max(0, Math.min(orientedWidth - cropWidth, Math.round((orientedWidth - cropWidth) * focalPoint.x)))
        const top = Math.max(0, Math.min(orientedHeight - cropHeight, Math.round((orientedHeight - cropHeight) * focalPoint.y)))
        pipeline = pipeline
          .extract({ left, top, width: cropWidth, height: cropHeight })
          .resize({ width, height, withoutEnlargement: true })
      } else {
        pipeline = pipeline.resize({ width, withoutEnlargement: true })
      }

      let existingFile
      try {
        const existingStats = await stat(outputPath)
        existingFile = existingStats.isFile() && existingStats.size > 0
      } catch {
        existingFile = false
      }

      if (!existingFile) await pipeline[format.name](format.options).toFile(outputPath)
      const result = await sharp(outputPath).metadata()
      const fileStats = await stat(outputPath)
      expectedFiles.add(fileName)
      variants[format.name].push({
        url: `/assets/images/${fileName}`,
        width: result.width,
        height: result.height,
        bytes: fileStats.size,
      })
    }
  }

  return { aspectRatio: ratio, variants }
}

assert(sourceManifest.schemaVersion === 1, 'Unsupported source photo manifest schema')
assert(Array.isArray(sourceManifest.photos), 'Photo manifest must include a photos array')
await mkdir(outputRoot, { recursive: true })
await mkdir(path.dirname(manifestPath), { recursive: true })

for (const photo of sourceManifest.photos) {
  assert(photo.id && !ids.has(photo.id), `Missing or duplicate photo id: ${photo.id}`)
  ids.add(photo.id)
  assert(['before', 'after', 'detail', 'about'].includes(photo.role), `Invalid role for ${photo.id}`)
  assert(photo.focalPoint?.x >= 0 && photo.focalPoint?.x <= 1, `Invalid focal point for ${photo.id}`)
  assert(photo.focalPoint?.y >= 0 && photo.focalPoint?.y <= 1, `Invalid focal point for ${photo.id}`)

  if (mode === 'publish' && !publishedImageIds.has(photo.id)) continue
  if (!photo.source) continue
  if (mode === 'publish') {
    assert(photo.approved, `Published photo is not approved: ${photo.id}`)
    assert(typeof photo.alt === 'string' && photo.alt.trim(), `Published photo needs alt text: ${photo.id}`)
  }

  const sourcePath = normalizedSource(photo.source)
  const sourceBytes = await readFile(sourcePath)
  const metadata = await sharp(sourceBytes).metadata()
  assert(metadata.width && metadata.height, `Unreadable dimensions for ${photo.id}`)
  const families = {
    natural: await buildFamily(photo, sourceBytes, metadata, 'natural', null),
  }

  for (const [familyName, crop] of Object.entries(photo.crops ?? {})) {
    families[familyName] = await buildFamily(photo, sourceBytes, metadata, familyName, crop)
  }

  output.images[photo.id] = {
    id: photo.id,
    role: photo.role,
    alt: photo.alt ?? '',
    caption: photo.caption ?? null,
    credit: photo.credit ?? null,
    background: '#eae5da',
    focalPoint: photo.focalPoint,
    families,
  }
}

for (const entry of await readdir(outputRoot)) {
  if (!expectedFiles.has(entry)) await rm(path.join(outputRoot, entry))
}

await writeFile(manifestPath, `${JSON.stringify(output, null, 2)}\n`)
console.log(`Prepared ${Object.keys(output.images).length} photos (${sourceManifest.photos.length - Object.keys(output.images).length} placeholders) in ${mode} mode.`)
