import {test, expect, Locator} from "@playwright/test";

test (("Xpath test"), async ({page})=> {
    await page.goto("https://demowebshop.tricentis.com/");
    let logo: Locator = page.locator('//html/body/div[4]/div[1]/div[1]/div[1]/a/img');
    await expect (logo).toBeVisible();

    let Products: Locator = page.locator("//h2/a[contains(@href,'computer')]");
    let proCount: number = await Products.count();
    console.log("Products count:",proCount);
    expect(proCount).toBeGreaterThan(2);

    console.log("First", await Products.first().textContent());
    console.log("Second", await Products.nth(2).textContent());
    console.log("Last", await Products.last().textContent());

    let productTitles: string[] = await Products.allTextContents();

    for (let pt of productTitles)
    {
        console.log(pt);
    }

})