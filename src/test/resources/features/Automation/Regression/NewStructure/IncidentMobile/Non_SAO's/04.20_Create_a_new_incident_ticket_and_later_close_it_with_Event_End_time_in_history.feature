@04.20 @Incident1 @04 @Incident_NonSAO
  #SAO-4039
  Feature: create a new incident ticket and later close it with event end time in history
    Scenario: create a new incident ticket and later close it with event end time in history

      Given user is on the OneWorkflow login page
      When user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create trouble event
      And user switches to window 1
      Then trouble record form should appear in new tab
      When user clicks on sweden checkbox under affected BU's
      And user enters "Test case 04.20 Close incident with event end time in history" in Title field in Trouble event
      And user selects request type as "Customer" on trouble event page
      And user enters description as "Test case 04.20 Close incident with event end time in history"
      And user clicks on save button
      Then ticket should be created and status should be assigned
      When user changes status to "Cleared" on trouble event page
      And user selects fault position as "N/A:N/A" on trouble event page
      And user selects cause as "N/A:N/A:N/A" on trouble event page
      And user selects action dropdown as "N/A:N/A" on trouble event page
      And user enters closure info as "Test Ticket"
      And user enters event start time as -65 mins past
      And user enters event end time as -60 mins past
      Then user clicks on save button
      And user validates ticket status as "Cleared"
      When user changes status to "Closed" on trouble event page
      And user clicks on save button
      Then user validates ticket status as "Closed"
      Then user validates event end time is same as cleared status event end time Attribute


