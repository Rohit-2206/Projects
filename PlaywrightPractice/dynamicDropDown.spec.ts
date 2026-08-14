import {test, expect, Locator} from "@playwright/test";

test ("Verify dynamic dropdown", async({page})=>{
    await page.goto("https://www.flipkart.com/");
    await page.waitForTimeout(5000);

    await page.locator(".b3wTlE").click();
    await page.getByPlaceholder("Search for Products, Brands and More").first().fill("smart");
    await page.waitForTimeout(4000);
    const numberOfOptions: Locator = page.locator("ul>li");

    //find the number of suggestions
    const totalOptions: number = await numberOfOptions.count()
    console.log("Number of products", totalOptions);

    //print those options in console
    // console.log(await numberOfOptions.nth(4).textContent());
    for (let i=0; i< totalOptions; i++)
    {
        console.log(await numberOfOptions.nth(i).textContent());
    }

    // select one option
    for (let i=0; i< totalOptions; i++)
    {
        const name = await numberOfOptions.nth(i).innerText();
        if(name==="smart phones")
        {
            numberOfOptions.nth(i).click();
            break;
        }
    }
    await page.waitForTimeout(3000);

})