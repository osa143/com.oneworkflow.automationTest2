@SAO-427-BR2864-Bulk_Loading_Format_Name_Trouble @427
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
      And user enters impact from date as current date midnight on bulk CI loading window
      And user enters impact to date as current date midnight plus 4 hours on bulk CI loading window
      When user clicks on Upload Import File
      #Need to change the file to correspond with correct file (Incorrect Column Name) CSV
      And user searches for "C:\Users\mahesh vaddegani\Downloads\Test Case Attachments 2\TemplatesForBulkCITests\IncorrectFormatColumnName\BIR+Load+Template.csv" attachment and adds it
      And user clicks on attachment ok button
      Then user validates attached document is visible
      Then user clicks on save button under bulk import
      And first error message should display as "The Uploaded File is now being processed..." on bulk ci window
      And second error message should display as "Please Check for the progress of this process in \"Show Bulk Import\". (ARNOTE 10000)" on bulk ci window
      And user waits 3 secs
      When user clicks on Show Bulk Import button
      And user switches to frame
      When user clicks on "Related CIs" tab
      And user validates total rows as "10"
      And user validates Rows OK as "0"
      And user validates with errors as "0"
      And user validates with warnings as "10"
      And user validates warning message as "Multiple CIs named 'No CI named '	SE_AP_alvesta-radmannen-ap1' was found!" in row 1
      Then user clicks on close button on bulk update window
      And user switches to window 1



