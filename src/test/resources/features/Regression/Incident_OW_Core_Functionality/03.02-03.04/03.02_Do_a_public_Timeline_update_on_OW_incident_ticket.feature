@03.02_Do_a_public_Timeline_update_on_OW_incident_ticket @Incident

  Feature: public timeline update
    Scenario: user can send a public timeline update on a ticket

      Given user is on the OneWorkflow login page
      When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create trouble event
      And user switches to window 1
      Then trouble record form should appear in new tab
      When user clicks on sweden checkbox under affected BU's
      And user enters "Test Case 03.02 Public Timeline Update" in Title field in Trouble event
      And user selects request type as "Customer"
      And user enters description as "Test Case 03.02 Public Timeline Update"
      And user clicks on save button on the problem form
      Then ticket should be created and status should be assigned
      When user enters "Test Update - Public" in the timeline text box
      And user clicks on public radio button
      And user clicks on add button under timeline
      Then change should also be reflected in the timeline as "Test Update - Public"


