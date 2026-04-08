// pages/FormPage.ts

import { Page, expect } from '@playwright/test';

export class FormPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('/form.html');
  }

  async fillFirstName(name: string) {
    await this.page.fill('input[name="firstName"]', name);
    //await this.page.getByRole('textbox', { name: 'First Name' }).fill(name);
  }

  async fillLastName(name: string) {
    await this.page.fill('input[name="lastName"]', name);
    //await this.page.getByRole('textbox', { name: 'Last Name' }).fill(name);
  }
  async fillEmail(email: string) {
    await this.page.fill('input[name="email"]', email);
    //await this.page.getByRole('textbox', { name: 'Email' }).fill(email);
  }

  async selectDropdown(name: string, value: string) {
    await this.page.selectOption(`select[name="${name}"]`, value);
    //await this.page.getByRole('combobox').selectOption(country);
  }

  async submit() {
    await this.page.click('button[type="submit"]');
    //await this.page.getByRole('button', { name: 'Submit' }).click();
  }

  async submitForm(data: { firstName: string; lastName: string; email: string; country: string }) {
    await this.goto();    
    await this.fillFirstName(data.firstName);
    await this.fillLastName(data.lastName);
    await this.fillEmail(data.email);
    await this.selectDropdown('country', data.country);
    await this.submit();
  }

  async expectSuccess() {    
    await expect(this.page.locator('.success-message')).toHaveText('submitted successfully');     
    //await expect(this.page.getByText('submitted successfully')).toBeVisible();
  }

  async expectError() {
    await expect(this.page.locator('.error-message')).toHaveText('please fill all fields correctly');      
    //await expect(this.page.getByText('please fill all fields correctly')).toBeVisible();
  }
}