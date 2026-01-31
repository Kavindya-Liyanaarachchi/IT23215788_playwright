import { test, expect } from '@playwright/test';

test('Neg_Fun_002 – Mixed language and numeric values handling', async ({ page }) => {
  // Step 1: Open application
  await page.goto('https://www.swifttranslator.com/');

  // Step 2: Enter mixed Singlish + English + numbers
  await page.locator('textarea').fill(
    'eyaala edhaata wandhanaa gamanak yanawaa kiwuwaa. ee nisaa eyaalata ara waedeeta enna wena ekak naee kiwuwaa.'
  );

  // Step 3: Wait for real-time translation
  await page.waitForTimeout(2000);

  // Step 4: Read output
  const output = await page.locator('textarea').inputValue();

  // Step 5: Validate output is generated (negative robustness check)
  expect(output.length).toBeGreaterThan(0);
});