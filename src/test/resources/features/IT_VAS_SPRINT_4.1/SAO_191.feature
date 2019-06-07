
@SAO_191
Feature: Site name details search Feature

  Scenario:Verify Site Name details available for all CI's

    Given user is on the OneWorkflow login page
    When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user selects SID console from agent console
    And user switches to window 1
    Then SID console page should be opened
    When user selects Category as "Access"
    And user selects Type as "Radio Access Network"
    And user selects Item as "GSMCell"
    And user clicks on Search
    Then CI details should be displayed
    And site name should be displayed for all CI CTI search details
    And user logsOut and closes the browser





