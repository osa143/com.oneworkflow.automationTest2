@It_should_not_be_possible_to_close_an_Incident_ticket_with_an_open_and_acknowledged_work_order @Incident
   Feature: shouldn't be possible to close an incident with open WO
     Scenario: user validates you cant close an incident with open WO

       Given user is on the OneWorkflow login page
       When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
       Then user successfully logged in to OneWorkflow and agent console should be displayed
       When user clicks on create trouble event
       And user switches to window 1
       Then trouble record form should appear in new tab
       When user clicks on sweden checkbox under affected BU's
       And user enters "Test case Try to close an incident with an open and ack'd work order" in Title field in Trouble event
       And user selects request type as "Customer"
       And user enters description as "Test case Try to close an incident with an open and ack'd work order"
       And user clicks on save button on the problem form
       Then ticket should be created and status should be assigned
       When user clicks on work order tab
       And user clicks on create from ticket
       Then user switches to window 2
       Then user clicks on save button on the problem form
       And ticket should be created and status should be assigned
       When user switches to window 1
       And user changes status to "Cleared"
       And user selects fault position as "N/A:N/A"
       And user selects cause as "N/A:N/A:N/A"
       And user selects action dropdown as "N/A:N/A"
       And user enters closure info as "Test Ticket"
       Then user enters event end time as current time
       And user clicks on save button on the problem form
       When user changes status to "Closed"
       And user clicks on save button on the problem form
       Then error message should display as "Trouble Ticket OP- could not be saved. Please complete all outstanding Work Orders. (ARERR 033054) (ARERR 10000)"
