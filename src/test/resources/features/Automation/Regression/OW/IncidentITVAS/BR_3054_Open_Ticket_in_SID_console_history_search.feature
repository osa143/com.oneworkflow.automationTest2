@BR_3054_Open_Ticket_in_SID_console_history_search

Feature: Automation - BR-3054 - Open Ticket in SID console history search[s]

  Scenario: Automation - BR-3054 - Open Ticket in SID console history search[s]

    Given user is on the OneWorkflow login page
    When user logs in with valid user and password
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create trouble event
    And user switches to window 1
    Then trouble record form should appear in new tab
    When user clicks on sweden checkbox under affected BU's
    And user enters "Test BR-3054" in Title field in Trouble event
    And user selects request type as "Customer" on trouble event page
    And user enters description as "Open_Ticket_in_SID_console_history_search"
    And user clicks on save button
    And user gets ticket value
    When user adds CI "SE_eNodeB_Snuggtaskeberg" to the ticket
    Then user validates CI "SE_eNodeB_Snuggtaskeberg" is listed
    When user selects "Console" menu as "SID Console"
    And user switches to window 2
    Then SID console page should be opened
    When user enters "SE_eNodeB_Snuggtaskeberg" in name field
    And user clicks on search button on CI search window
    And user clicks on show history
    Then user validates ticket previously created is present
    And user double clicks on ticket under SID console matching ticket to open
    And user switches to window 3
    And user clicks on Ack button
    Then user validates ticket status as "Work In Progress"
    When user changes status to "Cleared" on trouble event page
    And user clicks on Diagnosis tab
    And user right clicks on CI "SE_eNodeB_Snuggtaskeberg" and selects "Impact:Clear"
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
