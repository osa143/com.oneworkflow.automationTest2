@SAO_453

Feature: SAO-453 - Missing Interested Party Types (ISO, ISM...)

  Scenario: SAO-453 - Missing Interested Party Types (ISO, ISM...)

    Given user is on the OneWorkflow login page
    When user logs in with valid username "Change_Automation_9" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create change record
    Then user switches to window 1
    When user selects request type as "Standard Change"
    And user selects template as "All:IT:Other:NSO , new packages install"
    And user enters as "Automation Test" in service and customer impact
    And user enters request start time as 10 minutes past from "Europe/London" timezone "MM/dd/yyyy HH:mm:ss" format
    And user enters request end time as 30 minutes past from "Europe/London" timezone "MM/dd/yyyy HH:mm:ss" format
    And user enters impact duration as "8" minutes
    Then user enters description as "Regression - Change Management Process"
    Then user enter "Testing" in the change builder field
    And user clicks on save button
    Then user clicks on "Diagnosis" tab
    And user adds CI "One Workflow" to change ticket with impact level "No Impact"
    And user clicks on save button
    And CI should be listed and displayed under the Diagnosis tab
    Then user clicks on Send button
    And user waits 5 secs
    Then user enters as "test" in Change Builder field
    And user switches to frame
    And user waits 4 secs
    Then user validates multiple options "Additional Access:Change Builder:Change Initiator:Contact:Custom1:Custom2:Requested By:Requested For:Solution Manager:Solution Owner:Vendor:(clear)" should be available in Type dropdown
    And user selects type as "Change Builder" under interested parties
    Then user enters "Change_Automation_3" in login name plus field
    And user clicks on search under add interested party
    And user highlights user "Change_Automation_3" under interested parties
    Then user clicks on add button under interested parties
