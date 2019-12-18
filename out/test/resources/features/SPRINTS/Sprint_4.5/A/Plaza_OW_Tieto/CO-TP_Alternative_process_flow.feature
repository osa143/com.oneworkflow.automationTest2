@PLAZA-OW-Tieto_AlternativeProcessFlow
  Feature: alternative process flows for the integration between a Customer Operations system
    One Workflow and a Third Party system. These flows are not part of the normal flow.



    Scenario: create Plaza request
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



 Scenario:Withdraw ticket from plaza to OW, OW to Tieto
      When user withdraw ticket in plaza
      And change should also be reflected in the OW timeline
      Then status of the ticket should be withdrawn in OW
      And status of the ticket should be withdrawn in Plaza



    Scenario:Reject assignment to OW, and Plaza from Tieto
      When user sends reject assignment in teito
      And OW should receive reject assignment request from Tieto
      Then plaza should receive reject assignment message from tieto
      And change should also be reflected in the timeline



    Scenario:Work order inbound assigned to OW, and Tieto
      When user send assign ticket to OW and Tieto
      And user validates ticket status as "Assigned" in OW
      And change should also be reflected in the timeline
      And status of the ticket should be "Assigned" in Tieto


    Scenario:Pending request to OW, and Plaza from Tieto
      When user sends pending request to OW and Plaza from Tieto
      And user validates ticket status as "Pending" in OW
      And change should also be reflected in the timeline
      And status of the ticket should be "Pending" in Plaza

    Scenario: exit Pending (Work in progress) request to OW, and Plaza from Tieto
      When user sends exit pending request to OW and Plaza from Tieto
      And user validates ticket status as "Work in progress" in OW
      And change should also be reflected in the timeline
      And status of the ticket should be "Work in progress" in Plaza