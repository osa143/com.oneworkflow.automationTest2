@SAO-427-BR2862-Bulk_Loading_Error_Message_Structure_Trouble @SAO-427
  Feature: checking of bulk loading error message structure
    Scenario: user checks the message structure of bulk loading error

      Given user is on the OneWorkflow login page
      When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create trouble event
      And user switches to window 1
      Then trouble record form should appear in new tab
      When user clicks on sweden checkbox under affected BU's
      And user enters "SAO-427 Test Bulk Loading Error Message - Structure" in Title field
      And user selects request type as "Event" on trouble event page
      And user enters description as "SAO-427 Test Bulk Loading Error Message - Structure"
      And user clicks on save button
      Then ticket should be created and status should be assigned
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



