@BR_2915_Last_Modified


Feature: BR-2915 - Last Modified date should be available in Console View for OP tickets[s]

  Scenario: BR-2915 - Last Modified date should be available in Console View for OP tickets[s]

    Given user is on the OneWorkflow login page
    When user logs in with valid user and password
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user sets the preferences as "Add Column:Last Update Date"
    Then "Last Update Date" column within agent console should be displayed
    When user selects "Trouble Ticket" under all tickets
    Then user should only see "OP" tickets
    And "Last Update Date" field should be available for all OP tickets