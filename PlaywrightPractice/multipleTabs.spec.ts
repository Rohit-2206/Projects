import {test, expect, Page, chromium} from "@playwright/test";

test("Handling multiple tabs", async ()=>{
    const browser= await chromium.launch();
    const context= await browser.newContext();
    const parentPage= await context.newPage();

    await parentPage.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");
    
    const childPage= await Promise.all([context.waitForEvent('page'),parentPage.locator("button:has-text('New Tab')").click()]);
    
    const pages= await context.pages();
    console.log("number of pages", pages.length);

    console.log("Child page title:",await pages[1].title());
    console.log("Parent page title:",await pages[0].title());
})

test.only("Handling popups", async ()=>{
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");

    await Promise.all([page.waitForEvent("popup"), await page.locator("#PopUp").click()]);
    await page.waitForTimeout(2000);
    const pageCount = context.pages();
    console.log("Number of pages", pageCount.length);

    for (const pw of pageCount)
    {
        const pageTitle= await pw.title();
        if(pageTitle.includes("Playwright"))
        {
            await pw.locator(".gh-count").click();
            await page.waitForTimeout(4000);
            pw.close();
        }
    }

})