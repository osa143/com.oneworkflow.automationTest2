@SAO_499_CI_Search_Name
Feature: data searching using wildcards
  Scenario: user is able to search for data using wildcards

    Given user is on the OneWorkflow login page
    When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user enters ticket id as "OP-000000898440" in the agent console search box and searches for ticket
    Then user switches to window 1
    And user validates ticket status as "Assigned"
    When user clicks on Diagnosis tab
    And user clicks on CI search button
    Then user switches to frame
    When user clicks on clear button
    And user enters "%_RNC_SE" in name field
    And user clicks on CI search button
    Then user validates CI availability
    When user clicks on clear button
    And user enters "%_RNC_EE" in name field
    And user clicks on CI search button
    Then user validates CI availability
    When user clicks on clear button
    And user enters "%_RNC_FI" in name field
    And user clicks on CI search button
    Then user validates CI availability
    When user clicks on clear button
    And user enters "%_RNC_NO" in name field
    And user clicks on CI search button
    Then user validates CI availability
    When user clicks on clear button
    And user enters "%_RNC_DK" in name field
    And user clicks on CI search button
    Then user validates CI availability
    When user clicks on clear button
    And user enters "%_RNC_LT" in name field
    And user clicks on CI search button
    Then user validates CI availability
    When user clicks on clear button
    And user enters "SE_%_RNC" in name field
    And user clicks on CI search button
    Then user validates CI availability
    When user clicks on clear button
    And user enters "EE_%_RNC" in name field
    And user clicks on CI search button
    Then user validates CI availability
    When user clicks on clear button
    And user enters "FI_%_RNC" in name field
    And user clicks on CI search button
    Then user validates CI availability
    When user clicks on clear button
    And user enters "NO_%_RNC" in name field
    And user clicks on CI search button
    Then user validates CI availability
    When user clicks on clear button
    And user enters "DK_%_RNC" in name field
    And user clicks on CI search button
    Then user validates CI availability
    When user clicks on clear button
    And user enters "LT_%_RNC" in name field
    And user clicks on CI search button
    Then user validates CI availability
    When user clicks on clear button
    And user enters "SE_RNC_%" in name field
    And user clicks on CI search button
    Then user validates CI availability
    When user clicks on clear button
    And user enters "EE_RNC_%" in name field
    And user clicks on CI search button
    Then user validates CI availability
    When user clicks on clear button
    And user enters "FI_RNC_%" in name field
    And user clicks on CI search button
    Then user validates CI availability
    When user clicks on clear button
    And user enters "NO_RNC_%" in name field
    And user clicks on CI search button
    Then user validates CI availability
    When user clicks on clear button
    And user enters "DK_RNC_%" in name field
    And user clicks on CI search button
    Then user validates CI availability
    When user clicks on clear button
    And user enters "LT_RNC_%" in name field
    And user clicks on CI search button
    Then user validates CI availability
    And user closes warning message and clicks on close button


