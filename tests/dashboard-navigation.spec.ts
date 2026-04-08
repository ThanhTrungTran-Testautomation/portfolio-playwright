// spec: specs/plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';
import { DashboardPage } from './pages/DashboardPage';
import { validUser } from './fixtures/user';

test.describe('Dashboard Navigation', () => {
  test('Dashboard Loads After Login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

    // 1. Login successfully
    await loginPage.login(validUser.username, validUser.password);

    // 2. Verify dashboard page displays and welcome message is visible
    await dashboardPage.isLoaded();

    // 3. Verify Form button is visible
    await expect(page.getByRole('button', { name: 'Form' })).toBeVisible();

    // 4. Verify Settings button is visible
    await expect(page.getByRole('button', { name: 'Settings' })).toBeVisible();
  });

  test('Navigate to Form from Dashboard', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

    // 1. Login successfully
    await loginPage.login(validUser.username, validUser.password);

    // 2. Click the Form button on dashboard
    await dashboardPage.clickFormButton();

    // 3. Verify form page loads and URL contains "/form.html"
    await expect(page).toHaveURL(/form\.html/);
  });
});