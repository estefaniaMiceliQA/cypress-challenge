Feature: Product Page

Scenario Outline: User views a product page
    Given I visit a product page with ID "<product_id>"
    Then I should see the header "<product_title>"
    And I should see the product description for "<product_title>"
    And I should see the "Add to Cart" button

  Examples:
    | product_id | product_title |
    | 1          | Product 1     |
    | 2          | Product 2     |
    | 3          | Product 3     |

  Scenario: "Add to Cart" button redirects user to cart
    Given I visit a product page with ID "2"
    When I click the "Add to Cart" button
    Then I should be redirected to the cart page

  Scenario: Product page should have a valid URL structure
    Given I visit a product page with ID "3"
    Then The URL should match "/product/3"

  Scenario Outline: Product page should load with any random product ID
    Given I visit a product page with ID "<random_id>"
    Then I should see the header "Product <random_id>"

  Examples:
    | random_id |
    | 999       |
    | 150       |
    | 42        |
    | 875       |

  Scenario: Product details should persist after reload
    Given I visit a product page with ID "4"
    When I refresh the page
    Then I should see the header "Product 4"