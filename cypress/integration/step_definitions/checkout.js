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

Then('I should see a validation message {string} for the name field', (expectedMessage) => {
    cy.get('input[placeholder="Your Name"]').then(($el) => {
        expect($el[0].validationMessage).to.equal(expectedMessage);
        cy.log(`Validation message for Name field: ${$el[0].validationMessage}`);
    });
});

Then('I should see a validation message {string} for the email field', (expectedMessage) => {
    cy.get('input[placeholder="Your Email"]').then(($el) => {
        expect($el[0].validationMessage).to.equal(expectedMessage);
        cy.log(`Email validation message found: ${$el[0].validationMessage}`);
    });
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