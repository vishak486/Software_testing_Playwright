import { test, expect } from '@playwright/test'


let context;
let page;
test.beforeAll(async ({ browser }) => {
     context = await browser.newContext();
     page = await context.newPage();

    await page.goto('https://www.saucedemo.com/')
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('visual_user');
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();  
})

test.afterAll(async()=>{
     await context.close()
})

test("homepage", async () => {
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
    await page.getByText('Get your testing superhero on').click();
    await page.locator('[data-test="item-2-img-link"]').click();
    await page.locator('[data-test="add-to-cart"]').click(); 
})

test("logout", async () => {
    await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.locator('[data-test="logout-sidebar-link"]').click();
})