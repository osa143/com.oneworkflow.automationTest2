@Request_Category_As_API
  Feature: user tries to save change with request category as API
    Scenario: user tries to save change with request category as API

      Given user is on the OneWorkflow login page
      When user logs in with valid username "ChangeInitiatorInternal1" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create change record
      Then user switches to window 1
      When user selects request type as "Normal Change"
      And user selects title as "IT:Other" on Change record page
      And user selects request category as "API" on change record page
      And user enters reason field as "Test Ticket"
      And user selects priority as "Info"
      And user enters "Change_Automation_1" in the change builder field
      And user enters "Test Ticket" in the implementation field
      And user enters "Test Ticket" in the test plan field
      And user enters "Test Ticket" in the rollback field
      And user enters "Test Ticket" in the communication plan field
      And user enters "Test Ticket" in the ver of functionality field
      And user enters "Test Ticket" in the risk description field
      And user enters as "Test Ticket" in service and customer impact
      And user selects estimated impact as "Degradation of Service"
      Then user enters request start time 3 hours ahead of current date
      And user enters request end time 5 hours ahead of current date
      And user enters impact duration as "50" minutes
      Then user clicks on save button
      And an error message should appear: "Change Requests with the category 'Automation API' cannot be created manually (ARERR 10000)"



