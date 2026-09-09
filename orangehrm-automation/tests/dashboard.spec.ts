import {test, expect} from "@playwright/test"
import { LoginPage } from "../pages/LoginPage"
import { DashBoardPage } from "../pages/DashBoardPage"

test ('Test Dashboard page', async ({page}) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashBoardPage(page);

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await loginPage.login ('Admin', 'admin123');

    expect (await dashboardPage.isDashboardHeading()).toBe(true);
    expect (await dashboardPage.isLogoDisplayed()).toBeTruthy();
    
    await dashboardPage.logout();
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

})