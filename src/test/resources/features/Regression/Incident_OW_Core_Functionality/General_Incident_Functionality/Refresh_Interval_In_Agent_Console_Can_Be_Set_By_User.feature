@Refresh_Interval_In_Agent_Console_Can_Be_Set_By_User
@Incident
@TroubleGeneral
  Feature: refresh interval in agent console can be set by user
    Scenario: refresh interval in agent console can be set by user

      Given user is on the OneWorkflow login page
      When user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user sets the preferences as "Set Refresh Interval"
      And user switches to frame
      Then user enters refresh interval as "4" minutes
      And user clicks on refresh ok button
      And user gets first ticket from the agent console table
      Then user waits for two minutes
      And user validates agent console is not refreshed
      Then user waits for two minutes
      And user validates agent console is refreshed

