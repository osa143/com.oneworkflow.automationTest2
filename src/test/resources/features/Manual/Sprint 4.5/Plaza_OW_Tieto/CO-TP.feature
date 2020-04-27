@PLAZA-OW-Tieto
  Feature: Main process flow for the integration between a Customer Operations system,
    One Workflow and a Third Party system.


    Scenario: Create Plaza request
      Given user is on the Plaza login page
      When user enters username "testauto" and password as "test123" and clicks on login
      Then user should see the plaza home page
      And user creates plaza request
      And user gets plaza request id
      And user send plaza incident to Tieto



    Scenario:validate for inbound from plaza and send to Tieto as outbound
      Given user is on the OneWorkflow login page
      And user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user selects search menu as "Open Search Form:Trouble Event"
      And user switches to window 2
      Then user should see blank trouble search form
      When user enters ticket id as ""
      Then user should see plaza incident ticket
      And user validates plaza incident information is correct
      And user should see assigned profile as "TIETO"



    Scenario:Work in progress in Tieto to OW, and Plaza
      When user ack the ticket in teito
      And change should also be reflected in the timeline
      Then status of the ticket should be work in progress in OW
      And status of the ticket should be work in progress in Plaza



    Scenario:Resolved in Tieto to OW, and Plaza
      When user changes status to cleared in teito
      And user validates ticket status as "Cleared" in OW
      And change should also be reflected in the timeline
      And user validates ticket status as "Cleared" in Plaza



    Scenario:closed in Tieto to OW, and Plaza
      When user closes ticket in tieto
      And user validates ticket status as "Cleared" in OW
      And change should also be reflected in the timeline
      And status of the ticket should be completed in Plaza


