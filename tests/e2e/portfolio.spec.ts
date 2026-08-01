import { expect, test } from "@playwright/test";

test("Spanish and English pages expose localized content and metadata", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("html")).toHaveAttribute("lang", "es");
  await expect(page).toHaveTitle("Portfolio - Claudio Iván Hribernik");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Claudio Iván Hribernik");
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", "https://ihribernik.ar/");
  await expect(page.locator('link[rel="alternate"][hreflang="en"]')).toHaveAttribute("href", "https://ihribernik.ar/en/");

  await page.getByRole("link", { name: /view in english/i }).first().click();
  await expect(page).toHaveURL(/\/en\/$/);
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  await expect(page.getByText("Selected Experience", { exact: true })).toBeVisible();
});

test("content remains available without client JavaScript", async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "Tecnologías" })).toBeVisible();
  await expect(page.getByText("Mercado Libre", { exact: false })).toBeVisible();
  await context.close();
});

test("mobile menu supports opening, navigation, and Escape", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  const dialog = page.getByRole("dialog", { name: "Abrir menú" });

  await page.getByRole("button", { name: "Abrir menú" }).click();
  await expect(dialog).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(dialog).not.toBeVisible();

  await page.getByRole("button", { name: "Abrir menú" }).click();
  await dialog.getByRole("link", { name: "Tecnologías" }).click();
  await expect(dialog).not.toBeVisible();
  await expect(page).toHaveURL(/#tecnologias$/);
});

test("theme choice persists", async ({ page }) => {
  await page.emulateMedia({ colorScheme: "light" });
  await page.goto("/");
  await page.evaluate(() => localStorage.clear());
  await page.reload();
  await expect(page.locator("html")).not.toHaveClass(/dark/);

  await page.getByRole("button", { name: "Cambiar al tema oscuro" }).click();
  await expect(page.locator("html")).toHaveClass(/dark/);
  await page.reload();
  await expect(page.locator("html")).toHaveClass(/dark/);
});

test("empty content collections publish no placeholder pages", async ({ request }) => {
  expect((await request.get("/proyectos/placeholder/")).status()).toBe(404);
  expect((await request.get("/en/writing/placeholder/")).status()).toBe(404);
});

test("pages do not log browser errors", async ({ page }) => {
  const errors: string[] = [];
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/");
  await page.goto("/en/");
  expect(errors).toEqual([]);
});
