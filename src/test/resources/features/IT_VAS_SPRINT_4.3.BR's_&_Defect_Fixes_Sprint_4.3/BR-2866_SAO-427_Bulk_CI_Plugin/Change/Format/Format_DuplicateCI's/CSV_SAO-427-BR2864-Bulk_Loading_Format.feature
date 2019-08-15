@Bulk_Loading_Format @427
Feature: checking of bulk loading format
  Scenario: user checks the format of bulk loading format

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
      #50CI's with duplicates TXT file
      Then user selects file with duplicates in it
      And user clicks on attachment ok button
      Then user should see 50 CI's/w duplicate attachment within bulk loading window
      Then user clicks on bulk import save button
      And user clicks on ok button on popup
      And user switches to window 1
      When user clicks on "Show Bulk Import" button
      And user switches to frame
      Then user validates uploaded file is visible
      And user validates "Save Import File" button is visible
      When user clicks on "Related CIs" tab
      Then user validates "Total Rows" are 50
      And user validates "Rows Ok" as 25
      And user validates "With Errors" as 25
      And user validates warning message as "(33422): Impact record cannot be created. The entered From and To dates overlap with existing impact record for SE (No Impact (2019-08-12 22:00:00 UTC - 2019-08-13 02:00:00 UTC ))."
      And user validates status message as "With Error"
      Then user clicks on bulk import close button
      And user switches to window 1





