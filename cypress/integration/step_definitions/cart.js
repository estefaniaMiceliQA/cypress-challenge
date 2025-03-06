import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import './common';

Then('I should see a list of added products', () => {
    cy.get('ul').should('exist');
    cy.get('ul li').should('have.length.at.least', 1);
});

Given('I have added {string} to the cart', (productName) => {
    const productId = productName.match(/\d+/)[0];
    cy.visit(`/product/${productId}`);
    cy.get('button').contains('Add to Cart').click();
});

Then('The cart should contain {string} with quantity {string}', (expectedProduct, expectedQuantity) => {
    cy.get('ul li').then(($el) => {
        const cartText = $el.text();
        const expectedText = `${expectedProduct} - Quantity: ${expectedQuantity}`;

        // Bug: The cart always displays "Product 1"
        if (!cartText.includes(expectedProduct)) {
            cy.log(`BUG: Expected "${expectedText}", but found: "${cartText}"`);
        }

        expect(cartText, `Expected to find: "${expectedText}" but found: "${cartText}"`).to.equal(expectedText); // Expected to fail due to bug
    });
});

Then('I should see a "Proceed to Checkout" button', () => {
    cy.get('a').contains('Proceed to Checkout').should('be.visible');
});

When('I click the "Proceed to Checkout" button', () => {
    cy.get('a').contains('Proceed to Checkout').click();
});

Then('I should be redirected to the checkout page', () => {
    cy.url().should('include', '/checkout');
});

Then('I should see a message indicating the cart is empty', () => {
    cy.get('ul li').then(($el) => {

        // Bug: The cart always displays "Product 1"
        if ($el.length > 0) {
            cy.log(`BUG: Expected empty cart, but found: ${$el.text()}`);
        }

        expect($el.length).to.equal(0); // Expected to fail due to bug
    });
});
