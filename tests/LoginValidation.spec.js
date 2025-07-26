import { test, expect } from '@playwright/test';

test.only('successful Login', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/login');
  await page.fill('input[name="username"]', 'practice');
  await page.fill('input[name="password"]', 'SuperSecretPassword!');
  await page.click('button[type="submit"]');
  await expect(page).toHaveURL('https://practice.expandtesting.com/secure');     
});
//npx playwright test tests/LoginValidation.spec.js --headed --project=chromium 
//div[id='flash']>b

test('Unsuccessful Login- Invalid pwd', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/login');
  await page.fill('input[name="username"]', 'practice');
  await page.fill('input[name="password"]', 'Supejdsfhsjfhjd');
  await page.click('button[type="submit"]');
  await expect(page.locator('div[id="flash"]')).toHaveText('Your password is invalid!');

});

test('Unsuccessful Login - Invalid username', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/login');
  await page.fill('input[name="username"]', 'practiceki');
  await page.fill('input[name="password"]', 'SuperSecretPassword!');
  await page.click('button[type="submit"]');
  await expect(page.locator('div[id="flash"]')).toHaveText('Your username is invalid!');    
});

test('Locators', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html', {waitfortimeout : 50000});
  //----get by role ---
  await page.getByRole('button', { name: 'Primary Action' }).click();
  //await page.getByRole('textbox', { name: ''}).fill('This is a text box');
  await page.getByRole('button', {name: 'Div with button role'}).click();
  await page.getByRole('checkbox', {name: 'Accept terms'}).check();
  await page.getByRole('menuitem', { name: 'Home' }).click();
  await expect(page.getByText('List item 1')).tobeVisible();
  await page.getByLabel('email').fill('Myname');

});

test('uploadFile', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html', {waitforTimeout : 50000});
  //uploading a single file  
 // const FileInput = page.locator('#singleFileInput');
 // await FileInput.setInputFiles('D:\\Sandhya\\Playwright-project1\\tests\\Hello.txt');
 // await page.getByText('Upload Single File').click();
  // expect(page.locator('#singleFileStatus')).toContainText('Single file selected:');

  //uploading multiple files
  const FileInputMultiple = page.locator('#multipleFilesInput');
  await FileInputMultiple.setInputFiles([
    'D:\\Sandhya\\Playwright-project1\\tests\\Hello.txt',
    'D:\\Sandhya\\Playwright-project1\\tests\\Hello2.txt'
  ]);
  await page.getByText('Upload Multiple Files').click();
  expect(page.locator('#multipleFilesStatus')).toContainText('Multiple files selected:');
  expect(page.locator('#multipleFilesStatus')).toContainText('Hello.txt');
  waitforTimeout(3000);
  expect(page.locator('#multipleFilesStatus')).toContainText('Hello2.txt');
});



