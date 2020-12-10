@CC83_OP_target_date


Feature: Automation - OP-000000438117(CC 83) - OP target date information is missing in Agent Console for Event tickets[s]

  Scenario: Automation - OP-000000438117(CC 83) - OP target date information is missing in Agent Console for Event tickets[s]

    Given user is on the OneWorkflow login page
    When user logs in with valid user and password
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on add column under preferences and selects OP Target date
    Then user should see OP target date column in the agent console
    When user clicks on create trouble event
    And user switches to window 1
    Then trouble record form should appear in new tab
    When user clicks on sweden checkbox under affected BU's
    And user enters "OP target date information" in Title field in Trouble event
    And user selects request type as "Customer" on trouble event page
    And user enters description as "OP target date and OLA"
    And user clicks on save button
    Then user gets trouble ticket value
    And user gets OLA target date
    When user switches to window 0
    And user enters ticket previously created and searches in agent console and highlights
    Then user validates OP target date is same as OLA target date
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