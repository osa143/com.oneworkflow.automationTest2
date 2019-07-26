@00.10_Validate_Urgency_field_availability_in_Incident_record @Incident
#passed
Feature: validation of impact field availability and structure

  Scenario: user validates impact field availability and structure

    Given user is on the OneWorkflow login page
    When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create trouble event
    And user switches to window 1
    Then trouble record form should appear in new tab
    When user validates importance field
    Then multiple statuses "Critical:High:Average:Low:(Clear)" should be available in Importance dropdown
