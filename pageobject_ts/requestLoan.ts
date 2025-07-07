
import { expect, Page, Locator } from '@playwright/test';
import { loanPagedata } from '../test-data/billPaymentData';
export class requestLoan {

    page: Page;
    requestloanbutton: Locator;
    loanAmount: Locator;
    downPayment: Locator;
    fromAccount: Locator;
    applyNow: Locator;
    Approvedstatus: Locator;
    Approvedmessage: Locator;
    newaccountNumber: Locator;





    constructor(page: Page) {


        this.page = page;
        this.requestloanbutton = page.locator('a[href="requestloan.htm"]');
        this.loanAmount = page.locator("#amount")
        this.downPayment = page.locator("#downPayment")
        this.fromAccount = page.locator("#fromAccountId")
        this.applyNow = page.getByRole('button', { name: "Apply Now" })
        this.Approvedstatus = page.locator("#loanStatus")
        this.Approvedmessage = page.locator("#loanRequestApproved").nth(0);
        this.newaccountNumber = page.locator("#newAccountId");
    }




    async requestLoanbutton() {

        await this.requestloanbutton.click();

    }


    async applyLoan() {

        await this.loanAmount.fill(loanPagedata.loanAmount);
        await this.downPayment.fill(loanPagedata.downPayment);
        await this.fromAccount.selectOption({index:0});
        await this.applyNow.click();
        await this.page.waitForLoadState('domcontentloaded');

    }


    async loanreqestApproved() {

        await this.page.waitForLoadState('networkidle');

        await expect(this.Approvedstatus).toHaveText("Approved");
        await expect(this.Approvedmessage).toContainText("Congratulations, your loan has been approved.");
        await expect(this.newaccountNumber).toBeVisible();
    }
}
