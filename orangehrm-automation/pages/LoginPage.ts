import {Page} from "@playwright/test";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage{
    private usernameInput = this.page.getByPlaceholder('Username');
    private passwordInput = this.page.getByPlaceholder('Password');
    private loginButton = this.page.getByRole('button', {name: 'Logim'});

    async login (username: string, password: string)
    {
        await this.fill(this.usernameInput, username);
        await this.fill(this.passwordInput, password);
        await this.click(this.loginButton);
    }
}