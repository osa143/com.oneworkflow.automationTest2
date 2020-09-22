@SIDConsole_Archive
  #OP-000001736528 - Ticket that has archived CI's
  #EE_MSC_EE_MSC
  #LT_eNodeB_Giruliai-Kla-L-S-216

  Feature: SID Console Archive Form
    Scenario: User validates SID Console Archive Form

      Given user is on the OneWorkflow login page
      And user logs in with valid username "" and password as ""
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user selects SID console from agent console
      Then user validates SID console is displayed
      When user enters "EE_MSC_EE_MSC" in SID CI Name+ field
      And user selects search for option as "All CIs"
      And user ticks archive data box
      Then user clicks on SID console search button
      And user validates CI "EE_MSC_EE_MSC" is listed
      When user selects CI "EE_MSC_EE_MSC"
      And user clicks on show history button
      Then user validates CI history information is shown



