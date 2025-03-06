import { When, Then } from 'cypress-cucumber-preprocessor/steps';
import './cart';
import './checkout';
import { addToCartButton, proceedToCheckoutButton } from './common';

When('I click on the first product', () => {
  cy.get('ul li a').first().click();
});

Then('I should be on the product page', () => {
  cy.url().should('include', '/product/');
  cy.get('h1').should('exist');
});

When('I add the product to the cart', () => {
    addToCartButton().click();
});

Then('I should be redirected to the cart page', () => {
  cy.url().should('include', '/cart');
});

Then('I should see the added product in the cart', () => {
  cy.get('ul li').should('have.length.at.least', 1);
});

When('I proceed to checkout', () => {
    proceedToCheckoutButton().click();
});

Then('I should be on the checkout page', () => {
  cy.url().should('include', '/checkout');
});
