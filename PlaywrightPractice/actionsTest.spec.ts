import {test,expect,Locator} from "@playwright/test";

/*
test("Verify Text input field actions", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")

    let textField: Locator = page.locator("#username");

    await expect(textField).toBeVisible();
    await expect(textField).toBeEnabled();

    let attri: string  | null= await textField.getAttribute("role");
    console.log(attri);
    expect(attri).toBe("textbox");

    await textField.fill("Moo");

    console.log("Text Content:", await textField.inputValue())

})*/

test ("Verify radio button actions", async ({page})=>{

    await page.goto("https://demowebshop.tricentis.com/build-your-cheap-own-computer")
    //const radio: Locator = await page.locator('#product_attribute_72_5_18_52').check();

    expect(await page.locator('#product_attribute_72_5_18_52').isChecked()).toBe(true);

    await expect (page.locator('#product_attribute_72_3_20_57')).toBeChecked();
    await page.waitForTimeout(3000);

    const days: string[]= ['Sunday', 'Monday', 'Tuesday']
    for (let i=0;i<days.length;i++){
        console.log(days[i]);
    }
})

test.only ("Verify checbox", async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/build-your-cheap-own-computer");

})