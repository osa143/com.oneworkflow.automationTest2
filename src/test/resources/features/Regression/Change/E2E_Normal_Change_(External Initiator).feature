@E2E_Normal_Change_External_Initiator @Change
Feature: External Normal Change E2E
  Scenario: External user processes a normal change ticket

    Given user is on the OneWorkflow login page
    When user logs in with valid username "ChangeInitiatorInternal1" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create change record
