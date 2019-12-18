@01.04_Set_incident_start_time @Incident  @01
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
