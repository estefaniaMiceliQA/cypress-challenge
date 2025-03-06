import { When, Then } from 'cypress-cucumber-preprocessor/steps';
import './common';
import { nameInput, emailInput, submitButton } from './common';

Then('I should see the name and email input fields', () => {
    nameInput().should('be.visible');
    emailInput().should('be.visible');
});

Then('I should see the "Complete Purchase" button', () => {
    submitButton().should('be.visible');
});

When('I enter name {string}', (name) => {
    nameInput().type(name);
});

When('I enter email {string}', (email) => {
    emailInput().type(email);
});

When('I submit the form', () => {
    submitButton().click();
});

Then('The form should not accept the invalid {string}', (field) => {
    cy.log(`BUG: The ${field} field does not reject invalid values.`);
    cy.url().should('include', '/checkout');
    cy.contains('Thank you for your purchase!', { timeout: 100 }).should('not.exist');
});

Then('I should see a confirmation message {string}', (expectedMessage) => {
    cy.contains(expectedMessage).should('be.visible');
});