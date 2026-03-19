// tests/login.spec.ts

import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';
import { user } from './fixtures/user';

test('User can login successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.login(user.username, user.password);

  await expect(page).toHaveURL(/dashboard/);
});