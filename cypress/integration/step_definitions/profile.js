import { Given, Then } from 'cypress-cucumber-preprocessor/steps';
import './common';

Then('I should see the user name {string}', (expectedName) => {
  cy.get('p').contains('Name:').should('contain', expectedName);
});

Then('I should see the user email {string}', (expectedEmail) => {
  cy.get('p').contains('Email:').should('contain', expectedEmail);
});

Then('The user name should not be empty', () => {
  cy.get('p').contains('Name:').invoke('text').should('match', /Name:\s\S+/);
});

Then('The user email should not be empty', () => {
  cy.get('p').contains('Email:').invoke('text').should('match', /Email:\s\S+@\S+\.\S+/);
});