@E2EStandardAPI
  #Need API created Ticket
  #Start Date and end date must be in future but close to current date/time
Feature: E2E flow for ticket created by API
  Scenario: E2E flow for ticket created by API

    Given user is on the OneWorkflow login page
    When user logs in with valid username "ChangeManager1_Automation" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user selects search menu as "Open Search Form:Change Record/Project/Freeze"
    And user enters ticket id as ""
    Then user should see change record ticket
    When user clicks "Interested Parties" tab
    And user enters email address as "Test123xxx@Test123xxx.com"
    And user clicks on add email button
    Then user should see new email "Test123xxx@Test123xxx.com" added in "Email Address" in row 2
    When user clicks on Send button and closes warning message
    Then user validates ticket status as "Assigned"
    And user clicks on owner under sections
    And user clicks on assignment under sections
    And user validates owner profile as "Change Manager"
    And user validates owner as "Change Manager"
    And user should see assigned profile as "Change Implementation Control"
    Then change should also be reflected in the timeline as "STATUS MODIFIED.  Request Status has changed from Assigned to Scheduled. " on row 1
    And user waits for 1 minutes
    And user clicks on ticket refresh button
    And change should also be reflected in the timeline as "STATUS MODIFIED.  Actual Start has changed from  UTC to 2019-09-05 10:15:00 UTC. Request Status has changed from Scheduled to Implementation." on row 2
    And user validates Description* isn't readonly
    And user validates Project Code isn't readonly
    And user validates Change Builder+* isn't readonly
    And user validates Timeline Text entry isn't readonly
    When user clicks on ticket refresh button
    And user waits 3 secs
    Then user validates send button is disabled
    And user tries to Ack the ticket but its shouldn't allow
    And user validates ack button is disabled
    When user clicks on Diagnosis tab
    Then user validates CI Search is disabled
    And user validates save is enabled
    When user waits for 5 minutes
    And user clicks on ticket refresh button
    Then change should also be reflected in the timeline as "STATUS MODIFIED.  Actual Impact has changed from  to No Impact. Actual End has changed from  UTC to 2019-09-05 10:21:00 UTC. Completed Code has changed from  to Successful. Request Status has changed from Implementation to Completed. " on row 2
    When user waits for 5 minutes
    And user clicks on ticket refresh button
    And user validates ticket status as "Closed"
    And user clicks on timeline tab
    Then change should also be reflected in the timeline as "STATUS MODIFIED.  Completed Code has changed from Successful to Completed Successfully. Request Status has changed from Completed to Closed. " on row 1
