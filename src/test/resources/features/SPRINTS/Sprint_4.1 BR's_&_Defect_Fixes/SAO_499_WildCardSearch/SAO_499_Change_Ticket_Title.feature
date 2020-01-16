@SAO_499_Change_Ticket_Title
@499
   #passed
Feature: data searching using wildcards
  Scenario: Change_Ticket_Title

    Given user is on the OneWorkflow login page
    When user logs in with valid username "ChangeManager1_Automation" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user selects search menu as "Open Search Form:Change Record/Project/Freeze"
    And user switches to window 1
    Then user should see blank change record search form
    When user enters "IT%" in Title field
    And user clicks on sweden checkbox under affected BU's
    And user clicks Search on ticket search
    Then user should see change record ticket
    When user clicks on main page refresh
    Then user should see blank change record search form
    When user enters "IT%" in Title field
    And user clicks on finland checkbox under affected BU's
    And user clicks Search on ticket search
    Then user should see change record ticket
    When user clicks on main page refresh
    Then user should see blank change record search form
    When user enters "IT%" in Title field
    And user clicks on estonia checkbox under affected BU's
    And user clicks Search on ticket search
    Then user should see change record ticket
    When user clicks on main page refresh
    Then user should see blank change record search form
    When user enters "IT%" in Title field
    And user clicks on norway checkbox under affected BU's
    And user clicks Search on ticket search
    Then user should see change record ticket
    When user clicks on main page refresh
    Then user should see blank change record search form
    When user enters "IT%" in Title field
    And user clicks on lithuania checkbox under affected BU's
    And user clicks Search on ticket search
    Then user should see change record ticket
    When user clicks on main page refresh
    Then user should see blank change record search form
    When user enters "IT%" in Title field
    And user clicks on denmark checkbox under affected BU's
    And user clicks Search on ticket search
    Then user should see change record ticket
    When user clicks on main page refresh
    Then user should see blank change record search form
    When user enters "Ser%" in Title field
    And user clicks on sweden checkbox under affected BU's
    And user clicks Search on ticket search
    Then user should see change record ticket
    When user clicks on main page refresh
    Then user should see blank change record search form
    When user enters "Ser%" in Title field
    And user clicks on finland checkbox under affected BU's
    And user clicks Search on ticket search
    Then user should see change record ticket
    When user clicks on main page refresh
    Then user should see blank change record search form
    When user enters "Ser%" in Title field
    And user clicks on estonia checkbox under affected BU's
    And user clicks Search on ticket search
    Then user should see change record ticket
    When user clicks on main page refresh
    Then user should see blank change record search form
    When user enters "Ser%" in Title field
    And user clicks on norway checkbox under affected BU's
    And user clicks Search on ticket search
    Then user should see change record ticket
    When user clicks on main page refresh
    Then user should see blank change record search form
    When user enters "Ser%" in Title field
    And user clicks on lithuania checkbox under affected BU's
    And user clicks Search on ticket search
    Then user should see change record ticket
    When user clicks on main page refresh
    Then user should see blank change record search form
    When user enters "Ser%" in Title field
    And user clicks on denmark checkbox under affected BU's
    And user clicks Search on ticket search
    Then user should see change record ticket