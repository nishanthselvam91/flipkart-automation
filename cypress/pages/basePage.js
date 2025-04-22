class BasePage {
    closeLoginPopupIfVisible() {
      cy.get('body').then($body => {
        if ($body.find('button._2KpZ6l._2doB4z').length) {
          cy.get('button._2KpZ6l._2doB4z').should('be.visible').click();
        }
      });
    }
  }
  
  export default BasePage;
  