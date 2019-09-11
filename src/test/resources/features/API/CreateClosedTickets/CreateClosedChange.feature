@Create_Closed_Change
  Feature: try to create change as closed
    Scenario: try to create change as closed

      Given user is on the OneWorkflow login page
      When user logs in with valid username "ChangeInitiatorInternal1" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create change record
      Then user switches to window 1
      Then user validates "Status" is readonly
      When user tries to change the status to "Closed"
      Then user shouldn't be able to change the status
      Then user validates ticket status as "New"
