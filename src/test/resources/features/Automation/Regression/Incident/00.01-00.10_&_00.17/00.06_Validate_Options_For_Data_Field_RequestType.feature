@00.06 @Incident @00
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
    When user clicks on sweden checkbox under affected BU's
    Then user enters "Test case 00.06 validate options for Request type" in Title field
    And user selects request type as "Customer" on trouble event page
    And user enters description as "Test case 00.06 validate options for Request type drop down"
    And user clicks on save button
    Then ticket should be created and status should be assigned

