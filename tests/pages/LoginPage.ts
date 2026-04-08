// pages/LoginPage.ts

import { Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('/login');
  }

  async fillUsername(username: string) {
    await this.page.fill('#username', username);
    //await this.page.getByRole('textbox', { name: 'Username' }).fill(username);
  }

  async fillPassword(password: string) {
    await this.page.fill('#password', password);
    //await this.page.getByRole('textbox', { name: 'Password' }).fill(password);
  }

  async submit() {
    await this.page.click('button[type="submit"]');
    //await this.page.getByRole('button', { name: 'Login' }).click();
  }

  async login(username: string, password: string) {
    await this.goto();
    await this.fillUsername(username);
    await this.fillPassword(password);
    await this.submit();
  }

  async expectErrorMessage() {
    await this.page.getByText('Fail').waitFor();
  }
}