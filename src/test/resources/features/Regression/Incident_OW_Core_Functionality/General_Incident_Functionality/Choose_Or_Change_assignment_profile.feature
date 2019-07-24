@Choose_Or_Change_assignment_profile @Incident
  Feature: changing of assignment
    Scenario: user can change assignment profile on incident ticket

      Given user is on the OneWorkflow login page
      When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create trouble event
      And user switches to window 1
      Then trouble record form should appear in new tab
      When user clicks on sweden checkbox under affected BU's
      And user enters "Test case Choose Or Change Assignment Profile" in Title field in Trouble event
      And user selects request type as "Customer" on trouble event page
      And user enters description as "Test case Choose Or Change Assignment Profile"
      And user clicks on save button
      Then ticket should be created and status should be assigned
      When user clicks on assignment under sections
      And user selects assigned profile dropdown as "Control Center:Incident Manager"
      Then user clicks on save button
      And user validates assigned profile as "Incident Manager"




