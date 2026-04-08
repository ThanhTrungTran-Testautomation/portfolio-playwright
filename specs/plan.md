# Test Plan: Portfolio Playwright App

## 1. Authentication
**Seed:** `tests/seed.spec.ts`

### 1.1 Successful Login
**Steps:**
1. Navigate to home page
2. Enter "admin" in the username field
3. Enter "1234" in the password field
4. Click the Login button
5. Verify the page navigates to dashboard
6. Verify the welcome message "Welcome, admin" is displayed

### 1.2 Failed Login - Invalid Credentials
**Steps:**
1. Navigate to home page
2. Enter "invalid" in the username field
3. Enter "wrong" in the password field
4. Click the Login button
5. Verify error message "Fail" is displayed
6. Verify user remains on login page

## 2. Form Submission
**Seed:** `tests/seed.spec.ts`

### 2.1 Submit Valid Form
**Steps:**
1. Navigate to form page
2. Enter "Max" in the First Name field
3. Enter "Mustermann" in the Last Name field
4. Enter "max@test.com" in the Email field
5. Select "Germany" from the Country dropdown
6. Click the Submit button
7. Verify success message "submitted successfully" is displayed

### 2.2 Submit Invalid Form - Empty Fields
**Steps:**
1. Navigate to form page
2. Leave all fields empty
3. Click the Submit button
4. Verify error message "please fill all fields correctly" is displayed

### 2.3 Submit Invalid Form - Invalid Email
**Steps:**
1. Navigate to form page
2. Enter "John" in the First Name field
3. Enter "Doe" in the Last Name field
4. Enter "invalid-email" in the Email field (no @)
5. Select "USA" from the Country dropdown
6. Click the Submit button
7. Verify error message "please fill all fields correctly" is displayed

## 3. Dashboard Navigation
**Seed:** `tests/seed.spec.ts`

### 3.1 Dashboard Loads After Login
**Steps:**
1. Login successfully with admin credentials
2. Verify dashboard page displays
3. Verify welcome message is visible
4. Verify Form button is visible
5. Verify Settings button is visible

### 3.2 Navigate to Form from Dashboard
**Steps:**
1. Login successfully
2. Click the Form button on dashboard
3. Verify form page loads and URL contains "/form.html"