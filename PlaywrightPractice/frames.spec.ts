import {test, expect, Locator} from "@playwright/test";
import { url } from "node:inspector";

test("Verify frames",async ({page})=>{
    await page.goto("https://demo.automationtesting.in/Frames.html");

    const frameCount= page.frames();
    console.log("Frame count", frameCount.length);

    const frame = page.frame({url:"https://demo.automationtesting.in/SingleFrame.html"});

    if(frame)
    {
        await frame.locator("input[type='text']").fill("John");
        await page.waitForTimeout(2000);
    }
    else
    {
        console.log("Frame not found")
    }
})


test.only ("Verify child frames",async ({page})=>{
    await page.goto("https://demo.automationtesting.in/Frames.html");
    
    const iFrameButton=  await page.locator(".tabpane ul li").nth(1).click();
    const frame= page.frame({url:"https://demo.automationtesting.in/MultipleFrames.html"});
    if(frame)
    {
        const childFrame= frame.childFrames();
        const countOfChildFrame= childFrame.length;
        console.log("Child:", countOfChildFrame);
        await childFrame[0].locator("input[type=text]").fill('Kl');
    }
    else
    {
        console.log("Not found");
    }
})