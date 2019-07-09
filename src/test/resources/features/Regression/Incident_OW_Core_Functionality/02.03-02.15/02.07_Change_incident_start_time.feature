@02.07_Change_incident_start_time @Incident
Feature: change incident start time to the past
  Scenario: user can change the incident start time to a date in the past

    Given user is on the OneWorkflow login page
    When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create trouble event
    And user switches to window 1
    Then trouble record form should appear in new tab
    When user clicks on sweden checkbox under affected BU's
    And user enters "02:07 Change Incident Start Time" in Title field in Trouble event
    And user selects request type as "Customer"
    And user enters description as "02:07 Change Incident Start Time"
    Then user clicks on event start time calendar button
    And user selects a date in the future
    And user clicks on ok button on calendar
    Then user clicks on save button on the problem form
    And an error message should appear: "The Event Start Time cannot be set in the future (ARERR 999001300)"
    When user clicks on event start time calendar button
    And user selects a date in the past
    And user clicks on ok button on calendar
    Then user clicks on save button on the problem form
    And ticket should be created and status should be assigned
