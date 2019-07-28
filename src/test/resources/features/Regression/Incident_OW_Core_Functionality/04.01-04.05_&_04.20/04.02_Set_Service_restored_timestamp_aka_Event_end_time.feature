@04.02_Set_Service_restored_timestamp_aka_Event_end_time @Incident
  #passed
  Feature: setting of event end time
    Scenario: user can set the event end time

      Given user is on the OneWorkflow login page
      When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create trouble event
      And user switches to window 1
      Then trouble record form should appear in new tab
      When user clicks on sweden checkbox under affected BU's
      And user enters "Test case 04.02 Set event end time" in Title field in Trouble event
      And user selects request type as "Customer" on trouble event page
      And user enters description as "Test case 04.02 Set event end time"
      And user clicks on save button
      Then ticket should be created and status should be assigned
      When user changes status to "Cleared" on trouble event page
      And user enters event end time as current time
      Then user clicks on save button
      Then multiple error messages should appear with red boarder around fields
      When user selects fault position as "N/A:N/A" on trouble event page
      And user selects cause as "Test Ticket:N/A:N/A" on trouble event page
      Then user clicks on save button
      And user validates ticket status as "Cleared"
