@00.08 @Incident @00
 #Passed
  Feature: Title data field must contain valid options

    Scenario: Title data field must contain valid options

      Given user is on the OneWorkflow login page
      When user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create trouble event
      And user switches to window 1
      Then trouble record form should appear in new tab
      When user validates Title availability
      Then multiple statuses "(no entries in menu)" should be available in "Title" dropdown
      When user clicks on sweden checkbox under affected BU's
      Then user enters "Test case 00.08 validate options for Title" in Title field
      And user selects request type as "Customer" on trouble event page
      And user enters description as "Test case 00.08 validate options for Title drop down"
      And user clicks on save button
      Then ticket should be created and status should be assigned
