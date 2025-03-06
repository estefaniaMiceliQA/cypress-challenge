import { Then } from 'cypress-cucumber-preprocessor/steps';
import './common';

const userNameField = () => cy.get('p').contains('Name:');
const userEmailField = () => cy.get('p').contains('Email:');

Then('I should see the user name {string}', (expectedName) => {
    userNameField().should('contain', expectedName);
});

Then('I should see the user email {string}', (expectedEmail) => {
    userEmailField().should('contain', expectedEmail);
});

Then('The user name should not be empty', () => {
    userNameField().invoke('text').should('match', /Name:\s\S+/);
});

Then('The user email should not be empty', () => {
    userEmailField().invoke('text').should('match', /Email:\s\S+@\S+\.\S+/);
});