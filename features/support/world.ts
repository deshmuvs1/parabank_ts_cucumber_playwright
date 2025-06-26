import {  IWorldOptions, setWorldConstructor, World } from '@cucumber/cucumber';
import { Page } from '@playwright/test';
import { POManager } from '../../pageobject_ts/POManager';

export class CustomWorld extends World {
  page!: Page;
  POManager!: POManager;
  constructor(options: IWorldOptions) {
        super(options);
    }
}

setWorldConstructor(CustomWorld);