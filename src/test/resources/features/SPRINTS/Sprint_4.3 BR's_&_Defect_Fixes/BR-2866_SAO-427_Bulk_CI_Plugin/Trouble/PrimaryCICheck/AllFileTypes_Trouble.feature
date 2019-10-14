@AllFileTypes_Bulk_Loading_Primary_CI_Default_Settings @SAO-427
  #passed
Feature: checking of bulk loading additional definitions default settings
  Scenario Outline: user checks the bulk loading additional definitions default settings

    Given user is on the OneWorkflow login page
    And user logs in with valid user and password
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create trouble event
    And user switches to window 1
    Then trouble record form should appear in new tab
    When user clicks on sweden checkbox under affected BU's
    And user enters "SAO-427 Test Bulk Loading Primary CI Check" in Title field
    And user selects request type as "Event" on trouble event page
    And user enters description as "SAO-427 Test Bulk Loading Primary CI Check"
    And user clicks on save button
    Then ticket should be created and status should be assigned
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
    And user searches for "<fileTypes>" attachment and adds it
    And user clicks on attachment ok button
    And user switches to frame
    Then user validates attached document is visible
    Then user clicks on save button under bulk import
    And first error message should display as "The Uploaded File is now being processed..." on bulk ci window
    And second error message should display as "Please Check for the progress of this process in \"Show Bulk Import\". (ARNOTE 10000)" on bulk ci window
    And user waits 20 secs
    When user clicks on Show Bulk Import button
    And user switches to frame
    And user clicks on "Related CIs" tab
    And user validates "Dup. CIs" as "1" in row 1
    And user validates total rows as "10"
    And user validates Rows OK as "10"
    And user validates with errors as "0"
    And user validates with warnings as "0"
    Then user validates at least one CI has "Completed" under "Status"
    Then user clicks on bulk loading close button
    And user waits 5 secs
    When user clicks on ticket refresh button
    And user clicks on Diagnosis tab
    Then user validates primary ci as "SE_AP_alvesta-radmannen-ap1"
    And user logsOut and closes the browser
    And user switches to window 0

    Examples:
      |fileTypes                                                                                                  |
      |Test Attachments\10 CI's - Correct Names\CSV.csv |
#      |Test Attachments\10 CI's - Correct Names\FILE.xlsx|
#      |Test Attachments\10 CI's - Correct Names\XLS.xls|
#      |Test Attachments\10 CI's - Correct Names\TEXT.txt |