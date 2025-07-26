import {test, expect} from '@playwright/test';
//import { chromium } from 'playwright';

import { HomePage } from '../Pages/HomePage.js';
import { LoginPage } from '../Pages/LoginPage.js';

test('expandTesting to open in next tab', async ({browser}) =>{

//const browser = await chromium.launch();
const context = await browser.newContext();
const page = await context.newPage();

const homeObj = new HomePage(page);
const loginObject = new LoginPage(page);

await homeObj.navigateToHomePage();

await homeObj.expandTesting.click();
await loginObject.login('practice', 'SuperSecretPassword!');

const pageTwo = await homeObj.clickFooterLinkAndGetNewTab(context);
//const pageTwo = page.context().newPage();
const pagePromise = pageTwo.waitForEvent('page');
//await homeObj.expandTesting.click();
//const pageTwo = await pagePromise;
await expect(pageTwo).toHaveURL('https://expandtesting.com/');
console.log("Successfully opened ExpandTesting in a new tab");
});