@04.04_Create_change_from_incident_using_Create_button_in_Linked_Items_tab @Incident
  Feature: Create change from incident
    Scenario: user can create a change from an incident ticket

      Given user is on the OneWorkflow login page
      When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create trouble event
      And user switches to window 1
      Then trouble record form should appear in new tab
      When user clicks on sweden checkbox under affected BU's
      And user enters "Test case 04.04 create change from incident" in Title field in Trouble event
      And user selects request type as "Customer" on trouble event page
      And user enters description as "Test case 04.04 create change from incident"
      And user clicks on save button
      Then ticket should be created and status should be assigned
      When user clicks on Ack button
      And user clicks on assignment under sections
      Then user selects assignment profile dropdown as "Core:Mobile:Mobile PS:Mob PS Core EAST"
      And user clicks on save button
      Then user should see assigned profile as "Mob PS Core EAST"
      When user clicks on linked items tab
      And user selects target application first dropdown as "OS3 - Change"
      And user selects target application second dropdown as "Caused by"
      Then user clicks on create button under linked items
      And user switches to window 2
      When user selects change type as "Change Record"
      And user selects request type as "Normal Change"
      And user selects title as "IT:Other" on Change record page
      And user selects request category as "Cable splicing" on change record page
      And user enters reason field as "Test Ticket"
      And user selects priority as "Info"
      And user enters "Change_Automation_1" in the change builder field
      And user enters "Test Ticket" in the implementation field
      And user enters "Test Ticket" in the test plan field
      And user enters "Test Ticket" in the rollback field
      And user enters "Test Ticket" in the communication plan field
      And user enters "Test Ticket" in the ver of functionality field
      And user enters "Test Ticket" in the risk description field
      And user enters as "Test Ticket" in service and customer impact
      And user selects estimated impact as "Degradation of Service"
      Then user enters start time as some minutes fast from current sweden time
      And user enters Request End time as some minutes fast from request start time
      And user enters impact duration as "4" minutes
      Then user clicks on save button
      When user switches to window 1
      And user clicks on linked items tab
      Then user validates 1 linked ticket availability
      #Ticket number will change every test
      Then change should also be reflected in the timeline as "Correlation to ticket Relationship Type: Caused"


