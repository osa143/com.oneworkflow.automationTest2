@UrgentChangeStatusFlow
  #Need API Created Ticket
Feature: user validates status changes
  Scenario: user validates status changes

    Given user is on the OneWorkflow login page
    When user logs in with valid username "ChangeManager1_Automation" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user selects search menu as "Open Search Form:Change Record/Project/Freeze"
    And user enters ticket id as ""
    Then user should see change record ticket
    Then user validates availability of tabs "Timeline:Diagnosis:Risk:Schedule:Interested Parties:Approval:Notifications:Linked Items:Work Orders:Service Level:Related Project:Service Info:Telenor" on change record page
    When user clicks on owner under sections
    And user validates owner profile as "Change Initiator-Internal"
    And user validates owner as "ChangeInitiatorInternal1"
    Then user clicks on Send button
    Then error message should display as "You must provide an answer to all the risk question outlined in the Risk tab before Send (ARERR 10000)" on change record page
    When user clicks on Risk tab
    And user gets current risk score value
    When user answers all risk questions as below
    And user selects urgent answer as "A. No"
    And user selects urgent answer as "B. Impact to other systems/technologies are unclear!"
    And user selects urgent answer as "Tested successfully, this is a pilot"
    And user selects urgent answer as "D. "Only" Consumer customers affected."
    And user selects urgent answer as "A. Yes"
    And user selects urgent answer as "A. Yes"
    And user selects urgent answer as "A. Yes (outcome of the Change can be instantly verified)"
    And user selects urgent answer as "B. No"
    And user selects urgent answer as "A. No"
    And user selects urgent last answer as "A. No"
    Then user validates risk score gets updated
    Then user clicks on Send button
    Then an error message should appear: "Please select at least one country of impact for this change. (ARERR 10000)"
    When user clicks on estonia checkbox under affected BU's
    And user clicks on Send button
    Then error message should display as "You must select at least one CI in the Diagnosis Tab (ARERR 10000)" on change record page
    And user clicks on Diagnosis tab
    And user clicks on CI search button
    Then user switches to frame
    And CI search tab should be opened
    And user clicks on clear button
    And user selects Category as "Access"
    Then user enters "SE_BSC%" in the name+ field
    And user selects "All CI's" under search for dropdown
    Then user clicks on search button on CI search window
    And user selects all CI's that appear
    And user selects impact level as "Loss of Service"
    And user clicks on relate CI
    Then user closes warning message
    And user clicks on close button on CI search window
    And CI should be listed and displayed under the Diagnosis tab
    And user clicks on Diagnosis tab
    And user clicks on CI search button
    Then user switches to frame
    And CI search tab should be opened
    And user clicks on clear button
    And user selects Category as "Access"
    Then user enters "SE_RNC%" in the name+ field
    Then user clicks on search button on CI search window
    And user selects all CI's that appear
    And user selects impact level as "Loss of Service"
    And user clicks on relate CI
    Then user closes warning message
    And user clicks on close button on CI search window
    And CI should be listed and displayed under the Diagnosis tab
    When user clicks on Show CR Matching button
    Then user should see Show CR Matching table appear
    When user clicks on "Interested Parties" tab
    And user enters email address as "Test123xxx@Test123xxx.com"
    And user clicks on add email button
    Then user should see new email "Test123xxx@Test123xxx.com" added in "Email Address" in row 2
    When user clicks on Send button
    Then user validates ticket status as "Assigned"
    And user clicks on owner under sections
    And user clicks on assignment under sections
    And user validates owner profile as "Change Manager"
    And user validates owner as "ChangeManager"
    And user should see assigned profile as "Escalation Manager"
    And user clicks on timeline tab
    Then user validates Description* isn't readonly
    And user validates Project Code isn't readonly
    And user validates Change Builder+* isn't readonly
    And user validates Communication Plan* isn't readonly
    And user validates Ver of Functionality* isn't readonly
    And user validates Risk Description* isn't readonly
    And user validates Timeline Text entry isn't readonly
    Then change should also be reflected in the timeline as "Assignee Profile has changed from  to Escalation Manager. Estonia Country has changed from  to Estonia. Request Status has changed from New to Assigned."
    And user gets ticket value
#      And user waits 40 secs
#      When user clicks on "Notifications" tab
#      And user clicks on "Sent" tab
#      #Then user should see "Assignment-Profile" email update
#      #And user validates "Send" is readonly
    When user logsOut
    And user goes back to login page
    Then user logs in with valid username "EscalationManager1" and password as "Test@1234"
    And user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on more filters button
    And user switches to frame
    And user clicks on "Core" tab
    Then user selects request type as "Urgent Change"
    And user selects status as "Assigned" on user more filters window
    Then user clicks on apply button on user more filters window
    And user should see "CR" tickets with "Status" of "Assigned"
    When user selects search menu as "Open Search Form:Change Record/Project/Freeze"
    And user switches to window 2
    Then user enters ticket previously created
    And user clicks Search on ticket search
    When user clicks on Ack button
    Then user validates ticket status as "Analysis"
    And user validates last ack by field has data present
    Then user enters "EscalationManager1" in assignee
    And user clicks on save button
    When user clicks on Diagnosis tab
    And user clicks on Show CR Matching button
    Then user should see Show CR Matching table appear
    When user enters description as "- Additional Information"
    Then user enters reason field as "New Reason"
    And user clicks on details under sections
    Then user enters "New Communication plan" in the communication plan field
    And user clicks on save button
    When user clicks on risk tab
    And user selects urgent last answer as "B. Yes"
    Then user clicks on "Schedule" tab
    And user enters request start time 168 hours ahead of current date
    And user enters request end time 171 hours ahead of current date
    Then user clicks on save button
    And user clicks on timeline tab
    And change should also be reflected in the timeline as "STATUS MODIFIED.  Assignment User has changed from  to EscalationManager1. Request Status has changed from Assigned to Analysis. " on row 2
    And change should also be reflected in the timeline as "STATUS MODIFIED.  Description has changed from TEST TICKET PLEASE IGNORE - Automated Test for Urgent Major Critical (Internal Initiator) to TEST TICKET PLEASE IGNORE - Automated Test for Urgent Major Critical (Internal Initiator)- Additional Information. Requested Start has changed from 2019-09-09 13:00:00 UTC to 2019-09-16 13:00:00 UTC. Requested End has changed from 2019-09-09 16:00:00 UTC to 2019-09-16 16:00:00 UTC. " on row 1
    When user clicks on "Interested Parties" tab
    And user enters email address as "Test2@Test2.com"
    And user clicks on add email button
    Then user should see new email "Test2@Test2.com" added in "Email Address" in row 3
    When user changes status to "Approval Requested"
    And user clicks on save button
