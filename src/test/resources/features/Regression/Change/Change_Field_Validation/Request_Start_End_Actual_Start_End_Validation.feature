@API_Change_E2E
Feature: E2E Validation of API created change ticket
  Scenario: user validates all information on API ticket and processes ticket E2E

    Given user is on the OneWorkflow login page
    When user logs in with valid username "ChangeManager1_Automation" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user selects search menu as "Open Search Form:Change Record/Project/Freeze"
    And user enters ticket id as ""
    Then user should see change record ticket
    And user enters request start time 24 hours ahead of current date
    And user enters request end time 48 hours ahead of current date
    And user enters impact duration as "60" minutes
    And user clicks save button
