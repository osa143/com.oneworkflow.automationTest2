@Filter_Agent_Console_on_Creator @Incident
Feature: Filtering of Agent console
  Scenario: user can filter agent console on creator

    Given user is on the OneWorkflow login page
    When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on all roles drop down and selects "Creator (user level)"
    Then user should only see tickets assigned to current user profile
