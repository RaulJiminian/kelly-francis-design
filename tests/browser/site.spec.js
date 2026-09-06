import { expect, test } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

test('featured project opens its matching detail route', async ({ page }) => {
  await page.goto('/')
  const featured = page.getByRole('link', { name: /featured project.*a garden in balance.*view transformation/i })
  await expect(featured).toBeVisible()
  await featured.click()
  await expect(page).toHaveURL(/\/work\/garden-project-01$/)
  await expect(page.getByRole('heading', { level: 1, name: 'A garden in balance' })).toBeVisible()
})

test('mobile menu is keyboard-operable and Escape restores focus', async ({ page }, testInfo) => {
  test.skip(!testInfo.project.name.includes('mobile'), 'Mobile disclosure check')
  await page.goto('/')
  const menu = page.getByRole('button', { name: 'Menu' })
  await menu.focus()
  await page.keyboard.press('Enter')
  const close = page.getByRole('button', { name: 'Close' })
  await expect(close).toHaveAttribute('aria-expanded', 'true')
  await expect(page.getByRole('navigation', { name: 'Mobile navigation' })).toBeVisible()
  await page.keyboard.press('Escape')
  const reopenedMenu = page.getByRole('button', { name: 'Menu' })
  await expect(reopenedMenu).toHaveAttribute('aria-expanded', 'false')
  await expect(reopenedMenu).toBeFocused()
})

test('unknown project has an explicit recovery path', async ({ page }) => {
  await page.goto('/work/not-a-project')
  await expect(page.getByRole('heading', { level: 1, name: 'This path has not been planted yet.' })).toBeVisible()
  await expect(page.getByRole('link', { name: /explore selected work/i })).toHaveAttribute('href', '/#work')
})

test('starter photos render from generated assets and never reference raw sources', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('main picture img').first()).toBeVisible()
  await expect(page.locator('main img[src*="/raw/"]')).toHaveCount(0)
  await expect(page.locator('main img[src*="/starter/"]')).toHaveCount(0)
})

test('multiple before views can be selected with the keyboard', async ({ page }) => {
  await page.goto('/work/garden-project-01')
  const group = page.getByRole('group', { name: 'Choose a before photograph' })
  const first = group.getByRole('button', { name: 'Show before view 1 of 3' })
  const second = group.getByRole('button', { name: 'Show before view 2 of 3' })
  await expect(first).toHaveAttribute('aria-pressed', 'true')
  await second.focus()
  await page.keyboard.press('Enter')
  await expect(second).toHaveAttribute('aria-pressed', 'true')
  await expect(page.getByText('A compact side-yard area before planting and circulation were resolved.')).toBeVisible()
})

test('homepage anchors focus their section and browser Back restores portfolio context', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('link', { name: /explore selected work/i }).click()
  await expect(page).toHaveURL(/\/#work$/)
  await expect(page.locator('#work')).toBeFocused()

  await page.locator('#work article').first().getByRole('link').click()
  await expect(page).toHaveURL(/\/work\/garden-project-01$/)
  await page.goBack()
  await expect(page).toHaveURL(/\/#work$/)
  await expect(page.locator('#work')).toBeInViewport()
})

test('home and project have no serious automated accessibility violations', async ({ page }) => {
  for (const route of ['/', '/work/garden-project-01']) {
    await page.goto(route)
    const results = await new AxeBuilder({ page }).analyze()
    expect(results.violations.filter((violation) => ['serious', 'critical'].includes(violation.impact))).toEqual([])
  }
})

test('two-times text enlargement does not introduce horizontal overflow', async ({ page }, testInfo) => {
  test.skip(!testInfo.project.name.includes('desktop'), 'Desktop text enlargement check')
  for (const route of ['/', '/work/garden-project-01']) {
    await page.goto(route)
    await page.evaluate(() => {
      document.documentElement.style.fontSize = '200%'
    })
    const geometry = await page.evaluate(() => ({
      clientWidth: document.documentElement.clientWidth,
      scrollWidth: document.documentElement.scrollWidth,
    }))
    expect(geometry.scrollWidth).toBe(geometry.clientWidth)
  }
})

test('the required review viewports have no horizontal overflow', async ({ page }, testInfo) => {
  test.skip(!testInfo.project.name.includes('desktop'), 'Single viewport-matrix check')
  const viewports = [
    { width: 320, height: 740 },
    { width: 390, height: 844 },
    { width: 430, height: 932 },
    { width: 844, height: 390 },
    { width: 768, height: 1024 },
    { width: 1024, height: 768 },
    { width: 1440, height: 900 },
    { width: 1920, height: 1080 },
  ]

  for (const viewport of viewports) {
    await page.setViewportSize(viewport)
    for (const route of ['/', '/work/garden-project-01']) {
      await page.goto(route)
      const geometry = await page.evaluate(() => ({
        clientWidth: document.documentElement.clientWidth,
        scrollWidth: document.documentElement.scrollWidth,
      }))
      expect(geometry.scrollWidth, `${route} at ${viewport.width}x${viewport.height}`).toBe(geometry.clientWidth)
    }
  }
})
