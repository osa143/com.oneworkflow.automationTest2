@SAO-427-BR2865-Bulk_Loading_Ignore_Duplicate_CI's_Trouble
  Feature: Bulk Loading ignore duplicate CI's
    Scenario: Bulk Loading ignore duplicate CI's

      Given user is on the OneWorkflow login page
      When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
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
      And user clicks on Add Bulk Import button
      And user switches to frame
      Then user should see bulk ci loading window
      And user validates Impact Type default value is "Un-Planned"
      Then multiple statuses "Planned:Un-Planned:(clear)" should be available in Impact Type dropdown
      And user validates Category default value is "Actual"
      Then multiple statuses "Actual:Potential:(clear)" should be available in "Category*" dropdown
    #Blank default value for level
      And user validates Level default value is ""
      Then user selects impact level as "No Impact"
      And user clicks on Upload Import File
      Then user clicks on choose file button
      #50CI's XLS with duplicate
      And user searches for "C:\Users\mahesh vaddegani\Downloads\Test Case Attachments 2\TemplatesForBulkCITests\50 CI's (WithDuplicates)\50CIsXLS" attachment and adds it
      And user clicks on attachment ok button
      And user switches to frame
      Then user validates attached document is visible
      Then user clicks on save button under bulk import
      And first error message should display as "The Uploaded File is now being processed..." on bulk ci window
      And second error message should display as "Please Check for the progress of this process in \"Show Bulk Import\". (ARNOTE 10000)" on bulk ci window
      And user waits 3 secs
      When user clicks on Show Bulk Import button
      And user switches to frame
      When user clicks on "Related CIs" tab
      And user validates total rows as "50"
      And user validates Rows OK as "24"
      And user validates with errors as "24"
      And user validates with warnings as "2"
      And user validates warning message as "Multiple CIs named 'LT DNS SIP' were found, and the import job is configured to Ignore Duplicate CIs!"
      And user validates status message as "Completed (With Warnings)"
      Then user clicks on close button on bulk update window

