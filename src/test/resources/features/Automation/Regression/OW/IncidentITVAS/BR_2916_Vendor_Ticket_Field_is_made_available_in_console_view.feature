@BR-2916_Vendor_Ticket_Field @OW_Incident

Feature: BR-2916 - Vendor Ticket Field is made available in console view[s]

  Scenario: BR-2916 - Vendor Ticket Field is made available in console view[s]

    Given user is on the OneWorkflow login page
    When user logs in with valid user and password
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create trouble event
    And user switches to window 1
    Then trouble record form should appear in new tab
    When user clicks on sweden checkbox under affected BU's
    And user enters "Test" in Title field in Trouble event
    And user selects request type as "Customer" on trouble event page
    And user enters description as "Test"
    And user clicks on vendor under sections
    And user enters vendor name as "Test Vendor"
    And user clicks on save button
    Then ticket should be created and status should be assigned
    And user gets trouble ticket value
    And user switches to window 0
    When user enters ticket previously created and searches in agent console and highlights
    Then "Vendor" column within agent console should be displayed
    And user validates "Vendor" column is filled with correct information from ticket as "Test Vendor"
