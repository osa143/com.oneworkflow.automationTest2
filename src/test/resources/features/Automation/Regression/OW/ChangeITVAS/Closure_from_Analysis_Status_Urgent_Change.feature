@Closure_from_Analysis_Status_Urgent_Change2 @OW_Change


Feature: Closure from Analysis Status - Urgent Change [SaR]
  Scenario: Closure from Analysis Status - Urgent Change [SaR]

    Given user is on the OneWorkflow login page
    When user logs in with valid username "ow_basic2_auto" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create change record
    Then user switches to window 1
    When user creates change ticket with following details
      |RequestType  |Title            |RequestCategory|Description     |Reason|Priority|ChangeBuilder        |Implementation    |TestPlan|RollBack    |CommPlan|VerOfFunctionality|Risk   |ServiceCustomerImpact|ImpactDuration|EstimatedImpact|
      |Urgent Change|IT:Mobile:Billing|Cable splicing |Correcting error|none  |Major   |Closure from analysis|New implementation|Yes     |Not possible|CommPlan|Not possible      |No Risk|Test ticket no impact|5             |No Impact      |
    And user clicks on save button
    And user gets ticket value
    And user adds CI "Dummy" to change ticket with impact level "No Impact"
    Then CI should be listed and displayed under the Diagnosis tab
    When user clicks on "Risk" tab
    And user gets current risk score value
    When user answers all risk questions as below
    And user selects answer as "A. No"
    And user selects answer as "B. Impact to other systems/technologies are unclear!"
    And user selects answer as "D. \"Only\" Consumer customers affected."
    And user selects answer as "A. Yes"
    And user selects answer as "A. Yes"
    And user selects answer as "A. Yes (outcome of the Change can be instantly verified)"
    And user selects answer as "B. No"
    And user selects answer as "A. No"
    And user selects last answer as "A. No"
    Then user validates risk score gets updated
    When user clicks on Send button
    Then user validates ticket status as "Assigned"
    When user logsOut
    Then user goes back to login page
    When user logs in with valid username "cm_appadmin1_auto" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
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
    And user enters ticket previously created and searches
    When user clicks on ticket refresh button
    Then multiple statuses "Analysis:Pending:Approval Requested:Withdrawn:Closed:(clear)" should be available in "Status" dropdown
    When user changes status to "Closed"
    And user enters review details as "Test Review Details"
    And user selects closure code as "Test Ticket"
    When user clicks on "Schedule" tab
    And user enters actual start date as current time
    And user enters actual end as current time
    And user selects actual impact as "No Impact"
    And user selects completed code as "Successful"
    When user clicks on Diagnosis tab
    And user right clicks on CI "Dummy" and clears impact
    And user should see confirmation message and clicks on yes button
    And user clicks save button
    Then user validates ticket status as "Closed"
