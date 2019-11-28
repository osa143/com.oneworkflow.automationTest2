@00.08_Title_data_field_must_contain_valid_options @Incident @00
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
