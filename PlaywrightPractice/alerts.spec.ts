import {test, expect, Locator} from "@playwright/test"

test("Verify simple alert", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")

    page.on('dialog', (dialog) => {
        console.log("Type:", dialog.type())
        console.log("Message:", dialog.message())
        dialog.accept()
    });

    await page.locator("#alertBtn").click();
})

test("Verify confirm alerts", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");

    page.on('dialog', (dialog)=>{
        console.log("Type:",dialog.type());
        console.log("Message:", dialog.message());
        //dialog.accept();
        dialog.dismiss();
    })

    await page.locator("#confirmBtn").click();
    const textValue = await page.locator("#demo").innerText();
    console.log("Output:", textValue);
})

test.only("Verify prompt alerts", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");

    page.on('dialog', (dialog)=>{
        console.log("Type:", dialog.type());
        console.log("Message:", dialog.message());
        console.log("Default value:", dialog.defaultValue());
        dialog.accept('Jon');
    })
    await page.locator("#promptBtn").click();

    const textValue= await page.locator("#demo").innerText();
    console.log("Return message:", textValue)
    expect(textValue).toContain("Jon");
})