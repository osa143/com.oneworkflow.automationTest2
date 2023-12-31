@02.07 @Incident @02
  #passed
Feature: change incident start time
  Scenario: user can change the incident start time

    Given user is on the OneWorkflow login page
    When user logs in with valid user and password
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create trouble event
    And user switches to window 1
    Then trouble record form should appear in new tab
    When user clicks on sweden checkbox under affected BU's
    And user enters "02:07 Change Incident Start Time" in Title field in Trouble event
    And user selects request type as "Customer" on trouble event page
    And user enters description as "02:07 Change Incident Start Time"
    And user changes event start time as "12-31-2021 11:59:59" future date and time
    Then user clicks on save button
    And an error message should appear: "The Event Start Time cannot be set in the future (ARERR 999001300)"
    When user changes event start time as "12-31-2019 11:59:59" past date and time
    Then user clicks on save button
    And ticket should be created and status should be assigned
