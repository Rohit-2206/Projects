import {test, expect, Locator} from "@playwright/test";

test ("CSS Locator", async ({page})=> {
    await page.goto("https://demowebshop.tricentis.com/");

    /*
    let searchBox: Locator = page.locator("#small-searchterms");
    await searchBox.fill("Computer");

    await expect(page.locator("input#small-searchterms")).toBeVisible();

    await page.waitForTimeout(5000);
*/
    await expect(page.locator("input.search-box-text")).toBeVisible();
    await page.locator ("input.search-box-text").fill("computers");

    await page.waitForTimeout(3000);
})