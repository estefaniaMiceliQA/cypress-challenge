Feature: End-to-End Purchase Flow

  Scenario: User completes a full purchase
    Given I visit the "home" page
    When I click on the first product
    Then I should be on the product page

    When I add the product to the cart
    Then I should be redirected to the cart page
    And I should see the added product in the cart

    When I proceed to checkout
    Then I should be on the checkout page

    When I enter name "John Doe"
    And I enter email "john.doe@example.com"
    And I submit the form
    Then I should see a confirmation message "Thank you for your purchase!"
