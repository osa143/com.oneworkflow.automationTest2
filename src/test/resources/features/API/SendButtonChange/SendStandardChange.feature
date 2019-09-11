@SendStandardChange
   #user needs to get the ticket from API
Feature: Send button on standard change (API created ticket)
  Scenario: Send button on standard change (API created ticket)

    Given user is on the OneWorkflow login page
    When user logs in with valid username "ChangeManager1_Automation" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user selects search menu as "Open Search Form:Change Record/Project/Freeze"
    When user selects search menu as "Open Search Form:Change Record/Project/Freeze"
    And user enters ticket id as ""
    Then user should see change record ticket
    And user validates "Risk" tab is not visible
    When user clicks on Send button
    Then no errors should be displayed and ticket should process
