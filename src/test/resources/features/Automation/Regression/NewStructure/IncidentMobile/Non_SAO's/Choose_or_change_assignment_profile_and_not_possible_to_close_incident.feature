@Choose_or_change_assignment_profile_and_not_be_possible_to_close_incident @Incident_NonSAO


  Feature: Choose or change assignment profile and not possible to close incident
    Scenario:Choose or change assignment profile and not possible to close incident

      Given user is on the OneWorkflow login page
      When user logs in with valid user and password
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
      And user selects assignment profile dropdown as "Control Center:Incident Manager"
      And user clicks on save button
      Then user should see assigned profile as "Incident Manager"