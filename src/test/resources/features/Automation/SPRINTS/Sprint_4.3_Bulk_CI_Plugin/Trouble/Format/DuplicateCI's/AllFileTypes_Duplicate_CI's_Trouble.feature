@Bulk_Loading_Format_5duplicateCIs_trouble_2 @SAO-427
    #passed
Feature: checking of bulk loading format
  Scenario Outline: user checks the format of bulk loading format

      Given user is on the OneWorkflow login page
      And user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create trouble event
      And user switches to window 1
      Then trouble record form should appear in new tab
      When user clicks on sweden checkbox under affected BU's
      And user enters "SAO-427 Test Bulk Loading Format Duplicate CI's" in Title field
      And user selects request type as "Event" on trouble event page
      And user enters description as "SAO-427 Test Bulk Loading Format Duplicate CI's"
      And user clicks on save button
      Then ticket should be created and status should be assigned
      When user clicks on Diagnosis tab
      And user clicks on Add Bulk Import button
      And user switches to frame
      Then user should see bulk ci loading window
      And user validates Impact Type default value is "Un-Planned"
      And user validates Category default value is "Actual"
      #Blank default value for level
      And user validates Level default value is ""
      Then user selects impact level as "No Impact"
      And user clicks on Upload Import File
      Then user clicks on choose file button
      And user searches for "<fileTypes>" attachment and adds it
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
#      And user logsOut and closes the browser
#      And user switches to window 0

      Examples:

          |fileTypes                                                                                       |
          |Test Attachments\5DuplicateCIs\5CIsCSV.csv|
          |Test Attachments\5DuplicateCIs\5CIsTextDOC.txt|
          |Test Attachments\5DuplicateCIs\5CIsXLS.xls|
          |Test Attachments\5DuplicateCIs\5CIsXLSX.xlsx|






