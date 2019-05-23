
@SAO_191
Feature: Sitename details search Feature

  Scenario:Verify Site Name details available for all CI's

    Given user is on OneWorkFlow login page
    When user logins with valid user credentials
    Then user successfully logged in to oneworkflow and agent console should be displayed
    When user selects SID console from agent console
    Then SID console page should be opened
    When user selects Category as Access
    And user selects Type as Radio Access Network
    And user selects Item as GSMCell
    And user clicks on Search
    Then ci details should be displayed
    When user verifies Site Name details avilable for all CI's
    Then Site name should be displayed for all CI CTI search details
    And user logouts and closes the browser





