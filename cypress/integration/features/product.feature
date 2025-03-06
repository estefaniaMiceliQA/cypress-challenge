Feature: Product Page

  Scenario: User views a product page
    Given I visit a product page with ID "1"
    Then I should see the product title "Product 1"
    And I should see the product description
    And I should see the "Add to Cart" button

  Scenario: "Add to Cart" button redirects user to cart
    Given I visit a product page with ID "2"
    When I click the "Add to Cart" button
    Then I should be redirected to the cart page

  Scenario: Product page should have a valid URL structure
    Given I visit a product page with ID "3"
    Then The URL should match "/product/3"

  Scenario Outline: Product page should load with any random product ID
    Given I visit a product page with ID "<random_id>"
    Then I should still see a product page

  Examples:
    | random_id |
    | 999       |
    | 150       |
    | 42        |
    | 875       |

  Scenario: Product details should persist after reload
    Given I visit a product page with ID "4"
    When I refresh the page
    Then I should still see the product title "Product 4"