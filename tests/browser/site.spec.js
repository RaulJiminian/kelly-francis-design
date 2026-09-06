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

test('placeholder state is controlled and photo-free', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('[data-placeholder]').first()).toBeVisible()
  await expect(page.locator('main picture img')).toHaveCount(0)
  await expect(page.locator('main img[src*="before-after"]')).toHaveCount(0)
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
