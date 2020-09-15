@SAO_4687

Feature: SAO-4687 - Closure codes issues

  Scenario: SAO-4687 - Closure codes issues

    Given user is on the OneWorkflow login page
    When user logs in with valid user and password
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create trouble event
    And user switches to window 1
    Then trouble record form should appear in new tab
    When user clicks on sweden checkbox under affected BU's
    And user enters "SAO-4687" in Title field in Trouble event
    And user selects request type as "Customer" on trouble event page
    And user enters description as "SAO-4687"
    And user clicks on save button
    Then ticket should be created and status should be assigned
    When user clicks on Ack button
    Then user validates ticket status as "Work In Progress"
    When user changes status to "Cleared"
    Then user validates fault position field is mandatory
    And user validates cause field is mandatory
    And user validates event end time is a mandatory field
    Then user selects fault position as "N/A:N/A" on trouble event page
    And user selects cause as "N/A:N/A:N/A" on trouble event page
    Then user enters event end time as current time
    And user clicks save button
    Then user validates ticket status as "Cleared"
    When user changes status to "Closed"
    Then user validates fault position field is mandatory
    And user validates cause field is mandatory
    And user validates event end time is a mandatory field
    And user validates action field is mandatory
    And user validates closure info field is mandatory
    And user validates event end time is same as cleared status event end time
    When user changes status to "Cleared"
    Then user validates fault position field is mandatory
    And user validates cause field is mandatory
    And user validates event end time is a mandatory field
    And user validates event end time is same as cleared status event end time
    When user changes status to "Closed"
    Then user validates fault position field is mandatory
    And user validates cause field is mandatory
    And user validates event end time is a mandatory field
    And user validates action field is mandatory
    And user validates closure info field is mandatory
    And user validates event end time is same as cleared status event end time
    Then user selects action dropdown as "N/A:N/A" on trouble event page
    And user enters closure info as "Testing"
    Then user clicks save button
    Then user validates ticket status as "Closed"
    And user validates fault position is read only
    And user validates cause field is read only
    And user validates event end time is read only
    And user validates action is read only
    And user validates closure info is read only

