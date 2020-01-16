#passed
#@SAO_499_Problem_Ticket_Source
#@499
#we might not need this one as the source field for problem, change and known errors will always come from OW

Feature: data searching using wildcards
  Scenario: Problem_Ticket_Source

    Given user is on the OneWorkflow login page
    When user logs in with valid username "Change_Automation_1" and password as "Telia@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on search and selects open search forms and problem record
    And user switches to window 1
    Then user should see blank problem search form
    When user enters "one%" in the source field
    And user clicks on sweden checkbox under affected BU's
    And user clicks Search on ticket search
    Then user should see problem ticket
    When user clicks on main page refresh
    Then user should see blank problem search form
    When user enters "one%" in the source field
    And user clicks on estonia checkbox under affected BU's
    And user clicks Search on ticket search
    Then user should see problem ticket
    When user clicks on main page refresh
    Then user should see blank problem search form
    When user enters "one%" in the source field
    And user clicks on norway checkbox under affected BU's
    And user clicks Search on ticket search
    Then user should see problem ticket
    When user clicks on main page refresh
    Then user should see blank problem search form
    When user enters "one%" in the source field
    And user clicks on lithuania checkbox under affected BU's
    And user clicks Search on ticket search
    Then user should see problem ticket
    When user clicks on main page refresh
    Then user should see blank problem search form
    When user enters "one%" in the source field
    And user clicks on finland checkbox under affected BU's
    And user clicks Search on ticket search
    Then user should see problem ticket
    When user clicks on main page refresh
    Then user should see blank problem search form
    When user enters "one%" in the source field
    And user clicks on denmark checkbox under affected BU's
    And user clicks Search on ticket search
    Then user should see problem ticket

