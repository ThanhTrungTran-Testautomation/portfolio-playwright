// tests/dashboard.spec.ts

import { test } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';
import { DashboardPage } from './pages/DashboardPage';
import { user } from './fixtures/user';

test('Dashboard is visible after login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);

  await loginPage.login(user.username, user.password);

  await dashboardPage.isLoaded();
});