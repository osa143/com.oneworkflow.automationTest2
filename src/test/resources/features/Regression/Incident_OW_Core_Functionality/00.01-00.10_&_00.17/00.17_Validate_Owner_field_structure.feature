@00.17_Validate_Owner_field_structure #@Incident

Feature: validation of impact field availability and structure

  Scenario: user validates impact field availability and structure


    Given user is on the OneWorkflow login page
    When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create trouble event
    And user switches to window 1
    Then trouble record form should appear in new tab
    When user clicks on owner under sections
    And user validates owner profile field availability
    #There are many values for the dropdown to validate
    Then multiple statuses "" should be available in "" dropdown
