Feature: Cart Page

  Scenario: User views the cart page
    Given I visit the cart page
    Then I should see the cart header "Your Cart"
    And I should see a list of added products

  @bug The cart always displays "Product 1" regardless of which product is added.
  Scenario: Cart should display correct product details
    Given I have added "Product 2" to the cart
    When I visit the cart page
    Then The cart should contain "Product 2" with quantity "1"

  Scenario: Proceed to checkout button should be visible and functional
    Given I visit the cart page
    Then I should see a "Proceed to Checkout" button
    When I click the "Proceed to Checkout" button
    Then I should be redirected to the checkout page

  @bug The cart is never empty, it always shows "Product 1".
  Scenario: Cart should be empty if no products are added
    Given I visit the cart page without adding products
    Then I should see a message indicating the cart is empty