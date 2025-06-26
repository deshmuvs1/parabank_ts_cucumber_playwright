import {loginPage} from './loginPage';
import {Page} from '@playwright/test';
import { billPay } from './billPay';

export class POManager{

page:Page;
loginpage:loginPage;
billpay:billPay;


constructor (page:Page){


    this.page = page;
    this.loginpage = new loginPage(this.page);
    this.billpay= new billPay(this.page);


}


getloginPage(){
    return this.loginpage;
}

getbillPay(){
    return this.billpay;
}
};

