@04.01_Document_the_service_restoration_actions_and_results @Incident
  Feature: document service restoration
    Scenario: user documents service restoration and results

      Given user is on the OneWorkflow login page
      When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create trouble event
      And user switches to window 1
      Then trouble record form should appear in new tab
      When user clicks on sweden checkbox under affected BU's
      And user enters "Test case 04.01 Document service restoration" in Title field in Trouble event
      And user selects request type as "Customer"
      And user enters description as "Test case 04.01 Document service restoration"
      And user clicks on save button on the problem form
      Then ticket should be created and status should be assigned
      When user clicks on assignment under sections
      And user selects assigned profile dropdown as "Core:Mobile PS:Mob PS Core WEST"
      When user enters "Test Resolution Update" in the timeline text box
      And user clicks on public radio button
      And user clicks on add button under timeline
      Then change should also be reflected in the timeline as "Test Resolution Update"
      When user clicks on Ack button
      And user changes status to "Cleared"
      When user clicks on route cause under sections
      Then user enters route cause description as "Test Resolution Result"



