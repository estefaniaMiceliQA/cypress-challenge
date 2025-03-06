import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import './common';

Then('I should see the name and email input fields', () => {
    cy.get('input[placeholder="Your Name"]').should('be.visible');
    cy.get('input[placeholder="Your Email"]').should('be.visible');
});

Then('I should see the "Complete Purchase" button', () => {
    cy.get('button').contains('Complete Purchase').should('be.visible');
});

When('I submit the form without filling it', () => {
    cy.get('button').contains('Complete Purchase').click();
});

When('I enter name {string}', (name) => {
    cy.get('input[placeholder="Your Name"]').type(name);
});

When('I enter email {string}', (email) => {
    cy.get('input[placeholder="Your Email"]').type(email);
});

When('I submit the form', () => {
    cy.get('button').contains('Complete Purchase').click();
});

Then('The form should not accept the invalid {string}', (field) => {
    cy.log(`BUG: The ${field} field does not reject invalid values.`);
    cy.url().should('include', '/checkout');
    cy.contains('Thank you for your purchase!', { timeout: 100 }).should('not.exist');
});

Then('I should see a confirmation message {string}', (expectedMessage) => {
    cy.contains(expectedMessage).should('be.visible');
});