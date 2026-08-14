import {test, expect, Locator} from "@playwright/test";

test ("Assignmnent", async({page})=>{
    await page.goto("https://bstackdemo.com/");

    const sortDropDown: Locator = page.locator("div.sort>select"); // finding the dropdown
    await sortDropDown.click();
    await expect(sortDropDown).toBeEnabled(); // verify if its enabled
    await sortDropDown.selectOption("Lowest to highest"); // sorting

    await page.waitForTimeout(3000);
    const productName: Locator = page.locator(".shelf-item>p"); //finding product names
    const products: string[] = await productName.allTextContents();

    console.log("Total number of products:", products.length);
    
    /*for (const names of products){
    console.log(names);
    }*/

    const productPrice: Locator = page.locator(".shelf-item>div[class=shelf-item__price]"); // find product price
    const price: string[]= (await productPrice.allTextContents()).map(text=>text.split(".")[0]);

    console.log("Price count", price.length);
    /*for (const priceCount of price)
    {
        console.log(priceCount);
    }*/

    if(products.length==price.length)
    {
        console.log ("Count of products and price match");
    }
    else
    {
        console.log("Count dont' match");
    }

    //printing product names and price together
    for (let i = 0; i < products.length; i++)
    {
        console.log("Product Name:", products[i] , ";" , "Price:", price[i]);
    }

    //finding the minimum value product
    console.log("Minimum Product Name:",products[0],"Minimum Product price:",price[0])

    //finding maximum product name and price
    console.log("Maximum Product name:", products[products.length-1], "Maximum Product price:",price[price.length-1]);
    
})