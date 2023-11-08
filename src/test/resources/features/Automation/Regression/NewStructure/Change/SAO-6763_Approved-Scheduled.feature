@SAO-6763

  Feature: User validates that when status reaches approval, it automatically changes to scheduled
    Scenario: User validates that when status reaches approval, it automatically changes to scheduled

      Given user is on the OneWorkflow login page
      When user logs in with valid username "ChangeInitiatorInternal1" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create change record
#      When user clicks on agent console create change record
      Then user switches to window 1
      When user enters "Regression - Change Management Process" in the implementation field
      And user enters "Regression - Change Management Process" in the test plan field
      And user enters "Regression - Change Management Process" in the rollback field
      And user enters "Regression - Change Management Process" in the communication plan field
      And user enters "Regression - Change Management Process" in the ver of functionality field
      And user enters "Regression - Change Management Process" in the risk description field
      When user selects request type as "Normal Change"
      Then user selects title as "Mobile:CS Core (Voice)" on Change record page
      And user selects request category as "Software Installation" on change record page
      And user enters description as "TEST TICKET PLEASE IGNORE - Automated Test for Normal Change (Internal Initiator)"
      And user enters reason field as "Regression"
      And user selects priority as "Critical"
      And user enters "Privacy Data: Just Testing" in the change builder field
      Then user enters as "Test Data - Ignore Ticket" in service and customer impact
      And user enters start time as 24 hours fast from current sweden time in "dd/MM/yyyy HH:mm:ss" format
      And user enters end time as 28 hours fast from current sweden time in "dd/MM/yyyy HH:mm:ss" format
      And user enters impact duration as "45" minutes
      And user selects estimated impact dropdown as "Degradation of Service"
      And user clicks on save button
      And user waits
      Then user validates availability of tabs "Timeline:Diagnosis:Risk:Schedule:Interested Parties:Approval:Notifications:Linked Items:Work Orders:Service Level:Related Project:Service Info:Telenor" on change record page
      When user clicks on Risk tab
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
      Then an error message should appear: "Please select at least one country of impact for this change. (ARERR 10000)"
      When user clicks on estonia checkbox under affected BU's
      And user clicks on Send button
      Then error message should display as "You must select at least one CI in the Diagnosis Tab (ARERR 10000)" on change record page
      Then user clicks on "Diagnosis" tab
      And user adds CI "SE_UMTSCell_620153" to change ticket with impact level "Loss of Service"
      And user clicks on save button
      And user switches to default
      And CI should be listed and displayed under the Diagnosis tab
      When user clicks on "Interested Parties" tab
      And user enters email address as "Test123xxx@Test123xxx.com"
      And user clicks on add email button
      Then user should see new email "Test123xxx@Test123xxx.com" added in "Email Address" in row 2
      When user clicks on Send button
      Then user validates ticket status as "Assigned"
      And user gets ticket value
      When user logsOut from One workflow
      And user goes back to login page
      Then user logs in with valid username "DC CS Core (Voice)_auto" and password as "Test@1234"
      And user successfully logged in to OneWorkflow and agent console should be displayed
      When user selects search menu as "Open Search Form:Change Record/Project/Freeze"
      And user switches to window 2
      Then user enters ticket previously created and searches
      When user clicks on Ack button
      Then user validates ticket status as "Analysis"
      And user validates last ack by field has data present
      Then user enters "DC CS Core (Voice)_auto" in assignee
      And user clicks on save button
      When user enters description as "- Additional Information"
      Then user enters reason field as "New Reason"
      And user clicks on details under sections
      Then user enters "New Communication plan" in the communication plan field
      And user clicks on save button
      Then user clicks on "Schedule" tab
      And user enters start time as 168 hours fast from current sweden time
      And user enters end time as 172 hours fast from current sweden time
      When user changes status to "Approval Requested"
      And user clicks on save button
      Then user validates ticket status as "Approval Requested"
      And user validates availability of tabs "Approval"
      And user waits 2 secs
      When user logsOut from One workflow
      And user switches to window 1
      And user goes back to login page
      Then user logs in with valid username "ChangeManager1_Automation" and password as "Test@1234"
      And user successfully logged in to OneWorkflow and agent console should be displayed
      When user selects search menu as "Open Search Form:Change Record/Project/Freeze"
      And user switches to window 2
      Then user enters ticket previously created and searches
      When user clicks on owner under sections
      Then user validates owner profile as "Change Manager"
      And user selects owner as "ChangeManager1_Automation"
      And user clicks on save button
      When user clicks on "Approval" tab
      And user clicks on request thats pending approval
      And user clicks on view button
      Then user switches to frame
      And user enters "Change can be approved right away" in comments field
      And user clicks on approve button
      Then user switches to window 2
      And user clicks on ticket refresh button
      Then user validates ticket status as "Approved"
      And user waits 65 secs
      Then user clicks on ticket refresh button
      And user validates ticket status as "Scheduled"
      And change should also be reflected in the timeline as "STATUS MODIFIED.  Request Status has automatically changed from Scheduled Request to Scheduled." on row 1
      And change should also be reflected in the timeline as "STATUS MODIFIED.  Request Status has changed from Approved to Schedule Requested. " on row 2
