import {test, expect, Locator} from "@playwright/test";

test("Reading all data", async({page})=>{
    await page.goto("https://practice.expandtesting.com/dynamic-pagination-table")

    let hasMorePages= true;

    while(hasMorePages)
    {
    const rows = await page.locator("#example tbody tr").all()
    for (const row of rows)
    {
        console.log(await row.innerText());
    }
    const nextButton: Locator = page.locator("#example_next");
    const disabledButton= await nextButton.getAttribute('class')
    if(disabledButton?.includes('disabled'))
    {
        hasMorePages=false;
    }
    else
    {
        await nextButton.click();
    }
    }
})

test("Verify changing columns", async ({page})=>{
    await page.goto("https://practice.expandtesting.com/dynamic-pagination-table")
    await page.locator("select[name=example_length]").selectOption("5");

    let nextPageAvailable= true;
    let pageNumber = 1;
    
    while(nextPageAvailable)
    {
        const rowValue = await page.locator("#example tbody tr").all();
        console.log("page:", pageNumber)
        for(const row of rowValue)
        {
            console.log(await row.innerText())
        }
        const nextButton= page.locator("#example_next");
        const disabledState = await nextButton.getAttribute('class');
        if(disabledState?.includes("disabled"))
        {
            nextPageAvailable=false;
        }
        else
        {
            await nextButton.click();
            pageNumber+=1;
        }
    }
})

test.only ("Verify search and value retreival", async({page})=>{
    await page.goto("https://practice.expandtesting.com/dynamic-pagination-table");
    const searchField= await page.locator("input[type=search]").fill("lkhbi");

    let searchResult = true;
    let pageNumber= 1;

        while(searchResult)
        {
            const rowValue= await page.locator("#example tbody tr").all();
            console.log("Page:", pageNumber);
            for (const row of rowValue)
            {
                console.log(await row.innerText());
            }
            const nextButton= page.locator("#example_next");
            const disabledState= await nextButton.getAttribute("class")
            if (disabledState?.includes("disabled"))
            {
                searchResult=false;
            }
            else
            {
                await nextButton.click();
                pageNumber+=1;
            }
        }
})