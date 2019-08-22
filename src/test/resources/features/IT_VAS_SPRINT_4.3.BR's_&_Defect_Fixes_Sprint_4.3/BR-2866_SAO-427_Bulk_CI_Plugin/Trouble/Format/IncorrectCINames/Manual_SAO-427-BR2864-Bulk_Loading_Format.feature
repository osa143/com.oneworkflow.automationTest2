@Manual_Bulk_Loading_Format_IncorrectCIs_trouble @427
Feature: checking of bulk loading format
  Scenario: user checks the format of bulk loading format

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
      And user clicks on save button
      Then ticket should be created and status should be assigned
      When user clicks on Diagnosis tab
      And user clicks on Add Bulk Import button
      And user switches to frame
      Then user should see bulk ci loading window
      When user selects impact level as "No Impact"
      And user clicks on Manual Input radio button
      Then user enters "_AP_alvesta-radmannen-ap1;_AP_alvesta-radmannen-ap2;_AP_alvesta-radmannen-ap3;_AP_alvesta-radmannen-ap4;_AP_alvesta-radmannen-ap5" in manual CI search box
      Then user clicks on save button under bulk import
      And first error message should display as "The manually identified CIs are now being processed..." on bulk ci window
      And second error message should display as "Please Check for the progress of this process in \"Show Bulk Import\". (ARNOTE 10000)" on bulk ci window
      When user clicks on Show Bulk Import button
      And user switches to frame
      When user clicks on "Related CIs" tab
      And user validates total rows as "5"
      And user validates Rows OK as "0"
      And user validates with errors as "0"
      And user validates with warnings as "5"
      Then user validates at least one CI has "With Warnings" under "Status"
      And user validates warning message as "No CI named '_AP_alvesta-radmannen-ap1' was found!" in row 1
      Then user clicks on bulk loading close button





