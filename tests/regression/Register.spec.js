import { test,expect } from 'playwright/test'

test('Register page should load correctly',async({page}) =>{

    await page.goto('https://example.com/register')
    await expect(page).toHaveTitle(/Register/);


});

test('register New user with unique email',async({page}) =>{

    await page.goto('https://example.com/register')
    await expect(page).toHaveTitle(/Register/);


});
