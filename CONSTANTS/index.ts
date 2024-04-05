const AUT_URL = "https://www.saucedemo.com/";

const loginCredentials = {
  username: "standard_user",
  password: "secret_sauce",
};

const fields = {
  usernameField: '[data-test=username]',
  passwordField: '[data-test=password]',
  loginButton: '[data-test=login-button]',
  activeButton: '.active_option',
  productSortContainer: '[data-test="product-sort-container"]',
  inventoryItemName: '.inventory_item_name',
};



export {AUT_URL, loginCredentials, fields };
