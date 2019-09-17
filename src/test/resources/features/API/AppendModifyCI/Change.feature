@Append/ModifyProblem
  #Test requires API ticket with CI's present
  #Test also requires API input to add a CI
  #Test also requires API input to modify a CI
Feature: user validates CI info is added and user validates CI info can be modified
  Scenario: user validates CI info is added and user validates CI info can be modified

    Given user is on the OneWorkflow login page
    When user logs in with valid username "ChangeInitiatorInternal1" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user selects search menu as "Open Search Form:Change Record/Project/Freeze"
    And user enters ticket id as ""
    Then user should see change record ticket

