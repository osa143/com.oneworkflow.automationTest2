@Withdraw_Ticket_After_Ack
Feature:withdraw problem Ticket


  Scenario: withdraw ticket after Acknowledge

    Given user is on the OneWorkflow login page
    When user logs in with valid username "Tohall_copy" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create problem record
    Then problem record form should appear in new tab
    When user clicks on sweden checkbox under affected BU's
    When user enters "proactive investigation of Tohall_Copy" in Title field
    And user selects request type as "Access Networks:RAN Optimization"
    And user enters description as "UAT Test1 withdraw after Ack"
    And user selects impact type as moderate:limited
    And user selects urgency as low
    And user clicks on save button on the problem form
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
    And change should also be reflected in the timeline as ""
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
    When user tries to change the status to "Withdrawn"
    Then problem ticket status should be under investigation
    Then user logsOut and closes the browser

