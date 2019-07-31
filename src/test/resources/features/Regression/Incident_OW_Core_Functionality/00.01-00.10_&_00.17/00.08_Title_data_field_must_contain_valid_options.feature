@00.08_Title_data_field_must_contain_valid_options @Incident
 #Passed
  Feature: validation of title field availability and structure

    Scenario: user validates title field availability and structure

      Given user is on the OneWorkflow login page
      When user logs in with valid username "Change_Automation_1" and password as "Telia@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create trouble event
      And user switches to window 1
      Then trouble record form should appear in new tab
      When user validates Title availability
      Then multiple statuses "(no entries in menu)" should be available in "Title" dropdown
