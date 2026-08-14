import {test, expect, Locator} from "@playwright/test";

test ("Verify duplicates", async({page})=>{
    await page.goto("https://practice.expandtesting.com/dropdown");

    const dropDownTest: Locator = page.locator("#country>option");

    const countryNames: string[] = await dropDownTest.allTextContents();

    const mySet = new Set<string>;
    const duplicates: string[] = [];

    for (const names of countryNames)
    {
        if(mySet.has(names))
        {
            duplicates.push(names);
        }
        else
        {
            mySet.add(names)
        }
    }

    if(duplicates.length>0)
    {
        console.log("Duplicates values found", duplicates)
    }
    else
    {
        console.log("No duplicates found");
    }

})