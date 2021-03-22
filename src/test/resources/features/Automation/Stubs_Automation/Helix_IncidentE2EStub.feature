@Run_Stub
   Feature: Helix Incident End to End (with Stub)
    Scenario: Helix incident end to end automation with stub message creation

      Given user sends request to create incident
      Then OP ticket should be created
      When user is on the OneWorkflow login page
      And user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user selects search menu as "Open Search Form:Trouble Event"
      And user switches to window 1
      Then user should see blank trouble search form
      And user enters ticket created from Helix stub
      And user waits 1 secs
      Then ticket should be created and status should be assigned
      And user clicks on Ack button
      And user validates title field as "Helix Auto Generated Stub Test"
      And user validates source field as "Helix"
      And user validates request type as "Event"
      And user validates OW description same as Helix
      Then user clicks on "Alarms" tab
      And user should see an alarm is present
      Then Helix sends clear alarm message towards OW
      And user clicks on terminate
      And user should see warning message and clicks on ok button and clicks yes
      When user changes status to "Cleared" on trouble event page
      And user selects fault position as "N/A:N/A" on trouble event page
      And user selects cause as "N/A:N/A:N/A" on trouble event page
      And user selects action dropdown as "N/A:N/A" on trouble event page
      And user enters closure info as "Test Ticket"
      Then user enters event end time as current time
      When user clicks on Diagnosis tab
      And user right clicks on CI "EU_MISSED_99999" and selects "Impact:Clear"
      And user clicks on save button and closes warning messages
      Then user validates ticket status as "Cleared"
      When user changes status to "Closed"
      And user clicks on save button
      Then user validates ticket status as "Closed"
