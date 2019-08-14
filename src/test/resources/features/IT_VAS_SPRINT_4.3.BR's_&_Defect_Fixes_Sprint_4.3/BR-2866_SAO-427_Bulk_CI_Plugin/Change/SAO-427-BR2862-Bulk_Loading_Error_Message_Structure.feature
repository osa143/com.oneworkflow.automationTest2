@SAO-427-BR2862-Bulk_Loading_Error_Message_Structure_Change @SAO-427
  Feature: checking of bulk loading error message structure
    Scenario: user checks the message structure of bulk loading error

      Given user is on the OneWorkflow login page
      When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
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
      And user selects request type as "Normal Change"
      Then user selects title as "Mobile:CS Core (Voice)" on Change record page
      And user selects request category as "Software Installation" on change record page
      And user enters description as "TEST TICKET PLEASE IGNORE - SAO-427 Test Bulk Loading CI not found Prompt Change"
      And user enters reason field as "Regression"
      And user selects priority as "Critical"
      And user enters "Privacy Data: Just Testing" in the change builder field
      Then user enters as "Test Data - Ignore Ticket" in service and customer impact
      Then user enters request start time 24 hours ahead of current date
      And user enters request end time 28 hours ahead of current date
      And user enters impact duration as "45" minutes
      And user selects estimated impact dropdown as "Degradation of Service"
      And user clicks on save button
      And user waits
      Then user validates availability of tabs "Timeline:Diagnosis:Risk:Schedule:Interested Parties:Approval:Notifications:Linked Items:Work Orders:Service Level:Related Project:Service Info:Telenor" on change record page
      When user clicks on Diagnosis tab
      And user clicks on "Add Bulk Import" button
      And user switches to frame
      Then user should see bulk ci loading window
      When user clicks on "Manual Input" radio button
      And user enters impact from date as current date midnight
      And user enters impact to date as current date midnight +4 hours
      And user selects impact level as "Degradation of Service"
      And user enters hours as "3"
      And user enters "One Workflow" in manual CI search box
      Then user clicks on save button
      And user validates import message appears
      Then user clicks on ok button
      When user clicks on "Show Bulk Import" button
      Then user validates bulk ci loading table contains column names:"Submitter:Import Type:Date:Status"
      When user clicks on "Related CIs" tab
      Then user validates "One Workflow" is present under "CI Name"
      And user validates "Completed" is present under "Status"
      And user validates "total rows" as 1
      And user validates "Rows OK" as 1
      When user clicks on "Other Fields" tab
      Then user validates "Request ID" is not null
      And user validates "BIR_GUID" is not null
      And user validates "Submitter" is not null
      And user validates "Create Date" is not null
      And user validates "Last Modified By" is not null
      And user validates "Modified Date" is not null
      And user validates "Status" contains buttons "Pending:Checked:Importing:Completed:With Errors:Cancelled"
      Then user clicks on bulk loading close button
      When user clicks on "Add Bulk Import" button
      And user switches to frame
      And user selects impact level as "No Impact"
      And user enters impact from date as current date midnight
      And user enters impact to date as current date midnight +4 hours
      And user enters hours as "3"
      Then user clicks on "Upload Import File"
      And user clicks on choose file button
      Then user selects 50 CI's file
      And user clicks on attachment ok button
      Then user clicks on save button
      And user validates import message appears
      Then user clicks on ok button
      When user clicks on "Show Bulk Import" button
      Then user highlights "TXT" import type
      And user validates txt doc is visible WIN_0_800038042
      And user validates "Save Import Type" is visible
      When user clicks on "Related CIs" tab
      Then user validates at least 1 CI has "completed" status
      And user validates at least 1 CI has "With Error" status
      And user validates 1 CI has an error of "(33422): Impact record cannot be created. The entered From and To dates overlap with existing impact record for FI_AFG_AFG99FI (No Impact (2019-08-11 22:00:00 UTC - 2019-08-12 02:00:00 UTC ))."
      When user clicks on "Other Fields" tab
      Then user validates "Import Start Date" is not null
      Then user validates "Import End Date" is not null
      And user clicks on bulk loading close button


