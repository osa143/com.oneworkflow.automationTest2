@05.02 @Incident  @Incident1 @05
#passed
Feature: Incident summary
  Scenario: Incident summary

    Given user is on the OneWorkflow login page
    When user logs in with valid user and password
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create trouble event
    And user switches to window 1
    Then trouble record form should appear in new tab
    When user clicks on sweden checkbox under affected BU's
    And user enters "Test case 05.02 Incident Summary" in Title field in Trouble event
    And user selects request type as "Customer" on trouble event page
    And user enters description as "Test case 05.02 Incident Summary"
    And user clicks on save button
    Then ticket should be created and status should be assigned
    And user adds CI "SE_EPG_FREEPG1" to the ticket with impact level "Degradation of Service"
    When user changes status to "Cleared" on trouble event page
    And user selects fault position as "N/A:N/A" on trouble event page
    And user selects cause as "N/A:N/A:N/A" on trouble event page
    And user selects action dropdown as "N/A:N/A" on trouble event page
    And user enters closure info as "Test Ticket"
    Then user enters event end time as current time
    When user clicks on Diagnosis tab
    And user right clicks on primary CI and selects "Impact:Clear"
    And user clicks on save button
    Then user validates ticket status as "Cleared"
    When user changes status to "Closed"
    And user clicks on save button
    Then user validates ticket status as "Closed"
    And user validates closure info is present

