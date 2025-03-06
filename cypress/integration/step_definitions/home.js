import { Then, When } from 'cypress-cucumber-preprocessor/steps';
import './common';

const productLinks = () => cy.get('li a');

Then('I should see a list of products', () => {
    cy.get('ul').should('exist');
    cy.get('li').should('have.length.at.least', 1);
});

Then('Each product should display a name', () => {
    productLinks().each(($el) => {
        cy.wrap($el).invoke('text').should('match', /Product \d+/);
    });
});

Then('Each product should display a price', () => {
    productLinks().each(($el) => {
        cy.wrap($el).invoke('text').should('match', /\$\d+/);
    });
});

Then('Each product should have a valid link', () => {
    productLinks().each(($el) => {
        cy.wrap($el).should('have.attr', 'href').and('match', /\/product\/\d+/);
    });
});

Then('I should see exactly {int} products listed', (expectedCount) => {
    cy.get('li').should('have.length', expectedCount);
});

Then('Each product name should not contain special characters', () => {
    productLinks().each(($el) => {
        cy.wrap($el).invoke('text').should('match', /^Product \d+ - \$\d+(\.\d{1,2})?$/);
    });
});

Then('Each product should have a valid price format', () => {
    productLinks().each(($el) => {
        cy.wrap($el).invoke('text').should('match', /\$\d+(\.\d{1,2})?$/);
    });
});

Then('There should be no duplicate product names', () => {
    const productNames = new Set();

    productLinks().each(($el) => {
        cy.wrap($el).invoke('text').then((text) => {
            expect(productNames).not.to.include(text);
            productNames.add(text);
        });
    });
});

When('I click on a product link', () => {
    productLinks().first().click();
});

Then('The product page should load successfully', () => {
    cy.url().should('match', /\/product\/\d+/);
    cy.get('h1').should('exist');
    cy.get('p').should('exist');
    cy.get('button').should('contain', 'Add to Cart');
});