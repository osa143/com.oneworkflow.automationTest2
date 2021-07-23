@SAO_4166 @IncidentCoverage
#cannot click refresh after wait time
Feature: SAO-4166 - OW - incorrect incident tickets keep coming

  Scenario: SAO-4166 - OW - incorrect incident tickets keep coming

    Given user is on the OneWorkflow login page
    When user logs in with valid user and password
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create change record
    Then user switches to window 1
    When user selects request type as "Standard Change"
    And user selects template as "All:IT:Other:TEST TEMPLATE [UAT] - Standard Change"
    Then user enters "Test" in the change builder field
    And user enters request start time as 3 minutes past from "Europe/London" timezone "yyyy/MM/dd HH:mm:ss" format
    And user enters request end time as 5 minutes past from "Europe/London" timezone "yyyy/MM/dd HH:mm:ss" format
    And user enters impact duration as "1" minutes
    Then user selects estimated impact as "No Impact"
    And user clicks save button
    And user adds CI "SE_CPE_FRECPE5" to change ticket with impact level "No Impact"
    Then user clicks on linked items tab
    And user selects target application first dropdown as "OS3 - Operations"
    And user selects target application second dropdown as "Caused by"
    And user waits 5 secs
    Then user clicks on create button under linked items
    And user switches to window 2
    Then user selects request type as "Customer" on trouble event page
    And user clicks save button
    Then user switches to window 1
    And user waits 3 secs
    And user clicks refresh button under linked items
    Then user validates 1 linked ticket availability
    And user clicks on send button and clicks yes on warning window
    And user waits for 5 minutes
    Then user clicks on ticket refresh button
    And user waits 3 secs
    And user clicks on linked items tab
    Then user validates 2 linked ticket availability
    And user validates assigned profile "CC IT" can be seen under linked items tab

