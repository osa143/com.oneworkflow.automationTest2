@change @impact_duration_Field_Validation
  #inprogress

Feature: Validation of change Completed Code field structure
  Scenario:Validation of change Completed Code field structure

    Given user is on the OneWorkflow login page
    And user logs in with valid user and password
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create change record
    Then user switches to window 1
    Then change record page should be opened and Change form is displayed
    Then user validates impact duration days as "0"
    Then user validates impact duration hours as "0"
    Then user validates impact duration minutes as "0"
    Then user validates impact duration seconds as "0"
    And user logsOut and accepts alert