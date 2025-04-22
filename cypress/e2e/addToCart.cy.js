import BasePage from "../pages/basePage";
import HomePage from "../pages/homePage";
import ProductPage from "../pages/productPage";
import CartPage from "../pages/cartPage";

describe('Flipkart Add to Cart Test', () => {
  const basePage = new BasePage();
  const homePage = new HomePage();
  const productPage = new ProductPage();
  const cartPage = new CartPage();

  it('should search, select, add to cart and verify the product', () => {
    cy.visit('/');

    basePage.closeLoginPopupIfVisible();

    homePage.searchForProduct('Laptop Bag');

    productPage.clickFirstProduct().then((productName) => {
      // Confirm we landed on a product page
      cy.url().should('include', '/p/');

      // Add to cart
      productPage.addToCart();

      // Go to cart page (if needed)
      cy.visit('/viewcart');

      // Verify product in cart
      cartPage.verifyProductInCart(productName);
    });
  });
});
