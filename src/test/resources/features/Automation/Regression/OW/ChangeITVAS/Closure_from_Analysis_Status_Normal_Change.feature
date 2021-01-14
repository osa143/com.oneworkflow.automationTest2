@Closure_from_Analysis_Status_Normal_Change


Feature: Closure from Analysis Status - Normal Change [SaR]

  Scenario: Closure from Analysis Status - Normal Change [SaR]

    Given user is on the OneWorkflow login page
    When user logs in with valid username "ow_basic2_auto" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create change record
    Then user switches to window 1
    When user creates change ticket with following details
      |RequestType  |Title            |RequestCategory|Description     |Reason|Priority|ChangeBuilder        |Implementation    |TestPlan|RollBack    |CommPlan|VerOfFunctionality|Risk   |ServiceCustomerImpact|ImpactDuration|EstimatedImpact|
      |Normal Change|IT:Mobile:Billing|Cable splicing |Correcting error|none  |Major   |Closure from analysis|New implementation|Yes     |Not possible|CommPlan|Not possible      |No Risk|Test ticket no impact|5             |No Impact      |
    And user gets ticket value
    And user adds CI "SE_EPG_FREEPG1" to change ticket with impact level "No Impact"
    Then CI should be listed and displayed under the Diagnosis tab
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
    When user clicks on Send button
    Then user validates ticket status as "Assigned"
    And user gets change ticket value
    When user clicks on Send button
    Then user validates ticket status as "Assigned"
    When user logsOut
    Then user goes back to login page
    When user logs in with valid username "cm_appadmin1_auto" and password as "Test@1234"
    And user successfully logged in to OneWorkflow and agent console should be displayed
    And user selects search menu as "Open Search Form:Change Record/Project/Freeze"
    And user switches to window 2
    Then user enters ticket previously created and searches
    When user clicks on Ack button
    And user validates ticket status as "Analysis"
    Then multiple statuses "Analysis:Pending:Approval Requested:Withdrawn:(clear)" should be available in "Status" dropdown
    When user logsOut
    And user switches to window 1
    Then user goes back to login page
    When user logs in with valid username "cm_adminaccess1_auto" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    And user selects search menu as "Open Search Form:Change Record/Project/Freeze"
    And user switches to window 2
    Then user enters ticket previously created and searches
    When user clicks on "Schedule" tab
    Then multiple statuses "Analysis:Pending:Approval Requested:Withdrawn:Closed:(clear)" should be available in "Status" dropdown
    When user changes status to "Closed"
    And user enters review details as "Test Review Details"
    And user selects closure code as "Test Ticket"
    Then user changes status to "Analysis"
    And user selects actual impact as "No Impact"
    And user selects completed code as "Successful"
    Then user changes status to "Closed"
    When user clicks on Diagnosis tab
    And user right clicks on CI "SE_EPG_FREEPG1" and clears impact
    And user should see confirmation message and clicks on yes button
    And user clicks save button
    Then user validates ticket status as "Closed"