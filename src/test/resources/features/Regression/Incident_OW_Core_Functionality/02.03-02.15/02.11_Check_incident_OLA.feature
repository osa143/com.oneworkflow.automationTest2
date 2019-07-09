@02.11_Check_incident_OLA @Incident
  #need to get a ticket for this test
  Feature: user validates availability of OLA value
    Scenario: user validates availability of OLA value

      Given user is on the OneWorkflow login page
      When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user selects search menu as "Open Search Form:Trouble Event"
      And user enters ticket id as ""
      Then user clicks Search on ticket search
      Then user validates OLA value is set
