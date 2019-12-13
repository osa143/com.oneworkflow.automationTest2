@04.03_Do_a_functional_escalation_to_a_new_team_as_if_the_resolution_attempt_failed  @Incident1
  #passed
  Feature: Do a functional escalation to a new team as if the resolution attempt failed
    Scenario: Do a functional escalation to a new team as if the resolution attempt failed

      Given user is on the OneWorkflow login page
      When user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create trouble event
      And user switches to window 1
      Then trouble record form should appear in new tab
      When user clicks on sweden checkbox under affected BU's
      And user enters "Test case 04.03 Assign ticket to new assignment group" in Title field in Trouble event
      And user selects request type as "Customer" on trouble event page
      And user enters description as "Test case 04.03 Assign ticket to new assignment group"
      And user clicks on save button
      Then ticket should be created and status should be assigned
      When user clicks on Ack button
      And user clicks on assignment under sections
      Then user selects assignment profile dropdown as "Core:Mobile:Mobile PS:Mob PS Core EAST"
      And user clicks on save button
      Then user should see assigned profile as "Mob PS Core EAST"

