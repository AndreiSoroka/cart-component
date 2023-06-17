import { test, expect } from "@playwright/test";

test.describe("Create and remove product", () => {
  test("should allow me to create a product", async ({ page }) => {
    await page.goto("/");
    const $productNameInput = page.getByTestId("productForm__productName");
    const $shopIdSelect = page.getByTestId("productForm__shopId");
    const $addButton = page.getByTestId("productForm__submitButton");

    await $productNameInput.fill("My Product");
    await $shopIdSelect.selectOption("rimi");

    await $addButton.click();

    const $productRow = page.getByTestId("productRow");
    expect(await page.locator('[data-testid="productRow"]').count()).toBe(1);
    const $productName = $productRow.getByTestId("productRow__productName");
    const $shopName = $productRow.getByTestId("productRow__shopName");
    const $removeLink = $productRow.getByTestId("productContainer__removeLink");
    await expect($productName).toHaveText("My Product");
    await expect($shopName).toHaveText("Rimi");

    await $removeLink.click();
    await page.waitForFunction(
      () => !document.querySelector('[data-testid="productRow"]')
    );
    expect(await page.locator('[data-testid="productRow"]').count()).toBe(0); // firefox fails here, typed 1 but expected 0
    await expect(page).toHaveTitle(/Cart Component - test task/);
  });
});
