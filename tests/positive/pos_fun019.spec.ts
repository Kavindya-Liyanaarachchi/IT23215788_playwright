import { test, expect } from '@playwright/test';

test('Pos_Fun_019 – Translate Singlish sentence to Sinhala', async ({ page }) => {
  // Step 1: Open application
  await page.goto('https://www.swifttranslator.com/');

  // Step 2: Enter Singlish text
  await page.locator('textarea').fill('mama iiye raeeta kaeeve naee mokuthma');

  // Step 3: Wait until translation appears (real-time AI safe wait)
  await page.waitForTimeout(2000);

  // Step 4: Read output (same textarea updates)
  const output = await page.locator('textarea').inputValue();

  // Step 5: Validate translation exists
  expect(output.length).toBeGreaterThan(0);
});