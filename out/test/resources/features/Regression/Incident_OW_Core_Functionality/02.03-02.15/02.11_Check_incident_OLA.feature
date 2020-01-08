@02.11
@Incident
@02
  #passed
  #need to get a ticket for this test
  Feature: Check incident OLA feature
    Scenario: Check incident OLA feature

      Given user is on the OneWorkflow login page
      When user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user selects search menu as "Open Search Form:Trouble Event"
      And user switches to window 1
      And user enters ticket id as "OP-000000539006"
      Then user validates OLA value is set
