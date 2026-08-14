import {test, expect} from "@playwright/test";
import fs from 'fs'

const jsonPath = "testData/data.json";
console.log(fs.existsSync(jsonPath));
const loginData:any = JSON.parse(fs.readFileSync(jsonPath,'utf-8'));

for (const {email, password, validity} of loginData)
{
test(`Login test for ${email} and ${password}`, async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.getByRole('textbox', { name: 'Email:' }).click();
  await page.getByRole('textbox', { name: 'Email:' }).fill(email);
  await page.getByRole('textbox', { name: 'Password:' }).click();
  await page.getByRole('textbox', { name: 'Password:' }).fill(password);
  await page.getByRole('button', { name: 'Log in' }).click();

  if(validity==='valid')
  {
  await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();
  }
  else
    {
  await expect(page.locator('body')).toContainText('Login was unsuccessful. Please correct the errors and try again.');
  await expect(page).toHaveURL('https://demowebshop.tricentis.com/login');
  }
})
}