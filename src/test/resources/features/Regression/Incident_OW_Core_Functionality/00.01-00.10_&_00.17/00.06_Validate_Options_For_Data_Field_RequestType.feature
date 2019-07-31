@Validate_Behaviour_And_Options_For_Data_Field_RequestType @Incident
#Passed
Feature: Incident

  Scenario: user validates behaviour and options for data field request type


    Given user is on the OneWorkflow login page
    When user logs in with valid username "Change_Automation_1" and password as "Telia@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create trouble event
    And user switches to window 1
    Then trouble record form should appear in new tab
    And user verifies request type field is visible
    Then multiple statuses "Customer Reclamation:Event:Stakeholder:Third Party:(clear)" should be available in "Request Type" dropdown
