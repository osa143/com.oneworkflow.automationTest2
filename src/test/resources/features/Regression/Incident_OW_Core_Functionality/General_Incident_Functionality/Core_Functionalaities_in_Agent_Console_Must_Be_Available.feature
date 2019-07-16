@Core_Functionalities_in_Agent_Console_Must_Be_Available @Incident
  Feature: functionality of the agent console
    Scenario: user validates functionality of the agent console

      Given user is on the OneWorkflow login page
      When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      And user validates "Console" is available
      And user validates "Create" is available
      And user validates "Search" is available
      And user validates "Administration" is available
      Then user validates availability of all tickets filter and subsequent options
      And user validates availability of all roles filter and subsequent options
      And user validates availability of all filter and subsequent options
      Then user validates search bar is visible
      When user clicks on refresh button above ticket numbers
      Then user should see "Alerts" ticket value
      And user should see "New" ticket value
      And user should see "Assigned" ticket value
      And user should see "WIP" ticket value
      And user should see "Cleared" ticket value
      Then user validates "timeline" is visible
      And user validates "details" is visible
      And user validates "List" is visible
      And user validates "Search / Quick Create" is visible
      And user validates "Alarms" is visible
      Then user validates tickets are listed



