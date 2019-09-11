@Create_Closed_WorkOrder
  #passed
Feature: try to create Work Order as closed
  Scenario: try to create Work Order as closed

    Given user is on the OneWorkflow login page
    When user logs in with valid username "Change_Automation_1" and password as "Telia@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create work order
    And user switches to window 1
    When user tries to change the status to "Closed"
    Then user shouldn't be able to change the status
    Then user validates ticket status as "New"
