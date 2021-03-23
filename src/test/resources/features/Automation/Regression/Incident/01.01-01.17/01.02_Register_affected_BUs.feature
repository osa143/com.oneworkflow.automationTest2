@01.02 @Incident @01
#passed
Feature: Register affected BU's

  Scenario: Register affected BU's

    Given user is on the OneWorkflow login page
    When user logs in with valid user and password
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create trouble event
    And user switches to window 1
    Then trouble record form should appear in new tab
    When user validates BU availability
    And user clicks on sweden checkbox under affected BU's
    And user clicks on finland checkbox under affected BU's
    Then user validates sweden and finland checkboxes are selected
    And user enters "Test case 01.02 register affected BU" in Title field
    And user selects request type as "Customer" on trouble event page
    And user enters description as "register affected BU"
    And user clicks on save button

