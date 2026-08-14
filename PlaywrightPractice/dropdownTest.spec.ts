import {test, expect, Locator} from "@playwright/test"
import { text } from "node:stream/consumers";

test ("Single select dropdown",async({page})=>{
    await page.goto("https://practice.expandtesting.com/dropdown");

    const dropDownLocator: Locator = page.locator("#country");
    await dropDownLocator.click();

    await dropDownLocator.selectOption("India");
    await page.waitForTimeout(3000);

    await dropDownLocator.selectOption({value: 'US'});
    await page.waitForTimeout(3000);

})

test.only("Verify count", async ({page})=>{
    await page.goto("https://practice.expandtesting.com/dropdown");
    const locatorVariable: Locator = page.locator("#dropdown>option");
    //await expect(locatorVariable).toHaveCount(3);

    const locatorVariableText: string[]= (await locatorVariable.allTextContents()).map(text=>text.trim());
    console.log (locatorVariableText);

    for (const locText of locatorVariableText)
    {
        console.log(locText);
    }
})