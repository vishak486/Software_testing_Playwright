import {test , expect} from '@playwright/test'

test('selectors demo',async({page})=>{
   await page.goto("https://www.saucedemo.com/")
    // Using ANy object Property
   await page.click('id=user-name')
   await page.locator('id=user-name').fill("Edison")
   await page.locator('[id="user-name"]').fill("Einstein")
    // Uisng CSS Selector
    // login button
   await page.locator('#login-button').click()
   await page.pause()
    // using Xpath
    await page.locator('xpath=//input[@id="user-name"]').fill('farday')
    await page.locator('//input[@id="password"]').fill("helwowow")

    // Using Text
    await page.locator('text=LOGIN').click()
    await page.locator('input:has-text("LOGIN")').click()
})