@Verify_functionality_of_Service_Info_tab @Incident
  Feature: Verification of service info tab
    Scenario: user validates service info tab
      Given user is on the OneWorkflow login page
      When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
