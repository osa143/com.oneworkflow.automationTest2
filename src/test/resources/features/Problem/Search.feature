@search

  Feature: problem record Search
  Scenario: user is able to search for tickets using problem ticket status

    Given user is on the OneWorkflow login page
    When user logs in with valid username "probleminitiator" and password as "problem1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user selects search menu as "Open Search Form:Problem Record"
    And user switches to window 1
    Then user should see blank problem search form
    When user verifies for all entries in status dropdown
    Then multiple statuses should be available
    When user changes status to "Closed"
    And user clicks on search
    Then at least one problem ticket should appear in the list
    And user switches to window 0
    When user selects search menu as "Open Search Form:Problem Record"
    And user switches to window 1
    Then user should see blank problem search form
    When user verifies for all entries in status dropdown
    Then multiple statuses should be available
    When user changes status to "Withdrawn"
    And user clicks on search
    Then at least one problem ticket should appear in the list


