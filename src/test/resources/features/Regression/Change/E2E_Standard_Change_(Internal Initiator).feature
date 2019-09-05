@E2E_Standard_Change_(Internal_Initiator) @Change

  Feature: E2E standard change internal initiator
    Scenario: E2E standard change internal initiator

      Given user is on the OneWorkflow login page
      When user logs in with valid username "ChangeInitiatorInternal1" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create change record
      Then user switches to window 1
      When user clicks save button
      Then error message should display as "Please fill up all the mandatory fields in the Details Panel to create a Change Request. (ARERR 10000)" on change record page
      When user selects request type as "Standard Change"
      And user validates template is mandatory
      And user selects template as "All:IT:Other:TEST TEMPLATE [UAT] - Standard Change"
      Then user validates "Title" is readonly
      And user validates "Request Category" is readonly
      And user validates Description* isn't readonly
      And user validates "Reason" is readonly
      And user validates "Priority" is readonly
      And user validates "Implementation" is readonly
      And user validates "Test Plan" is readonly
      And user validates "Rollback" is readonly
      When user clicks save button




