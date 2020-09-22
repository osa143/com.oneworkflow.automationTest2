@SAO_558

Feature: SAO-558 - User can't reassign "New" status after clicking "Clear" in new tickets creation

  Scenario: SAO-558 - User can't reassign "New" status after clicking "Clear" in new tickets creation

    Given user is on the OneWorkflow login page
    When user logs in with valid user and password
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create trouble event
    And user switches to window 1
    Then trouble record form should appear in new tab
    Then multiple statuses "New:Closed:(clear)" should be available in "Status" dropdown
    When user changes status to "Closed" on trouble event page
    Then user validates ticket status as "Closed"
    And user changes status to "(clear)" on trouble event page
    Then user validates ticket status as ""
    And user changes status to "New" on trouble event page
    Then user validates ticket status as "New"