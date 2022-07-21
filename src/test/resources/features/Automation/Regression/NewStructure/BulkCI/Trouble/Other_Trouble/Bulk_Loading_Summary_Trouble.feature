@SAO-427-BR2865-Bulk_Loading_Summary_Trouble @SAO_427 @other_trouble
  #passed
  Feature: Bulk Loading Summary
    Scenario: Bulk Loading Summary

      Given user is on the OneWorkflow login page
      And user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
#      When user clicks on create trouble event
      When user clicks on agent console create trouble event
      And user switches to window 1
      Then trouble record form should appear in new tab
      When user clicks on OP sweden checkbox under affected BU's
#      When user clicks on sweden checkbox under affected BU's
      And user enters "SAO-427 Test Bulk Loading Error Message - Structure" in Title field
      And user selects request type as "Event" on trouble event page
      And user enters description as "SAO-427 Test Bulk Loading Error Message - Structure"
      And user clicks on save button
      Then ticket should be created and status should be assigned
      When user clicks on Diagnosis tab
      And user clicks on Add Bulk Import button
      And user switches to frame
      Then user should see bulk ci loading window
      When user selects impact level as "No Impact"
      And user clicks on Manual Input radio button
      And user enters "One Workflow" in manual CI search box
      Then user clicks on save button under bulk import
      And first error message should display as "The manually identified CIs are now being processed..." on bulk ci window
      And second error message should display as "Please Check for the progress of this process in \"Show Bulk Import\". (ARNOTE 10000)" on bulk ci window
      And user waits 30 secs
      And user clicks on Show Bulk Import button
      And user switches to frame
      And user clicks on "Related CIs" tab
      And user validates "Status" as "Completed" in row 1
      Then user validates at least one CI has "Completed" under "Status"
      And user validates "CI Name" as "One Workflow" in row 1
      And user validates "Dup. CIs" as "2" in row 1
      And user validates total rows as "1"
      And user validates Rows OK as "1"
      And user validates with warnings as "0"
      And user validates with errors as "0"
      When user clicks on "Other Fields" tab
      Then user validates Request ID, BIR_GUID, Submitter, Create Date, Last Modified, Modified Date, import start time, import end time, import duration fields are updated
      And user clicks on bulk loading close button

