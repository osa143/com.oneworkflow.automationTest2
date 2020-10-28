@BR_2915_Last_Modified_date_should_be_available_in_Console_View_for_OP_tickets
#Automation - BR-2915 - Last Modified date should be available in Console View for OP tickets[s]

Feature: BR-2915 - Last Modified date should be available in Console View for OP tickets[s]

  Scenario: BR-2915 - Last Modified date should be available in Console View for OP tickets[s]

    Given user is on the OneWorkflow login page
    When user logs in with valid user and password
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on add column from preferences and selects OP last update date
    Then user validates last update date column is present in agent console
    And laste update date field is filled in for any op ticket
    