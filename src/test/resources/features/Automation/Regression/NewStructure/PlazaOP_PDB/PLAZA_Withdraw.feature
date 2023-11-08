@PLAZA_Withdraw2 @PLAZA_Incident_Flow
  #Ticket ID to come from Plaza2
Feature: Plaza creation/withdrawing of incident ticket
  Scenario: user validates plaza incident ticket - Plaza withdraws

    Given user is on the Plaza login page
    When user enters username "testauto" and password as "test123" and clicks on login
    Then user should see the plaza home page
    And user clicks on plaza portal
    When user clicks on support link
    And user clicks on "SUBMIT A TICKET"
    And user switches to window 1
    And user selects "Applications" under Service area dropdown
    And user selects "AlarmMap" under plaza category dropdown
#    And user selects "Application Error" under plaza type of issue
    And user waits 20 secs
    And user enters "Test OW OP Ticket" in the plaza subject field
    And user enters "Test OW OP Ticket" in the plaza describe field
    Then user clicks on submit button on plaza form
    And user gets plaza request id
    And user clicks on plaza request id
    And user waits 3 secs
    And user gets plaza OP ticket
    And user clicks on main page refresh
    And user waits 10 secs
    And user enters "Test Update" in the ticket timeline
    And user clicks on plaza send button
    And user waits 5 secs
#    When user clicks on shown ICM number
#    Then user should see ICM form
#    And user waits 5 secs
#    And user validates INC is present under internal case subtasks
#    When user clicks on INC under internal case subtasks
#    Then user should see INC form
    And user opens new tab
    And user switches to window 2
    Given user is on the OneWorkflow login page
    When user logs in with valid user and password
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user selects search menu as "Open Search Form:Trouble Event"
#    And user clicks agent console search menu
#    And user selects agent console open search form
#    And user selects agent console search trouble event
    And user switches to window 3
    Then user should see blank trouble search form
    When user enters plaza incident ticket
    Then user should see plaza incident ticket
    And user validates title field as "Test OW OP Ticket"
    And user validates request type as "Customer"
#    And user validates ow incident description same as plaza
    And user validates ticket status as "Assigned"
    And user validates source field as "PLAZA"
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
    And user should see assigned profile as "OSS Mon ADM Accenture"
    And user switches to window 1
    And user clicks on "Withdraw from OWF"
    And user validates plaza ticket status as "New"
    And user switches to window 3
    And user waits 20 secs
    And user clicks on ticket refresh button
    And user validates ticket status as "Withdrawn"
    And user verifies status is read only