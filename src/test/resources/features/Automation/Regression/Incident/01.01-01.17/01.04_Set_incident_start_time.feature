@01.04 @Incident  @01
Feature: Setting of incident start time
#passed
  Scenario: Incident start time is set when creating the ticket

    Given user is on the OneWorkflow login page
    When user logs in with valid user and password
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create trouble event
    And user switches to window 1
    Then trouble record form should appear in new tab
    And user validates event start time is present
    When user clicks on sweden checkbox under affected BU's
    When user enters "Test case 01.04 incident start time check" in Title field
    And user selects request type as "Customer" on trouble event page
    And user enters description as "01.04 incident start time availability check"
    And user clicks on save button
    Then ticket should be created and status should be assigned


