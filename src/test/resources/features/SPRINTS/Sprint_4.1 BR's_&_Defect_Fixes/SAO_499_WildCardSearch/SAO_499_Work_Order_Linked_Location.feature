@SAO_499_Work_Order_Linked_Location
@499
Feature: data searching using wildcards
  Scenario: Work_Order_Linked_Location

    Given user is on the OneWorkflow login page
    When user logs in with valid user and password
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create work order
    And user switches to window 1
    Then work order form should appear in new tab
    When user clicks on sweden checkbox under affected BU's
    And user enters "Test Case SAO_499 Wild Card Search" in Title field
    And user selects request type as "Analysis" in work order page
    And user enters description as "Test Case SAO_499 Wild Card Search"
    And user selects priority as "Info"
    Then user clicks on save button
    When user clicks on linked items tab
    And user selects target application first dropdown as "OS3 - Work Order"
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