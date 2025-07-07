import { When, Then, Given } from '@cucumber/cucumber';
import { CustomWorld } from '../support/world';
import { loginData } from '../../test-data/billPaymentData';



Given('I am on the request loan Service page', { timeout: 100 * 10000 }, async function (this: CustomWorld) {
    const loginpage = this.POManager.getloginPage();
    await loginpage.goto();
    await loginpage.validlogin(loginData.username, loginData.password);
    await loginpage.clickloginButton();

});

Given('the user navigates to the request loan page', { timeout: 100 * 10000 }, async function (this: CustomWorld) {

    const requestloanpagebutton = this.POManager.getrequestLoan();
    await requestloanpagebutton.requestLoanbutton();

});

When("the user fills out loan amount 100 and Apply for loan", { timeout: 100 * 10000 }, async function (this: CustomWorld) {
    const applyloan = this.POManager.getrequestLoan();
    await applyloan.applyLoan();



});


Then('Loan Status should be Approved', async function (this: CustomWorld) {
    const loanStatus = this.POManager.getrequestLoan();
    await loanStatus.loanreqestApproved();

});

Then('Congratulations, your loan has been approved is Displayed', async function (this: CustomWorld) {
    const loanStatus = this.POManager.getrequestLoan();
   await loanStatus.loanreqestApproved();

});


