// pages/DashboardPage.ts

import { Page, expect } from '@playwright/test';

export class DashboardPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async isLoaded() {
    await expect(this.page.locator('h1')).toHaveText('Welcome, admin');
  }

  async logout() {
    await this.page.click('#logout');
  }
}