Feature: Profile Page

  Scenario Outline: User sees their profile information correctly
    Given I visit the profile page
    Then I should see the profile header
    And I should see the user name "<name>"
    And I should see the user email "<email>"

  Examples:
    | name     | email                 |
    | John Doe | john.doe@example.com  |

  Scenario: Profile information should not be empty
    Given I visit the profile page
    Then The user name should not be empty
    And The user email should not be empty

  Scenario: Profile page should have correct title
    Given I visit the profile page
    Then The browser title should be "Cypress Challenge"
