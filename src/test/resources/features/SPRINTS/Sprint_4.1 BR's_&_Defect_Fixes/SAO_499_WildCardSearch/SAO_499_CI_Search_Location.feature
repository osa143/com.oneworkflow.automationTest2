#SID console automatically adds a % to end of search query, CI search page doesnt,
@SAO_499_CISearch_Location
@499
Feature: data searching using wildcards
  Scenario: CISearch_Location

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
    And user enters "%_Site_BIA M1" in location field
    And user clicks on search button on CI search window
    Then user validates CI availability
    When user clicks on clear button
    And user enters "%_Site_TALLI" in location field
    And user clicks on search button on CI search window
    Then user validates CI availability
    When user clicks on clear button
    And user enters "%_Site_alaköyliö" in location field
    And user clicks on search button on CI search window
    Then user validates CI availability
    When user clicks on clear button
    And user enters "%_Site_BSK242" in location field
    And user clicks on search button on CI search window
    Then user validates CI availability
    When user clicks on clear button
    And user enters "%_Site_S1530" in location field
    And user clicks on search button on CI search window
    Then user validates CI availability
    When user clicks on clear button
    And user enters "%_Site_40A" in location field
    And user clicks on search button on CI search window
    Then user validates CI availability
    When user clicks on clear button
    And user enters "SE_%_KAVI M2" in location field
    And user clicks on search button on CI search window
    Then user validates CI availability
    When user clicks on clear button
    And user enters "EE_%_TALLI" in location field
    And user clicks on search button on CI search window
    Then user validates CI availability
    When user clicks on clear button
    And user enters "FI_%_biolan" in location field
    And user clicks on search button on CI search window
    Then user validates CI availability
    When user clicks on clear button
    And user enters "NO_%_NTR021" in location field
    And user clicks on search button on CI search window
    Then user validates CI availability
    When user clicks on clear button
    And user enters "DK_%_S1753" in location field
    And user clicks on search button on CI search window
    Then user validates CI availability
    When user clicks on clear button
    And user enters "LT_%_534" in location field
    And user clicks on search button on CI search window
    Then user validates CI availability
    When user clicks on clear button
    And user enters "SE_Site_%" in location field
    And user clicks on search button on CI search window
    Then user validates CI availability
    When user clicks on clear button
    And user enters "EE_Site_%" in location field
    And user clicks on search button on CI search window
    Then user validates CI availability
    When user clicks on clear button
    And user enters "FI_Site_%" in location field
    And user clicks on search button on CI search window
    Then user validates CI availability
    When user clicks on clear button
    And user enters "NO_Site_%" in location field
    And user clicks on search button on CI search window
    Then user validates CI availability
    When user clicks on clear button
    And user enters "DK_Site_%" in location field
    And user clicks on search button on CI search window
    Then user validates CI availability
    When user clicks on clear button
    And user enters "LT_Site_%" in location field
    And user clicks on search button on CI search window
    Then user validates CI availability
    And user clicks on cancel on select target window

