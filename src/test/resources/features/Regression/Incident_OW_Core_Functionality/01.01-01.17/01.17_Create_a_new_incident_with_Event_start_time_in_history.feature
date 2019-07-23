@01.17_Create_a_new_incident_with_Event_start_time_in_history @Incident
#Passed
Feature: Creation of incident with event start time in the past
  Scenario: user is able create a ticket with event start time in past

    Given user is on the OneWorkflow login page
    When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create trouble event
    And user switches to window 1
    Then trouble record form should appear in new tab
    When user clicks on sweden checkbox under affected BU's
    And user enters "Test Case 01.17 Event Start Time In History" in Title field in Trouble event
    And user selects request type as "Customer" on trouble event page
    And user enters description as "Test Case 01.17 Event Start Time In History"
    And user changes event start time -1 day in the past
    And user clicks on save button
    Then ticket should be created and status should be assigned
