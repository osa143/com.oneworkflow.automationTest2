@Initiator_Link_Tickets @ProblemRegression
  #passed  #CI search window
  Feature: Initiator link tickets
  Scenario: Initiator link tickets - user should be able to link different types of tickets together

    Given user is on the OneWorkflow login page
    When user logs in with valid username "tohall_copy" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
#    When user clicks on agent console create problem record
    When user clicks on create problem record
    And user switches to window 1
    Then problem record form should appear in new tab
    When user creates problem ticket with below details
      |Title                                 |RequestType |Description           |ImpactType      |Urgency|
      |Proactive investigation of Tohall_Copy|CPS:IT:Other|UAT Test2 Linked items|Moderate/Limited|Low    |
#    Then ticket should be created and status should be assigned
    When user clicks on create problem record
    And user switches to window 2
    Then problem record form should appear in new tab
    When user creates problem ticket with below details
      |Title                                 |RequestType |Description                            |ImpactType      |Urgency|
      |Proactive investigation of Tohall_Copy|CPS:IT:Other|UAT Test2 Linked items - Linked problem|Moderate/Limited|Low    |
#    Then ticket should be created and status should be assigned
    And user gets ticket value
    When user clicks on create trouble event
    And user switches to window 3
    Then trouble record form should appear in new tab
    When user clicks on sweden checkbox under affected BU's
#    When user clicks on OP sweden checkbox under affected BU's
    And user enters "A Problem Test" in Title field
    And user selects request type as "Customer" on trouble event page
    And user enters description as "A Customer Complaint"
    And user clicks on save button
    Then ticket should be created and status should be assigned
    And user gets trouble ticket value
    When user clicks on create change record
#    When user clicks on agent console create change record
    And user switches to window 4
    When user creates change ticket with following details
      |RequestType  |Title            |RequestCategory|Description     |Reason       |Priority|ChangeBuilder      |Implementation|TestPlan   |RollBack   |CommPlan   |VerOfFunctionality|Risk   |ServiceCustomerImpact|ImpactDuration|EstimatedImpact       |
      |Normal Change|IT:Other         |Cable splicing |Correcting error|Test Ticket  |Info    |Change_Automation_1|Test Ticket   |Test Ticket|Test Ticket|Test Ticket|Test Ticket       |No Risk|Test ticket no impact|      3       |Degradation of Service|
    Then user clicks on Risk tab
    And user selects answer as "Impact to other systems/technologies are unclear"
    And user selects answer as "No"
    And user selects answer as "Tested successfully, this is a pilot"
    And user selects answer as "Yes (outcome of the change can be instantly verified)"
    And user selects answer as "Yes"
    And user selects answer as "Simple"
    And user selects last answer as "No"
    And user clicks on save button
    Then user adds CI "SE_AAA_AAA99SE" to change ticket with impact level "No Impact"
    Then CI should be listed and displayed under the Diagnosis tab
    When user clicks on Send button
    And user waits
    Then ticket should be created and status should be assigned
    And user gets change ticket value
    And user switches to window 1
    When user clicks on linked items tab
    And user selects target application first dropdown as "OS3 - Problem"
    And user selects target application second dropdown as "Related to"
    When user clicks on link button under linked items tab
    Then select target request window should open
    And user switches to frame
    And user enters ticket in ticket ID+ field
    And user clicks on the search button on select target request
    And user clicks accept button
#    When user clicks on linked items tab
    And user selects target application first dropdown as "OS3 - Change"
    And user selects target application second dropdown as "Caused by"
    When user clicks on link button under linked items tab
    Then select target request window should open
    And user switches to frame
    And user enters change ticket in ticket ID+ field
    And user clicks on the search button on select target request
    And user clicks accept button
    When user clicks on linked items tab
    And user selects target application first dropdown as "OS3 - Operations"
    And user selects target application second dropdown as "Is related to"
    When user clicks on link button under linked items tab
    Then select target request window should open
    And user switches to frame
    And user enters trouble ticket in ticket ID+ field
    And user clicks on the search button on select target request
    And user clicks accept button
    When user selects target application first dropdown as "(clear)"
    Then user validates 3 linked ticket availability




