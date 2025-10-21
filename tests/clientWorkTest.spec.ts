import { test, expect } from '@playwright/test';

test('Client Work Test', async ({ page }) => {
    // Navigate to EPAM website
    await page.goto('https://www.epam.com/');

    // Maximize browser window
    await page.setViewportSize({ width: 1920, height: 1080 });

    // Select 'Services' from the header menu
    await page.click('text=Services');

    // Click the 'Explore Our Client Work' link
    await page.click('text=Explore Our Client Work');

    // Verify that the 'Client Work' text is visible on the page
    const clientWorkText = await page.getByText('Client Work');
    await expect(clientWorkText).toBeVisible();
});