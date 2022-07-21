@Pm_Withdraw_Ticket_Before_Ack @ProblemRegression
  #passed
Feature: Problem Manager Withdraws ticket before Ack
  Scenario: PM Withdraw after ack - problem manager withdraws ticket before Ack

    Given user is on the OneWorkflow login page
    When user logs in with valid username "Tohall_copy2" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
#    When user clicks on create problem record
    When user clicks on agent console create problem record
    And user switches to window 1
    Then problem record form should appear in new tab
    When user creates problem ticket with below details
      |Title                                  |RequestType            |Description                  |ImpactType      |Urgency|
      |proactive investigation of: frvi96_auto|XX_Test:Functional Test|PM withdraw ticket before Ack|Moderate/Limited|Low    |
    Then ticket should be created and status should be assigned
    And user gets ticket value
    Then user logsOut
    And user navigates back to login page using URL
#    And user goes back to login page
    When user logs in with valid username "frvi96_auto" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    And user clicks agent console search menu
    And user selects agent console open search form
    And user selects agent console search problem
    And user switches to window 2
    And user enters Problem Ticket
    And user clicks Search on ticket search
    When user changes status to "Withdrawn" on problem record page
    And user clicks on save button on the problem form
    And user clicks on yes on warning window
    Then an error message "Required field (without a default) not specified : Withdrawn Reason (ARERR 9424)	" should appear with red boarder around withdrawn reason
    When user selects withdrawn reason as false alarm and clicks save
    And user should see confirmation message and clicks on yes button
    Then problem ticket should be withdrawn






