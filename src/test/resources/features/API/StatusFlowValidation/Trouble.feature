@TroubleStatusFlow
  #Need API Created Ticket
Feature: user validates status changes
  Scenario: user validates status changes

    Given user is on the OneWorkflow login page
    When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user selects search menu as "Open Search Form:Trouble Event"
    And user enters ticket id as ""
    Then user should see trouble ticket
    And user validates ticket status as "Assigned"
    Then user validates other status options available as "Assigned:Cleared:Pending:Withdrawn:(Clear)"
    When user clicks on Ack button
    Then user validates ticket status as "Work In Progress"
    Then user validates other status options available as "Cleared:Pending:Withdrawn:Work In Progress:(Clear)"
    When user changes status to "Cleared" on trouble event page
    And user selects fault position as "N/A:N/A" on trouble event page
    And user selects cause as "N/A:N/A:N/A" on trouble event page
    And user selects action dropdown as "N/A:N/A" on trouble event page
    And user enters closure info as "Test Ticket"
    Then user enters event end time as current time
    And user clicks on save button
    Then user validates ticket status as "Cleared"
    And user validates other status options available as "Assigned:Cleared:Closed:Work In Progress:(Clear)"
    When user changes status to "Closed" on trouble event page second time
    And user clicks on save button
    Then user validates ticket status as "Closed"
    Then user validates status cant be changed
