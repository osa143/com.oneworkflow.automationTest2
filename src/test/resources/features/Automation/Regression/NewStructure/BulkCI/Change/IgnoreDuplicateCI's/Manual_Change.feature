@Manual_Bulk_Loading_Ignore_Duplicate_CI's_change2 @SAO-427
  Feature: Bulk Loading ignore duplicate CI's
    Scenario: Bulk Loading ignore duplicate CI's

      Given user is on the OneWorkflow login page
      And user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create change record
      Then user switches to window 1
      And user selects request type as "Normal Change"
      Then user selects title as "Mobile:CS Core (Voice)" on Change record page
      And user selects request category as "Software Installation" on change record page
      And user enters description as "TEST TICKET PLEASE IGNORE - SAO-427 Test Bulk Loading CI not found Prompt Change"
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
      And user enters start time as 24 hours fast from current sweden time in "MM/dd/YYYY HH:mm:ss" format
      And user enters end time as 28 hours fast from current sweden time in "MM/dd/YYYY HH:mm:ss" format
      And user enters impact duration as "45" minutes
      And user selects estimated impact dropdown as "Degradation of Service"
      And user clicks on save button
      When user clicks on Diagnosis tab
      And user clicks on Add Bulk Import button
      And user switches to frame
      Then user should see bulk ci loading window
      When user selects impact level as "No Impact"
      And user clicks on Manual Input radio button
      And user clicks on Ignore Duplicate CIs checkbox
      And user enters "LT DNS SIP;LT DNS SIP;FI DNS Gi;FI DNS Gn;FI DNS ENUM" in manual CI search box
      Then user clicks on save button under bulk import
      And first error message should display as "The manually identified CIs are now being processed..." on bulk ci window
      And second error message should display as "Please Check for the progress of this process in \"Show Bulk Import\". (ARNOTE 10000)" on bulk ci window
      And user waits 3 secs
      When user clicks on Show Bulk Import button
      And user switches to frame
      When user clicks on "Related CIs" tab
      And user validates "Dup. CIs" as "2" in row 1
      And user validates total rows as "5"
      And user validates Rows OK as "0"
      And user validates with errors as "0"
      And user validates with warnings as "5"
      And user validates warning message as "Multiple CIs named 'LT DNS SIP' were found, and the import job is configured to Ignore Duplicate CIs!" in row 1
      And user validates warning message as "Multiple CIs named 'LT DNS SIP' were found, and the import job is configured to Ignore Duplicate CIs!" in row 2
      And user validates warning message as "Multiple CIs named 'FI DNS Gi' were found, and the import job is configured to Ignore Duplicate CIs!" in row 3
      And user validates warning message as "Multiple CIs named 'FI DNS Gn' were found, and the import job is configured to Ignore Duplicate CIs!" in row 4
      And user validates warning message as "Multiple CIs named 'FI DNS ENUM' were found, and the import job is configured to Ignore Duplicate CIs!" in row 5
      And user validates "Status" as "With Warnings" in row 1
      And user validates "Status" as "With Warnings" in row 2
      And user validates "Status" as "With Warnings" in row 3
      And user validates "Status" as "With Warnings" in row 4
      And user validates "Status" as "With Warnings" in row 5
      Then user clicks on bulk loading close button

