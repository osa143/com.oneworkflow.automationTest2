@Rescheduling_Agreed_Schedule_Impact_Records
# Tags: optional

Feature: Rescheduling - Agreed Schedule + Impact Records (Telia) [aR]

  Scenario: Rescheduling - Agreed Schedule + Impact Records (Telia) [aR]

    Given user is on the OneWorkflow login page
    When user logs in with valid username "cm_adminaccess1_auto" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create change record
    Then user switches to window 1
    When user clicks save button
    Then error message should display as "Please fill up all the mandatory fields in the Details Panel to create a Change Request. (ARERR 10000)" on change record page
    When user selects request type as "Standard Change"
    And user validates "Template*" is mandatory
    And user selects template as "All:IT:Other:TEST TEMPLATE [UAT] - Normal Change"
    When user enters "_" in the change builder field
    And user enters as "Test" in service and customer impact
    And user enters request start time as 10 minutes past from "Europe/London" timezone "MM/dd/yyyy HH:mm:ss" format
    And user enters request end time as 20 minutes past from "Europe/London" timezone "MM/dd/yyyy HH:mm:ss" format
    And user enters impact duration as "1" seconds
    Then user enters description as "Regression - Change Management Process"
    And user clicks on save button
    When user clicks on "Risk" tab
    And user gets current risk score value
    When user answers all risk questions as below
    And user selects answer as "Impact to other systems/technologies are unclear"
    And user selects answer as "No"
    And user selects answer as "Tested successfully, this is a pilot"
    And user selects answer as "Yes (outcome of the change can be instantly verified)"
    And user selects answer as "Yes"
    And user selects answer as "Simple"
    And user selects last answer as "Yes"
    Then user validates risk score gets updated
    When user adds CI "dummy%" to change ticket with impact level "No Impact"
    Then CI should be listed and displayed under the Diagnosis tab
    When user clicks on Send button
    Then user validates ticket status as "Assigned"
    When user clicks on Ack button
    Then user validates ticket status as "Analysis"
    When user changes status to "Approval Requested"
    And user clicks save button
    When user clicks on approval tab
    And user clicks on request thats pending approval
    And user clicks on approve button
    And user clicks save button
    Then user validates ticket status as "Approved"
    When user changes status to "Schedule Requested"
    And user clicks save button
    Then user validates ticket status as "Scheduled"
    When user clicks on Diagnosis tab
    And user validates ci "" impact status as inactive
    #step20

    When user changes status to "Approved"
    And user clicks save button
    When user clicks on schedule tab
    And user changes status to "Analyis"
    And user clicks save button
    And user validates agreed start as ""
    Then user validates agreed end as ""
    When user enters request start time as "5" minutes past from {string} timezone {string} format
    And user enters request end time as "10" minutes past from {string} timezone {string} format
    And user enters impact duration as "2" seconds
    And user selects estimated impact as "Degradation of Service"
    Then user clicks save button
    When user changes status to "Approval Requested"
    And user clicks save button
    And user validates agreed start as ""
    Then user validates agreed end as ""
    When user clicks on Diagnosis tab
    And user validates D as "0"
    And user validates H as "0"
    And user validates M as "0"
    Then user validates S as "2"
    When user clicks on approval tab
    And user clicks on request thats pending approval
    And user clicks on approve button
    And user clicks save button
    And user validates agreed start as request start
    Then user validates agreed end as request end
    When user clicks on Diagnosis tab
    And user validates ci "" impact status as inactive
    And user validates impact from time as agreed start time
    And user validates impact to time as agreed end time
    And user validates D as "0"
    And user validates H as "0"
    And user validates M as "0"
    Then user validates S as "2"





