import { test, expect } from "@playwright/test";

const searchTerm = ['monitor', 'Laptop', 'Smartphone']

/*
for (let item of searchTerm){

test(`test for ${item}`, async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/');
  await page.locator('#small-searchterms').click();
  await page.locator('#small-searchterms').fill(item);
  await page.getByRole('button', { name: 'Search' }).click();
  await expect.soft(page.locator('h2 a').nth(0)).toContainText(item , {ignoreCase: true});
})
}
*/
test.describe("Verify search results", ()=>{
searchTerm.forEach((item) => {
    test(`test for ${item}`, async ({ page }) => {
        await page.goto('https://demowebshop.tricentis.com/');
        await page.locator('#small-searchterms').click();
        await page.locator('#small-searchterms').fill(item);
        await page.getByRole('button', { name: 'Search' }).click();
        await expect.soft(page.locator('h2 a').nth(0)).toContainText(item, { ignoreCase: true });
    })
})
})