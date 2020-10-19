@SAO_687

Feature: SAO-687 -  Domain coordinator should NOT be able to detach CI's from the change ticket that was created by another initiator

  Scenario: SAO-687 -  Domain coordinator should NOT be able to detach CI's from the change ticket that was created by another initiator

    Given user is on the OneWorkflow login page
    When user logs in with valid username "ow_basic1" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create change record
    Then user switches to window 1
    When user selects request type as "Standard Change"
    And user selects template as "All:IT:Other:TEST TEMPLATE [UAT] - Standard Change"
    And user enters as "Automation Test" in service and customer impact
    And user enters request start time as 10 minutes past from "Europe/London" timezone "MM/dd/yyyy HH:mm:ss" format
    And user enters request end time as 30 minutes past from "Europe/London" timezone "MM/dd/yyyy HH:mm:ss" format
    And user enters impact duration as "8" minutes
    Then user enters description as "Regression - Change Management Process"
    When user enters "CI B2" in the change builder field
    And user clicks on save button
    Then user clicks on "Diagnosis" tab
    And user adds CI "One Workflow" to change ticket with impact level "No Impact"
    And user clicks on save button
    And CI should be listed and displayed under the Diagnosis tab
    Then user clicks on Send button
    And user validates ticket status as "Assigned"
    And user gets change ticket value
    Then user logsOut from One workflow
    And user goes back to login page
    And user waits 5 secs
    When user logs in with valid username "dc_itse1" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user selects search menu as "Open Search Form:Change Record/Project/Freeze"
    Then change record form should open in a new tab
    And user switches to window 2
    And user enters change ticket in ticket ID+ field
    Then user clicks Search on ticket search
    And ticket should be displayed
    Then user clicks on Diagnosis tab
    And user validates CI Search is disabled
   # And user validates Detach&Create is disabled


