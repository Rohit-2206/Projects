import {test, expect} from "@playwright/test";
import fs from 'fs'
import {parse} from 'csv-parse/sync'

const csvPath = "testData/Book 4(Sheet1).csv";
const fileContent = fs.readFileSync(csvPath,"utf-8");

const records:any = parse(fileContent,{columns:true,skip_empty_lines:true});

for (const data of records)
{
test(`Login test for ${data.email} and ${data.password}`, async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/');
  await page.locator(".ico-login").click();
  await page.getByRole('textbox', { name: 'Email:' }).click();
  await page.getByRole('textbox', { name: 'Email:' }).fill(data.email);
  await page.getByRole('textbox', { name: 'Password:' }).click();
  await page.getByRole('textbox', { name: 'Password:' }).fill(data.password);
  await page.getByRole('button', { name: 'Log in' }).click();

  if(data.validity==='valid')
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