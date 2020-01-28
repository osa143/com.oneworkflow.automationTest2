@Pm_Withdraw_Ticket_Before_Ack @problem @Reg_Problem
  #passed

Feature: problem record
  Scenario: problem manager withdraws ticket before Ack

    Given user is on the OneWorkflow login page
    When user logs in with valid username "Tohall_copy" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create problem record
    And user switches to window 1
    Then problem record form should appear in new tab
    When user creates problem ticket with following details
      |               Title                  |RequestType     |Description                 |ImpactType      |Urgency|
      |Proactive investigation of Tohall_Copy|CPS:IT:Other|UAT Test withdraw before Ack|Moderate/Limited|Low    |
    Then ticket should be created and status should be assigned
    And user gets ticket value
    Then user logsOut
    And user goes back to login page
    When user logs in with valid username "frvi96_auto" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    And user clicks on search and selects open search forms and problem record
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






