@E2E_Urgent_Major_Change_(Internal_Initiator) @Change
  Feature: E2E Urgent Major Change Internal Initiator
    Scenario: E2E Urgent Major Change Internal Initiator

      Given user is on the OneWorkflow login page
      When user logs in with valid username "ChangeInitiatorInternal1" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create change record
      Then user switches to window 1
      When user clicks save button
      Then error message should display as "Please fill up all the mandatory fields in the Details Panel to create a Change Request. (ARERR 10000)" on change record page
      When user enters "Regression - Change Management Process" in the implementation field
      And user enters "Regression - Change Management Process" in the test plan field
      And user enters "Regression - Change Management Process" in the rollback field
      And user enters "Regression - Change Management Process" in the communication plan field
      And user enters "Regression - Change Management Process" in the ver of functionality field
      And user enters "Regression - Change Management Process" in the risk description field
      When user clicks save button
      And multiple error messages should appear with red boarder around fields
      When user selects request type as "Urgent Change"
      Then user selects title as "Mobile:RAN NSN" on Change record page
      And user selects request category as "Software Installation" on change record page
      And user enters description as "TEST TICKET PLEASE IGNORE - Automated Test for Urgent Major Change (Internal Initiator)"
      And user enters reason field as "Regression"
      And user selects priority as "Major"
      And user enters "CI I2" in the change builder field
      Then user enters as "Test Data - Ignore Ticket" in service and customer impact
      Then user enters request start time 24 hours ahead of current date
      And user enters request end time 28 hours ahead of current date
      And user enters impact duration as "1" hours "15" minutes
      And user selects estimated impact dropdown as "Loss of Service"
      And user enters as "Regression - Change Management Process" in service and customer impact
      And user clicks on save button
      And user waits
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
      Then user clicks on save button button
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
      And user should see assigned profile as "Change Manager"
      And user clicks on timeline tab
      Then user validates Description* isn't readonly
      And user validates Project Code isn't readonly
      And user validates Change Builder+* isn't readonly
      And user validates Communication Plan* isn't readonly
      And user validates Ver of Functionality* isn't readonly
      And user validates Risk Description* isn't readonly
      And user validates Timeline Text entry isn't readonly
      Then change should also be reflected in the timeline as "Assignee Profile has changed from  to Change Manager. Estonia Country has changed from  to Estonia. Request Status has changed from New to Assigned."
      And user gets ticket value
#      And user waits 40 secs
#      When user clicks on "Notifications" tab
#      And user clicks on "Sent" tab
#      #Then user should see "Assignment-Profile" email update
#      #And user validates "Send" is readonly
      When user logsOut
      And user goes back to login page
      Then user logs in with valid username "ChangeManager1" and password as "Telia@1234"
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
      Then user enters "ChangeManager1" in assignee
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
      Then user clicks on save button
      Then user clicks on "Schedule" tab
      And user enters request start time 168 hours ahead of current date
      And user enters request end time 171 hours ahead of current date
      Then user clicks on save button
      And user clicks on timeline tab
      And change should also be reflected in the timeline as "STATUS MODIFIED.  Assignment User has changed from  to ChangeManager1. Request Status has changed from Assigned to Analysis. " on row 2
      And change should also be reflected in the timeline as "STATUS MODIFIED.  Description has changed from TEST TICKET PLEASE IGNORE - Automated Test for Urgent Major Change (Internal Initiator) to TEST TICKET PLEASE IGNORE - Automated Test for Urgent Major Change (Internal Initiator)- Additional Information. Requested Start has changed from 2019-09-09 13:00:00 UTC to 2019-09-16 13:00:00 UTC. Requested End has changed from 2019-09-09 16:00:00 UTC to 2019-09-16 16:00:00 UTC. " on row 1
      And user clicks on Diagnosis tab
      Then user selects all CI's that appear
      And user right clicks on primary CI and selects Impact:Update
      Then user change the impact from and to time to be the same as in schedule tab
      And user clicks ok on CI window pop up
      Then user clicks on save button
      When user clicks on "Interested Parties" tab
      And user enters email address as "Test2@Test2.com"
      And user clicks on add email button
      Then user should see new email "Test2@Test2.com" added in "Email Address" in row 3
      When user changes status to "Approval Requested"
      And user clicks on save button
      Then user validates ticket status as "Approval Requested"
      And user validates availability of tabs "Approval"
      And change should also be reflected in the timeline as "STATUS MODIFIED.  Requested Start has changed from 2019-09-18 20:30:00 UTC to 2019-09-25 20:30:00 UTC. Requested End has changed from 2019-09-18 23:30:00 UTC to 2019-09-25 23:30:00 UTC. Request Status has changed from Analysis to Approval Requested. " on row 86
      When user clicks on "Approval" tab
      And user clicks on request thats pending approval
      And user clicks on view button
      Then user switches to frame
      And user clicks on approve button
      Then user switches to window 2
      And user clicks on save button
      Then user switches to frame
      And user clicks on yes on warning window
      And user switches to window 2
      Then user validates ticket status as "Approved"
      And user waits for 1 minutes
      Then user clicks on "Notifications" tab
      And user should see "Approved" email update
      And user should see "Approved-ChangeBuilder" email update
      When user changes status to "Schedule Requested"
      And user clicks on save button
      Then user validates ticket status as "Scheduled"
      And user clicks on "Schedule" tab
      Then user validates actual start time is updated
      And user validates actual end time is updated
      Then user clicks on assignment under sections
      And user clicks on owner under sections
      Then user validates owner profile as "Change Manager"
      And user validates owner as "ChangeManager1"
      And user validates assigned profile is "Change Implementation Control"
      And user validates assignee is "Change Impl Contr"
      When user logsOut from One workflow
      And user goes back to login page
      Then user logs in with valid username "ChangeImplementationControl1" and password as "Test@1234"
      And user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on more filters button
      And user selects status as "Scheduled" on user more filters window
      And user clicks on apply button on user more filters window
      And user should see "CR" tickets with "Status" of "Scheduled"
      When user selects search menu as "Open Search Form:Change Record/Project/Freeze"
      And user switches to window 2
      Then user enters ticket previously created
      And user clicks Search on ticket search
      And user validates ticket status as "Scheduled"
      When user changes status to "Implementation"
      And user clicks on save button
      Then user validates ticket status as "Implementation"
      And change should also be reflected in the timeline as "STATUS MODIFIED.  Actual Start has changed from  UTC to 2019-09-18 14:15:16 UTC. Request Status has changed from Scheduled to Implementation." on row 1
      And change should also be reflected in the timeline as "ChangeManager1 - The Actual Start Date Time has been updated to : 2019-09-18 14:15:16 UTC" on row 2
      And user gets time value of timeline entry
      Then user clicks on "Schedule" tab
      And user validates actual start time matches timeline entry time
      Then user clicks on "Notifications" tab
      And user should see "Implementation" email update
      When user clicks on timeline tab
      And user enters "Successful, no issues during implementation" in the timeline text box
      And user clicks on add button on timeline
      Then change should also be reflected in the timeline as "Successful, no issues during implementation"
      When user changes status to "Completed"
      And user clicks on save button
      Then user validates actual end time is updated
      And an error message should appear: "Required field (without a default) not specified : Actual Impact (ARERR 9424)"
      And an error message should appear: "Required field (without a default) not specified : Completed Code (ARERR 9424)"
      Then user selects closure code as "Successful"
      And user selects actual impact as "No Impact"
      And user clicks on save button
      Then an error message should appear: "There are still outstanding active or pending impact records. Please clear them before clearing the request. (ARERR 999001210)"
      When user clicks on Diagnosis tab
      And user right clicks on primary CI and selects "Impact:Clear All"
      And user closes warning message
      Then user gets impact from time
      And user gets impact to time
      And user clicks on "Schedule" tab
      And user validates "actual start" time matches "impact from" time
      And user validates "actual end" time matches "impact to" time
      Then user clicks on save button
      And user clicks on timeline tab
      And user validates ticket status as "Completed"
      And change should also be reflected in the timeline as "STATUS MODIFIED.  Actual Impact has changed from  to No Impact. Actual End has changed from  UTC to 2019-09-18 14:39:25 UTC. Completed Code has changed from  to Successful. Request Status has changed from Implementation to Completed" on row 1
      And change should also be reflected in the timeline as "ChangeManager1 - The Actual End Date Time has been updated to : 2019-09-18 14:39:25 UTC" on row 2
      When user logsOut
      And user goes back to login page
      Then user logs in with valid username "ChangeManager1" and password as "Telia@1234"
      And user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on more filters button
      And user switches to frame
      And user clicks on "Core" tab
      And user selects status as "Completed" on user more filters window
      Then user clicks on apply button on user more filters window
      And user should see "CR" tickets with "Status" of "Completed"
      When user selects search menu as "Open Search Form:Change Record/Project/Freeze"
      And user switches to window 2
      Then user enters ticket previously created
      And user clicks Search on ticket search
      When user changes status to "Closed"
      And user enters review details as "Random Notes"
      And user selects closure code as "Test Ticket"
      And user selects resolved group as "Change Manager"
      And user selects resolved person as "ChangeManager1"
      Then user clicks on save button
      And user validates ticket status as "Closed"
      And change should also be reflected in the timeline as "STATUS MODIFIED.  Actual Impact has changed from  to No Impact. Actual End has changed from  UTC to 2019-09-18 14:39:25 UTC. Completed Code has changed from  to Successful. Request Status has changed from Completed to Closed. " on row 1










