Feature: data searching using wildcards
  Scenario: user is able to search for data using wildcards

    Given user is on the OneWorkflow login page
    When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user selects search menu as "Open Search Form:Work Order"
    And user switches to window 1
    Then user should see blank work order form
    When user enters "One%" in the source field
    And user clicks on sweden checkbox under affected BU's
    And user clicks Search on ticket search
    Then user should see work order
    When user clicks on main page refresh
    Then user should see blank work order form
    And user clicks on finland checkbox under affected BU's
    When user enters "One%" in the source field
    And user clicks Search on ticket search
    Then user should see work order
    When user clicks on main page refresh
    Then user should see blank work order form
    And user clicks on estonia checkbox under affected BU's
    When user enters "One%" in the source field
    And user clicks Search on ticket search
    Then user should see work order
    When user clicks on main page refresh
    Then user should see blank work order form
    And user clicks on norway checkbox under affected BU's
    When user enters "One%" in the source field
    And user clicks Search on ticket search
    Then user should see work order
    When user clicks on main page refresh
    Then user should see blank work order form
    And user clicks on lithuania checkbox under affected BU's
    When user enters "One%" in the source field
    And user clicks Search on ticket search
    Then user should see work order
    When user clicks on main page refresh
    Then user should see blank work order form
    And user clicks on denmark checkbox under affected BU's
    When user enters "One%" in the source field
    And user clicks Search on ticket search
    Then user should see work order
    When user clicks on main page refresh
    Then user should see blank work order form
    When user enters "%PLA" in Title field
    And user clicks on sweden checkbox under affected BU's
    And user clicks Search on ticket search
    Then user should see work order
    When user clicks on main page refresh
    Then user should see blank work order form
    And user clicks on finland checkbox under affected BU's
    When user enters "%PLA" in Title field
    And user clicks Search on ticket search
    Then user should see work order
    When user clicks on main page refresh
    Then user should see blank work order form
    And user clicks on estonia checkbox under affected BU's
    When user enters "%PLA" in Title field
    And user clicks Search on ticket search
    Then user should see work order
    When user clicks on main page refresh
    Then user should see blank work order form
    And user clicks on norway checkbox under affected BU's
    When user enters "%PLA" in Title field
    And user clicks Search on ticket search
    Then user should see work order
    When user clicks on main page refresh
    Then user should see blank work order form
    And user clicks on lithuania checkbox under affected BU's
    When user enters "%PLA" in Title field
    And user clicks Search on ticket search
    Then user should see work order
    When user clicks on main page refresh
    Then user should see blank work order form
    And user clicks on denmark checkbox under affected BU's
    When user enters "%PLA" in Title field
    And user clicks Search on ticket search
    Then user should see work order

