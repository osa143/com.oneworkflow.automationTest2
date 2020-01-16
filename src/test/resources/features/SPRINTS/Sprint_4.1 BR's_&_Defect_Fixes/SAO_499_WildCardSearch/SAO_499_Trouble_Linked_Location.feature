@SAO_499_Trouble_Linked_Location
@499
Feature: data searching using wildcards
  Scenario: Trouble_Linked_Location

    Given user is on the OneWorkflow login page
    When user logs in with valid user and password
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create trouble event
    And user switches to window 1
    Then trouble record form should appear in new tab
    When user clicks on sweden checkbox under affected BU's
    And user enters "Test case SAO_499 Wild Card Search" in Title field in Trouble event
    And user selects request type as "Customer" on trouble event page
    And user enters description as "Test case SAO_499 Wild Card Search"
    And user clicks on save button
    Then ticket should be created and status should be assigned
    When user clicks on linked items tab
    And user selects target application second dropdown as "OS3 - Operations"
    And user clicks on link button
    Then user switches to frame
    And user clicks on the clear button
    When user searches below in the location+ field and verifies Ticket information
      |locationIdPlus |
      |SE_            |
      |FI_            |
      |EE_            |
      |DK_            |
      |NO_            |
      |LT_            |
    And user clicks on cancel on select target window

