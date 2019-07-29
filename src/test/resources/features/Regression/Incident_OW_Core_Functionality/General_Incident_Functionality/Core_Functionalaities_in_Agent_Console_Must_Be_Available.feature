@Core_Functionalities_in_Agent_Console_Must_Be_Available @Incident
  Feature: functionality of the agent console
    Scenario: user validates functionality of the agent console

      Given user is on the OneWorkflow login page
      When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      And multiple menu options "Console:Create:Search:Administration" should be available
      And multiple menu options "Fld-OfTypeID:Fld-RoleViewMenu:Fld-ViewTicketsID" should be available
      Then user validates search bar is visible
      Then user should see Alerts ticket value
      When user clicks on refresh button above ticket numbers
      Then user should see Alerts ticket value
      And user should see New ticket value
      And user should see Assigned ticket value
      And user should see WIP ticket value
      And user should see Cleared ticket value
      Then user validates availability of tabs "Timeline:Details:List:Alarms"
      Then user validates tickets are listed in agent console table



