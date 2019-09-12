@PendingProcessCheck
  #Test requires API created ticket with status as pending and on hold time as a short time in the future
Feature: user validates status change after pending time passes
    Scenario: user validates status change after pending time passes

      Given user is on the OneWorkflow login page
      When user logs in with valid username "ChangeInitiatorInternal1" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user selects search menu as "Open Search Form:Change Record/Project/Freeze"
      And user enters ticket id as ""
      Then user should see change record ticket
      And user validates ticket status as "Pending"
      When user waits for to date to pass
      Then user clicks on ticket refresh button
      Then user validates ticket status as "Assigned"
