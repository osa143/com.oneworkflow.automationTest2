@Bulk_Loading_Error_Message_Structure_Change @SAO-427 @other_change*
  #passed
  Feature: checking of bulk loading error message structure
    Scenario: user checks the message structure of bulk loading error

      Given user is on the OneWorkflow login page
      And user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create change record
#      When user clicks on agent console create change record
      Then user switches to window 1
      And user selects request type as "Normal Change"
      Then user selects title as "Mobile:CS Core (Voice)" on Change record page
      And user selects request category as "Software Installation" on change record page
      And user enters description as "TEST TICKET PLEASE IGNORE - SAO-427 Test Bulk Loading CI not found Prompt Change"
      And user enters reason field as "Regression"
      And user selects priority as "Critical"
      And user enters "Privacy Data: Just Testing" in the change builder field
      When user enters "Regression - Change Management Process" in the implementation field
      And user enters "Regression - Change Management Process" in the test plan field
      And user enters "Regression - Change Management Process" in the rollback field
      And user enters "Regression - Change Management Process" in the communication plan field
      And user enters "Regression - Change Management Process" in the ver of functionality field
      And user enters "Regression - Change Management Process" in the risk description field
      Then user enters as "Test Data - Ignore Ticket" in service and customer impact
      And user enters start time as 24 hours fast from current sweden time in "MM/dd/yyyy HH:mm:ss" format
      And user enters end time as 28 hours fast from current sweden time in "MM/dd/yyyy HH:mm:ss" format
      And user enters impact duration as "45" minutes
      And user selects estimated impact dropdown as "Degradation of Service"
      And user clicks on save button
      When user clicks on Diagnosis tab
      And user clicks on Add Bulk Import button
      And user switches to frame
      Then user should see bulk ci loading window
      When user clicks on Manual Input radio button
      And user selects impact level as "Degradation of Service"
      And user enters "One Workflow" in manual CI search box
      Then user clicks on save button under bulk import
      And first error message should display as "The manually identified CIs are now being processed..." on bulk ci window
      And second error message should display as "Please Check for the progress of this process in \"Show Bulk Import\". (ARNOTE 10000)" on bulk ci window
      And user waits 20 secs
      When user clicks on Show Bulk Import button
      And user switches to frame
      Then user validates bulk ci loading table contains columns "Submitter:Import Type:Date:Status"
      When user clicks on "Related CIs" tab
      And user validates "CI Name" as "One Workflow" in row 1
      And user validates "Status" as "Completed" in row 1
      And user validates "Dup. CIs" as "2" in row 1
      And user validates total rows as "1"
      And user validates Rows OK as "1"
      When user clicks on "Other Fields" tab
      Then user validates Request ID, BIR_GUID, Submitter, Create Date, Last Modified, Modified Date, import start time, import end time, import duration fields are updated
      And user validates "Status" is visible on bulk CI loading window tagname "label"
      And user validates "Submitter" is visible on bulk CI loading window tagname "label"
      And user validates "Import Description" is visible on bulk CI loading window tagname "label"
      Then user clicks on bulk loading close button
      When user clicks on Add Bulk Import button
      And user switches to frame
      And user selects impact level as "No Impact"
      Then user clicks on Upload Import File
      And user clicks on choose file button
      #Select 10CIs text file with incorrect names
      And user searches for "Test Attachments\10 CI's - Incorrect Names\TEXT.txt" attachment and adds it
      And user clicks on attachment ok button
      And user switches to frame
      Then user clicks on save button under bulk import
      And first error message should display as "The Uploaded File is now being processed..." on bulk ci window
      And second error message should display as "Please Check for the progress of this process in \"Show Bulk Import\". (ARNOTE 10000)" on bulk ci window
      And user waits 10 secs
      When user clicks on Show Bulk Import button
      And user switches to frame
      Then user highlights "TXT" under "Import Type"
      And user validates attached document is visible
      And user validates "Save Import File" is visible on bulk CI loading window tagname "div"
      When user clicks on "Related CIs" tab
      Then user validates at least one CI has "With Warnings" under "Status"
      When user clicks on "Other Fields" tab
      Then import Start Date and End date should be updated
      And user clicks on bulk loading close button
      When user clicks on Add Bulk Import button
      And user switches to frame
      When user clicks on Manual Input radio button
      And user selects impact level as "Degradation of Service"
      And user enters "One Workflow" in manual CI search box
      Then user clicks on save button under bulk import
      And first error message should display as "The manually identified CIs are now being processed..." on bulk ci window
      And second error message should display as "Please Check for the progress of this process in \"Show Bulk Import\". (ARNOTE 10000)" on bulk ci window
      And user waits 10 secs
      When user clicks on Show Bulk Import button
      And user switches to frame
      And user clicks on "Related CIs" tab
      Then user highlights Completed under Status in row three
      And user validates "CI Name" as "One Workflow" in row 1
      And user validates "Status" as "With Errors" in row 1
      And user validates "Dup. CIs" as "2" in row 1
      And user validates total rows as "1"
      And user validates Rows OK as "0"
      And user validates with errors as "1"
      Then user clicks on "Other Fields" tab
      And user validates import duration txt field is updated
      Then user clicks on bulk loading close button
