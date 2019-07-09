@02.08_Change_priority_level @Incident
  Feature: user verifies priority changes
    Scenario: user verifies priority calculation

      Given user is on the OneWorkflow login page
      When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create trouble event
      And user switches to window 1
      Then trouble record form should appear in new tab
      When user clicks on sweden checkbox under affected BU's
      And user enters "02:08 Change Priority Level" in Title field in Trouble event
      And user selects request type as "Customer"
      And user enters description as "02:08 Change Priority Level"
      Then user clicks on save button on the problem form
      And ticket should be created and status should be assigned
      When user selects importance as "Critcal"
      And user selects impact as "Critical"
      And user clicks on priority check button
      And user clicks on save button on the problem form
      Then user validates that priority changes to "Emergency"
      And change should also be reflected in the timeline as "The Ticket Priority has been updated to :  Emergency"



