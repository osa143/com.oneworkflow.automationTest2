@E2E_Standard_Change_(Internal_Initiator)

  Feature: E2E standard change internal initiator
    Scenario: E2E standard change internal initiator

      Given user is on the OneWorkflow login page
      When user logs in with valid username "ChangeInitiatorInternal1" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create change record
      Then user switches to window 1
      When user clicks save button
      Then error message should display as "Please fill up all the mandatory fields in the Details Panel to create a Change Request. (ARERR 10000)" on change record page
      When user selects request type as "Normal Change"
      And user validates template is mandatory
      And user selects template as ""

