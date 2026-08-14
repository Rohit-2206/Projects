import {test, expect, Locator} from "@playwright/test";

test ("Static table test", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
    const table: Locator= page.locator("table[name='BookTable'] tbody");
    await expect(table).toBeVisible();

    // number of rows in table
    const tableRows: Locator = page.locator("table[name='BookTable'] tr");
    const numberOfRows = await tableRows.count();
    console.log("Number of rows", numberOfRows);
    expect(numberOfRows).toBe(7);

    //number of columns
    const tableColumns: Locator = tableRows.locator("th");
    const numberOfColumns = await tableColumns.count();
    console.log("Number of colmuns:", numberOfColumns);
    expect(numberOfColumns).toBe(4);

    //print one row
    /*const rowvalue: Locator= tableRows.nth(1).locator("td");
    const rowCellValue: string[] = await rowvalue.allInnerTexts();
    console.log(rowCellValue);*/

    //print all data
    //approach1
    /*for(let i = 1; i<numberOfRows; i++){
    const rowvalue: Locator= tableRows.nth(i).locator("td");
    const rowCellValue: string[] = await rowvalue.allInnerTexts();
    console.log(rowCellValue);
    }*/

    //aproach2
    const rowCells= await tableRows.all()
    for (let row of rowCells.slice(1))
    {
        const cols = await row.locator("td").allInnerTexts();
        console.log(cols);
    }

    //capture book name wherev author is mukesh
    for (let row of rowCells.slice(1))
    {
        const cell = await row.locator("td").allInnerTexts();
        let author = cell [1]
        let book = cell[0]

        if(author == "Mukesh")
        {
            console.log ("Author:", author, "Book Name:", book);
        }
    }

    //capture allbooks
    for (let book of rowCells.slice(1))
    {
        const bookName = await book.locator("td").allInnerTexts();
        const bookValue = bookName[0];
        console.log(bookValue);
    }
    let bookPrice = 0;
    //total price of all the books
    console.log("Total price of book..................")
    for (let price of rowCells.slice(1))
    {
        const priceValue = await price.locator("td").allInnerTexts();
        const priceCol = priceValue[3];
        bookPrice = bookPrice+parseInt(priceCol);
    }
    console.log(bookPrice);
})