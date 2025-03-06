Feature: Home Page

  Scenario: User sees the home page correctly
    Given I visit the "home" page
    Then I should see the page title "Cypress Challenge"
    And I should see the header "Welcome to E-Commerce"
    And I should see a list of products

  Scenario: Each product should display a name and a price
    Given I visit the "home" page
    Then Each product should display a name
    And Each product should display a price

  Scenario: Each product should have a valid link
    Given I visit the "home" page
    Then Each product should have a valid link

  Scenario: Home page should display exactly 3 products
    Given I visit the "home" page
    Then I should see exactly 3 products listed

  Scenario: Product names should only contain valid characters
    Given I visit the "home" page
    Then Each product name should not contain special characters

  Scenario: Prices should be valid currency values
    Given I visit the "home" page
    Then Each product should have a valid price format

  Scenario: Products should not be duplicated
    Given I visit the "home" page
    Then There should be no duplicate product names

  Scenario: Each product link should load the correct product page
    Given I visit the "home" page
    When I click on a product link
    Then The product page should load successfully
