@Equal_Like_On_Title  @AutoAssignment


Feature: Assignment rules can be configured with EQUAL and LIKE conditions on the title field
  In order to more efficiently respond to changing business needs
  As a support and maintenance person
  I want to be able to configure assignment rules to route incidents to the correct support groups


   Background:
     Given user is on the OneWorkflow login page
     When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
     Then user successfully logged in to OneWorkflow and agent console should be displayed
     And user selects administration menu as "All Requests:Auto Assignment Rules"
     Given user is on the assignment rules configuration form

#
#  Scenario: New assignment rules can be configured using EQUAL and LIKE conditions
#    When user clicks the new button on assignment rule window
#    Then the new assignment rule configuration form is displayed
#    And multiple options "=:LIKE" should be available in Title dropdown


  Scenario: Existing assignment rules can be configured using EQUAL and LIKE conditions
    When user selects a record on assignment rules window
    And user clicks on open button
    Then the modify assignment rule configuration form is displayed
    And multiple options "=:LIKE" should be available in Title dropdown








