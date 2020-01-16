@Assignment_Profile_Field_Validation

  Feature: Assignment profile field validation
    Scenario Outline: Assignment profile field validation

      Given user is on the OneWorkflow login page
      When user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create trouble event
      And user switches to window 1
      Then trouble record form should appear in new tab
      Then user clicks on assignment under sections
      When user selects assignment profile dropdown as "<AssignmentProfile>"
      And multiple statuses "<AssigneeDropdownValue>" should be available in "Assignee" dropdown

      Examples:

        | AssignmentProfile | AssigneeDropdownValue |
        |                   |                       |