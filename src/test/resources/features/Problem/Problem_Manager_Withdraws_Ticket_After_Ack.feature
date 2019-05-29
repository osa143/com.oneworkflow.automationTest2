@Withdraw_Ticket_After_Ack
Feature:withdraw Ticket


  Scenario: withdraw ticket after Acknowledge

    Given User is on the OneWorkflow login page
    When user logs in with valid problem initiator credentials
    Then user successfully logged in to oneworkflow and agent console should be displayed
    When user clicks on create problem record
    Then problem record form should appear in new tab
    When user clicks on sweden checkbox under affected BU's
    When user enters "proactive investigation of Tohall_Copy" in Title field
    And user selects request type as Access Networks:RAN optimization
    And user enters description as "UAT Test1 withdraw after Ack"
    And user selects impact type as moderate:limited
    And user selects urgency as low
    And user clicks on save button on the problem form
    Then ticket should be created and status should be assigned
    And user gets ticket value
    Then user logouts and closes the browser
    Given User is on the OneWorkflow login page
    When user logs in with valid problem manager username "frvi96_auto" and password "Test@1234"
    Then user successfully logged in to oneworkflow and agent console should be displayed
    And user searches for previously created problem ticket
    And user opens Problem Ticket
    When user clicks on Ack button
    Then problem ticket status should be under investigation
    And change should also be reflected in the timeline.
    When user tries to change the status to withdrawn
    Then problem ticket status should be under investigation
    Then user logouts and closes the browser
    Given User is on the OneWorkflow login page
    When user logs in with valid problem initiator credentials
    Then user successfully logged in to oneworkflow and agent console should be displayed
    And user opens Problem Ticket
    When user tries to change the status to withdrawn
    Then problem ticket status should be under investigation
    Then user logouts and closes the browser

