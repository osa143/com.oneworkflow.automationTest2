@00.10 @Incident @00
#passed
Feature: validate urgency field availability in incident record

  Scenario: validate urgency field availability in incident record

    Given user is on the OneWorkflow login page
    When user logs in with valid user and password
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create trouble event
    And user switches to window 1
    Then trouble record form should appear in new tab
    When user validates importance field
    Then multiple statuses "Critical:High:Average:Low:(clear)" should be available in Importance dropdown
    When user clicks on sweden checkbox under affected BU's
    Then user enters "Test case 00.10 validate options for Urgency" in Title field
    And user selects request type as "Customer" on trouble event page
    And user enters description as "Test case 00.10 validate options for Urgency drop down"
    And user clicks on save button
    Then ticket should be created and status should be assigned