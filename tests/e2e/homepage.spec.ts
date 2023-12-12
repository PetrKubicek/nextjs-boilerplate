import { expect, test } from '@playwright/test'

test('should navigate to the homepage', async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  page.goto('/')
  // The page should contain an h2 with "Docs ->"
  await expect(page.locator('h2').first()).toContainText('Docs ->')
})
