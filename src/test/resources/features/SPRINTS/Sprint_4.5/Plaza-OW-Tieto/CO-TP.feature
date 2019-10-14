@PLAZA-OW-Tieto
  Feature: E2E Flow for Plaza-OW-Tieto
    Scenario: E2E Flow for Plaza-OW-Tieto

      #Need to add in Plaza Incident create part once had meeting with Naveen

      Given user is on the OneWorkflow login page
      When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user selects search menu as "Open Search Form:Trouble Event"
      And user switches to window 1
      Then user should see blank trouble search form
      When user enters ticket id as ""
      Then user should see plaza incident ticket
      And user validates plaza incident information is correct
      And user validates plaza incident is sent to Tieto

