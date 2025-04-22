# Flipkart Automation Project

This project automates the product purchase flow on the Flipkart website using Cypress.

---

Navigate to the Project Directory :
cd flipkart-automation

Install Project Dependencies :
npm install

Run the tests :
npx cypress open

## Project Setup Instructions

Follow the steps below to set up and run this automation project locally:

1. **Clone the repository**
   ```bash
   git clone https://github.com/nishanthselvam91/flipkart-automation.git
 
 
 Test Scenarios Covered
1. Flipkart Homepage Launch
Verifies that the Flipkart homepage loads successfully.

Handles the initial login popup by closing it.

2. Product Search
Searches for a specific product (e.g., "Laptop Bag") using the search bar.

Validates that the search results are displayed correctly.

3. Product Selection
Selects the first product from the search results.

Verifies that the product details page opens in a new tab.

4. Add to Cart
Adds the selected product to the cart.

Verifies that the product appears in the cart with correct details.
