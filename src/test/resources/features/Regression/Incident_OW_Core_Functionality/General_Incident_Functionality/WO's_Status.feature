@WO's_Status @Incident
  Feature: validation of WO's status'
    Scenario: user validates different work order status'
      Given user is on the OneWorkflow login page
      When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed

