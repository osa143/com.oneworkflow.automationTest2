@06.13 @SID_Console_CI_Search @Incident @Trouble1
  #passed
  Feature: SID console CI search
    Scenario: SID console CI search

      Given user is on the OneWorkflow login page
      When user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user selects SID console from agent console
      Then user switches to window 1
      When user selects Category as "Core"
      And user selects Type as "Mobile PS Core Network"
      And user selects Item as "SGSN"
      And user clicks on search
      Then user validates CI's for all countries "EE:FI:NO:SE:LT:DK"
      When user enters "SE_S" in the name+ field
      And user clicks on search
      # CI name starts with SE for swedish
      Then user validates only "SE" CI's appear


