@Agent_Console_Items @OW_Change

Feature: Agent Console Items
  Scenario: Agent Console Items

    Given user is on the OneWorkflow login page
    When user logs in with valid username "ow_basic2_auto" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    And user clicks on "Console" menu
    And user should't see "Approval Request Console" under console menu
    When user sets the preferences under the agent console as "Add Column:Change Builder"
    Then "Change Builder" column within agent console should be displayed
    And "Impact" column within agent console should be displayed
    And "Primary CI" column within agent console should be displayed
    And user sets the preferences under the agent console as "Save"