@Resolved_Group_And_Person_Fields

Feature: Resolved Group And Person
  Scenario: Resolved Group And Person

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
    And user clicks save button
    Then user clicks on Ack button
    And user validates ticket status as "Work In Progress"
    Then user changes status to "Cleared"
    And user selects resolved group as "Access network:Mobile:RAN:Acc Mob RAN Ericsson-SE"
    Then user selects resolved group and verifies resolved person dropdown values
      |resolved group                                                    |resolved person dropdown values|