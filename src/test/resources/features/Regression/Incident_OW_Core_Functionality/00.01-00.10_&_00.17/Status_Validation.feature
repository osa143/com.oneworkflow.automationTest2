@StatusFieldValidation

  Feature: Status field validation
    Scenario: Status field validation

      Given user is on the OneWorkflow login page
      When user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create trouble event
      And user switches to window 1
      Then trouble record form should appear in new tab
      And user validates status availibility
      Then multiple statuses "New:Closed:(clear)" should be available in "Status" dropdown