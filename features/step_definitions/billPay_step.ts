import { When, Then, Given } from '@cucumber/cucumber';
import { CustomWorld } from '../support/world';
import { loginData } from '../../test-data/billPaymentData';



Given('I am on the Bill Payment Service page', { timeout: 100 * 10000 }, function (this:CustomWorld) {
   const loginpage = this.POManager.getloginPage();
    loginpage.goto();
    loginpage.validlogin(loginData.username,loginData.password);
     loginpage.clickloginButton();

});

Given('the user navigates to the Bill Payment page', { timeout: 100 * 10000 }, async function (this:CustomWorld) {
    
   const fillForm = this.POManager.getbillPay();
   fillForm.gotobillpay();

});

When("the user fills out the form with valid details",{ timeout: 100 * 10000 }, async function (this:CustomWorld) {
   const fillForm = this.POManager.getbillPay();
   fillForm.gotobillpay();
   fillForm.fillpayeeform();

   
});
When("the user clicks on the {string} button",{ timeout: 100 * 10000 }, async function (this:CustomWorld) {

   
   const fillForm = this.POManager.getbillPay();
   fillForm.sendbutton();
   
});

Then('the payment should be submitted successfully', async function (this:CustomWorld) {
    const fillForm = this.POManager.getbillPay();
    fillForm.errorText();
       
         });