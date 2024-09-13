import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://qiqzhao.vercel.app/');
  await expect(page.getByRole('heading', { name: 'My Blog.' })).toBeVisible();
});
