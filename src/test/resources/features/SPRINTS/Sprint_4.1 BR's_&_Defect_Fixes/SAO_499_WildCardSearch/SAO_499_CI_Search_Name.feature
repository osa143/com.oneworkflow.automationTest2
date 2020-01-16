@SAO_499_CISearch_Name
@499
Feature: data searching using wildcards
  Scenario: CISearch_Name

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
    When user clicks on "Diagnosis" tab
    And user clicks on CI search button
    Then user switches to frame
    When user clicks on clear button
    And user enters "%_RNC_SE" in name field
    And user clicks on search button on CI search window
    Then user validates CI availability
    When user clicks on clear button
    And user enters "%_RNC_EE" in name field
    And user clicks on search button on CI search window
    Then user validates CI availability
    When user clicks on clear button
    And user enters "%_RNC_FI" in name field
    And user clicks on search button on CI search window
    Then user validates CI availability
    When user clicks on clear button
    And user enters "%_RNC_NO" in name field
    And user clicks on search button on CI search window
    Then user validates CI availability
    When user clicks on clear button
    And user enters "%_RNC_DK" in name field
    And user clicks on search button on CI search window
    Then user validates CI availability
    When user clicks on clear button
    And user enters "%_RNC_LT" in name field
    And user clicks on search button on CI search window
    Then user validates CI availability
    When user clicks on clear button
    And user enters "SE_%_RNC" in name field
    And user clicks on search button on CI search window
    Then user validates CI availability
    When user clicks on clear button
    And user enters "EE_%_RNC" in name field
    And user clicks on search button on CI search window
    Then user validates CI availability
    When user clicks on clear button
    And user enters "FI_%_RNC" in name field
    And user clicks on search button on CI search window
    Then user validates CI availability
    When user clicks on clear button
    And user enters "NO_%_RNC" in name field
    And user clicks on search button on CI search window
    Then user validates CI availability
    When user clicks on clear button
    And user enters "DK_%_RNC" in name field
    And user clicks on search button on CI search window
    Then user validates CI availability
    When user clicks on clear button
    And user enters "LT_%_RNC" in name field
    And user clicks on search button on CI search window
    Then user validates CI availability
    When user clicks on clear button
    And user enters "SE_RNC_%" in name field
    And user clicks on search button on CI search window
    Then user validates CI availability
    When user clicks on clear button
    And user enters "EE_RNC_%" in name field
    And user clicks on search button on CI search window
    Then user validates CI availability
    When user clicks on clear button
    And user enters "FI_RNC_%" in name field
    And user clicks on search button on CI search window
    Then user validates CI availability
    When user clicks on clear button
    And user enters "NO_RNC_%" in name field
    And user clicks on search button on CI search window
    Then user validates CI availability
    When user clicks on clear button
    And user enters "DK_RNC_%" in name field
    And user clicks on search button on CI search window
    Then user validates CI availability
    When user clicks on clear button
    And user enters "LT_RNC_%" in name field
    And user clicks on search button on CI search window
    Then user validates CI availability
    And user clicks on cancel on select target window


