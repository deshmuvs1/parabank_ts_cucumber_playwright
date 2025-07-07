import {loginPage} from './loginPage';
import {Page} from '@playwright/test';
import { billPay } from './billPay';
import { requestLoan } from './requestLoan';

export class POManager{

page:Page;
loginpage:loginPage;
billpay:billPay;
requestloan : requestLoan


constructor (page:Page){


    this.page = page;
    this.loginpage = new loginPage(this.page);
    this.billpay= new billPay(this.page);
    this.requestloan = new requestLoan(this.page);


}


getloginPage(){
    return this.loginpage;
}

getbillPay(){
    return this.billpay;
}

getrequestLoan (){
    return this.requestloan;
}
};

