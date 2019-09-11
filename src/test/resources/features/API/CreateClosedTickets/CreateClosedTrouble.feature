@Create_Closed_Trouble
Feature: try to create trouble as closed
  Scenario: try to create trouble as closed

    Given user is on the OneWorkflow login page
    When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create trouble event
    And user switches to window 1
    Then trouble record form should appear in new tab
    When user changes status to "Closed"
    When user clicks on sweden checkbox under affected BU's
    And user enters "Test Closed Trouble Ticket" in Title field in Trouble event
    And user selects request type as "Customer" on trouble event page
    And user enters description as "Test Closed Trouble Ticket"
    And user selects fault position as "N/A:N/A" on trouble event page
    And user selects cause as "N/A:N/A:N/A" on trouble event page
    And user selects action dropdown as "N/A:N/A" on trouble event page
    And user enters closure info as "Test Ticket"
    Then user enters event end time as current time
    When user clicks on save button
    Then ticket should be created as closed
    And user validates ticket status as "Closed"


