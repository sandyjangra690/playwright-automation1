import {test, expect} from '@playwright/test';

import {LoginPage} from '../Pages/LoginPage.js';

test('LoginSuccess', async ({page}) =>{

//login

const loginObj = new LoginPage(page);
await loginObj.navigateToLoginPage();
await loginObj.login('practice', 'SuperSecretPassword!');
await expect(page).toHaveURL('https://practice.expandtesting.com/secure');
await expect(loginObj.LoginSuccessMessage).toHaveText('You logged into a secure area!');

})



