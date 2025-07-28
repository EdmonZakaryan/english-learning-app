import { test, expect } from '@playwright/test';

test.describe('Authentication Flow', () => {
  test.beforeEach(async ({ page }) => {
    // Start from the homepage
    await page.goto('/');
  });

  test('should navigate to login page and display login form', async ({ page }) => {
    await page.getByRole('link', { name: /Sign In/i }).first().click();
    await expect(page).toHaveURL('/auth/login');

    // Check if login form elements are present
    await expect(page.getByRole('heading', { name: /Sign In/i })).toBeVisible();
    await expect(page.getByLabel(/Email/i)).toBeVisible();
    await expect(page.getByLabel(/Password/i)).toBeVisible();
    await expect(page.getByRole('button', { name: /Sign In/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /Don't have an account/i })).toBeVisible();
  });

  test('should navigate to register page and display registration form', async ({ page }) => {
    await page.getByRole('link', { name: /Get Started/i }).first().click();
    await expect(page).toHaveURL('/auth/register');

    // Check if registration form elements are present
    await expect(page.getByRole('heading', { name: /Create Account/i })).toBeVisible();
    await expect(page.getByLabel(/Display Name/i)).toBeVisible();
    await expect(page.getByLabel(/Email/i)).toBeVisible();
    await expect(page.getByLabel(/Password/i)).toBeVisible();
    await expect(page.getByRole('button', { name: /Create Account/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /Already have an account/i })).toBeVisible();
  });

  test('should show validation errors for empty login form', async ({ page }) => {
    await page.goto('/auth/login');
    
    // Try to submit empty form
    await page.getByRole('button', { name: /Sign In/i }).click();
    
    // Check for validation errors
    await expect(page.getByText(/Email is required/i)).toBeVisible();
    await expect(page.getByText(/Password must be at least 6 characters/i)).toBeVisible();
  });

  test('should show validation errors for invalid email format', async ({ page }) => {
    await page.goto('/auth/login');
    
    // Fill invalid email
    await page.getByLabel(/Email/i).fill('invalid-email');
    await page.getByLabel(/Password/i).fill('password123');
    await page.getByRole('button', { name: /Sign In/i }).click();
    
    // Check for email validation error
    await expect(page.getByText(/Invalid email address/i)).toBeVisible();
  });

  test('should show validation errors for empty registration form', async ({ page }) => {
    await page.goto('/auth/register');
    
    // Try to submit empty form
    await page.getByRole('button', { name: /Create Account/i }).click();
    
    // Check for validation errors
    await expect(page.getByText(/Display name is required/i)).toBeVisible();
    await expect(page.getByText(/Email is required/i)).toBeVisible();
    await expect(page.getByText(/Password must be at least 6 characters/i)).toBeVisible();
  });

  test('should toggle password visibility', async ({ page }) => {
    await page.goto('/auth/login');
    
    const passwordInput = page.getByLabel(/Password/i);
    const toggleButton = page.getByRole('button', { name: /toggle password visibility/i });
    
    // Initially password should be hidden
    await expect(passwordInput).toHaveAttribute('type', 'password');
    
    // Click toggle to show password
    await toggleButton.click();
    await expect(passwordInput).toHaveAttribute('type', 'text');
    
    // Click toggle again to hide password
    await toggleButton.click();
    await expect(passwordInput).toHaveAttribute('type', 'password');
  });

  test('should navigate between login and register pages', async ({ page }) => {
    // Start at login page
    await page.goto('/auth/login');
    
    // Navigate to register page
    await page.getByRole('link', { name: /Don't have an account/i }).click();
    await expect(page).toHaveURL('/auth/register');
    
    // Navigate back to login page
    await page.getByRole('link', { name: /Already have an account/i }).click();
    await expect(page).toHaveURL('/auth/login');
  });

  test('should handle form submission with valid data (mock)', async ({ page }) => {
    await page.goto('/auth/login');
    
    // Fill valid form data
    await page.getByLabel(/Email/i).fill('test@example.com');
    await page.getByLabel(/Password/i).fill('password123');
    
    // Submit form (this will likely show an error since we don't have real auth setup)
    await page.getByRole('button', { name: /Sign In/i }).click();
    
    // Wait for any response (error message or redirect)
    await page.waitForTimeout(1000);
    
    // The form should have been submitted (button should be enabled again after response)
    await expect(page.getByRole('button', { name: /Sign In/i })).toBeEnabled();
  });

  test('should have proper accessibility attributes', async ({ page }) => {
    await page.goto('/auth/login');
    
    // Check form accessibility
    const form = page.locator('form');
    await expect(form).toBeVisible();
    
    // Check input labels are properly associated
    const emailInput = page.getByLabel(/Email/i);
    const passwordInput = page.getByLabel(/Password/i);
    
    await expect(emailInput).toHaveAttribute('type', 'email');
    await expect(passwordInput).toHaveAttribute('type', 'password');
    
    // Check required attributes
    await expect(emailInput).toHaveAttribute('required');
    await expect(passwordInput).toHaveAttribute('required');
  });
});