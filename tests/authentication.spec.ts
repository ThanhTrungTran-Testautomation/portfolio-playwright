// spec: specs/plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';
import { DashboardPage } from './pages/DashboardPage';
import { validUser, invalidUser } from './fixtures/user';

test.describe('Authentication', () => {
  test('Successful Login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

    // 1. Navigate to home page and login
    await loginPage.login(validUser.username, validUser.password);

    // 2. Verify the page navigates to dashboard
    await expect(page).toHaveURL(/dashboard/);

    // 3. Verify the welcome message "Welcome, admin" is displayed
    await dashboardPage.isLoaded();
  });

  test('Failed Login - Invalid Credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    // 1. Navigate to home page and attempt login with invalid credentials
    await loginPage.login(invalidUser.username, invalidUser.password);

    // 2. Verify error message "Fail" is displayed
    await loginPage.expectErrorMessage();

    // 3. Verify user remains on login page
    await expect(page).toHaveURL(/\/login$/);
  });
});