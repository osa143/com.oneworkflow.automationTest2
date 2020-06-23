
   Feature: SAO-5653, SAO-5855
    @5653_5855_1
    Scenario:validate Closure codes are not overwritten from CO-systems
              when we send values in closure codes such as Action,Closure info
              and verify timeline update in OW

     Given user is on the Plaza login page
     When user enters username "testauto" and password as "test123" and clicks on login
     Then user should see the plaza home page
     And user clicks on plaza portal
     When user clicks on support link
     And user clicks on "SUBMIT A TICKET"
     And user switches to window 1
     And user selects "Applications" under Service area dropdown
     And user selects "AlarmMap" under plaza category dropdown
     And user selects "Application Error" under plaza type of issue
     And user enters "Test OW OP Ticket" in the plaza subject field
     And user enters "Test OW OP Ticket" in the plaza describe field
     Then user clicks on submit button on plaza form
     And user gets plaza request id
     And user clicks on plaza request id
     And user gets plaza OP ticket
     And user clicks on main page refresh
     And user waits 30 secs
#     When user clicks on shown ICM number
#     And user validates INC is present under internal case subtasks
#     When user clicks on INC under internal case subtasks
#     Then user should see INC form
     And user opens new tab
     And user switches to window 2
     Given user is on the OneWorkflow login page
     When user logs in with valid user and password
     Then user successfully logged in to OneWorkflow and agent console should be displayed
     When user selects search menu as "Open Search Form:Trouble Event"
     And user switches to window 3
     Then user should see blank trouble search form
     When user enters plaza incident ticket
     Then user should see plaza incident ticket
     And user validates source field as "PLAZA"
     And user validates title field as "Test OW OP Ticket"
     And user validates request type as "Customer"
     #And user validates OP ticket description same as plaza
     And user validates ticket status as "Assigned"
     Then user clicks on assignment under sections
     And user enters "OSS Tech Mahindra" in assignee
     And user clicks on save button
     And user validates reassigned reason as "Assigned for Plaza Escalation to 2nd Level"
     And user clicks on owner under sections
     And user clicks on CTI details under sections
     Then user validates Category as "OSS"
     And user validates type as "Presentation"
     And user validates item as "AlarmMap"
     And user validates technology as "Incident"
     And user validates owner profile as "PLAZA"
     And user validates owner as "PLAZA"
     And user should see assigned profile as "OSS Tech Mahindra"
     When user clicks on Ack button
     Then user validates ticket status as "Work In Progress"
     When user changes status to "Cleared" on trouble event page
     And user selects fault position as "N/A:N/A" on trouble event page
     And user selects cause as "N/A:N/A:N/A" on trouble event page
     And user selects action dropdown as "N/A:N/A" on trouble event page
     And user enters closure info as "Test Ticket"
     And user enters event end time as current time
     And user clicks on save button
     Then user validates ticket status as "Cleared"
     And user switches to window 1
     And user clicks on main page refresh
     Then user enters plaza assignment group as "IT Application Support"
     And user enters plaza assignee as "Agata Stefanovič"
     And user clicks on plaza "Closure Information" tab
     And user validates resolution notes as "N/A | N/A | N/A"
     Then user clicks on plaza close incident button
     And user switches to window 3
     When user clicks on ticket refresh button
     Then user validates ticket status as "Closed"
     And user validates action field as "N/A | N/A"
     And user validates closure info as "Test Ticket"
     And user waits 10 secs
     And change should also be reflected in the timeline as "STATUS MODIFIED.  The trouble Status has changed: Cleared >> Closed." on row 4
     And change should also be reflected in the timeline as "OW Closure Information : Fault Position: N/A | N/A Cause: N/A | N/A | N/A Action: N/A | N/A Closure Info: Test Ticket Equipment: " on row 3

    @5653_5855_2
    Scenario: validate Closure codes are overwritten from CO-systems
              when we don't send any values in closure codes such as Action,Closure info
              and verify timeline update in OW

     Given user is on the Plaza login page
     When user enters username "testauto" and password as "test123" and clicks on login
     Then user should see the plaza home page
     And user clicks on plaza portal
     When user clicks on support link
     And user clicks on "SUBMIT A TICKET"
     And user switches to window 1
     And user selects "Applications" under Service area dropdown
     And user selects "AlarmMap" under plaza category dropdown
     And user selects "Application Error" under plaza type of issue
     And user enters "Test OW OP Ticket" in the plaza subject field
     And user enters "Test OW OP Ticket" in the plaza describe field
     Then user clicks on submit button on plaza form
     And user gets plaza request id
     And user clicks on plaza request id
     And user gets plaza OP ticket
     And user clicks on main page refresh
     And user waits 30 secs
#     When user clicks on shown ICM number
#     And user validates INC is present under internal case subtasks
#     When user clicks on INC under internal case subtasks
#     Then user should see INC form
     And user opens new tab
     And user switches to window 2
     Given user is on the OneWorkflow login page
     When user logs in with valid user and password
     Then user successfully logged in to OneWorkflow and agent console should be displayed
     When user selects search menu as "Open Search Form:Trouble Event"
     And user switches to window 3
     Then user should see blank trouble search form
     When user enters plaza incident ticket
     Then user should see plaza incident ticket
     And user validates source field as "PLAZA"
     And user validates title field as "Test OW OP Ticket"
     And user validates request type as "Customer"
     #And user validates OP ticket description same as plaza
     And user validates ticket status as "Assigned"
     Then user clicks on assignment under sections
     And user enters "OSS Tech Mahindra" in assignee
     And user clicks on save button
     And user validates reassigned reason as "Assigned for Plaza Escalation to 2nd Level"
     And user clicks on owner under sections
     And user clicks on CTI details under sections
     Then user validates Category as "OSS"
     And user validates type as "Presentation"
     And user validates item as "AlarmMap"
     And user validates technology as "Incident"
     And user validates owner profile as "PLAZA"
     And user validates owner as "PLAZA"
     And user should see assigned profile as "OSS Tech Mahindra"
     When user clicks on Ack button
     Then user validates ticket status as "Work In Progress"
     When user changes status to "Cleared" on trouble event page
     And user selects fault position as "N/A:N/A" on trouble event page
     And user selects cause as "N/A:N/A:N/A" on trouble event page
     And user enters event end time as current time
     And user clicks on save button
     Then user validates ticket status as "Cleared"
     And user switches to window 1
     And user clicks on main page refresh
     Then user enters plaza assignment group as "IT Application Support"
     And user enters plaza assignee as "Agata Stefanovič"
     And user clicks on plaza "Closure Information" tab
     And user validates resolution notes as "N/A | N/A | N/A"
     Then user clicks on plaza close incident button
     And user switches to window 3
     When user clicks on ticket refresh button
     Then user validates ticket status as "Closed"
     And user validates action field as "Customer"
     And user validates closure info as "Closed from Plaza"
     And user waits 10 secs
     And change should also be reflected in the timeline as "STATUS MODIFIED.  The trouble Status has changed: Cleared >> Closed." on row 4
     And change should also be reflected in the timeline as "OW Closure Information : Fault Position: N/A | N/A Cause: N/A | N/A | N/A Action: Customer Closure Info: Closed from Plaza Equipment: " on row 3