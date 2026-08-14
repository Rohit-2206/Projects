import {test, expect, Locator} from "@playwright/test"

test ("Verify checkbox", async({page})=>{
    await page.goto("https://practice.expandtesting.com/checkboxes");

    const checkBox: Locator = page.getByLabel("Checkbox 2");
    await checkBox.uncheck();

    const checboxes : string []= ["Checkbox 1", "Checkbox 2"];
    const checkBoxLocator: Locator[]= checboxes.map (index => page.getByLabel(index))
    expect (checkBoxLocator.length).toBe(2);

    for (const cb of checkBoxLocator.slice(-1)){
        await cb.check();
    }
})