import {test, expect} from "@playwright/test"
import { LoginPage } from "../pages/LoginPage"
import { AdminPage } from "../pages/AdminPage"

test('Admin page navigation', async({page})=>{
    const loginPage = new LoginPage(page);
    const adminPage = new AdminPage(page);

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await loginPage.login ('Admin', 'admin123');

    adminPage.openAdminPage();
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers");

    expect (await adminPage.isAdminPageHeading()).toBe(true);
    
})

