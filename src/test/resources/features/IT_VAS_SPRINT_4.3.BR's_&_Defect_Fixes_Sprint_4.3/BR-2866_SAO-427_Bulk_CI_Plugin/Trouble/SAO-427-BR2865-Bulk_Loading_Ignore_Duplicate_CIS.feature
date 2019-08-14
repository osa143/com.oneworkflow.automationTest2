@SAO-427-BR2865-Bulk_Loading_Ignore_Duplicate_CI's_Trouble
  Feature: Bulk Loading ignore duplicate CI's
    Scenario: Bulk Loading ignore duplicate CI's

      Given user is on the OneWorkflow login page
      When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create trouble event
      And user switches to window 1
      Then trouble record form should appear in new tab
      When user clicks on sweden checkbox under affected BU's
      And user enters "SAO-427 Test Bulk Loading CI not found Prompt" in Title field
      And user selects request type as "Event" on trouble event page
      And user enters description as "SAO-427 Test Bulk Loading CI not found Prompt"
      And user clicks on save button under bulk import WIN_0_700025244
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
      #50CI's with duplicates
      Then user selects file with 50 duplicate CI's
      And user clicks on attachment ok button
      When user selects impact level as "No Impact"
      And user enters impact from date as current date
      And user enters impact to date as current date +4h
      And user clicks on "Ignore Duplicate CIs" checkbox
      Then user clicks on save button under bulk ci
      When user clicks on "Show Bulk Import" button
      And user switches to frame
      Then user validates uploaded file is visible
      And user validates "Save Import File" button is visible
      When user clicks on "Related CIs" tab
      Then user validates "Total Rows" are 50
      And user validates "Rows Ok" as 24
      And user validates "With Errors" as 24
      And user validates "With Warnings" as 2
      And user validates warning message as "Multiple CIs named 'LT DNS SIP' were found, and the import job is configured to Ignore Duplicate CIs!"
      And user validates status message as "Completed (With Warnings)"
      Then user clicks on bulk import close button
      And user switches to window 1


