#Production Defect  @Cleared_time_change_to_closed
Feature: Incident ticket - Cleared time change to closed: Event time should not be changed to closed time,
#            after ticket is closed.
#
    Scenario: Validating a newly created incident that the event end time is not change or set to Closed time after ticket is closed

      Given user is on the OneWorkflow login page
      When user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create trouble event
      And user switches to window 1
      Then trouble record form should appear in new tab
      And user clicks on sweden checkbox under affected BU's
      Then user enters title as "Test"
      And user selects request type as "Event" on trouble event page
      Then user enters description as "Test Description"
      And user enters event start time as -2880 mins past
      And user clicks save button
      Then user clicks on Ack button
      And user validates ticket status as "Work In Progress"
      Then user changes status to "Cleared"
      And user selects fault position as "Carrier Voice | Genband" on trouble event page
      And user selects cause as "Change Process | Configuration | Customer" on trouble event page
      And user enters event end time as -1440 mins past
      And user clicks save button
#
#
#     Then user validates that the event end time is not change/set to current TIMESTAMP
      