@04.01_Document_the_service_restoration_actions_and_results @Incident
  #passed
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
      And user selects request type as "Customer" on trouble event page
      And user enters description as "Test case 04.01 Document service restoration"
      And user clicks on save button
      Then ticket should be created and status should be assigned
      When user clicks on assignment under sections
      And user selects assignment profile dropdown as "Core:Mobile:Mobile PS:Mob PS Core WEST"
      And user selects assignee as "Change_Automation_1" by using alphabet "c" key up 0 times
      And user clicks on save button
      When user enters "Test Resolution Update" in the timeline text box
      And user clicks on public radio button
      And user clicks on add button
      Then change should also be reflected in the timeline as "Test Resolution Update"
      And user clicks on Ack button
      And user changes status to "Cleared" on trouble event page
      When user clicks on root cause under sections
      Then user enters root cause description as "Test Resolution Result"




