@New_Interested_Parties_&_Impact_Values3


Feature: New Interested Parties & Impact Values [SaR]
  Scenario: New Interested Parties & Impact Values [SaR]

    Given user is on the OneWorkflow login page
    When user logs in with valid username "cm_adminaccess1_auto" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create change record
    Then user switches to window 1
    When user clicks save button
    Then error message should display as "Please fill up all the mandatory fields in the Details Panel to create a Change Request. (ARERR 10000)" on change record page
    When user selects request type as "Standard Change"
    And user clicks on sweden checkbox under affected BU's
    And user selects template as "All:IT:Other:TEST TEMPLATE [UAT] - Standard Change"
    When user enters "Test ticket" in the change builder field
    And user enters as "Test" in service and customer impact
    And user enters request start time as 5 minutes past from "Europe/London" timezone "MM/dd/yyyy HH:mm:ss" format
    And user enters request end time as 10 minutes past from "Europe/London" timezone "MM/dd/yyyy HH:mm:ss" format
    And user enters impact duration as "0" minutes
    Then user enters description as "Regression - Change Management Process"
    And user clicks on save button
    When user clicks on "Interested Parties" tab
    And user clicks on add button under interested parties
    And user switches to frame
    Then dropdown values "Additional Access:Change Builder:Change Initiator:Contact:Custom1:Custom2:Requested By:Requested For:Solution Manager:Solution Owner:Vendor:(clear)" should be available in "Type" dropdown
    And user clicks on cancel button on interested parties window
    When user clicks on Diagnosis tab
    And user clicks on CI search button
    And user switches to frame
    Then dropdown values "Degradation of Service:Loss of Service:No Impact:(clear)" should be available in "Level*" dropdown
    And user clicks on close button on CI search window
    When user clicks on "Schedule" tab
    Then dropdown values "Degradation of Service:Loss of Service:No Impact:(clear)" should be available in "Estimated Impact" dropdown
