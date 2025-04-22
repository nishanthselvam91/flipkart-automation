class HomePage {
    get searchBox() {
        return cy.get("input[name='q']");
    }

    get searchButton() {
        return cy.get('button[type="submit"]');
    }

    searchForProduct(productName) {
        this.searchBox.type(productName);
        this.searchButton.click();
    }
}

export default HomePage;
