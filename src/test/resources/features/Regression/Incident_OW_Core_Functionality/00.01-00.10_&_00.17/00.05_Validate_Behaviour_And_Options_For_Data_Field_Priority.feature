@Validate_Behaviour_And_Options_For_Data_Field_Priority @Incident

  Feature: Incident

    Scenario: user validates behaviour and options for data field priority


      Given user is on the OneWorkflow login page
      When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create trouble event
      And user switches to window 1
      Then trouble record form should appear in new tab
      And user verifies priority field is visible
      Then priority field must be greyed out and not possible for user to alter
      When user clicks on denmark checkbox under affected BU's
      And user enters "Test case 00.05 Validate the Priority Field" in Title field
      And user selects request type as "Customer" on trouble event page
      And user enters description as "Test case 00.05 Validate the Priority Field"
      And user selects impact as "Major"
      And user selects importance as "High"
      And user clicks on save button on the problem form
      And user gets ticket value
      And user validates that priority changes to major
      And user switches to window 0
      When user enters ticket id as {string} in the agent console search box and searches for ticket
      And ticket should be displayed
      And user validates ticket priority as "Major"
