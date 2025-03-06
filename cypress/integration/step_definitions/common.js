import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

const pages = {
    home: '/',
    cart: '/cart',
    checkout: '/checkout',
    profile: '/profile',
};

export const nameInput = () => cy.get('input[type="text"]');
export const emailInput = () => cy.get('input[type="email"]');
export const submitButton = () => cy.get('button[type="submit"]');
export const addToCartButton = () => cy.get('button').contains('Add to Cart');

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
    nameInput().clear().type(name);
});

When('I enter email {string}', (email) => {
    emailInput().clear().type(email);
});

When('I submit the form', () => {
    submitButton().click();
});

Then('I should see a validation message {string} for the {string} field', (expectedMessage, field) => {
    const selector = field.toLowerCase() === 'name' ? nameInput() : emailInput();

    selector.then(($el) => {
        cy.wrap(Cypress.browser.name).then((browser) => {
            if (field.toLowerCase() === 'email' && browser === 'firefox') {
                expectedMessage = "Please enter an email address.";
            }

            expect($el[0].validationMessage).to.equal(expectedMessage);
            cy.log(`Validation message found: ${$el[0].validationMessage}`);
        });
    });
});

