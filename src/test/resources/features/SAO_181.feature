
@regression
Feature Verification of OP target due date visibility

  Scenario Verify OP Target Due date availability

    Given User is on the OneWorkflow login page
    When user logins with valid user credentials
    Then user successfully logged in to oneworkflow and agent console should be displayed
    When User clicks on add column under preferences and selects OP next due date
    Then OP Next due date column within agent console should be displayed
    And OP next due date information should be displayed
    When User clicks on remove column under preferences and selects OP next due date
    Then OP next due date column within agent console should not be displayed
    And User shouldn't see OP next due date information
    When User clicks on add column from preferences and selects OP next due date
    Then User should see column OP next due date within agent console
    When User clicks on All roles drop down and selects my assignee profile
    Then User should see tickets related to assignee profile of user
    And User should see OP next due date information
    Then User clicks on My Assignee profile dropdown and selects Creator(user level)
    And User clicks on All tickets dropdown and selects WO and OP
    Then User should see column OP next due date within agent console
    And User should see OP next due date information
    When User clicks on Creator(user level) dropdown and selects My Owner Profile
    Then User should see column OP next due date within agent console
    And User should see OP next due date information
    When User clicks on add column under preferences and selects OP Target date
    Then User should see OP target date in the agent console
    And User should see OP target date information
    And User clicks on Remove Column under preferences and selects OP Target date
    Then User shouldn't see OP target date in the agent console
    Then OP target date information should not visible




