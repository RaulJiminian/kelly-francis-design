import { mkdir } from 'node:fs/promises'
import { chromium } from '@playwright/test'

const baseUrl = process.env.REVIEW_URL ?? 'http://127.0.0.1:5173'
const outputDirectory = 'artifacts/review'
await mkdir(outputDirectory, { recursive: true })

const browser = await chromium.launch()

for (const viewport of [
  { name: 'mobile-390', width: 390, height: 844 },
  { name: 'desktop-1440', width: 1440, height: 900 },
]) {
  const page = await browser.newPage({ viewport: { width: viewport.width, height: viewport.height } })
  await page.goto(`${baseUrl}/`, { waitUntil: 'networkidle' })
  await page.screenshot({ path: `${outputDirectory}/home-${viewport.name}.png`, fullPage: true })

  if (viewport.width === 390) {
    await page.getByRole('button', { name: 'Menu' }).click()
    await page.screenshot({ path: `${outputDirectory}/mobile-menu-expanded.png` })
  }

  await page.goto(`${baseUrl}/work/garden-project-01`, { waitUntil: 'networkidle' })
  await page.screenshot({ path: `${outputDirectory}/project-${viewport.name}.png`, fullPage: true })
  await page.close()
}

await browser.close()
console.log(`Captured homepage, project, and mobile-menu review images in ${outputDirectory}.`)
