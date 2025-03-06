Feature: Checkout Page

  Scenario: User views the checkout page
    Given I visit the "checkout" page
    Then I should see the header "Checkout"
    And I should see the name and email input fields
    And I should see the "Complete Purchase" button

  Scenario: Form should not submit with empty fields
    Given I visit the "checkout" page
    When I submit the form without filling it
    Then I should see a validation message "Please fill out this field." for the "name" field

  Scenario Outline: Email field validation errors
    Given I visit the "checkout" page
    When I enter name "John Doe"
    And I enter email "<invalid_email>"
    And I submit the form
    Then I should see a validation message "<expected_message>" for the "email" field

  Examples:
    | invalid_email  | expected_message                                                                 |
    | invalidemail   | Please include an '@' in the email address. 'invalidemail' is missing an '@'.    |
    | user@          | Please enter a part following '@'. 'user@' is incomplete.                        |
    | user.          | Please include an '@' in the email address. 'user.' is missing an '@'.           |
    | user@.         | '.' is used at a wrong position in '.'.                                          |

  @bug The name field does not validate against numbers or special characters.
  Scenario: Name field should reject invalid names
    Given I visit the "checkout" page
    When I enter name "12345"
    And I enter email "valid.email@example.com"
    And I submit the form
    Then The form should not accept the invalid "name"

  @bug The form allows emails without a dot in the domain.
  Scenario: Email without a dot should not be accepted
    Given I visit the "checkout" page
    When I enter name "John Doe"
    And I enter email "john.doe@example"
    And I submit the form
    Then The form should not accept the invalid "email"

  Scenario: Form should submit successfully with valid inputs
    Given I visit the "checkout" page
    When I enter name "Jane Doe"
    And I enter email "jane.doe@example.com"
    And I submit the form
    Then I should see a confirmation message "Thank you for your purchase!"