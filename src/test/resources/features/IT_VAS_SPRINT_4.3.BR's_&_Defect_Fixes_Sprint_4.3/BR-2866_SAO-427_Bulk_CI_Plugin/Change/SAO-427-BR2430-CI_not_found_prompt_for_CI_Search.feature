@SAO-427-BR2430_CI_not_found_prompt_for_CI_Search_change @SAO-427
 #passed

Feature: checking of bulk loading Location details
  Scenario: user checks the bulk loading location details

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
    And user clicks on Add Bulk Import button
    And user switches to frame
    Then user should see bulk ci loading window
    And user validates "Impact Type*" is visible on bulk CI loading window tagname "label"
    And user validates "Category*" is visible on bulk CI loading window tagname "label"
    And user validates "Level*" is visible on bulk CI loading window tagname "label"
    And user validates "From*" is visible on bulk CI loading window tagname "label"
    And user validates "To+" is visible on bulk CI loading window tagname "label"
    And user validates "Ignore Duplicate CIs" is visible on bulk CI loading window tagname "label"
    And user validates "Upload File" is visible on bulk CI loading window tagname "label"
    And user validates "Manual Input" is visible on bulk CI loading window tagname "label"
    And user validates "Download File Template" is visible on bulk CI loading window tagname "label"
    And user validates "Upload Import File" is visible on bulk CI loading window tagname "div"
    And user validates Save is visible on bulk CI loading window
    And user validates Close is visible on bulk CI loading window
    When user clicks on Manual Input radio button
    And user enters impact from date as current date midnight on bulk CI loading window
    And user enters impact to date as current date midnight plus 4 hours on bulk CI loading window
    And user selects impact level as "Degradation of Service"
    And user enters "abcdefghijklmnopqrstuvwxyz" in manual CI search box
    Then user clicks on save button under bulk import
    And first error message should display as "The manually identified CIs are now being processed..." on bulk ci window
    And second error message should display as "Please Check for the progress of this process in \"Show Bulk Import\". (ARNOTE 10000)" on bulk ci window
    When user clicks on Show Bulk Import button
    Then user switches to frame
    And user validates related jobs has 1 entry
    Then user clicks on "Related CIs" tab
    And user validates "Warning/Error Messages" as "No CI named 'abcdefghijklmnopqrstuvwxyz' was found!" in row 1
    And user validates "Status" as "With Warnings" in row 1
    Then user clicks on bulk loading close button




