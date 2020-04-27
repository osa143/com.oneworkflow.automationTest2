@CloudE2E @PlazaWONew
  #Have added ID's for the fields as well, should be correct

Feature: New WO flow Plaza
  Scenario: Cloud - New WO flow Plaza

    Given user is on the Plaza login page
    When user enters username "testauto" and password as "test123" and clicks on login
    Then user should see the plaza home page
    When user enters "Ask" in plaza search box
    And user opens internal case form
    Then user should see internal case form appear
    And user clicks on IT Infrastructure dropdown
    And user selects system name in haiti as "Other"
    And user selects "Cloud" under Service area category dropdown
    And user selects service as "Skypoint - private cloud"
    And user enters "Test Request" in the plaza request field
    And user enters "cc100cgas001" in the plaza CI field
    And user enters "Test Description" in the plaza description field
    Then user clicks on add attachment in plaza
    Then user clicks on submit button on plaza form
    And user clicks on shown ICM number
    Then user waits 30 secs
    And user gets work order ticket number from Plaza
    When user enters "Test Update" in the ticket timeline
    And user clicks on plaza send button
    Then user validates plaza ticket has update to timeline
    And user opens new tab
    Given user is on the OneWorkflow login page
    When user logs in with valid user and password
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user selects search menu as "Open Search Form:Work Order"
    And user switches to window 2
    Then user should see blank work order form
    When user enters work order ID from Plaza
    And user clicks on the search button
    Then user should see plaza ticket
    And user validates source field as "PLAZA"
    And user validates source ID field contains ICM number
    And user validates service provider as "PLAZA"
    And user validates title field as "Service Request | Nimbus - General Inquiry"
    And user validates request type as "Service Request | PLAZA"
    And user validates WO description same as Plaza
    And user validates ticket priority as "Minor"
    Then user clicks on assignment under sections
    And user clicks on owner under sections
    And user clicks on CTI details under sections
    And user clicks on attachments under sections
    Then user validates 1 attachment visibility under external
    And user validates owner profile as "PLAZA"
    And user validates owner as "PLAZA"
    And user "IT Cloud" is listed as the assigned profile
    When user enters "Test Update" in the timeline text box
    And user clicks on add button
    And change should also be reflected in the timeline as "Test Update" on row 1
    Then user clicks on Diagnosis tab
    And user validates primary ci as "cc100cgas001"
    And user switches to window 0
    And user clicks on main page refresh
    And user validates plaza first timeline message as "Comments from OneWorkflow at 2019-10-25T14:01:20Z@Change_Automation_1: Test Update"
    And user switches to window 2
    When user changes status to "Pending"
    And user enters on hold to date 2 minutes in the future
    And user enters reason field as "Waiting for Customer Info"
    Then user clicks on save button and closes warning messages
    And change should also be reflected in the timeline as "STATUS MODIFIED.  The trouble Status has changed: Work In Progress >> Pending." on row 1
    Then user switches to window 0
    And user validates plaza first timeline message as "State has been changed to Pending in OneWorkflow"
    Then user waits for two minutes
    When user switches to window 2
    And user clicks on ticket refresh button
    And user validates ticket status as "Assigned"
    Then user selects assignment profile dropdown as "Mobile:Mobile PS:MOB PS Core West"
    And user selects assignee as "Change_Automation_1" by using alphabet "C" key up 0 times
    Then user clicks on save button
    And user "MOB PS Core WEST" is listed as the assigned profile
    And user validates assignee is "Change_Automation_1"
    Then user switches to window 0
    And user clicks on main page refresh
    And user validates plaza first timeline message as "OWF Work Order has an Assignee Change with Assignee Profile:Mob PS Core WEST and the Assignee as: Change_Automation_1"
    Then user switches to window 2
    When user clicks on Ack button
    Then user validates ticket status as "Work In Progress"
    And change should also be reflected in the timeline as "STATUS MODIFIED.  Status has changed from Assigned to Work In Progress. " on row 1
    Then user switches to window 0
    And user clicks on main page refresh
    And user validates plaza first timeline message as "OWF Work Order is now - Work In Progress"
    Then user switches to window 2
    Then user validates ticket status as "Work In Progress"
    And change should also be reflected in the timeline as "State has been changed from Pending to Work In Progress in OneWorkflow" on row 3
    When user changes status to "Cleared" on trouble event page
    And user selects completion code as "Success"
    Then user clicks on "Schedule" tab
    And user enters event end time as current time
    Then user clicks on Diagnosis tab
    And user right clicks on primary CI and selects "Impact:Clear All"
    And user closes warning message
    And user clicks on save button and closes warning messages
    Then user validates ticket status as "Cleared"
    And user switches to window 0
    And user clicks on main page refresh
    Then user validates plaza first timeline message as "Order has been completed"
    Then user switches to window 2
    And user waits for 1 minutes
    Then user clicks on ticket refresh button
    And user validates ticket status as "Closed"
    And change should also be reflected in the timeline as "Order has been completed" on row 1

