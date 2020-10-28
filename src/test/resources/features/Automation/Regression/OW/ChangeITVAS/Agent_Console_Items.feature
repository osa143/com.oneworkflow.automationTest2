@Agent_Console_Items


Feature: Agent Console Items
  Scenario: Agent Console Items

    Given user is on the OneWorkflow login page
    When user logs in with valid username "ow_basic2_auto" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on console
    Then user validates "Approval Request Console" is not present
    When user clicks on add column from preferences and selects Change Builder
    Then user validates "Change Builder" column is present
    And user validates "Impact" column is present
    And user validates "Primary CI" column is present
    And user clicks save under preferences