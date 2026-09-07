import { mkdir } from 'node:fs/promises'
import sharp from 'sharp'

const root = process.cwd()
const sourceLogo = `${root}/assets/brand/source/snowbird-logo-original.png`
const cleanedLogo = `${root}/assets/brand/snowbird-logo.png`
const publicBrandDirectory = `${root}/public/assets/brand`
const favicon = `${publicBrandDirectory}/snowbird-bird.png`
const socialPreview = `${root}/public/og.jpg`
const socialPhoto = `${root}/assets/photos/hillside-textures/originals/hillside-textures-after-03.jpg`

await mkdir(publicBrandDirectory, { recursive: true })

const { data, info } = await sharp(sourceLogo)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true })

// The supplied logo is flattened on white. Feather only the near-white matte
// into transparency so the original olive, blue, and charcoal stay intact.
for (let index = 0; index < data.length; index += 4) {
  const palestChannel = Math.min(data[index], data[index + 1], data[index + 2])

  if (palestChannel > 250) {
    data[index + 3] = 0
  } else if (palestChannel > 235) {
    data[index + 3] = Math.round(((250 - palestChannel) / 15) * 255)
  } else {
    data[index + 3] = 255
  }
}

const transparentLogo = await sharp(data, {
  raw: {
    width: info.width,
    height: info.height,
    channels: 4,
  },
})
  .trim({ background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png({ compressionLevel: 9 })
  .toBuffer()

await sharp(transparentLogo).toFile(cleanedLogo)

const birdData = Buffer.from(data)

for (let index = 0; index < birdData.length; index += 4) {
  const red = birdData[index]
  const green = birdData[index + 1]
  const blue = birdData[index + 2]
  if (!(blue > green + 10 && blue > red + 25)) birdData[index + 3] = 0
}

await sharp(birdData, {
  raw: {
    width: info.width,
    height: info.height,
    channels: 4,
  },
})
  .trim({ background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .resize(192, 192, {
    fit: 'contain',
    background: { r: 245, g: 242, b: 234, alpha: 1 },
  })
  .png({ compressionLevel: 9 })
  .toFile(favicon)

const socialLogo = await sharp(transparentLogo)
  .resize({ width: 490, withoutEnlargement: true })
  .png()
  .toBuffer()

const paperBand = Buffer.from(
  '<svg width="1200" height="220"><rect width="1200" height="220" fill="#f5f2ea" fill-opacity="0.96"/></svg>',
)

await sharp(socialPhoto)
  .resize(1200, 630, { fit: 'cover', position: 'centre' })
  .composite([
    { input: paperBand, left: 0, top: 410 },
    { input: socialLogo, left: 58, top: 440 },
  ])
  .jpeg({ quality: 86, mozjpeg: true })
  .toFile(socialPreview)

console.log('Prepared Snowbird logo, favicon, and social preview.')
