@Copy_to_New_02_NoCI

Feature: Copy to New 02 (CIs) [aR]

  Scenario: Copy to New 02 (CIs) [aR]

    Given user is on the OneWorkflow login page
    When user logs in with valid username "ChangeInitiatorInternal1" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create change record
    And user switches to window 1
    And user enters expected alarms as "Test Expected Alarms"
    And user enters project code as "Test Project Code"
    And user creates change ticket with following details
      |RequestType  |Title            |RequestCategory|Description     |Reason|Priority|ChangeBuilder        |Implementation    |TestPlan|RollBack    |CommPlan|VerOfFunctionality|Risk   |ServiceCustomerImpact|ImpactDuration|EstimatedImpact|
      |Normal Change|IT:Mobile:Billing|Cable splicing |Correcting error|none  |Major   |Closure from analysis|New implementation|Yes     |Not possible|CommPlan|Not possible      |No Risk|Test ticket no impact|5             |No Impact      |
    Then user adds CI "One Workflow" to change ticket with impact level "No Impact"
    When user opens copy to new option
    Then user validates confirmation for copy to new box is displayed
    And user closes confirmation for copy to new by pressing x
    Then user opens copy to new option
    And user closes confirmation for copy to new by pressing cancel button
    When user opens copy to new option
    Then user clicks no on copy to new popup
    And user switches to window 2
    When user clicks on CTI details under sections
    And user clicks on location under sections
    And user clicks on owner under sections
    And user clicks on assignment under sections
    And user clicks on On Hold under sections
    And user clicks on vendor under sections
    And user clicks attachments under sections
    Then user clicks on closure under sections
    And user validates new CR ticket details are same as original CR ticket details
    When user enters request start time 24 hours ahead of current date
    And user enters request end time 192 hours ahead of current date
    And user enters impact duration as "0" Days
    And user enters impact duration as "0" hours
    And user enters impact duration as "5" minutes
    And user enters impact duration as "0" seconds
    And user enters as "Test" in service and customer impact
    And user selects estimated impact as "No Impact"
    Then user clicks save button
    When user clicks on Diagnosis tab
    And user validates no CI's are on the ticket
    Then user clicks on ticket refresh button
    When user opens copy to new option
    Then user validates confirmation message for copy to new
    And user closes confirmation for copy to new by pressing cancel button
    Then user switches to window 2
    When user opens copy to new option
    Then user clicks no two on copy to new popup
    When user opens copy to new option
    And user click yes on copy to new popup
    Then user switches to window 3
    Then user enters as "Test" in service and customer impact
    When user enters request start time 24 hours ahead of current date
    And user enters request end time 192 hours ahead of current date
    And user enters impact duration as "0" Days
    And user enters impact duration as "0" hours
    And user enters impact duration as "5" minutes
    And user enters impact duration as "0" seconds
    And user selects estimated impact as "No Impact"
    Then user clicks save button
    When user clicks on Diagnosis tab
    And user validates no CI's are on the ticket
