@Validate_no_changes_can_be_done_to_ticket_in_Closed_status @Incident
  Feature: validation of no changes being able to be made in closed incident
    Scenario: user validates you cant make any changes to closed incident ticket

      Given user is on the OneWorkflow login page
      When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create trouble event
      And user switches to window 1
      Then trouble record form should appear in new tab
      When user clicks on sweden checkbox under affected BU's
      And user enters "Test case validate no changes can be done to a ticket in closed status" in Title field in Trouble event
      And user selects request type as "Customer"
      And user enters description as "Test case validate no changes can be done to a ticket in closed status"
      And user clicks on save button on the problem form
      Then ticket should be created and status should be assigned
      When user changes status to "Cleared"
      And user selects fault position as "N/A:N/A"
      And user selects cause as "N/A:N/A:N/A"
      And user selects action dropdown as "N/A:N/A"
      And user enters closure info as "Test Ticket"
      And user clicks on save button on the problem form
      Then user validates ticket status as "Cleared"
      When user changes status to "Closed"
      And user clicks on save button on the problem form
      Then user validates ticket status as "Closed"
      #will go through this in more detail
      And user validates all fields are read-only
