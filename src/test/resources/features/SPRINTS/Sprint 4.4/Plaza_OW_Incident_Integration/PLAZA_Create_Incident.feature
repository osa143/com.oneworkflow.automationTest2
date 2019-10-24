@PLAZA_Create_Incident @PLAZA_Incident_Flow
  #Ticket ID to come from Plaza
  Feature: Plaza creation of incident ticket
    Scenario: user validates plaza incident ticket

      Given user is on the Plaza login page
      When user enters username "testauto" and password as "test123" and clicks on login
      Then user should see the plaza home page
      And user clicks on plaza portal
      When user enters "Ask" in plaza search box
      And user opens internal case form
      Then user should see internal case form appear
      And user selects "Applications" under Service area dropdown
      And user selects "AlarmMap" under plaza category dropdown
      And user selects "Application Error" under plaza type of issue
      And user enters "Test OW OP Ticket" in the plaza subject field
      And user enters "Test OW OP Ticket" in the plaza describe field
      And user selects No under access to email radio buttons
      Then user clicks on submit button on plaza form
      And user gets plaza request id
      And user clicks on plaza request id
      And user validates internal case management form opens
      Then user validates plaza first timeline message as "This Incident was raised on behalf of testauto  from "
      And user validates plaza second timeline message as "An incident copy creation has been forwarded to OWF successfully"
      And user waits 10 secs
      And user should see incident ticket update in plaza
      And user enters "Test Update" in the ticket timeline
      And user clicks on plaza send button
      #Then user validates plaza ticket has update to timeline
      When user clicks on shown ICM number
      Then user should see ICM form
      And user validates INC is present under internal case subtasks
      When user clicks on INC under internal case subtasks
      Then user should see INC form
      And user opens new tab
      Given user is on the OneWorkflow login page
      When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user selects search menu as "Open Search Form:Trouble Event"
      And user switches to window 2
      Then user should see blank trouble search form
      When user enters plaza incident ticket
      Then user should see plaza incident ticket
      #will need to get the information plaza is sending to validate if its correct
      When user enters "Test Update" in the timeline text box
      And user clicks on add button
      Then change should also be reflected in the timeline as "Test Update"
      #Plaza should also see this timeline update
      When user clicks on Ack button
      Then user validates ticket status as "Work In Progress"
      #Plaza should receive this update as well
      When user changes status to "Cleared" on trouble event page
      And user selects fault position as "N/A:N/A" on trouble event page
      And user selects cause as "N/A:N/A:N/A" on trouble event page
      And user selects action dropdown as "N/A:N/A" on trouble event page
      And user enters closure info as "Test Ticket"
      Then user enters event end time as current time
      When user clicks on Diagnosis tab
      And user right clicks on primary CI and selects "Impact:Clear All"
      And user should see confirmation message for impact clear and clicks ok
      And user clicks on save button
      Then user validates ticket status as "Cleared"
      When user changes status to "Closed" on trouble event page second time
      And user clicks on save button
      Then user validates ticket status as "Closed"




