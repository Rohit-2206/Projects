import {test, expect} from "@playwright/test"
import { BasePage } from "./BasePage"

export class AdminPage extends BasePage {
    private adminHeading = this.page.locator("//*[@id='app']/div[1]/div[1]/aside/nav/div[2]/ul/li[1]/a/span");
    async admin (){
        await this.click(this.adminHeading);
    }
}