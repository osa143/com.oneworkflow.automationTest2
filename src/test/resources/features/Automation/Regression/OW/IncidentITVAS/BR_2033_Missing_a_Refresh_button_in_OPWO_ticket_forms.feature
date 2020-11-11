@BR_2033_Missing_a_Refresh_button_in_OPWO_ticket_form
#Automation - BR-2033 - Missing a Refresh button in OPWO ticket form[s]

Feature: BR-2033 - Missing a Refresh button in OPWO ticket forms

  Scenario: BR-2033 - Missing a Refresh button in OPWO ticket forms

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
    And user gets ticket value
    Then ticket should be created and status should be assigned
    When user selects search menu as "Open Search Form:Trouble Event"
    And user switches to window 2
    And user enters ticket previously created and searches
    And user clicks on Ack button
    And user enters description as "Test Update 2"
    When user selects impact as "Critical" on trouble event page
    And user selects importance as "Critical"
    And user clicks on priority check button
    And user clicks save button
    And user switches to window 1
    And user clicks on ticket refresh button
    Then user validates description as "Test Update 2"
    And priority should be "Emergency"
    And user validates ticket status as "Work In Progress"