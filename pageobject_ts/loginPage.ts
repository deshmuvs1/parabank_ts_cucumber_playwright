
import { Page, Locator, expect } from '@playwright/test';
export class loginPage {

    page: Page;
    usernameInput: Locator;
    passwordInput: Locator;
    loginButton: Locator;
    accountOverview: Locator;
    accountOverviewbutton:Locator;






    constructor(page: Page) {

        this.page = page
        this.usernameInput = page.locator('input[name="username"]');
        this.passwordInput = page.locator('input[name="password"]');
        this.loginButton = page.locator('input[value="Log In"]');
        this.accountOverview = page.locator('h1.title').nth(0);
        this.accountOverviewbutton = page.locator('a[href="overview.htm"]');}


    async goto() {
        await this.page.goto("https://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC");
    }

    async validlogin(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);

    }


    async invalidusername(username: string) {

        await this.usernameInput.fill(username);

    }

    async invalidpassword(password: string) {
        await this.passwordInput.fill(password);
    }

    async blankusername(username: string) {
        await this.usernameInput.fill(username);
    }
    async blankpassword(password: string) {
        await this.passwordInput.fill(password);
    }

    async clickloginButton() {
    
        await this.loginButton.click();

    }

    async validatelogin() {
        await  this.accountOverviewbutton.click();
        await expect (this.accountOverview.isVisible());
    }
}
