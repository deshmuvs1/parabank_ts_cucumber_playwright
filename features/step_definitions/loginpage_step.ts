import { When, Then, Given } from '@cucumber/cucumber';
import { CustomWorld } from '../support/world';




Given('I am on the Parabank login page', { timeout: 100 * 10000 }, async function (this:CustomWorld) {
   const loginpage = this.POManager.getloginPage();
   await loginpage.goto();

});

When("I enter valid username {string} and I enter valid password {string}",{ timeout: 100 * 10000 }, async function (this:CustomWorld,username: string,password: string) {

   const loginpage = this.POManager.getloginPage();
   await loginpage.validlogin(username,password);
   
});



When("I click on the login button",{ timeout: 100 * 10000 }, async function (this:CustomWorld) {

   const loginpage = this.POManager.getloginPage();
   await loginpage.clickloginButton();
});

Then('I should be redirected to the account overview page',{ timeout: 100 * 10000 }, async function (this:CustomWorld) {

   const loginpage = this.POManager.getloginPage();
  await  loginpage.validatelogin();


});

 Then('I should see Accounts Overview',async  function (this:any) {
    const loginpage = this.POManager.getloginPage();
  await  loginpage.validatelogin();
           
         });




