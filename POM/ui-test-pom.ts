import { Page, expect } from '@playwright/test';
import {fields} from '../CONSTANTS'

export class InventoryPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async sortByNameAscending(): Promise<void> {
    await expect(this.page.locator(fields.activeButton)).toHaveText("Name (A to Z)");
  }

  async sortByNameDescending(): Promise<void> {
    await this.page.locator(fields.productSortContainer).selectOption("za");
    await expect(this.page.locator(fields.activeButton)).toHaveText("Name (Z to A)");
  }

  async getAllInventoryItems(): Promise<string[]> {
    return await this.page.locator(fields.inventoryItemName).allInnerTexts();
  }
}

export class LoginPage {
    private page: Page;
  
    constructor(page: Page) {
      this.page = page;
    }
  
    async login(username: string, password: string): Promise<void> {
      await this.page.fill(fields.usernameField, username);
      await this.page.fill(fields.passwordField, password);
      await this.page.click(fields.loginButton);
    }
  }