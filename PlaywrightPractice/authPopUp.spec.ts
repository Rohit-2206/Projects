import {test, expect, Page, chromium} from "@playwright/test";

test("Authetication pop up handling", async()=>{

    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    //Approach 1: username:password injection
    /*await page.goto("https://admin:admin@the-internet.herokuapp.com/basic_auth");
    await page.waitForLoadState();
    await expect(page.getByText("Congratulations! You must have the proper credentials")).toBeVisible();
    await page.waitForTimeout(3000);
    */

    //Approach2: pass to user context
})