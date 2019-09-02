@E2E_Standard_Change_(Internal_Initiator)

  Feature: E2E standard change internal initiator
    Scenario: E2E standard change internal initiator

      Given user is on the OneWorkflow login page
      When user logs in with valid username "ChangeInitiator/Builder1" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create change record
      Then user switches to window 1

