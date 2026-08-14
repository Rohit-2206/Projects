import {test, expect, Locator} from "@playwright/test";

test ("Verify dynamic table", async({page})=>{
    await page.goto("https://practice.expandtesting.com/dynamic-table");

    //finding the table
    const table: Locator = page.locator(".table-responsive table tbody");
    //Verify if table is visible
    await expect(table).toBeVisible();

    //capture the cpu load of chrome browser
    const rows: Locator[] = await table.locator("tr").all();
    const numberOfRows= rows.length;
    for(let i=0; i<numberOfRows;i++)
    {
        const rowValue:string[] = await rows[i].allInnerTexts();
        console.log(rowValue);
    }

    let cpuLoad='';
    for(const row of rows)
    {
        const process: string= await row.locator("td").nth(0).innerText();
        if(process=="Chrome")
        {
            cpuLoad= await row.locator("td:has-text('%')").innerText();
            //cpuLoad= await row.locator("td",(hasText:'%')).innerText();
        }
    }
    console.log("The CPU Load of Chrome Process is:", cpuLoad);

    const labelValue: string = await page.locator("#chrome-cpu").innerText();
    console.log(labelValue.substring(11,16).trim());

    if(cpuLoad==labelValue)
    {
        console.log("Both values match");
    }
    else
    {
        console.log("Value mismatch");
    }
})