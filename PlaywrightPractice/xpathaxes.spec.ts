import {test, expect, Locator} from "@playwright/test";

test ("Xpathaxes", async ({page})=> {
    await page.goto("https://www.w3schools.com/html/html_tables.asp");

    /*let country: Locator = page.locator("//td[text()='Germany']/self::td");
    let countryName: string= await country.textContent();
    console.log(countryName);

    let countryRow: Locator = page.locator("//td[text()='Germany']/parent::tr");
    console.log (await countryRow.textContent());

    let countryCount: Locator = page.locator("//table[@id='customers']//tr[2]/child::td")
    await expect (countryCount).toHaveCount(3);*/

    let descendants: Locator = page.locator("//table[@id='customers']/descendant::td")
    let descendantsString: String[]= await descendants.allTextContents();

    for (let dt in descendantsString){
        console.log(dt);
    }
})