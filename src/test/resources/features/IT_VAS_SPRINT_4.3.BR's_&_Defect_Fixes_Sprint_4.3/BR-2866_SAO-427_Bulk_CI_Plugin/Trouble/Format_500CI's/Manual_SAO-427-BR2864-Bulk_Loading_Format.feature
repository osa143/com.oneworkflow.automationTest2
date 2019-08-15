@Bulk_Loading_Format_Trouble_Manual_500CI's @427
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
      And user clicks on "Add Bulk Import" button
      And user switches to frame
      Then user should see bulk ci loading window
      And user validates "Impact Type*" is visible
      And user validates "Category*" is visible
      And user validates "Level*" is visible
      And user validates "From*" is visible
      And user validates "To+" is visible
      And user validates "Ignore Duplicate CIs" is visible
      And user validates "Upload File" radio button is visible
      And user validates "Manual Input" radio button is visible
      And user validates "Download File Template" is visible
      And user validates "Upload Import File" is visible
      And user validates "Save" is visible
      And user validates "Close" is visible
      When user clicks on "Upload Import File" button
      Then user should see add attachment window
      When user clicks on "Choose File" Button
      #500CI's with no duplicates TXT file
      Then user selects file with duplicates in it
      And user clicks on attachment ok button
      Then user should see 500 CI attachment within bulk loading window
      Then user clicks on bulk import save button
      And user clicks on ok button on popup
      And user switches to window 1
      When user clicks on "Show Bulk Import" button
      And user switches to frame
      Then user validates uploaded file is visible
      And user validates "Save Import File" button is visible
      When user clicks on "Related CIs" tab
      And user highlights 500 CI TXT doc
      Then user validates "Total Rows" are 500
      And user validates "Rows Ok" as 446
      And user validates "With Errors" as 53
      And user validates "Warnings" as 1
      And user validates warning message as "(33422): Impact record cannot be created. The entered From and To dates overlap with existing impact record for SE (No Impact (2019-08-12 22:00:00 UTC - 2019-08-13 02:00:00 UTC ))."
      And user validates status message as "Completed (With Warnings)"
      And user validates status message as "With Error"
      And user validates status message as "Completed"
      Then user clicks on bulk import close button




