@SAO_499_CI_Search_Location
Feature: data searching using wildcards
  Scenario: user is able to search for data using wildcards

    Given user is on the OneWorkflow login page
    When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user enters ticket id as "OP-000000898440" in the agent console search box and searches for ticket
    And user double clicks on ticket to open
    Then user switches to window 1
    And user validates ticket status as "Assigned"
    When user clicks on Diagnosis tab
    And user clicks on CI search button
    Then user switches to frame
    When user clicks on clear button
    And user enters "%_Site_BIA" in location field
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
    And user enters "%_Site_BSK" in location field
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
    And user enters "SE_%_a" in location field
    And user clicks on search button on CI search window
    Then user validates CI availability
    When user clicks on clear button
    And user enters "EE_%_a" in location field
    And user clicks on search button on CI search window
    Then user validates CI availability
    When user clicks on clear button
    And user enters "FI_%_a" in location field
    And user clicks on search button on CI search window
    Then user validates CI availability
    When user clicks on clear button
    And user enters "NO_%_a" in location field
    And user clicks on search button on CI search window
    Then user validates CI availability
    When user clicks on clear button
    And user enters "DK_%_a" in location field
    And user clicks on search button on CI search window
    Then user validates CI availability
    When user clicks on clear button
    And user enters "LT_%_a" in location field
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
    And user closes warning message and clicks on close button

