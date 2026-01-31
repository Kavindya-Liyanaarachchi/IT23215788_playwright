import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  use: {
    headless: false,        // 👀 SHOW browser
    slowMo: 300,            // 🐢 Slow actions (optional)
    video: 'on',            // 🎥 Record video
    trace: 'on',            // 🧠 Record trace
    screenshot: 'on',       // 📸 Screenshot on failure
  },

  reporter: [['html', { open: 'never' }]],
});  