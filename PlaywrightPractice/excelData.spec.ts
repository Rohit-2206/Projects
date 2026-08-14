import {test, expect} from "@playwright/test"
import * as XLSX from 'xlsx';

const excelPath = "testData/Book 4.xlsx"
const workbook= XLSX.readFile(excelPath);
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];

const loginData:any = XLSX.utils.sheet_to_json(worksheet);

for (const {email, password, validity} of loginData)
{
test(`Login test for ${email} and ${password}`, async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/');
  await page.locator(".ico-login").click();
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