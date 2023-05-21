import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/Cart Component - test task/);
});

test("Screenshot", async ({ page }) => {
  await page.goto("/");
  // P.s. Better to make screenshots in the storybook,
  // and even better do it in the cloud (like https://www.chromatic.com/)
  await expect(page).toHaveScreenshot();
});
