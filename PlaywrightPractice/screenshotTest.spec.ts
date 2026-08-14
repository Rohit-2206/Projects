import {test, expect, chromium} from "@playwright/test";

test ("Capture screenshot", async()=>{
    const browser = await chromium.launch();
    const context= await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://demowebshop.tricentis.com/");

    //basic screenshot
    //await page.screenshot({path: "screenshots/homepage.png"});

    //screenshot with date
    const timestamp= Date.now();
    await page.screenshot({path:"screenshots/"+"homepage"+timestamp+".png"});

    //fullpage
    await page.screenshot({path:"screenshots/"+"fullpage"+timestamp+".png", fullPage: true}); 

    //logo
    await page.locator("img[alt='Tricentis Demo Web Shop']").screenshot({path:"screenshots/logo.png"});

    
})