import {test, expect, Locator} from "@playwright/test";
import { text } from "node:stream/consumers";

test("Verify if array is sorted", async ({page})=>{
    await page.goto("https://autotestsandbox.com/examples/multi-select-dropdown");

    const sortedListLocator: Locator = page.locator("[data-test-id='multi-select-dropdown-primary']>option");
    //console.log ((await sortedListLocator.allTextContents()).map(text=>text.trim()));

    const sortedListValue: string[]= (await sortedListLocator.allTextContents()).map(text=>text.trim())
    const originalArray =[...sortedListValue];
    const sortedArray=[...sortedListValue].sort();

    console.log("Original:", originalArray);
    console.log("Sorted:", sortedArray);

    console.log(sortedListValue.length);

    expect (originalArray).toEqual(sortedArray);

})