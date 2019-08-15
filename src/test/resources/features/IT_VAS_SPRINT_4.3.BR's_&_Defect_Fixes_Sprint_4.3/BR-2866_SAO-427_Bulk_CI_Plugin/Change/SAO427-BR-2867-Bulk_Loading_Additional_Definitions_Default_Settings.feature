@SAO-427-BR2862-Bulk_Loading_Additional_Definitions_Default_Settings_Change @SAO-427
Feature: checking of bulk loading additional definitions default settings
  Scenario: user checks the bulk loading additional definitions default settings

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
    And user logs change start time
    And user enters request end time 28 hours ahead of current date
    And user logs change end time
    And user enters impact duration as "45" minutes
    And user selects estimated impact dropdown as "Degradation of Service"
    And user clicks on save button
    And user waits
    Then user validates availability of tabs "Timeline:Diagnosis:Risk:Schedule:Interested Parties:Approval:Notifications:Linked Items:Work Orders:Service Level:Related Project:Service Info:Telenor" on change record page
    When user clicks on Diagnosis tab
    And user clicks on "Add Bulk Import" button
    And user switches to frame
    Then user should see bulk ci loading window
    And user validates "Impact Type*" is present
    And user validates "Impact Type*" default value is "Un-Planned"
    Then multiple statuses "Planned:Un-Planned:(clear)" should be available in "Impact Type*" dropdown
    And user validates "Category*" is present
    And user validates "Category*" default value is "Actual"
    Then multiple statuses "Actual:Potential:(clear)" should be available in "Category*" dropdown
    And user validates "Level*" is present
    #Blank default value for level
    And user validates "Level" default value is ""
    And user validates "From*" is visible
    And user validates "To+" is visible
    And user validates "To+" is visible
    And user validates "Hrs" is visible
    And user validates "Mins" is visible
    And user validates "Days" is visible
    And user validates "Secs" is visible
    Then user validates CIs input type "Upload File" is present
    And user validates CIs input type "Manual Input" is present
    And user validates error handling contains "Ignore Duplicate CIs"
    Then user clicks on close button under bulk loading
    





