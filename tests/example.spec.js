const { test, expect } = require('@playwright/test');

test('deve encontrar fone e conseguir abrir', async ({ page }) => {
  await page.goto('https://www.vulnhub.com/');

const search = page.locator('#search-query')

  await search.click();
  await search.fill('phone');
  await search.press('Enter');

});
