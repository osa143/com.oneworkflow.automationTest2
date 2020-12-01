@Standard_Change_Autoclosure_Event
  #runmanually

Feature: Standard Change Autoclosure - Event

  Scenario: Standard Change Autoclosure - Event

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
    And user enters request start time as 10 minutes past from "Europe/London" timezone "MM/dd/yyyy HH:mm:ss" format
    And user enters request end time as 20 minutes past from "Europe/London" timezone "MM/dd/yyyy HH:mm:ss" format
    And user enters impact duration as "0" minutes
    Then user enters description as "Regression - Change Management Process"
    And user clicks on save button
    When user adds CI "FI_BSC_HKPB100" to change ticket with impact level "No Impact"
    Then CI should be listed and displayed under the Diagnosis tab
    When user clicks on Send button
    Then user validates ticket status as "Assigned"
    And user waits for 5 minutes

    When user clicks on create trouble event
    And user switches to window 2
    Then trouble record form should appear in new tab
    When user clicks on sweden checkbox under affected BU's
    And user enters "Test Event" in Title field in Trouble event
    And user selects request type as "Event" on trouble event page
    And user enters description as "Test Event"
    And user clicks save button
    When user adds CI "FI_BSC_HKPB100" to the ticket with impact level "Loss of Service"
    Then CI should be listed and displayed under the Diagnosis tab
    When user clicks on linked items tab
    Then user validates linked ticket availability under linked items
    And user clicks on Ack button
    When user changes status to "Cleared" on trouble event page
    And user clicks on Diagnosis tab
    And user right clicks on CI "FI_BSC_HKPB100" and selects "Impact:Update"
    Then user switches to frame
    And user enters impact from time as past on impact details bulk update window
    And user enters impact to time as past on impact details bulk update window
    Then user clicks confirm checkbox
    And user clicks on bulk update save button
    And user right clicks on CI "FI_BSC_HKPB100" and clears impact
    When user selects fault position as "N/A:N/A" on trouble event page
    And user selects cause as "N/A:N/A:N/A" on trouble event page
    And user enters event end time as current time
    And user clicks save button
    Then user validates ticket status as "Cleared"
    When user switches to window 1
    And user clicks on main page refresh
    Then user validates ticket status as "Implementation"
    And user waits for 5 minutes
    When user clicks on main page refresh
    And user validates ticket status as "Completed"
    And user validates completed code as "Successful"
    And user validates actual start time as current date time
    And user validates actual end time as request end time
    When user waits for 10 minutes
    And user clicks on main page refresh
    Then user validates ticket status as "Closed"
