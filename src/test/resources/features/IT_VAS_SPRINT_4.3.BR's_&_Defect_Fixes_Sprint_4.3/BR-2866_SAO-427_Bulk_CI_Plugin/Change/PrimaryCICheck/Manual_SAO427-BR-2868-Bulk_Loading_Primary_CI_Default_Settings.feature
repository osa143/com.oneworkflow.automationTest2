@SAO-427-BR2862-Bulk_Loading_Primary_CI_Default_Settings @SAO-427
Feature: checking of bulk loading additional definitions default settings
  Scenario: user checks the bulk loading additional definitions default settings

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
    When user clicks on Manual Input radio button
    Then user enters "SE_AP_alvesta-radmannen-ap1;  SE_AP_alvesta-radmannen-ap2;  SE_AP_alvesta-radmannen-ap3;  SE_AP_alvesta-radmannen-ap4;" in manual CI search box
    Then user clicks on save button under bulk import
    And first error message should display as "The manually identified CIs are now being processed..." on bulk ci window
    And second error message should display as "Please Check for the progress of this process in \"Show Bulk Import\". (ARNOTE 10000)" on bulk ci window
    And user waits for 1 minutes
    When user clicks on ticket refresh button
    And user clicks on Diagnosis tab
    Then user validates primary ci as "SE_AP_alvesta-radmannen-ap1"