import { expect, test } from "@playwright/test";

test.describe("Sample Content", () => {
  test("has title", async ({ page }) => {
    await page.goto("/");

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Sample App/);
  });

  test("welcomes user", async ({ page }) => {
    await page.goto("/");

    // Expect a title "to contain" a substring.
    expect(await page.innerText("h1")).toContain("Welcome");
  });
});

test.describe("Sample Interaction", () => {
  test("can start and stop rating", async ({ page }) => {
    await page.goto("/");

    await page.getByRole("button", { name: "START" }).click();

    expect(await page.getByText("Current Rating: 1")).toBeVisible();

    await page.getByRole("button", { name: "STOP" }).click();
  });

  test("count to 6", async ({ page }) => {
    await page.goto("/");

    await page.getByRole("button", { name: "START" }).click();

    await page.getByRole("button", { name: "+" }).click();
    await page.getByRole("button", { name: "+" }).click();
    await page.getByRole("button", { name: "+" }).click();
    await page.getByRole("button", { name: "+" }).click();
    await page.getByRole("button", { name: "+" }).click();

  });
});
