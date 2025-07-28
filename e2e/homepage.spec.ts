import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('should display the main heading and navigation', async ({ page }) => {
    await page.goto('/');

    // Check if the main heading is visible
    await expect(page.getByRole('heading', { name: /Master English with AI-Powered Learning/i })).toBeVisible();

    // Check if the navigation buttons are present
    await expect(page.getByRole('link', { name: /Sign In/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /Get Started/i })).toBeVisible();

    // Check if the main CTA buttons are present
    await expect(page.getByRole('link', { name: /Start Learning Free/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /Browse Lessons/i })).toBeVisible();
  });

  test('should display feature cards', async ({ page }) => {
    await page.goto('/');

    // Check if all feature cards are visible
    await expect(page.getByText('Interactive Lessons')).toBeVisible();
    await expect(page.getByText('AI Learning Assistant')).toBeVisible();
    await expect(page.getByText('Content Generation')).toBeVisible();
    await expect(page.getByText('Vocabulary Lists')).toBeVisible();
  });

  test('should navigate to login page when clicking Sign In', async ({ page }) => {
    await page.goto('/');

    await page.getByRole('link', { name: /Sign In/i }).first().click();
    await expect(page).toHaveURL('/auth/login');
  });

  test('should navigate to register page when clicking Get Started', async ({ page }) => {
    await page.goto('/');

    await page.getByRole('link', { name: /Get Started/i }).first().click();
    await expect(page).toHaveURL('/auth/register');
  });

  test('should have proper meta tags', async ({ page }) => {
    await page.goto('/');

    // Check page title
    await expect(page).toHaveTitle(/English Learning App/i);

    // Check meta description
    const metaDescription = page.locator('meta[name="description"]');
    await expect(metaDescription).toHaveAttribute('content', /Interactive English learning platform with AI assistance/i);
  });
});