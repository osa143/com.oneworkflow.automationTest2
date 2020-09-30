@MandatoryFieldCheckProblem
  #Test Requires API created ticket with mandatory fields filled,
Feature: user validates mandatory ticket information before and after modify
  Scenario: user validates mandatory ticket information before and after modify

    Given user is on the OneWorkflow login page
    When user logs in with valid username "frvi96_auto" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user selects search menu as "Open Search Form:Problem Record"
    And user enters ticket id as ""
    Then user should see problem ticket
    And user validates mandatory fields availability
    Then user stores mandatory values
      #API will then need to change these values and OW user confirm they have changed
    Then user waits for 2 minutes
    And user clicks on ticket refresh button
    And user confirms ticket values are updated
