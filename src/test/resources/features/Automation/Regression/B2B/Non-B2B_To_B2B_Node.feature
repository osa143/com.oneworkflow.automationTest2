@Non_B2B-To_B2B_Node

  Feature: convert a non B2B WO to B2B WO

    Scenario:check possibility of converting a non B2B WO to B2B WO for Node CIs


      Given user is on the OneWorkflow login page
      When user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create work order
      Then user switches to window 1
      When user enters title as "Non-B2B to B2B"
      And user selects request type as "Maintenance" on work order page
      And user enters description as "Non-B2B to B2B Test"
      And user selects priority as "Info"
      Then user clicks on save button
      And user selects assigned profile dropdown as "Core:Mobile:Mobile PS:Mob PS Core WEST"
      And user enters "Change_Automation_1" in assignee
      Then user clicks on save button
      When user adds CI "SE_eNodeB_Yttervik" to the ticket with impact level "Degradation of Service"
      And user clicks on apply BtwoB button
      Then user should see assigned profile as "Eltel - FS - SE - B2B"





