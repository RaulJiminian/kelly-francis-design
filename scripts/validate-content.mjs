import { readFile } from 'node:fs/promises'
import { projects } from '../src/data/projects.js'
import { site } from '../src/data/site.js'

const root = process.cwd()
const mode = process.env.CONTENT_MODE === 'publish' ? 'publish' : site.contentMode
const sourceManifest = JSON.parse(await readFile(`${root}/assets/photo-manifest.json`, 'utf8'))
const generatedManifest = JSON.parse(await readFile(`${root}/src/generated/image-manifest.json`, 'utf8'))
const photoIds = new Set(sourceManifest.photos.map((photo) => photo.id))
const projectIds = new Set()
const projectSlugs = new Set()
const errors = []

function requireValue(condition, message) {
  if (!condition) errors.push(message)
}

for (const project of projects) {
  requireValue(!projectIds.has(project.id), `Duplicate project id: ${project.id}`)
  requireValue(!projectSlugs.has(project.slug), `Duplicate project slug: ${project.slug}`)
  projectIds.add(project.id)
  projectSlugs.add(project.slug)
  requireValue(photoIds.has(project.coverImageId), `Unknown cover image for ${project.id}`)
  for (const pair of project.comparisonPairs) {
    requireValue(photoIds.has(pair.beforeImageId), `Unknown before image in ${pair.id}`)
    requireValue(photoIds.has(pair.afterImageId), `Unknown after image in ${pair.id}`)
  }
}

requireValue(projectIds.has(site.featuredProjectId), 'Featured project id does not resolve')

if (mode === 'publish') {
  const published = projects.filter((project) => project.status === 'published')
  const featured = published.find((project) => project.id === site.featuredProjectId)
  requireValue(Boolean(featured), 'Publish mode needs an approved featured project')
  requireValue(published.length > 0, 'Publish mode needs at least one project')
  requireValue(site.about.approved, 'Publish mode needs approved About copy')
  requireValue(site.brandCopyApproved, 'Publish mode needs approved brand copy')
  requireValue(site.contact.emailVerified && site.contact.email, 'Publish mode needs a verified email')
  requireValue(site.canonicalOrigin, 'Publish mode needs a canonical domain')
  for (const project of published) {
    requireValue(project.contentApproved, `Published project is not content-approved: ${project.id}`)
    requireValue(Boolean(generatedManifest.images[project.coverImageId]), `Published project has no generated cover: ${project.id}`)
  }
}

if (errors.length) {
  console.error(errors.map((error) => `• ${error}`).join('\n'))
  process.exit(1)
}

console.log(`Content validation passed in ${mode} mode (${projects.length} draft records).`)
