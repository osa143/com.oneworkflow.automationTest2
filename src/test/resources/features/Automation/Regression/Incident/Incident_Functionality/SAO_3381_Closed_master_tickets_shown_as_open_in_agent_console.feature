@SAO_3381

Feature: SAO-3381 - Closed master tickets shown as open in agent console.

  Scenario: SAO-3381 - Closed master tickets shown as open in agent console.

    Given user is on the OneWorkflow login page
    When user logs in with valid user and password
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create trouble event
    And user switches to window 1
    Then trouble record form should appear in new tab
    And user clicks on sweden checkbox under affected BU's
    Then user enters title as "Test"
    And user selects request type as "Event" on trouble event page
    Then user enters description as "Test Description"
    And user clicks save button
    Then ticket should be created and status should be assigned
    And user gets ticket value
    And user clicks on linked items tab
    Then user selects target application first dropdown as "OS3 - Operations"
    And user selects target application second dropdown as "Is master of"
    And user waits 2 secs
    Then user clicks on create button under linked items
    And user switches to window 2
    Then user selects request type as "Customer" on trouble event page
    And user clicks save button
    Then ticket should be created and status should be assigned
    And user gets trouble ticket value
    And user enters auto close date as 1 mins past
    Then user clicks save button
    And user switches to window 1
    Then user clicks refresh button under linked items
    And user validates 1 linked ticket availability
    And user enters auto close date as 1 mins past
    Then user clicks save button
    And user waits for 6 minutes
    Then user clicks on main page refresh
    When user enters ticket previously created and searches
    And user waits 5 secs
    And ticket status should be closed
    Then user switches to window 2
    When user clicks on main page refresh
    And user enters trouble ticket in ticket ID+ field
    And user clicks Search on ticket search
    And user waits 5 secs
    And ticket status should be closed
    Then user switches to window 0
    And user validates closed tickets is not visible in agent console
