import { mkdir } from 'node:fs/promises'
import { chromium } from '@playwright/test'

const baseUrl = process.env.REVIEW_URL ?? 'http://127.0.0.1:5173'
const outputDirectory = 'artifacts/review'
await mkdir(outputDirectory, { recursive: true })

const browser = await chromium.launch()

async function settlePage(page) {
  await page.addStyleTag({
    content: '#root > header { position: static !important; } .skip-link { display: none !important; }',
  })
  await page.evaluate(async () => {
    const step = Math.max(320, Math.floor(window.innerHeight * 0.75))
    for (let y = 0; y < document.documentElement.scrollHeight; y += step) {
      window.scrollTo(0, y)
      await new Promise((resolve) => setTimeout(resolve, 60))
    }
    window.scrollTo(0, 0)
    if (document.activeElement instanceof HTMLElement) document.activeElement.blur()
  })
  await page.locator('img').evaluateAll(async (images) => {
    await Promise.all(images.map((image) => image.decode().catch(() => undefined)))
  })
  await page.waitForTimeout(200)
}

for (const viewport of [
  { name: 'mobile-390', width: 390, height: 844 },
  { name: 'desktop-1440', width: 1440, height: 900 },
]) {
  const page = await browser.newPage({ viewport: { width: viewport.width, height: viewport.height } })
  await page.goto(`${baseUrl}/`, { waitUntil: 'networkidle' })
  await settlePage(page)
  await page.screenshot({ path: `${outputDirectory}/home-${viewport.name}.png`, fullPage: true })

  if (viewport.width === 390) {
    await page.getByRole('button', { name: 'Menu' }).click()
    await page.screenshot({ path: `${outputDirectory}/mobile-menu-expanded.png` })
  }

  await page.goto(`${baseUrl}/work/garden-project-01`, { waitUntil: 'networkidle' })
  await settlePage(page)
  await page.screenshot({ path: `${outputDirectory}/project-${viewport.name}.png`, fullPage: true })

  if (viewport.width === 390) {
    await page.goto(`${baseUrl}/work/garden-project-01#comparison-heading`, { waitUntil: 'networkidle' })
    await page.addStyleTag({ content: '.skip-link { display: none !important; }' })
    await page.getByRole('button', { name: 'Show before view 2 of 3' }).click()
    await page.screenshot({ path: `${outputDirectory}/before-selector-mobile-390.png` })
  }
  await page.close()
}

await browser.close()
console.log(`Captured homepage, project, and mobile-menu review images in ${outputDirectory}.`)
