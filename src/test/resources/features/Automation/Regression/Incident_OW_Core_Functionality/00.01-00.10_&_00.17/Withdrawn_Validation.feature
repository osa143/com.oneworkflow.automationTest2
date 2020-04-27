@Withdrawn_Field_Validation
  
  Feature: Withdrawn field validation
    Scenario: Withdrawn field validation

      Given user is on the OneWorkflow login page
      When user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create trouble event
      And user switches to window 1
      Then trouble record form should appear in new tab
      And user enters title as "Test"
      Then user selects request type as "Event"
      And user enters description as "Test Desc"
      Then user clicks on sweden checkbox under affected BU's
      Then user clicks save button
      And trouble ticket should be created and status should be assigned
      Then user clicks on Ack button
      And user selects status as "Withdrawn"
      Then user selects withdrawn reason as "Test Ticket"
      Then multiple statuses "Customer Withdrawn:Duplicate Entries:False Alarm:Test Ticket:Training" should be available in "Withdrawn Reason" dropdown
      And user enters AM status details as "Test"
      Then user clicks save button
      And user validates ticket status as "Withdrawn"