class ProductPage {
    get firstProduct() {
        return cy.get('a[href*="/p/"]').first();
    }

    clickFirstProduct() {
        return this.firstProduct
          .then(($el) => {
            // Remove target attribute using jQuery method directly
            $el.removeAttr('target');
      
            const productName = $el.text();
            $el[0].click();  
            return productName;
          });
      }

    get addToCartButton() {
        return cy.contains('button', 'Add to cart'); //using reliable selector which does not change dynamically
        
    }

    addToCart() {
        const button = this.addToCartButton;
   button.should('be.visible');
  cy.wait(500);
  button.click();
  cy.wait(500);
    }
}

export default ProductPage;
