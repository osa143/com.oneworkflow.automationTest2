@Bulk_Loading_Format_Trouble_XLSX_50CIs @SAO-427
Feature: checking of bulk loading format
  Scenario: user checks the format of bulk loading format

      Given user is on the OneWorkflow login page
      When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create trouble event
      And user switches to window 1
      Then trouble record form should appear in new tab
      When user clicks on sweden checkbox under affected BU's
      And user enters "SAO-427 Test Bulk Loading Error Message - Impact Duration" in Title field
      And user selects request type as "Event" on trouble event page
      And user enters description as "SAO-427 Test Bulk Loading Error Message - Impact Duration"
      And user clicks on save button
      Then ticket should be created and status should be assigned
      When user clicks on Diagnosis tab
      And user clicks on Add Bulk Import button
      And user switches to frame
      Then user should see bulk ci loading window
      And user validates Impact Type default value is "Un-Planned"
      And user validates Category default value is "Actual"
      Then user selects impact level as "No Impact"
      And user clicks on Ignore Duplicate CIs checkbox
      And user clicks on Upload Import File
      Then user clicks on choose file button
      #50CI's TXT with duplicate
      And user searches for "C:\Users\mahesh vaddegani\Downloads\Test Case Attachments 2\TemplatesForBulkCITests\50 CI's\50CIsXLSX" attachment and adds it
      And user clicks on attachment ok button
      And user switches to frame
      Then user validates attached document is visible
      Then user clicks on save button under bulk import
      And first error message should display as "The Uploaded File is now being processed..." on bulk ci window
      And second error message should display as "Please Check for the progress of this process in \"Show Bulk Import\". (ARNOTE 10000)" on bulk ci window
      And user waits 10 secs
      When user clicks on Show Bulk Import button
      And user switches to frame
      When user clicks on "Related CIs" tab
      And user validates total rows as "50"
      And user validates Rows OK as "49"
      And user validates with errors as "1"
      When user clicks on "Related CIs" tab
      And user validates "" as "Completed" in row 1
      And user validates "" as "With Error" in row 1
      And user validates 1 CI has an error of "(33422): Impact record cannot be created. The entered From and To dates overlap with existing impact record for FI_AFG_AFG99FI (No Impact (2019-08-12 22:00:00 UTC - 2019-08-13 04:00:00 UTC ))."
      Then user clicks on bulk loading close button






