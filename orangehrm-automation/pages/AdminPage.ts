import { BasePage } from "./BasePage"

export class AdminPage extends BasePage {
    
    private adminMenu = this.page.getByText('Admin',{exact: true});
    async openAdminPage (){
        await this.click(this.adminMenu)
    }

    private adminPageHeading = this.page.locator('h6.oxd-topbar-header-breadcrumb-module');

    async isAdminPageHeading(){
        await this.adminPageHeading.waitFor({state:'visible'});
        return true;
    }
}