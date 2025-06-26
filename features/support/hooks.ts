import  {Before} from '@cucumber/cucumber';
import  {chromium} from '@playwright/test';
import { POManager } from "../../pageobject_ts/POManager";
import { CustomWorld } from './world';



 Before (async function (this:CustomWorld){

    const browser = await chromium.launch({headless: false});
        const context = await browser.newContext();
        this.page = await context.newPage();
        this.POManager = new POManager(this.page);
 });