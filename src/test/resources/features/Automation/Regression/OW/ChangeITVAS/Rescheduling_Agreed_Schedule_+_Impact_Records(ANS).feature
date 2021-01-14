@Rescheduling_Agreed_Schedule_Impact_Records

Feature: Rescheduling - Agreed Schedule + Impact Records (ANS)

  Scenario: Rescheduling - Agreed Schedule + Impact Records (ANS)

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