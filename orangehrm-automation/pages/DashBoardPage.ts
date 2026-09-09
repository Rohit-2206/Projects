import {test, expect} from "@playwright/test"
import { BasePage } from "./BasePage"

export class DashBoardPage extends BasePage{
    private dashboardLogo = this.page.locator(".oxd-brand-banner")

    async isLogoDisplayed() {
        await this.dashboardLogo.waitFor({state:'visible'});
        return true;
    }

    private dashboardHeading = this.page.locator('h6.oxd-topbar-header-breadcrumb-module');

    async isDashboardHeading(){
        await this.dashboardHeading.waitFor({state:'visible'});
        return true;
    }

    private userMenu = this.page.locator('.oxd-userdropdown-tab');
    private logoutOption= this.page.getByText('Logout', {exact: true});

    async logout(){
        await this.click(this.userMenu);
        await this.click(this.logoutOption)
    }

}

