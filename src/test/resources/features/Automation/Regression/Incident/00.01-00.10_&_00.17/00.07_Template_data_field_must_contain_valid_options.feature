@00.07 @Incident @00
#passed
  Feature: Template data field  must contain valid options
    Scenario: Template data field  must contain valid options

      Given user is on the OneWorkflow login page
      When user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create trouble event
      And user switches to window 1
      Then trouble record form should appear in new tab
      When user validates template dropdown availability
      Then multiple statuses "Site access registration:Workforce Escalation-SE:(clear)" should be available in "Template" dropdown readonly
      When user clicks on sweden checkbox under affected BU's
      And user enters "Test case 00.07 validate options for Template" in Title field
      And user selects request type as "Customer" on trouble event page
      And user enters description as "Test case 00.07 validate options for Template drop down"
      And user clicks on save button
      Then ticket should be created and status should be assigned


