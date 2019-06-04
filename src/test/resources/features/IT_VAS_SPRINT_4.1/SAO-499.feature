@SAO_496
Feature: Use of wildcards in searches for CI's

  Scenario: user is able to search for CI's using wildcards on all forms for all countries

    Given user is on the OneWorkflow login page
    When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user selects SID console from agent console
    And SID console page should be opened
    Then user clicks on clear button and selects search for all cis
