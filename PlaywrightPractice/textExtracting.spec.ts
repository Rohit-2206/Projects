import {test, expect, Locator} from "@playwright/test"

test ("Comparing methods", async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/");

    const productName: Locator = page.locator("div h2 a");

    // innerText vs textContent
    /*console.log(await productName.nth(1).innerText());
    console.log(await productName.nth(1).textContent());

    const productCount = await productName.count();
    for(let i = 0; i<productCount; i++)
    {
        console.log(await productName.nth(i).innerText());
        console.log(await productName.nth(i).textContent());
    }
        */

    //allInnerText vs allTextContent

    const prodName: string[] = await productName.allInnerTexts();
    for (const names of prodName)
    {
        console.log(names);
    }
})