@All_File_Types_Bulk_Loading_Ignore_Duplicate_CI's_change @SAO-427
  #passed
  Feature: Bulk Loading ignore duplicate CI's
    Scenario Outline: Bulk Loading ignore duplicate CI's

      Given user is on the OneWorkflow login page
      And user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create change record
      Then user switches to window 1
      And user selects request type as "Normal Change"
      Then user selects title as "Mobile:CS Core (Voice)" on Change record page
      And user selects request category as "Software Installation" on change record page
      And user enters description as "TEST TICKET PLEASE IGNORE - SAO-427 Test Bulk Loading ignore duplicate CI's"
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
      And user validates Impact Type default value is "Planned"
      And user validates Category default value is "Actual"
     #Blank default value for level
      And user validates Level default value is ""
      Then user selects impact level as "No Impact"
      And user clicks on Ignore Duplicate CIs checkbox
      And user clicks on Upload Import File
      Then user clicks on choose file button
      #50CI's with duplicate
      And user searches for "<fileTypes>" attachment and adds it
      And user clicks on attachment ok button
      And user switches to frame
      Then user validates attached document is visible
      Then user clicks on save button under bulk import
      And first error message should display as "The Uploaded File is now being processed..." on bulk ci window
      And second error message should display as "Please Check for the progress of this process in \"Show Bulk Import\". (ARNOTE 10000)" on bulk ci window
      And user waits 59 secs
      When user clicks on Show Bulk Import button
      And user switches to frame
      When user clicks on "Related CIs" tab
      And user validates total rows as "50"
      And user validates Rows OK as "24"
      And user validates with errors as "24"
      And user validates with warnings as "2"
      And user validates warning message as "Multiple CIs named 'LT DNS SIP' were found, and the import job is configured to Ignore Duplicate CIs!" in row 12
      And user validates warning message as "Multiple CIs named 'LT DNS SIP' were found, and the import job is configured to Ignore Duplicate CIs!" in row 37
      And user validates "Status" as "With Warnings" in row 12
      And user validates "Status" as "With Warnings" in row 37
      Then user clicks on bulk loading close button
      And user logsOut and closes the browser
      And user switches to window 0


      Examples:
        |fileTypes                                                                                                  |
        |Test Attachments\50 CI's (WithDuplicates)\50CIsCSV.csv|
        |Test Attachments\50 CI's (WithDuplicates)\50CIsTextDOC.txt|
        |Test Attachments\50 CI's (WithDuplicates)\50CIsXLS.xls|
        |Test Attachments\50 CI's (WithDuplicates)\50CIsXLSX.xlsx|




