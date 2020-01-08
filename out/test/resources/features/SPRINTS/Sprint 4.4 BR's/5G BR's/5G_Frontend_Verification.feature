@5G


Feature: verify the functionality of 5G from frontend

   Background:
     Given user is on the OneWorkflow login page
     When user logs in with valid username "dwk298" and password as "Telia2018@@"
     Then user successfully logged in to OneWorkflow and agent console should be displayed
     And user opens temip ticket which created from external

  Scenario: verify temip ticket details
    Given user is on temip ticket window
     Then user validates source field as "Temip"
    And user verifies all ticket details are correct

  Scenario: Existing assignment rules can be configured using EQUAL and LIKE conditions
    When user clicks on "Service Info" tab
    And user selects Finnish channel
    Then user should see CI's related to Finland
    And user selects Swedish channel
    Then user shouls see CI's related to Sweden








