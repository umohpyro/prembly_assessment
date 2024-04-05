import { test, expect } from '@playwright/test';
import {LoginPage, InventoryPage } from '../POM/ui-test-pom';
import {AUT_URL,loginCredentials} from '../CONSTANTS'

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  await page.goto(AUT_URL);
  await loginPage.login(loginCredentials.username, loginCredentials.password);
});

test.afterEach(async ({ page }) => {
    // await page.waitForTimeout(5000)
  await page.close();
});

test('Verify that the items are sorted by Name ( A -> Z )', async ({ page }) => {
  const inventoryPage = new InventoryPage(page);
  await inventoryPage.sortByNameAscending();
  
  const inventoryItems = await inventoryPage.getAllInventoryItems();
  const sortedItems = inventoryItems.slice().sort();

  for (let i = 0; i < inventoryItems.length; i++) {
    expect(sortedItems[i]).toBe(inventoryItems[i]);
  }
});

test('Verify that the items are sorted by Name ( Z -> A )', async ({ page }) => {
  const inventoryPage = new InventoryPage(page);
  await inventoryPage.sortByNameDescending();
  
  const inventoryItems = await inventoryPage.getAllInventoryItems();
  const sortedItems = inventoryItems.slice().sort().reverse();

  for (let i = 0; i < inventoryItems.length; i++) {
    expect(sortedItems[i]).toBe(inventoryItems[i]);
  }
});
