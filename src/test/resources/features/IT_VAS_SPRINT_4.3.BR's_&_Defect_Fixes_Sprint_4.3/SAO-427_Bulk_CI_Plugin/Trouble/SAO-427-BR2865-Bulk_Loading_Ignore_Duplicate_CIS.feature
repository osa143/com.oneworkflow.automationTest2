@SAO-427-BR2865-Bulk_Loading_Ignore_Duplicate_CI's
  Feature: Bulk Loading ignore duplicate CI's
    Scenario: Bulk Loading ignore duplicate CI's

      Given user is on the OneWorkflow login page
      When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create trouble event
      And user switches to window 1
      Then trouble record form should appear in new tab
      When user clicks on sweden checkbox under affected BU's
      And user enters "SAO-427 Test Bulk Loading CI not found Prompt" in Title field
      And user selects request type as "Event" on trouble event page
      And user enters description as "SAO-427 Test Bulk Loading CI not found Prompt"
      And user clicks on save button under bulk import WIN_0_700025244
      Then ticket should be created and status should be assigned
      When user clicks on Diagnosis tab
      And user clicks on "Add Bulk Import" button
      And user switches to frame
      Then user should see bulk ci loading window

