@CC83_Due_date_information_is_missing_in_Agent_Console


Feature: Automation - OP-000000438117( CC 83) - Due date information is missing in Agent Console for Event tickets[s]

  Scenario: Automation - OP-000000438117( CC 83) - Due date information is missing in Agent Console for Event tickets[s]

    Given user is on the OneWorkflow login page
    When user logs in with valid user and password
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    And user clicks on add column from preferences and selects OP next due date
    Then OP next due date column within agent console should be displayed
    When user clicks on create trouble event
    And user switches to window 1
    Then trouble record form should appear in new tab
    When user clicks on sweden checkbox under affected BU's
    And user enters "Test" in Title field in Trouble event
    And user selects request type as "Customer" on trouble event page
    And user enters description as "Test"
    And user clicks on save button
    Then user gets trouble ticket value
    And user gets estimated ready time
    When user switches to window 0
    And user enters ticket previously created and searches in agent console and highlights
    Then user validates OP next due date is same as estimated ready
    When user switches to window 1
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
