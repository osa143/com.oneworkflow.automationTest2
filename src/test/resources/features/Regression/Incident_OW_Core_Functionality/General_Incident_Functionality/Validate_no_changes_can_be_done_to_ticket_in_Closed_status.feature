@Validate_no_changes_can_be_done_to_ticket_in_Closed_status @Incident
  Feature: validation of no changes being able to be made in closed incident
    Scenario: user validates you cant make any changes to closed incident ticket
      Given user is on the OneWorkflow login page
      When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
