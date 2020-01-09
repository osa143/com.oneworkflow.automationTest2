@Normal_change_field_validation

  Feature: Normal Change field validation
    Scenario Outline: field validation

      Given user is on the OneWorkflow login page
      And user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create change record
      Then user switches to window 1
      And user selects request type as "Normal Change"





      Examples:
        |  |