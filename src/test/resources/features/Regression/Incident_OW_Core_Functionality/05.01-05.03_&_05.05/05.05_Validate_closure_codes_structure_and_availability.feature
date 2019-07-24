@05.05_Validate_closure_codes_structure_and_availability @Incident
  Feature: validation of closure codes
    Scenario: user validates fault position, cause and action fields on incident ticket

      Given user is on the OneWorkflow login page
      When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create trouble event
      And user switches to window 1
      Then trouble record form should appear in new tab
      When user clicks on sweden checkbox under affected BU's
      And user enters "Test case 05.05 Validate Closure Codes" in Title field in Trouble event
      And user selects request type as "Customer"
      And user enters description as "Test case 05.03 Event End Time"
      And user clicks on save button on the problem form
      Then ticket should be created and status should be assigned
      When user changes status to "Cleared"
      Then user should see closure codes appear



