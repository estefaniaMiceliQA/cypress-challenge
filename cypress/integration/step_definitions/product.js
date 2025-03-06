import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I visit a product page with ID {string}', (productId) => {
    cy.visit(`/product/${productId}`);
});

Then('I should see the product title {string}', (expectedTitle) => {
    cy.get('h1').should('contain', expectedTitle);
});

Then('I should see the product description', () => {
    cy.get('p').should('exist');
});

Then('I should see the "Add to Cart" button', () => {
    cy.get('button').should('contain', 'Add to Cart');
});

When('I click the "Add to Cart" button', () => {
    cy.get('button').contains('Add to Cart').click();
});

Then('I should be redirected to the cart page', () => {
    cy.url().should('include', '/cart');
});

Then('The URL should match {string}', (expectedUrl) => {
    cy.url().should('include', expectedUrl);
});

Then('I should still see a product page', () => {
    cy.get('h1').should('exist');
    cy.get('button').should('contain', 'Add to Cart');
});

When('I refresh the page', () => {
    cy.reload();
});

Then('I should still see the product title {string}', (expectedTitle) => {
    cy.get('h1').should('contain', expectedTitle);
});  
