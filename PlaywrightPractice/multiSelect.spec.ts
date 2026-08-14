import {test, expect, Locator} from "@playwright/test";

test ("Multi select dropdown", async({page})=>{
    await page.goto("https://autotestsandbox.com/examples/multi-select-dropdown");
    const multiDropDown: Locator= page.locator("[data-test-id='multi-select-dropdown-primary']");
    await multiDropDown.selectOption(["UI","Async"]);
})