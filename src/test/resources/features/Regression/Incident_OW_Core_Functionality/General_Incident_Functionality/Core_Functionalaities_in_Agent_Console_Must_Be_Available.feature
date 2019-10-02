@Core_Functionalities_in_Agent_Console_Must_Be_Available @Incident
  #passed
  Feature: functionality of the agent console
    Scenario: user validates functionality of the agent console

      Given user is on the OneWorkflow login page
      When user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      And multiple menu options "Console:Create:Search:Administration" should be available
      # Menu for All Roles:All Tickets:All
      And multiple menu options "Fld-OfTypeID:Fld-RoleViewMenu:Fld-ViewTicketsID" should be available
      Then user validates search bar is visible
      When user clicks on refresh button above ticket numbers
      # ID's different in ST
      Then user should see Alerts ticket value
      And user should see New ticket value
      And user should see Assigned ticket value
      And user should see WIP ticket value
      And user should see Cleared ticket value
      Then user validates availability of tabs "Timeline:Details:List:Alarms"
      Then user validates tickets are listed in agent console table



