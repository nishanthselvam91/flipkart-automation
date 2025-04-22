class CartPage {
  // Get all product titles in cart page
  get cartProductTitles() {
    return cy.get('a[href*="/product/"], a[href*="/itm"]'); // more stable pattern for product links
  }

  verifyProductInCart(productName) {
      this.cartProductTitles.should('contain.text', productName);
  }
}

export default CartPage;
