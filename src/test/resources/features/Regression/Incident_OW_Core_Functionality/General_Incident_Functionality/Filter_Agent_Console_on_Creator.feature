@Filter_Agent_Console_on_Creator @Incident
  #passed
Feature: Filtering of Agent console
  Scenario: user can filter agent console on creator

    Given user is on the OneWorkflow login page
    When user logs in with valid username "Change_Automation_1" and password as "Telia@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user selects all roles dropdown as "Creator (user level)"
    Then user should only see tickets assigned to current "Owner Profile" as "CC Mob&Access-Common:Problem Manager:Mob PS Core WEST"