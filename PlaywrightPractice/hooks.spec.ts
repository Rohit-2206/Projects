import {test, expect, Page} from "@playwright/test";

let page: Page;

test.beforeAll("Open page", async({browser})=>{

    page = await browser.newPage();
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    console.log("Before all")
})

test.afterAll("Close page", async()=>{
    await page.close();
    console.log("after all")
})

test.beforeEach("Login", async({})=>{
    console.log("Before each")
    await page.locator("input[name='username']").fill("Admin");
    await page.locator("input[name='password']").fill("admin123")
    await page.locator(".oxd-form-actions").click();
})

test.afterEach("Logout", async({})=>{
    console.log("after each")
    await page.locator(".oxd-userdropdown-img").click();
    await page.getByText("Logout").click();
})

test("Login success", async({})=>{
    await expect(page.locator("img[alt='client brand banner']")).toBeVisible();
    console.log("Test");
})