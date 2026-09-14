import { test, expect } from '@playwright/test';

let context;
let page;

test.beforeAll(async({browser})=>{
  context=await browser.newContext();
  page = await context.newPage();

  await context.tracing.start({snapshots:true , screenshots:true});
})

test.afterAll(async()=>{
  if(context)
  {
     await context.tracing.stop({path: 'test2_trace.zip'})
     await context.close();
  }
})

test('has title', async () => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async () => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Get started' }).click();
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
