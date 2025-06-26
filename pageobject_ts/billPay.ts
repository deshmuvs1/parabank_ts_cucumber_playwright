import {expect,Page,Locator} from '@playwright/test';
import { billPaymentData } from '../test-data/billPaymentData';


export class billPay {

    page:Page;
    address:Locator;
    payeeName:Locator;
    city:Locator;
    state:Locator;
    zipcode:Locator;
    phone:Locator;
    account:Locator;
    verifyaccount:Locator;
    amount:Locator;
    sendpaymentbutton:Locator;
    errorpage :Locator;
    listname:Locator;
    homebutton:Locator;


    constructor (page:Page){
        this.page=page;
        this.listname = page.locator('[href="billpay.htm"]');
        this.address = page.getByText('[name="payee.address.street"]');
        this.payeeName = page.locator('input[name="payee.name"]');
        this.city =page.locator('input[name="payee.address.city"]');
        this.state = page.locator('input[name="payee.address.state"]');
        this.zipcode =page.locator('input[name="payee.address.zipCode"]');
        this.phone =page.locator('#d8aef0b6-3b2b-4b05-9534-dfbd8d634ad9');
        this.account =page.locator('input[name="payee.accountNumber"]')
        this.verifyaccount=page.locator('input[name="verifyAccount"]')
        this.amount=page.locator('input[name="amount"]');
        this.sendpaymentbutton=page.getByRole('button',{name :"Send Payment"});
        this.errorpage= page.getByText("An internal error has occurred and has been logged.");
        this.homebutton = page.locator('[href="index.htm"]').nth(0);
        
        
    
}


async gotobillpay(){
    await this.listname.click();
}

async fillpayeeform(){

    await this.payeeName.fill(billPaymentData.payeeName);
    await this.address.fill(billPaymentData.address)
    await this.city.fill(billPaymentData.city);
    await this.state.fill(billPaymentData.state);
    await this.zipcode.fill(billPaymentData.zipCode);
    await this.phone.fill(billPaymentData.phone);
    await this.account.fill(billPaymentData.accountNumber);
    await this.verifyaccount.fill(billPaymentData.verifyAccount);
    await this.amount.fill(billPaymentData.amount);
    
}


async sendbutton(){

await this.sendpaymentbutton.click();
}
async errorText(){
    await expect (this.errorpage).toBeVisible();
    await this.homebutton.click();
}
}