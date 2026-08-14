import {test, expect, Locator} from "@playwright/test";

test ("Handling dynamic xpath", async ({page})=> {
    await page.goto("https://www.youtube.com/watch?v=ZQ3upj6H2gI")

    for (let i=0; i< 5; i++){
    let button : Locator = page.locator("//button[@aria-label='Unmute (m)' or @aria-label='Mute (m)']");
    await button.click();

    await page.waitForTimeout(2000);
    }

    await page.getByRole("button", {name: /Mute (m)|Unmute (m)/})
})