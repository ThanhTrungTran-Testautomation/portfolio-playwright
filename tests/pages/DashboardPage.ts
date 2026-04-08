// pages/DashboardPage.ts

import { Page, expect } from '@playwright/test';

export class DashboardPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async isLoaded() {
    await expect(this.page.locator('h1')).toHaveText('Welcome, admin');
    //await expect(this.page.getByRole('heading', { name: 'Welcome, admin' })).toBeVisible();
  }

  async clickFormButton() {
    await this.page.getByRole('button', { name: 'Form' }).click();
  }

  async clickSettingsButton() {
    await this.page.getByRole('button', { name: 'Settings' }).click();
  }
  
  async logout() {
    await this.page.click('#logout');
    //await this.page.getByRole('button', { name: 'Logout' }).click();
  }
}