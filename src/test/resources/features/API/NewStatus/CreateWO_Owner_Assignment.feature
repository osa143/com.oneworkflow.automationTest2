@NewStatusChange_Owner/Assignment
    #need ticket from API
Feature: Validate Status as new and verify owner/assignment
  Scenario: Validate Status as new and verify owner/assignment

    Given user is on the OneWorkflow login page
    When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user selects search menu as "Open Search Form:Work Order"
    And user enters ticket id as ""
    Then user should see trouble ticket
    And user validates ticket status as "New"
    When user clicks on assignment under sections
    And user clicks on owner under sections
    Then user validates owner profile as ""
    And user validates owner as ""
    And user validates assigned profile as ""
    And user validates assignee is ""


