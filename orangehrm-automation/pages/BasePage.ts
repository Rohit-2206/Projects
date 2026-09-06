import {Page, Locator} from "@playwright/test"

export class BasePage { 

    protected page:Page;
    
    constructor(page: Page)
    {
        this.page= page;
    }

    async click (locator: Locator){
        await locator.click();
    }

    async fill (locator: Locator, text: string) {
        await locator.fill(text);
    }

    async getText (locator: Locator){
        return await locator.textContent();
    }

    async isVisible (locator: Locator){
        return await locator.isVisible();
    }

    async isEnabled(locator: Locator){
        return await locator.isEnabled();
    }
}