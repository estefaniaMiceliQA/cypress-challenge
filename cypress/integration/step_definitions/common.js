import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

const pages = {
    home: '/',
    cart: '/cart',
    checkout: '/checkout',
    profile: '/profile',
};

Given('I visit the {string} page', (page) => {
    cy.visit(pages[page] || '/');
});

Then('I should see the page title {string}', (expectedTitle) => {
    cy.title().should('eq', expectedTitle);
});

Then('I should see the header {string}', (expectedHeader) => {
    cy.get('h1').should('contain', expectedHeader);
});

When('I enter name {string}', (name) => {
    cy.get('input[placeholder="Your Name"]').clear().type(name);
});

When('I enter email {string}', (email) => {
    cy.get('input[placeholder="Your Email"]').clear().type(email);
});

When('I submit the form', () => {
    cy.get('button').contains('Complete Purchase').click();
});

Then('I should see a validation message {string} for the {string} field', (expectedMessage, field) => {
    const selector = field === 'name' ? 'input[placeholder="Your Name"]' : 'input[placeholder="Your Email"]';
    cy.get(selector).then(($el) => {
        expect($el[0].validationMessage).to.equal(expectedMessage);
        cy.log(`Validation message found: ${$el[0].validationMessage}`);
    });
});
