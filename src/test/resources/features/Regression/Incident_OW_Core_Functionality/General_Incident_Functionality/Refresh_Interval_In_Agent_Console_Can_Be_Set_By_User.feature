@Refresh_Interval_In_Agent_Console_Can_Be_Set_By_User #@Incident
  Feature: setting of refresh interval
    Scenario: user can set the refresh interval

      Given user is on the OneWorkflow login page
      When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
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

