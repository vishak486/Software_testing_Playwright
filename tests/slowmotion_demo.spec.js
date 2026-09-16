import {test , expect, chromium } from '@playwright/test'

test('SlowMotion Test',async()=>{

    const browser=await chromium.launch({
        slowMo :500,
        headless:false
    })
    const context = await browser.newContext({
        recordVideo:{
            dir: 'videos/',
            size: {width :800 , height: 600}
        }
    })
    const page=await context.newPage()
    await page.goto("https://demo.applitools.com/")
    // await page.pause();
    await page.getByRole('textbox', { name: 'Enter your username' }).click()
    await page.getByRole('textbox', { name: 'Enter your username' }).fill('Vishak')
    await page.getByRole('textbox', { name: 'Enter your password' }).click()
    await page.getByRole('textbox', { name: 'Enter your password' }).fill("1234")
    await page.getByRole('link', { name: 'Sign in' }).click()
    
    await context.close()
})