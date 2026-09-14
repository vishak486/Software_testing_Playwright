import {test,expect} from '@playwright/test'

test('Assertion Demo Test',async({page})=>{
    await page.goto("https://kitchen.applitools.com/")
    // await page.pause()
    // Assertions
    // Check the Element is present or not
    await expect( page.locator('text=The Kitchen')).toHaveCount(1)
    if(await page.$('text=The Kitchen'))
    {
        await page.locator('text=The Kitchen').click()
    }

    // check Visible or not
    await expect(page.locator('text=The Kitchen')).toBeVisible()
    //await expect.soft(page.locator('text=The Kitchen')).toBeHidden()

    // check Element is Enabled or Disabled
     await expect(page.locator('text=The Kitchen')).toBeEnabled()
     // await expect.soft(page.locator('text=The Kitchen')).toBeDisabled()
    // check Text
    await expect(page.locator('text=The Kitchen')).toHaveText('The Kitchen')
    //await expect(page.locator('text=The Kitchen')).not.toHaveText('The Kitchen')

    // check Attribute values
    await expect(page.locator('text=The Kitchen')).toHaveAttribute('class', /.*css-dpmy2a/)
    await expect(page.locator('text=The Kitchen')).toHaveClass(/.*css-dpmy2a/)

    // check page URL
    await expect(page).toHaveURL("https://kitchen.applitools.com/")
    await expect(page).toHaveTitle(/.*Kitchen/)

    await page.pause()
    // visual Vlaidation with screenshot
    await expect(page).toHaveScreenshot()
})