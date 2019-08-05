@181
  #OP next due date Column doesn't have any data. that is why its failing.
  #Replace ticket
Feature: Verification of OP target due date visibility

  Scenario: Verify OP Target Due date availability

    Given user is on the OneWorkflow login page
    When user logs in with valid username "Change_Automation_1" and password as "Telia@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user enters ticket id as "OP-000000899011" in the agent console search box and searches for ticket
    And user clicks on add column under preferences and selects OP next due date
    Then OP next due date column within agent console should be displayed
    And OP next due date information should be displayed
    When user clicks on remove column under preferences and selects OP next due date
    Then OP next due date column within agent console should not be displayed
    And user shouldn't see OP next due date information
    When user clicks on add column under preferences and selects OP next due date
    Then OP next due date column within agent console should be displayed
    When user clicks on All roles drop down and selects my assignee profile
    Then user should see tickets related to assignee profile of user
    And OP next due date information should be displayed
    Then user clicks on My Assignee profile dropdown and selects Creator(user level)
    And user clicks on All tickets dropdown and selects WO and OP
    Then OP next due date column within agent console should be displayed
    And OP next due date information should be displayed
    When user clicks on Creator(user level) dropdown and selects My Owner Profile
    Then OP next due date column within agent console should be displayed
    And OP next due date information should be displayed
    When user clicks on add column under preferences and selects OP Target date
    Then user should see OP target date column in the agent console
    And user should see OP target date information
    And user clicks on Remove Column under preferences and selects OP Target date
    Then user shouldn't see OP target date column in the agent console
    Then OP target date information should not visible





