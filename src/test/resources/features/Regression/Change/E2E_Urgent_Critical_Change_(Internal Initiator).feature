@E2E_Urgent_Critical_Change_(Internal_Initiator)

Feature: Internal Urgent Critical Change E2E
  Scenario: Internal user processes a normal change ticket

    Given user is on the OneWorkflow login page
    When user logs in with valid username "ChangeInitiatorInternal1" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create change record
    Then user switches to window 1
    When user clicks save button
