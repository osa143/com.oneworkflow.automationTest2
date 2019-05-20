@SAO_191
Feature: Sitename details search Feature

  Scenario:Verify Site Name details available for all CI's

    Given the application is OneWorkFlow
    And I login with valid user credentials
    When I select SID console from agent console
    And I select Category as Access
    And I select Type as Radio Access Network
    And I select Item as GSMCell
    And I click on Search
    Then Site name should be displayed for all CI CTI search details
    And I logout and close the browser





