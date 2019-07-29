@SID_Console_CI_Search @Incident
  Feature: using SID console to search for CI's
    Scenario: user can use the SID console to search for CI's

      Given user is on the OneWorkflow login page
      When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user selects SID console from agent console
      Then user switches to window 1
      When user selects Category as "CORE"
      And user selects Type as "Mobile PS Core Network"
      And user selects Item as "SGSN"
      And user clicks on search
      Then user validates CI's for all countries appear
      When user enters "SE_S" in the name+ field
      # CI name starts with SE
      Then user validates only Swedish CI's appear


