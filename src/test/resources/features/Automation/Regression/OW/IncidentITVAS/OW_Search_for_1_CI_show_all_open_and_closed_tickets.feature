@Search_for_1_CI_show_all_open_and_closed_tickets

Feature: Automation - OW - Search for 1 CI show all open and closed tickets

  Scenario: Automation - OW - Search for 1 CI show all open and closed tickets.[s]

    Given user is on the OneWorkflow login page
    When user logs in with valid user and password
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create trouble event
    And user switches to window 1
    Then trouble record form should appear in new tab
    When user clicks on sweden checkbox under affected BU's
    And user enters "Search for a CI show all open and closed tickets" in Title field in Trouble event
    And user selects request type as "Customer" on trouble event page
    And user enters description as "Search for a CI show all open and closed tickets"
    And user clicks on save button
    And user gets trouble ticket value
    When user adds CI "sehan9087verk1" to the ticket
    And user clicks on Diagnosis tab
    Then user validates CI "sehan9087verk1" is listed
    When user selects "Console" menu as "SID Console"
    And user switches to window 2
    Then SID console page should be opened
    When user enters "sehan9087verk1" in name field
    And user clicks on search button on CI search window
    And user clicks on show history
    Then "New:Assigned:Work In Progress:Cleared:Closed" tickets should be displayed under SID console show history tickets
    And user validates ticket previously created is present
    And user double clicks on ticket under SID console matching ticket to open
    And user switches to window 3
    And user clicks on Ack button
    And user validates ticket status as "Work In Progress"
    When user changes status to "Cleared" on trouble event page
    And user clicks on Diagnosis tab
    And user right clicks on CI "sehan9087verk1" and selects "Impact:Clear"
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