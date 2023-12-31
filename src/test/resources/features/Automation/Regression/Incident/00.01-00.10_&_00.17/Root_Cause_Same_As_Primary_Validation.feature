@Root_Cause_Same_As_Primary_Validation

  Feature: Root cause field validation
    Scenario: Root cause field validation

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
      And user validates ticket status as "Work In Progress"
      Then user selects status as "Cleared"
      And user clicks on root cause under sections
      #Then user validates root cause availbility
      Then multiple statuses "Yes:No:(clear)" should be available in "Root Cause same as Primary Cause" dropdown