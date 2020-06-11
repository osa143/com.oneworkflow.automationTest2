@06.03 @When_creating_workorder_a_proposal_of_default_technical_escalation_queue_should_appear @Incident @Trouble1
  #passed
  Feature: When creating workorder, a proposal of default technical escalation queue should appear
    Scenario: When creating workorder, a proposal of default technical escalation queue should appear

      Given user is on the OneWorkflow login page
      When user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create trouble event
      And user switches to window 1
      Then trouble record form should appear in new tab
      When user clicks on sweden checkbox under affected BU's
      And user enters "Test case proposal of default technical escalation" in Title field in Trouble event
      And user selects request type as "Customer" on trouble event page
      And user enters description as "Test case proposal of default technical escalation"
      And user clicks on save button
      Then ticket should be created and status should be assigned
      And user adds CI "FI_LTECell_Valpe4H" to the ticket with impact level "Degradation of Service"
      And user gets parent ticket details
      When user clicks on "Work Orders" tab
      And user clicks on create from ticket
      Then user switches to window 2
      And user clicks on save button
      Then user validates child ticket details are same as parent ticket
      When user clicks on apply BtwoB button
      Then user should see assigned profile as "Eltel - FS - FIN - B2B"
      When user selects assigned profile dropdown as "Core:Mobile:Mobile PS:Mob PS Core WEST"
      And user clicks on save button
      Then user should see assigned profile as "Mob PS Core WEST"



