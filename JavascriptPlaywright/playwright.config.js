// playwright.config.js
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
    testDir: './tests',
    use: {
        // Browser options
        browserName: 'chromium',
        headless: false,
        viewport: { width: 1280, height: 720 },
        // Other options
    },
});