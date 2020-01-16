@Withdrawn_Field_Validation
  
  Feature: Withdrawn field validation
    Scenario: Withdrawn field validation

      Given user is on the OneWorkflow login page
      When user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create trouble event
      And user switches to window 1
      Then trouble record form should appear in new tab
      And user clicks on closure under sections
      #Then user validates withdrawn reason availbility
      Then multiple statuses "Customer Withdrawn:Duplicate Entries:False Alarm:Test Ticket:Training" should be available in "Withdrawn Reason" dropdown