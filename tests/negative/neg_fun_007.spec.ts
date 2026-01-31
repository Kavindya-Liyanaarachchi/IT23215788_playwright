import { test, expect } from '@playwright/test';

test('Neg_Fun_007 – Mixed language and numeric values handling', async ({ page }) => {
  // Step 1: Open application
  await page.goto('https://www.swifttranslator.com/');

  // Step 2: Enter mixed Singlish + English + numbers
  await page.locator('textarea').fill(
    'mee office tour eka yanavadha oyaa? eeka saehenna gaanak yanavalu needha? Rs. 100000k advance dhenna oonilu'
  );

  // Step 3: Wait for real-time translation
  await page.waitForTimeout(2000);

  // Step 4: Read output
  const output = await page.locator('textarea').inputValue();

  // Step 5: Validate output is generated (negative robustness check)
  expect(output.length).toBeGreaterThan(0);
});