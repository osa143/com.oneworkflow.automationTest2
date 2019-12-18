@Withdraw_Ticket_After_Ack @problem
#passed
Feature:withdraw problem Ticket

  Scenario: withdraw ticket after Acknowledge

    Given user is on the OneWorkflow login page
    When user logs in with valid username "Tohall_copy" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create problem record
    And user switches to window 1
    Then problem record form should appear in new tab
    When user creates problem ticket with following details
      |               Title                  |RequestType     |Description                 |ImpactType      |Urgency|
      |Proactive investigation of Tohall_Copy|CPS:IT:Other|UAT Test1 withdraw after Ack|Moderate/Limited|Low    |
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
    When user clicks on Ack button
    Then problem ticket status should be under investigation
    And change should also be reflected in the timeline as "STATUS MODIFIED.  Status has changed from Assigned to Under Investigation."
    When user tries to change the status to "Withdrawn"
    Then problem ticket status should be under investigation
    Then user logsOut
    And user goes back to login page
    And user is on the OneWorkflow login page
    When user logs in with valid username "Tohall_copy" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    And user clicks on search and selects open search forms and problem record
    And user switches to window 3
    And user enters Problem Ticket
    And user clicks Search on ticket search
    When user verifies status is read only
    Then problem ticket status should be under investigation

