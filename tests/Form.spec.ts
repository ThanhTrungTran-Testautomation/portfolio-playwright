// spec: specs/plan.md
// seed: tests/seed.spec.ts

import { test } from '@playwright/test';
import { FormPage } from './pages/FormPage';
import { validForm, invalidForm } from './fixtures/formData';

test.describe('Form Submission', () => {
  test('Submit Valid Form', async ({ page }) => {
    const formPage = new FormPage(page);

    // 1. Submit valid form data
    await formPage.submitForm(validForm);

    // 2. Verify success message "submitted successfully" is displayed
    await formPage.expectSuccess();
  });

  test('Submit Invalid Form - Empty Fields', async ({ page }) => {
    const formPage = new FormPage(page);

    // 1. Navigate to form page and submit empty form
    await formPage.goto();
    await formPage.submit();

    // 2. Verify error message "please fill all fields correctly" is displayed
    await formPage.expectError();
  });

  test('Submit Invalid Form - Invalid Email', async ({ page }) => {
    const formPage = new FormPage(page);

    // 1. Submit form with invalid email
    await formPage.submitForm(invalidForm);

    // 2. Verify error message "please fill all fields correctly" is displayed
    await formPage.expectError();
  });
});