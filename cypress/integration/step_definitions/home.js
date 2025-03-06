import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';

Given('I visit the home page', () => {
    cy.visit('/');
});

Then('I should see the page title {string}', (expectedTitle) => {
    cy.title().should('eq', expectedTitle);
});

Then('I should see the main header {string}', (expectedHeader) => {
    cy.get('h1').should('contain', expectedHeader);
});

Then('I should see a list of products', () => {
    cy.get('ul').should('exist');
    cy.get('li').should('have.length.at.least', 1);
});

Then('Each product should display a name', () => {
    cy.get('li a').each(($el) => {
        cy.wrap($el).invoke('text').should('match', /Product \d+/);
    });
});

Then('Each product should display a price', () => {
    cy.get('li a').each(($el) => {
        cy.wrap($el).invoke('text').should('match', /\$\d+/);
    });
});

Then('Each product should have a link leading to its product page', () => {
    cy.get('li a').each(($el) => {
        cy.wrap($el).should('have.attr', 'href').and('match', /\/product\/\d+/);
    });
});

Then('I should see exactly {int} products listed', (expectedCount) => {
    cy.get('li').should('have.length', expectedCount);
});

Then('Each product name should not contain special characters', () => {
    cy.get('li a').each(($el) => {
        cy.wrap($el).invoke('text').should('match', /^Product \d+ - \$\d+(\.\d{1,2})?$/);
    });
});


Then('Each product should have a valid price format', () => {
    cy.get('li a').each(($el) => {
        cy.wrap($el).invoke('text').should('match', /\$\d+(\.\d{1,2})?$/);
    });
});

Then('There should be no duplicate product names', () => {
    const productNames = [];

    cy.get('li a').each(($el) => {
        cy.wrap($el).invoke('text').then((text) => {
            expect(productNames).not.to.include(text);
            productNames.push(text);
        });
    });
});

When('I click on a product link', () => {
    cy.get('li a').first().click();
});

Then('The product page should load successfully', () => {
    cy.url().should('match', /\/product\/\d+/);
    cy.get('h1').should('exist');
    cy.get('p').should('exist');
    cy.get('button').should('contain', 'Add to Cart');
});
