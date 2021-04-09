@PLAZA_Create_Incident @PLAZA_Incident_Flow
  #Ticket ID to come from Plaza
Feature: Plaza creation of incident ticket
  Scenario: user validates plaza incident ticket

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
    And user waits 15 secs
    And user enters "Test Update" in the ticket timeline
    And user clicks on plaza send button
#      When user clicks on shown ICM number
#      Then user should see ICM form
#      And user validates INC is present under internal case subtasks
#      When user clicks on INC under internal case subtasks
#      Then user should see INC form
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
          #And user validates ow incident description same as plaza
    And user validates ticket status as "Assigned"
    And user validates reassigned reason as "Assigned for Plaza Escalation to 2nd Level"
    Then change should also be reflected in the timeline as "Test Update" on row 1
    Then user clicks on assignment under sections
    And user clicks on owner under sections
    And user clicks on CTI details under sections
    Then user validates Category as "OSS"
    And user validates type as "Presentation"
    And user validates item as "AlarmMap"
    And user validates technology as "Incident"
    And user validates owner profile as "PLAZA"
    And user validates owner as "PLAZA"
    And user should see assigned profile as "OSS Tech Mahindra"
    When user enters "Test Update" in the timeline text box
    And user clicks on public radio button
    And user clicks on add button
    Then change should also be reflected in the timeline as "Test Update"
    When user switches to window 1
    And user clicks on main page refresh
    And user waits 5 secs
    And user should see OW manual notification in plaza ticket as "Test Update"
    Then user switches to window 3
    When user selects assignment profile dropdown as "IT:Application:Application-NO"
    And user enters "dafu01" in assignee
    And user clicks on save button
    Then change should also be reflected in the timeline as "ASSIGNMENT.  Trouble has been reassigned from user  >> dafu01" on row 2
    When user switches to window 1
    And user waits 10 secs
    And user clicks on main page refresh
    And user should see OW manual notification in plaza ticket as "Application-NO"
    Then user switches to window 3
    When user clicks on Ack button
    Then user validates ticket status as "Work In Progress"
    And user waits 15 secs
    When user switches to window 1
    And user clicks on main page refresh
    And user should see OW manual notification in plaza ticket as "State has been changed to Work In Progress in OWF with the Assignment Profile: Application-NO"
    Then user switches to window 3
#      When user changes status to "Pending"
#      And user enters on hold to date 2 minutes in the future
#      And user enters reason field as "Waiting for Customer Info"
#      Then user clicks on save button and closes warning messages
#      And change should also be reflected in the timeline as "STATUS MODIFIED.  The trouble Status has changed: Work In Progress >> Pending." on row 1
#      Then user switches to window 1
#      And user waits 5 secs
#      And user validates plaza first timeline message as "State has been changed to Pending in OneWorkflow"
#      Then user waits for two minutes
#      When user switches to window 3
#      And user clicks on ticket refresh button
#      Then user validates ticket status as "Work In Progress"
#      And change should also be reflected in the timeline as "State has been changed from Pending to Work In Progress in OneWorkflow" on row 3
    When user changes status to "Cleared" on trouble event page
    And user selects fault position as "N/A:N/A" on trouble event page
    And user selects cause as "N/A:N/A:N/A" on trouble event page
    And user selects action dropdown as "N/A:N/A" on trouble event page
    And user enters event end time as current time
    And user clicks on save button and closes warning messages
    Then user validates ticket status as "Cleared"
    And user switches to window 1
    And user waits 20 secs
    And user clicks on main page refresh
    And user should see OW manual notification in plaza ticket as "Resolution has been sent with the Primary Cause as: N/A | N/A | N/A"
#      And user validates plaza second timeline message as "Incident state Resolved was In Progress"
#      When user clicks on shown ICM number
    When user clicks on create ICM number
    Then user should see ICM form
    And user validates INC is present under internal case subtasks
    When user clicks on INC under internal case subtasks
    Then user should see INC form
    Then user enters plaza assignment group as "IT Application Support"
    And user enters plaza assignee as "Agata Stefanovič"
    When user clicks on plaza closure information tab
    Then user validates resolution code as "Solved (Permanently)"
    And user validates resolution notes as "N/A:N/A:N/A"
    Then user clicks on plaza close incident button
    And user waits 4 secs
    And user validates plaza ticket status as "Closed"
    And user validates plaza first timeline message as "The incident has been closed successfully in OneWorkflow"
    And user validates plaza second timeline message as "An incident closure has been forwarded to OWF successfully"
    Then user switches to window 2
    And user clicks on ticket refresh button
    And user validates ticket status as "Closed"
    And change should also be reflected in the timeline as "STATUS MODIFIED.  The trouble Status has changed: Cleared >> Closed." on row 1