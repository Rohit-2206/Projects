import {test, expect, Locator} from '@playwright/test';

test("Verify hidden dropdown", async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    //Login
    await page.getByPlaceholder("username").fill("Admin");
    await page.locator("input[name=password]").fill("admin123");
    await page.locator("button[type=submit]").click();
    
    //Navigating to PIM
    // await page.getByText("PIM").click(); direct method and recommended
    await page.locator('a[href="/web/index.php/pim/viewPimModule"]').click(); //css locator
    await page.waitForTimeout(2000);

    // clicking on dropdown
    await page.locator("form i").nth(2).click();
    await page.waitForTimeout(2000);

    // locating elements
    const jobTitle: Locator = page.locator("div[role=listbox] span")
    const countOfTitle = await jobTitle.count();
    console.log("Number of jobs:", countOfTitle);

    //Print all job titles
    for(let i=0; i<countOfTitle; i++)
    {
        console.log(await jobTitle.nth(i).innerText());
    }

    //select a specific job title
    for(let i=0; i<countOfTitle; i++)
    {
        const name: string = await jobTitle.nth(i).innerText();
        if(name === "Software Engineer")
        {
            jobTitle.nth(i).click();
            break;
        }
    } 
    await page.waitForTimeout(2000);
})