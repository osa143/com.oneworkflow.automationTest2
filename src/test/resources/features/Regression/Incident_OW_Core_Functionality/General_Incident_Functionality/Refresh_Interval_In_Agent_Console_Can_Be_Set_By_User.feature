@Refresh_Interval_In_Agent_Console_Can_Be_Set_By_User #@Incident
  Feature: setting of refresh interval
    Scenario: user can set the refresh interval

      Given user is on the OneWorkflow login page
      When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user sets the preferences as "Set Refresh Interval"
      And user switches to frame
      Then user enters refresh interval as "3" minutes
      And user clicks on refresh ok button
      When user clicks on create trouble event
      And user switches to window 1
      Then trouble record form should appear in new tab
      When user clicks on sweden checkbox under affected BU's
      And user enters "Test case WO Status" in Title field in Trouble event
      And user selects request type as "Customer" on trouble event page
      And user enters description as "Test case WO Status"
      And user clicks on save button
      Then ticket should be created and status should be assigned
      Then user switches to window 0
      And user validates agent console is not refreshed
      Then user waits for two minutes
      And user validates agent console is refreshed

