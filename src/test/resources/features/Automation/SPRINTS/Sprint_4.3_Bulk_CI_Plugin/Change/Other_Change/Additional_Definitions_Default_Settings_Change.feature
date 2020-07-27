@Bulk_Loading_Additional_Definitions_Default_Settings_Change @SAO-427 @other_change*
  #passed
Feature: checking of bulk loading additional definitions default settings
  Scenario: user checks the bulk loading additional definitions default settings

    Given user is on the OneWorkflow login page
    And user logs in with valid user and password
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
    And user enters start time as 24 hours fast from current sweden time in "MM/dd/YYYY HH:mm:ss" format
    And user enters end time as 28 hours fast from current sweden time in "MM/dd/YYYY HH:mm:ss" format
    And user gets request start and end time on change record page
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
    And user validates Impact Type default value is "Planned"
    Then multiple statuses "Planned:Un-Planned:(clear)" should be available in Impact Type dropdown
    And user validates "Category*" is visible on bulk CI loading window tagname "label"
    And user validates Category default value is "Actual"
    Then multiple statuses "Actual:Potential:(clear)" should be available in "Category*" dropdown
    And user validates "Level*" is visible on bulk CI loading window tagname "label"
    #Blank default value for level
    And user validates Level default value is ""
    And user validates "From*" is visible on bulk CI loading window tagname "label"
    Then user validates impact from time is same as request start time
    Then user validates impact to time is same as request end time
    And user validates "To+" is visible on bulk CI loading window tagname "label"
    And user validates "Upload File" is visible on bulk CI loading window tagname "label"
    And user validates "Manual Input" is visible on bulk CI loading window tagname "label"
    And user validates "Ignore Duplicate CIs" is visible on bulk CI loading window tagname "label"
    Then user clicks on bulk loading close button
    





