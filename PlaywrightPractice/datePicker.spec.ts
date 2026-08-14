import {test, expect, Locator} from "@playwright/test"

test("Veriyf jQuery date picker", async ({page})=>{
    await page.goto("https://www.globalsqa.com/demoSite/practice/datepicker/default.html");

    const datePicker= page.locator("#datepicker");
    await expect(datePicker).toBeVisible();
    await datePicker.click();

    //date to find
    let year='2027'
    let month= 'June'
    let date= '21'

    while(true)
    {
    const currentMonth = await page.locator(".ui-datepicker-month").innerText();
    const currentYear = await page.locator(".ui-datepicker-year").innerText();
    if (currentMonth== month && currentYear == year)
    {
        break;
    }
    await page.locator(".ui-datepicker-next").click(); //future

    const dateValue: Locator= page.locator(".ui-datepicker-calendar").nth(1);
    const dateRow: Locator[]= await dateValue.locator("td").all();

    for(const dt of dateRow)
    {
        const dateText= await dt.innerText(); 
        if(dateText==date)
            {
                await dt.click();
                break;
            }   
    }

    }
})