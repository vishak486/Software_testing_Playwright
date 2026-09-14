import {test,expect } from '@playwright/test'

test('DEMO Login Test',async({page})=>{
    await page.goto("https://demo.applitools.com/")
    await page.pause();
    await page.getByRole('textbox', { name: 'Enter your username' }).fill('Vishak')
    await page.getByRole('textbox', { name: 'Enter your password' }).fill("1234")
    await page.getByRole('link', { name: 'Sign in' }).click()
})

test("DEMO Login TEST 2",async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.pause()
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    await page.getByText('John Doe').click();
    await page.getByRole('menuitem', { name: 'Logout' }).click();
})

test.only("DEMO Login Test 3",async({page})=>{
    await page.pause()
})