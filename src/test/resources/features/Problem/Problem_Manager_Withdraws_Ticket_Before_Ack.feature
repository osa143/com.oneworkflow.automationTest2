@Pm_Withdraw_Ticket_Before_Ack
Feature: problem record


  Scenario: create ticket and save

    Given User is on the OneWorkflow login page
    When user logs in with valid problem initiator credentials
    Then user successfully logged in to oneworkflow and agent console should be displayed
    When user clicks on create problem record
    Then problem record form should appear in new tab
    When user clicks on sweden checkbox under affected BU's
    When user enters "proactive investigation of Tohall_Copy" in Title field
    And user selects request type as Access Networks:RAN optimization
    And user enters description as "UAT Test1 withdraw"
    And user selects impact type as moderate:limited
    And user selects urgency as low
    And user clicks on save button on the problem form
    Then ticket should be created and status should be assigned
    And user gets ticket value
    Then user logouts and closes the browser



