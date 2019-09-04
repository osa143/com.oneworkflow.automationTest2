@duplicateCIs_change @SAO-427
Feature: checking of bulk loading format
  Scenario Outline: user checks the format of bulk loading format

      Given user is on the OneWorkflow login page
      When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create change record
      Then user switches to window 1
      And user selects request type as "Normal Change"
      Then user selects title as "Mobile:CS Core (Voice)" on Change record page
      And user selects request category as "Software Installation" on change record page
      And user enters description as "TEST TICKET PLEASE IGNORE - SAO-427 Duplicate CI's"
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
      Then user enters request start time 24 hours ahead of current date
      And user enters request end time 28 hours ahead of current date
      And user enters impact duration as "45" minutes
      And user selects estimated impact dropdown as "Degradation of Service"
      And user clicks on save button
      When user clicks on "Diagnosis" tab
      And user clicks on Add Bulk Import button
      And user switches to frame
      Then user should see bulk ci loading window
      When user selects impact level as "No Impact"
      When user clicks on Upload Import File
      And user clicks on choose file button
      And user searches for "<fileTypes>" attachment and adds it
      And user clicks on attachment ok button
      And user switches to frame
      Then user validates attached document is visible
      Then user clicks on save button under bulk import
      And first error message should display as "The Uploaded File is now being processed..." on bulk ci window
      And second error message should display as "Please Check for the progress of this process in \"Show Bulk Import\". (ARNOTE 10000)" on bulk ci window
      And user waits 20 secs
      When user clicks on Show Bulk Import button
      And user switches to frame
      When user clicks on "Related CIs" tab
      And user validates total rows as "10"
      And user validates Rows OK as "5"
      And user validates with errors as "5"
      And user validates with warnings as "0"
      And user validates "Status" as "With Errors" in row 6
      And user validates "Status" as "With Errors" in row 7
      And user validates "Status" as "With Errors" in row 8
      And user validates "Status" as "With Errors" in row 9
      And user validates "Status" as "With Errors" in row 10
      And user clicks on bulk loading close button
      And user logsOut and closes the browser
      And user switches to window 0

      Examples:

          |fileTypes                                                                                       |
          |C:\Temp\oneworkflow.automation\src\test\resources\Test Attachments\5DuplicateCIs\5CIsCSV.csv |
          |C:\Temp\oneworkflow.automation\src\test\resources\Test Attachments\5DuplicateCIs\5CIsTextDOC.txt|
          |C:\Temp\oneworkflow.automation\src\test\resources\Test Attachments\5DuplicateCIs\5CIsXLS.xls|
          |C:\Temp\oneworkflow.automation\src\test\resources\Test Attachments\5DuplicateCIs\5CIsXLSX.xlsx|







