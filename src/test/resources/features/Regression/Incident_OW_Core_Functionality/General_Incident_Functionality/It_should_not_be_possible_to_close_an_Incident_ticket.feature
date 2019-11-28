@It_should_not_be_possible_to_close_an_Incident_ticket_with_an_open_and_acknowledged_work_order @Incident @Trouble1
  #passed
   Feature: it shouldn't be possible to close an incident ticket
     Scenario: it shouldn't be possible to close an incident ticket

       Given user is on the OneWorkflow login page
       When user logs in with valid user and password
       Then user successfully logged in to OneWorkflow and agent console should be displayed
       When user clicks on create trouble event
       And user switches to window 1
       Then trouble record form should appear in new tab
       When user clicks on sweden checkbox under affected BU's
       And user enters "Test case Try to close an incident with an open and ack'd work order" in Title field in Trouble event
       And user selects request type as "Customer" on trouble event page
       And user enters description as "Test case Try to close an incident with an open and ack'd work order"
       And user clicks on save button
       Then ticket should be created and status should be assigned
       When user clicks on "Work Orders" tab
       And user clicks on create from ticket
       Then user switches to window 2
       Then user clicks on save button
       And user selects assigned profile dropdown as "Core:Mobile:Mobile PS:Mob PS Core WEST"
       And user selects assignee as "Change_Automation_1" by using alphabet "C" key up 0 times
       Then user clicks on save button
       And user validates ticket status as "Assigned"
       When user switches to window 1
       And user changes status to "Cleared" on trouble event page
       And user selects fault position as "N/A:N/A" on trouble event page
       And user selects cause as "N/A:N/A:N/A" on trouble event page
       And user selects action dropdown as "N/A:N/A" on trouble event page
       And user enters closure info as "Test Ticket"
       Then user enters event end time as current time
       And user waits 5 secs
       And user clicks on save button
       When user changes status to "Closed" on trouble event page
       And user clicks on save button
       Then an error message should appear: "Trouble Ticket OP- could not be saved. Please complete all outstanding Work Orders. (ARERR 033054) (ARERR 10000)"
