@E2E_Normal_Change_(Internal_Initiator) @Change
  Feature: Internal Normal Change E2E
    Scenario: Internal user processes a normal change ticket

      Given user is on the OneWorkflow login page
      When user logs in with valid username "ChangeInitiatorInternal1" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create change record
      Then user switches to window 1
      When user clicks on save button on the problem form
      Then error message should display as "Please fill up all the mandatory fields in the Details Panel to create a Change Request. (ARERR 10000)"
      And user switches to frame
      Then user closes warning by pressing OK button
      When user enters "Regression - Change Management Process" in the implementation field
      And user enters "Regression - Change Management Process" in the test plan field
      And user enters "Regression - Change Management Process" in the rollback field
      And user enters "Regression - Change Management Process" in the communication plan field
      And user enters "Regression - Change Management Process" in the ver of functionality field
      And user enters "Regression - Change Management Process" in the risk description field
      Then user clicks on save button on the problem form
      And multiple error messages should appear with red boarder around fields
      When user clicks on "Calendar" under actions
      #Need to check this as it appears in a different window not different Tab
      And user switches to window
      When user enters "Change Record" in calendar search box
      And user clicks on ticket type "Change Record"
      Then user validates change records are shown in calendar
      When user clicks on a present change record
      #Need to check this as well
      And user switches to frame
      And user clicks on open button on calendar
      Then user should see change record
      And user closes change record window
      And user closes calendar window
      When user clicks on sweden checkbox under affected BU's
      And user selects request type as "Normal Change"
      Then user selects title as "Mobile:CS Core (Voice)" on Change record page
      And user enters request category as "Software Installation"
      And user enters description as "TEST TICKET PLEASE IGNORE - Automated Test for Normal Change (Internal Initiator)"
      And user enters reason field as "Regression"
      And user selects priority as "Critical"
      And user enters "Privacy Data: Just Testing" in the change builder field
      Then user enters request start time 24 hours ahead of current date
      And user enters request end time 28 hours ahead of current date
      And user enters impact duration as "45" minutes
      And user selects estimated impact dropdown as "Degradation of Service"
      Then user enters as "Test Data - Ignore Ticket" in service and customer impact
      And user clicks on save button
      Then user validates availability of tabs "Timeline:Diagnosis:Risk:Schedule:Interested Parties:Approval:Notifications:Linked Items:Work Orders:Service Level:Related Project:Service Info:Telenor"
      Then user clicks on assignment under sections
      And user should see assigned profile as "Change Initiator-Internal"
      And user validates assignee is "ChangeInitiatorInternal1"
      When user clicks on Send button
      Then error message should display as "You must provide an answer to all the risk question outlined in the Risk tab before Send (ARERR 10000)"
      And user clicks ok button on BMC remedy user error message
      When user clicks on risk tab
      And user gets current risk score value
      When user answers all risk questions as below
      And user selects answer as "Impact to other systems/technologies are unclear"
      And user selects answer as "No"
      And user selects answer as "Tested successfully, this is a pilot"
      And user selects answer as "Yes (outcome of the change can be instantly verified)"
      And user selects answer as "Yes"
      And user selects answer as "Simple"
      And user selects last answer as "No"
      Then user validates risk score gets updated
      Then user clicks on Send button
      And an error message should appear: "Please select at least one country of impact for this change. (ARERR 10000)"
      When user clicks on estonia checkbox under affected BU's
      And user clicks on Send button
      Then error message should display as "You must select at least one CI in the Diagnosis Tab (ARERR 10000)"
      When user clicks ok button on BMC remedy user error message
      And user clicks on Diagnosis tab
      And user clicks on CI search button
      Then user switches to frame
      And CI search tab should be opened
      Then user clicks on CI search button
      And user selects Category as "Core"
      And user selects Type as "Mobile CS Core Network"
      Then user enters "FI_MGW_SMG03TRE" in the name+ field
      Then user clicks on search
      And user selects a CI from list
      And user selects impact level as "Degradation of Service"
      And user clicks on relate CI
      Then user closes warning message
      And user clicks on close button on CI search window
      And CI should be listed and displayed under the Diagnosis tab
      When user clicks on Show CR Matching button
      Then user should see Show CR Matching table appear
      When user clicks on "Interested Parties" tab
      And user enters email address as "Test@Test.com"
      And user clicks on add email button
      Then user should see new email "Test@Test.com" added
      When user clicks on Send button
      Then user validates ticket status as "Assigned"
      Then user should see assigned profile as "DC CS Core (Voice)"
      When user clicks on owner under sections
      Then user validates owner profile as "Change Manager"
      And user validates owner as "Change Manager"
      When user clicks on "Notifications" tab
      And user clicks on "Sent" tab
      Then user should see "Assignment-Profile" email update
      And user validates "Send" is readonly
      And user clicks on timeline tab
      #Description, Project Code, Change Builder, Communication Plan, Ver Of Functionality, Risk Description and Timeline
      Then user validates "Description*" isn't readonly
      And user validates "Project Code" isn't readonly
      And user validates "Change Builder+*" isn't readonly
      And user validates "Communication Plan*" isn't readonly
      And user validates "Ver of Functionality*" isn't readonly
      And user validates "Risk Description*" isn't readonly
      And user validates "Timeline" isn't readonly
      Then change should also be reflected in the timeline as "STATUS MODIFIED.  Assignee Profile has changed from  to DC CS Core (Voice). Finland Country has changed from  to Finland. Request Status has changed from New to Assigned. "
      And user gets ticket value
      When user logsOut
      And user switches to window 0
      And user returns to home page
      Then user logs in with valid username "DC CS Core (Voice)_auto" and password as "Telia@1234"
      And user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on more filters button
      And user clicks on core tab
      Then user enters "Mobile | CS Core (Voice)" in the filter title field
      And user selects status as "Assigned" on user more filters window
      Then user clicks on apply button on user more filters window
      And user should see change tickets with status of "Assigned"
      When user selects search menu as "Open Search Form:Change Record/Project/Freeze"
      And user switches to window 1
      Then user enters ticket previously created
      When user clicks on Ack button
      Then user validates ticket status as "Analysis"
      And user validates last ack by field has data present
      Then user selects assignee as "DC CS Core (Voice)_auto" by using alphabet "D" key up 0 times
      And user clicks on save button
      When user clicks on Diagnosis tab
      And user clicks on Show CR Matching button
      Then user should see Show CR Matching table appear
      When user enters description as "- Additional Information"
      And user clears text in "Reason" field
      Then user enters reason field as "New Reason"
      And user clears text in "Comminication Plan" field
      Then user enters "New Communication plan" in the communication plan field
      And user clicks on save button
      Then change should also be reflected in the timeline as "STATUS MODIFIED.  Description has changed from TEST TICKET PLEASE IGNORE - Automated Test for Normal Change (Internal Initiator) to TEST TICKET PLEASE IGNORE - Automated Test for Normal Change (Internal Initiator) - Additional info. "
      Then user clicks on "Schedule" tab
      And user changes request start time to be one week later
      And user changes request end time to be one week later
      Then user clicks on save button
      Then user clicks on timeline tab
      #may need to check this, replaced the actual date with "XX's"
      And change should also be reflected in the timeline as "STATUS MODIFIED.  Requested Start has changed from XXXX-XX-XX XX:XX:XX UTC to XXXX-XX-XX XX:XX:XX UTC. Requested End has changed from XXXX-XX-XX XX:XX:XX UTC to XXXX-XX-XX XX:XX:XX UTC. "
      When user gets the schedule time values
      And user clicks on Diagnosis tab
      And user right clicks on primary CI and selects "Impact:Update"
      Then user switches to frame
      And user enters impact from time as same value as request start time
      And user enters impact to time as same value as request end time
      And user clicks confirm checkbox
      Then user clicks on bulk update save buttonWhen user clicks on "Interested Parties" tab
      And user enters email address as "Test2@Test2.com"
      And user clicks on add email button
      Then user should see new email "Test2@Test2.com" added
      When user clicks on "Notifications" tab
      And user clicks on "Sent" tab
      Then user should see "Acknowledged" email update
      When user changes status to "Approval Requested"
      And user clicks on save button
      Then user validates ticket status as "Approval Requested"
      And user validates availability of tabs "Approval"
      And change should also be reflected in the timeline as "Processing of the following notification event(s) started: Approvals Notification messages will be displayed on the Notifications tab."
      And change should also be reflected in the timeline as "STATUS MODIFIED.  Request Status has changed from Analysis to Approval Requested. "
      When user logsOut
      And user switches to window 0
      Then user logs in with valid username "ChangeManager1_Automation" and password as "Test@1234"
      And user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on more filters button
      And user clicks on core tab
      And user selects status as "Approval Requested" on user more filters window
      And user clicks on apply button on user more filters window
      Then user should see change tickets with status of "Approval Requested"
      When user selects search menu as "Open Search Form:Change Record/Project/Freeze"
      And user switches to window 1
      Then user enters ticket previously created
      When user clicks on owner under sections
      Then user validates owner profile as "Change Manager"
      And user selects owner as "ChangeManager1_Automation"
      And user clicks on save button
      When user clicks on Diagnosis tab
      And user clicks on Show CR Matching button
      Then user should see Show CR Matching table appear
      When user changes status to "Analysis"
      And user clicks on save button
      Then user validates "Title" isn't readonly
      And user validates "Request Category" isn't readonly
      And user validates "Description" isn't readonly
      And user validates "Reason" isn't readonly
      And user validates "Priority" isn't readonly
      And user validates "Project Code" isn't readonly
      And user validates "Change Builder" isn't readonly
      And user validates "Implementation" isn't readonly
      And user validates "Test Plan" isn't readonly
      And user validates "Rollback" isn't readonly
      And user validates "Communication Plan" isn't readonly
      And user validates "Ver Of Functionality" isn't readonly
      And user validates "Risk Description" isn't readonly
      Then user clears text in "Description" field
      And user enters description as "TEST TICKET PLEASE IGNORE - New Description"
      And user clicks on save button
      Then change should also be reflected in the timeline as "STATUS MODIFIED.  Description has changed from TEST TICKET PLEASE IGNORE - Automated Test for Normal Change (Internal Initiator) - Additional info to TEST TICKET PLEASE IGNORE - New Description. "
      When user clicks on risk tab
      And user selects last answer as "Yes"
      And user clicks on save button
      Then user changes status to "Approval Requested"
      And user clicks on save button
      When user clicks on "Approval" tab
      And user clicks on request thats pending approval
      And user clicks on view button
      Then user switches to frame
      And user enters "Change can be approved right away" in comments field
      And user clicks on approve button
      Then user switches to window 1
      And user clicks on ticket refresh button
      Then user validates ticket status as "Approved"
      When user clicks on "Notifications" tab
      And user clicks on "Sent" tab
      Then user should see "Approved Change-Builder" email update
      And change should also be reflected in the timeline as "Ticket approved by ChangeManager1_Automation in date: "
      When user changes status to "Schedule Requested"
      And user clicks on save button
      Then change should also be reflected in the timeline as "STATUS MODIFIED.  Request Status has changed from Approved to Schedule Requested."
      And user validates ticket status as "Scheduled"
      Then user clicks on assignment under sections
      And user should see assigned profile as "Change Implementation Control"
      And user selects assignee as "ChangeImplementationControl1" by using alphabet C key down 2 times
      And user clicks on owner under sections
      And user validates owner profile as "Change Manager"
      And user validates owner as "ChangeManager1_Automation"
      Then user clicks on save button
      When user clicks on "Notifications" tab
      And user clicks on "Sent" tab
      Then user should see "Assignment-user" email update
      And user logsOut
      Then user switches to window 0
      When user logs in with valid username "ChangeImplementationControl1" and password as "Telia@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on more filters button
      And user clicks on core tab
      And user selects status as "Scheduled" on user more filters window
      And user clicks on apply button on user more filters window
      Then user should see change tickets with status of "Scheduled"
      When user selects search menu as "Open Search Form:Change Record/Project/Freeze"
      And user switches to window 1
      Then user enters ticket previously created
      When user changes status to "Implementation"
      And user clicks on save button
      Then change should also be reflected in the timeline as "STATUS MODIFIED.  Actual Start has changed from  UTC to 2019-07-26 13:09:51 UTC. Request Status has changed from Scheduled to Implementation. "
      Then user clicks on "Schedule" tab
      Then user validates actual start time is updated
      When user clicks on "Notifications" tab
      And user clicks on "Sent" tab
      Then user should see "Implementation" email update
      When user clicks on timeline tab
      And user enters timeline entry as "Successful - no issues during implementation"
      And user clicks on add button on timeline
      When user changes status to "Completed"
      And user clicks on save button
      Then user validates actual end time is updated
      And error message should display as "	Required field (without a default) not specified : Actual Impact (ARERR 9424)"
      And error message should display as "Required field (without a default) not specified : Completed Code (ARERR 9424)"
      Then user selects actual impact as "No Impact"
      And user selects completed code as "Successful"
      And user clicks on save button
      Then error message should display as "There are still outstanding active or pending impact records. Please clear them before clearing the request. (ARERR 999001210)"
      When user clicks on Diagnosis tab
      And user right clicks on primary CI and selects "Impact:Clear"
      And user clicks on yes on CI warning window
      Then user validates CI impact status is "Inactive"
      And user validates ci impact from time is updated
      And user validates ci impact to time is updated
      Then user clicks on save button
      And change should also be reflected in the timeline as "STATUS MODIFIED.  Actual Impact has changed from  to No Impact. Actual End has changed from  UTC to 2019-07-26 13:23:51 UTC. Completed Code has changed from  to Successful. Request Status has changed from Implementation to Completed. "
      And user logsOut
      Then user switches to window 0
      When user logs in with valid username "ChangeManager1_Automation" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on more filters button
      And user clicks on core tab
      And user selects status as "Completed" on user more filters window
      And user clicks on apply button on user more filters window
      Then user should see change tickets with status of "Completed"
      When user selects search menu as "Open Search Form:Change Record/Project/Freeze"
      And user switches to window 1
      Then user enters ticket previously created
      When user changes status to "Closed"
      And user selects resolved group as "Change Manager"
      And user selects resolved person as "ChangeManager1_Automation"
      And user enters review details as "Random Notes"
      And user selects closure code as "Test Ticket"
      Then user clicks on save button
      And change should also be reflected in the timeline as "STATUS MODIFIED.  Request Status has changed from Completed to Closed."
