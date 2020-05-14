@00.06 @Incident1 @00
#Passed
Feature: Validate options for data field request type

  Scenario: Validate options for data field request type


    Given user is on the OneWorkflow login page
    When user logs in with valid user and password
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create trouble event
    And user switches to window 1
    Then trouble record form should appear in new tab
    And user verifies request type field is visible
    Then multiple statuses "Customer:Customer Reclamation:Event:Internal User:Preventive Maintenance:Stakeholder:Third Party:(clear)" should be available in "Request Type" dropdown
    And User selects "Request Type" as dropdownValue and should see values for "notreadonly"
      | DropdownValue | DropdownValuesToBePresent|
      | Service Request | Service Request:Improvement|
#    And user logsOut and accepts alert
