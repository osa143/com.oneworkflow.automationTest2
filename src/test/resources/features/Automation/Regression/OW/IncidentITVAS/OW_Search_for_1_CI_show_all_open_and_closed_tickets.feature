@OW_Search_for_1_CI_show_all_open_and_closed_tickets


Feature: Automation - OW - Search for 1 CI show all open and closed tickets

  Scenario: Automation - OW - Search for 1 CI show all open and closed tickets.[s]

    Given user is on the OneWorkflow login page
    When user logs in with valid user and password
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create trouble event
    And user switches to window 1
    Then trouble record form should appear in new tab
    When user clicks on sweden checkbox under affected BU's
    And user enters "Test" in Title field in Trouble event
    And user selects request type as "Customer" on trouble event page
    And user enters description as "Test"
    And user clicks on save button
    When user adds CI "sehan9087verk1" to the ticket
    Then user validates CI "sehan9087verk1" is listed
    When user selects SID console from agent console
    Then SID console page should be opened
    When user enters name field as "sehan9087verk1"
    And user clicks Search on ticket search
    And user clicks show history
    Then user validates ticket previously created is present
    And user opens previously created ticket
    And user clicks on Ack button
    Then user validates ticket status as "Work In Progress"
    When user changes status to "Cleared" on trouble event page
    And user selects fault position as "N/A:N/A" on trouble event page
    And user selects cause as "N/A:N/A:N/A" on trouble event page
    And user enters event end time as current time
    And user clicks save button
    Then user validates ticket status as "Cleared"
    When user changes status to "Closed" on trouble event page
    And user selects action dropdown as "N/A:N/A" on trouble event page
    And user enters closure info as "Test Info"
    And user clicks save button
    Then user validates ticket status as "Closed"