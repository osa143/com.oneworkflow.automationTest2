@SAO-427-BR2862-Bulk_Loading_Error_Message_Structure @SAO-427
  Feature: checking of bulk loading error message structure
    Scenario: user checks the message structure of bulk loading error

      Given user is on the OneWorkflow login page
      When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create trouble event
      And user switches to window 1
      Then trouble record form should appear in new tab
      When user clicks on sweden checkbox under affected BU's
      And user enters "SAO-427 Test Bulk Loading Error Message - Structure" in Title field
      And user selects request type as "Event" on trouble event page
      And user enters description as "SAO-427 Test Bulk Loading Error Message - Structure"
      And user clicks on save button
      Then ticket should be created and status should be assigned
      When user clicks on Diagnosis tab
      And user clicks on "Add Bulk Import" button
      And user switches to frame
      Then user should see bulk ci loading window
      When user clicks on "Manual Input" radio button
      And user enters impact from date as current date
      And user enters impact to date as current date +4 hours
      And user selects impact level as "Degradation of Service"
      And user enters hours as "3"
      And user enters "One Workflow" in manual CI search box
      Then user clicks on save button
      And user validates import message appears
      Then user clicks on ok button
      When user clicks on "Show Bulk Import" button
      Then user validates bulk ci loading table contains column names:"Submitter:Import Type:Date:Status"
      When user clicks on "Related CIs" tab
      Then user validates "One Workflow" is present under "CI Name"
      And user validates "Completed" is present under "Status"
      And user validates "total rows" as 1
      And user validates "Rows OK" as 1
      When user clicks on "Other Fields" tab
      Then user validates "Request ID" is not null
      And user validates "BIR_GUID" is not null
      And user validates "Submitter" is not null
      And user validates "Create Date" is not null
      And user validates "Last Modified By" is not null
      And user validates "Modified Date" is not null
      And user validates "Status" contains buttons "Pending:Checked:Importing:Completed:With Errors:Cancelled"
      When user clicks on bulk loading close button
