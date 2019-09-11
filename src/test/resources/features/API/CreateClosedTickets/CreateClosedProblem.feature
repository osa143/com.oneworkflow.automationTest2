@Create_Closed_Problem
  #passed
Feature: try to create problem as closed
  Scenario: try to create problem as closed

    Given user is on the OneWorkflow login page
    When user logs in with valid username "Tohall_copy" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create problem record
    And user switches to window 1
    Then problem record form should appear in new tab
    When user tries to change the status to "Closed"
    Then user shouldn't be able to change the status
    Then user validates ticket status as "New"

