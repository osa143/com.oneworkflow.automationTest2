@APICHANGE
  Feature: E2E Validation of API created change ticket
    Scenario: user validates all information on API ticket and processes ticket E2E

      Given user is on the OneWorkflow login page
      When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user selects search menu as "Open Search Form:Trouble Event"
      And user enters ticket id as ""
      Then user should see trouble ticket
      And user validates ticket status as "Assigned"