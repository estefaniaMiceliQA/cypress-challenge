import { Given, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I visit the profile page', () => {
  cy.visit('/profile');
});