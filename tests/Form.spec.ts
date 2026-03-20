// tests/form.spec.ts

import { test } from '@playwright/test';
import { FormPage } from './pages/FormPage';
import { validForm } from './fixtures/formData';
import { invalidForm } from './fixtures/formData';

test('User can submit form successfully', async ({ page }) => {
  const formPage = new FormPage(page);

  await formPage.submitForm(validForm);

  await formPage.expectSuccess();
});

test('User can not submit form successfully', async ({ page }) => {
  const formPage = new FormPage(page);

  await formPage.submitForm(invalidForm);

  await formPage.expectError();
});