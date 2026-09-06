import {Page} from "@playwright/test";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage{
    private usernameInput = this.page.locator("input[name='username']");
    private passwordInput = this.page.locator("input[name='password']");
    private loginButton = this.page.getByRole('button', {name: 'Login'});

    async login (username: string, password: string)
    {
        await this.fill(this.usernameInput, username);
        await this.fill(this.passwordInput, password);
        await this.click(this.loginButton);
    }
}