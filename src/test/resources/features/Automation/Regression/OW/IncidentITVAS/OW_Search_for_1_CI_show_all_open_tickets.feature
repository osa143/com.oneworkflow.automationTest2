@Automation_OW_Search_for_1_CI_show_all_open_tickets


Feature: Automation - OW - Search for 1 CI show all open tickets

  Scenario: Automation - OW - Search for 1 CI show all open tickets

    Given user is on the OneWorkflow login page
    When user logs in with valid user and password
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create trouble event
    And user switches to window 1
    Then trouble record form should appear in new tab
    When user clicks on sweden checkbox under affected BU's
    And user enters "Test" in Title field in Trouble event
    And user selects request type as "Customer" on trouble event page
    And user enters description as "Test"
    And user clicks on save button
    When user adds CI "sehan9087verk1" to the ticket
    Then user validates CI "sehan9087verk1" is listed
    And user switches to window 0
    When user clicks on "Search / Quick Create" tab
    And user enters CI as "sehan9087verk1"
    And user clicks on quick search button
    Then user opens ticket previously created