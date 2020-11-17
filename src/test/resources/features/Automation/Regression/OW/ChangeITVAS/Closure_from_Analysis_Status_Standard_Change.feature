@Closure_from_Analysis_Status_Standard_Change


Feature: Closure from Analysis Status - Standard Change [SaR]
  Scenario: Closure from Analysis Status - Standard Change [SaR]

    Given user is on the OneWorkflow login page
    When user logs in with valid username "ow_basic2_auto" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create change record
    Then user switches to window 1
    When user clicks save button
    Then error message should display as "Please fill up all the mandatory fields in the Details Panel to create a Change Request. (ARERR 10000)" on change record page
    When user selects request type as "Standard Change"
    And user validates "Template*" is mandatory
    And user selects template as "All:IT:Other:TEST TEMPLATE [UAT] - Standard Change"
    When user enters "_" in the change builder field
    And user enters as "Test" in service and customer impact
    And user enters request start time as 5 minutes past from "Europe/London" timezone "MM/dd/yyyy HH:mm:ss" format
    And user enters request end time as 10 minutes past from "Europe/London" timezone "MM/dd/yyyy HH:mm:ss" format
    And user enters impact duration as "0" minutes
    Then user enters description as "Regression - Change Management Process"
    And user clicks on save button
    And user adds CI "Dummy" to change ticket with impact level "No Impact"
    And user gets change ticket value
    Then CI should be listed and displayed under the Diagnosis tab
    When user logsOut
    Then user goes back to login page
    When user logs in with valid username "cm_appadmin1_auto" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    And user opens search change form
    Then user enters ticket previously created and searches
    When user clicks on Send button
    Then user validates ticket status as "Assigned"
    When user clicks on Ack button
    And user validates ticket status as "Analysis"
    Then multiple statuses "Analysis:Pending:Approval Requested:Withdrawn:(clear)" should be available in "Status*" dropdown
    When user logsOut
    Then user goes back to login page
    When user logs in with valid username "cm_adminaccess1_auto" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    And user opens search change form
    Then user enters ticket previously created and searches
    When user clicks on "Schedule" tab
    Then multiple statuses "Analysis:Pending:Approval Requested:Withdrawn:Closed:(clear)" should be available in "Status*" dropdown
    When user changes status to "Closed"
    And user enters review details as "Test Review Details"
    And user selects closure code as "Test Ticket"
    Then user changes status to "Analysis"
    When user enters actual schedule start date as ""
    And user enters actual schedule end date as ""
    And user selects actual impact as "No Impact"
    And user selects completed code as "Successful"
    Then user changes status to "Closed"
    When user clicks on Diagnosis tab
    And user right clicks on CI "Dummy" and clears impact for all CI's
    And user clicks save button
    Then user validates ticket status as "Closed"



