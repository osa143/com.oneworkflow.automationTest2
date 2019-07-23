@When_creating_workorder_a_proposal_of_default_technical_escalation_queue_should_appear @Incident
  Feature: Proposal of default technical escalation
    Scenario: Technical escalation to other assignment group

      Given user is on the OneWorkflow login page
      When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      Given user is on the OneWorkflow login page
      When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create trouble event
      And user switches to window 1
      Then trouble record form should appear in new tab
      When user clicks on sweden checkbox under affected BU's
      And user enters "Test case proposal of default technical escalation" in Title field in Trouble event
      And user selects request type as "Customer"
      And user enters description as "Test case proposal of default technical escalation"
      And user clicks on save button on the problem form
      Then ticket should be created and status should be assigned
      When user clicks on Diagnosis tab
      And user clicks on CI search button
      Then user switches to frame
      When user enters "FI_LTECell_Valpe4H" in name field
      And user selects a CI from list
      Then user selects impact level as "Degradation of Service"
      And user clicks on relate CI
      And an error message should appear: "Please verify that there are no impacted CI's in other tickets by using Show CR Matching (ARWARN 10000)"
      Then user closes warning message and clicks on close button
      When user clicks on work order tab
      And user clicks on create work order
      Then user switches to window 2
      And user clicks on save button on the problem form
      When user clicks on apply BtwoB button
      Then user should see assigned profile as "Eltel - FS - FIN - B2B"
      When user selects assigned profile dropdown as "Core:Mobile:Mobile PS:Mob PS Core WEST"
      And user clicks on save button on the problem form
      Then user should see assigned profile as "Mob PS Core WEST"


