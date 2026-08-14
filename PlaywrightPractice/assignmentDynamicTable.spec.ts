import {test, expect, Locator} from "@playwright/test";
import { link } from "node:fs";

test("Verify dynamic table", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");

    const table: Locator[]= await page.locator("#taskTable tbody tr").all();
    const numberOfRows = table.length;
    for(let i=0; i<numberOfRows; i++)
    {
        const rowValue= await table[i].innerText();
        console.log(rowValue);
    }

    let cpuload='';
    let memory='';
    let network= '';
    let diskspace= '';
    for(const row of table)
    {
        const process: string= await row.locator("td").nth(0).innerText();
        if(process=="Chrome")
        {
            cpuload = await row.locator("td:has-text('%')").innerText();
            network = await row.locator("td:has-text('Mbps')").innerText();        
        }
        else(process=="Firefox")
        {
            // memory= await row.locator("td:has-text('^\d+(\.\d+)?\s*MB$')").innerText();
            diskspace= await row.locator("td:has-text('MB/s')").innerText();
        }
    }
    console.log("The CPU% of chrome is:",cpuload);
    console.log("The memory size of firefox is", memory);
    console.log("The network speed of chrome is",network);
    console.log("The diskspace of firefox is", diskspace);

})

test.only("Verify pagination table", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");

    const pages: Locator[]= await page.locator("#pagination li").all();
    const pageValue = page.locator("#pagination li");
    const pageNumber:Locator= page.locator("#pagination");
    const pageCount= pages.length;

    let currentPage=1;

    while(currentPage<=pageCount)
    {
    const rows= await page.locator("#productTable tbody tr").all();
    await page.waitForTimeout(1000);
    for(const row of rows)
    {
        console.log(await row.innerText());
        await row.locator("td input[type=checkbox]").check();
    }
    for(let i=1; i< pageCount;i++)
    {
        await pageValue.nth(i).click();
        await page.waitForTimeout(1000);
    }
    currentPage+=1;
    console.log("Page number:", currentPage);
}
})