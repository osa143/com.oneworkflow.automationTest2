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
      And user clicks on Add Bulk Import button
      And user switches to frame
      Then user should see bulk ci loading window
      When user clicks on Manual Input radio button
      And user enters impact from date as current date midnight on bulk CI loading window
      And user enters impact to date as current date midnight plus 4 hours on bulk CI loading window
      And user selects impact level as "Degradation of Service"
      And user enters "One Workflow" in manual CI search box
      Then user clicks on save button under bulk import
      And first error message should display as "The manually identified CIs are now being processed..." on bulk ci window
      And second error message should display as "Please Check for the progress of this process in \"Show Bulk Import\". (ARNOTE 10000)" on bulk ci window
      When user clicks on Show Bulk Import button
      Then user validates bulk ci loading table contains column names:"Submitter:Import Type:Date:Status"
      When user clicks on "Related CIs" tab
      And user validates "CI Name" as "One Workflow" in row 1
      And user validates "Status" as "Completed" in row 1
      And user validates "Dup. CIs" as "2" in row 1
      And user validates total rows as "1"
      And user validates Rows OK as "1"
      When user clicks on "Other Fields" tab
      Then user validates Request ID is not null
      And user validates BIR_GUID is not null
      And user validates Submitter is not null
      And user validates Create Date is not null
      And user validates Last Modified By is not null
      And user validates Modified Date is not null
      And user validates Status contains buttons "Pending:Checked:Importing:Completed:With Errors:Cancelled"
      And user validates import start time is not null
      And user validates import end time is not null
      And user validates import duration txt is not null
      Then user clicks on bulk loading close button
      When user clicks on "Add Bulk Import" button
      And user switches to frame
      And user selects impact level as "No Impact"
      And user enters impact from date as current date midnight
      And user enters impact to date as current date midnight +4 hours
      Then user clicks on "Upload Import File"
      And user clicks on choose file button
      #Select 10CIs text file with incorrect names
      Then user selects TXT CI's file
      And user clicks on attachment ok button
      Then user clicks on save button
      And user validates import message appears
      Then user clicks on ok button
      When user clicks on "Show Bulk Import" button
      Then user highlights "TXT" import type
      And user validates txt doc is visible
      And user validates "Save Import Type" is visible
      When user clicks on "Related CIs" tab
      Then user validates at least 1 CI has "With Warning" status
      When user clicks on "Other Fields" tab
      Then user validates "Import Start Date" is not null
      Then user validates "Import End Date" is not null
      And user clicks on bulk loading close button
      When user clicks on Manual Input radio button
      And user enters impact from date as current date midnight on bulk CI loading window
      And user enters impact to date as current date midnight plus 4 hours on bulk CI loading window
      And user selects impact level as "Degradation of Service"
      And user enters "One Workflow" in manual CI search box
      Then user clicks on save button under bulk import
      When user clicks on Show Bulk Import button
      And user clicks on "Related CIs" tab
      Then user highlights second manual one workflow input
      And user validates "CI Name" as "One Workflow" in row 1
      And user validates "Status" as "With Errors" in row 1
      And user validates "Dup. CIs" as "2" in row 1
      And user validates total rows as "1"
      And user validates Rows OK as "0"
      And user validates with errors as "1"
      Then user clicks on "Other Fields" tab
      And user validates import duration txt field is not null
      Then user clicks on bulk loading close button
