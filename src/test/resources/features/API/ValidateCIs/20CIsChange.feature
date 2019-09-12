@ChangeCIValidation
  #Test Requires API created change with CI's
  Feature: user validates structure and availability of CI's
    Scenario: user validates structure and availability of CI's

      Given user is on the OneWorkflow login page
      When user logs in with valid username "ChangeInitiatorInternal1" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user selects search menu as "Open Search Form:Change Record/Project/Freeze"
      And user enters ticket id as ""
      Then user should see change record ticket
      When user clicks on Diagnosis tab
      Then user validates CI's are listed
      And user validates primary ci as ""
      And user validates impact type as ""
      And user validates impact from time as ""
      And user validates CI's have impact level of ""
      And user validates impact to time as ""

