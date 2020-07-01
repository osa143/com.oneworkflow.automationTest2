@SAO-4555+SAO-4556

  Feature: User Profile Development - User forms and workflow
    Scenario: User Profile Development - User forms and workflow

      Given user is on the OneWorkflow login page
      When user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      And user clicks users under admin tab
      Then user information console should be opened
      Then user clicks on user "" and clicks open
      And user information window should be opened
      Then user clicks on trust principles tab
      And user clicks on country "" and clicks add right button
      Then user closes information window
      And user clicks on user "" and clicks open
      Then user clicks on trust principles tab
      And user validates country "" is selected
      Then user clicks remove button
      And user validates "" has been removed

