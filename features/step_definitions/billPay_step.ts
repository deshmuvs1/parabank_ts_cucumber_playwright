import { When, Then, Given } from '@cucumber/cucumber';
import { CustomWorld } from '../support/world';
import { loginData } from '../../test-data/billPaymentData';



Given('I am on the Bill Payment Service page', { timeout: 100 * 10000 }, async function (this: CustomWorld) {
   const loginpage = this.POManager.getloginPage();
   await loginpage.goto();
   await loginpage.validlogin(loginData.username, loginData.password);
   await loginpage.clickloginButton();

});

Given('the user navigates to the Bill Payment page', { timeout: 100 * 10000 }, async function (this: CustomWorld) {

   const fillForm = this.POManager.getbillPay();
   await fillForm.gotobillpay();

});

When("the user fills out the form with valid details", { timeout: 100 * 10000 }, async function (this: CustomWorld) {
   const fillForm = this.POManager.getbillPay();
   await fillForm.gotobillpay();
   await fillForm.fillpayeeform();


});
When("the user clicks on the {string} button", { timeout: 100 * 10000 }, async function (this: CustomWorld, buttonName: string) {


   const fillForm = this.POManager.getbillPay();
   if (buttonName === "Send Payment") {
      await fillForm.sendbutton();
   }

});

Then('the payment should be submitted successfully',{timeout: 100 * 10000 }, async function (this: CustomWorld) {
   const fillForm = this.POManager.getbillPay();
   await fillForm.errorText();

});