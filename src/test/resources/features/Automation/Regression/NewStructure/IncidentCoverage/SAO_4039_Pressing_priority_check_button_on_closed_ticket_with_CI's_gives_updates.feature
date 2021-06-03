@SAO_4039 @IncidentCoverage
#manually check priority check button is disabled
Feature: SAO-4039 - Pressing priority check button on closed ticket with CI's gives updates

  Scenario: SAO-4039 - Pressing priority check button on closed ticket with CI's gives updates

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
    Then ticket should be created and status should be assigned
    And user clicks save button
    Then user adds below CI's to the ticket
      |   CI Name     |
      |SE_EPG_FREEPG1 |
      |SE_EPG_HYEPG1  |
      |SE_EPG_LDHEPG1 |
    Then user clicks on Ack button
    And user validates ticket status as "Work In Progress"
    Then user changes status to "Cleared" on trouble event page
    And user clicks on Diagnosis tab
    Then user right clicks on CI "SE_EPG_FREEPG1" and clears impact for all CI's
    And user should see confirmation message for impact clear and user clicks yes
    And user selects fault position as "N/A:N/A" on trouble event page
    Then user selects cause as "N/A:N/A:N/A" on trouble event page
    And user enters event end time as current time
    Then user clicks save button
    Then user changes status to "Closed" on trouble event page
    And user selects action dropdown as "N/A:N/A" on trouble event page
    Then user enters closure info as "Testing"
    And user clicks save button
    Then user validates ticket status as "Closed"
    And user validates priority check button is read only

