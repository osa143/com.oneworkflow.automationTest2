#passed
@SAO_499_knownError_Source
@499
Feature: data searching using wildcards
  Scenario: knownError_Source

    Given user is on the OneWorkflow login page
    When user logs in with valid username "Tohall_copy" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user selects search menu as "Open Search Form:Known Error"
    And user switches to window 1
    Then user should see blank known error search form
    When user enters "One%" in the source field
    And user clicks on sweden checkbox under affected BU's
    And user clicks Search on ticket search
    Then user should see known error ticket
    When user clicks on main page refresh
    Then user should see blank known error search form
    When user enters "One%" in the source field
    And user clicks on finland checkbox under affected BU's
    And user clicks Search on ticket search
    Then user should see known error ticket
    When user clicks on main page refresh
    Then user should see blank known error search form
    When user enters "One%" in the source field
    And user clicks on estonia checkbox under affected BU's
    And user clicks Search on ticket search
    Then user should see known error ticket
    When user clicks on main page refresh
    Then user should see blank known error search form
    When user enters "One%" in the source field
    And user clicks on norway checkbox under affected BU's
    And user clicks Search on ticket search
    Then user should see known error ticket
    When user clicks on main page refresh
    Then user should see blank known error search form
    When user enters "One%" in the source field
    And user clicks on lithuania checkbox under affected BU's
    And user clicks Search on ticket search
    Then user should see known error ticket
    When user clicks on main page refresh
    Then user should see blank known error search form
    When user enters "One%" in the source field
    And user clicks on denmark checkbox under affected BU's
    And user clicks Search on ticket search
    Then user should see known error ticket
