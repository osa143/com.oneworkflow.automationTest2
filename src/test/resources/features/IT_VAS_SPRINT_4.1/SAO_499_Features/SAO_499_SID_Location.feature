@SAO_499_SID_Location
Feature: data searching using wildcards
  Scenario: user is able to search for data using wildcards

    Given user is on the OneWorkflow login page
    When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user selects SID console from agent console
    Then SID console page should be opened
    When user enters "%_RNC_SE" in the location+ field
    And user clicks on search
    Then user should see related country CI information
    When user clicks on clear button
    When user enters "%_RNC_FI" in the location+ field
    And user clicks on search
    Then user should see related country CI information
    When user clicks on clear button
    When user enters "%_RNC_DK" in the location+ field
    And user clicks on search
    Then user should see related country CI information
    When user clicks on clear button
    When user enters "%_RNC_EE" in the location+ field
    And user clicks on search
    Then user should see related country CI information
    When user clicks on clear button
    When user enters "%_RNC_LT" in the location+ field
    And user clicks on search
    Then user should see related country CI information
    When user clicks on clear button
    When user enters "%_RNC_NO" in the location+ field
    And user clicks on search
    Then user should see related country CI information
    When user clicks on clear button
    When user enters "SE_%_RNC" in the location+ field
    And user clicks on search
    Then user should see related country CI information
    When user clicks on clear button
    When user enters "FI_%_RNC" in the location+ field
    And user clicks on search
    Then user should see related country CI information
    When user clicks on clear button
    When user enters "DK_%_RNC" in the location+ field
    And user clicks on search
    Then user should see related country CI information
    When user clicks on clear button
    When user enters "EE_%_RNC" in the location+ field
    And user clicks on search
    Then user should see related country CI information
    When user clicks on clear button
    When user enters "LT_%_RNC" in the location+ field
    And user clicks on search
    Then user should see related country CI information
    When user clicks on clear button
    When user enters "NO_%_RNC" in the location+ field
    And user clicks on search
    Then user should see related country CI information
    When user clicks on clear button
    When user enters "SE_RNC_%" in the location+ field
    And user clicks on search
    Then user should see related country CI information
    When user clicks on clear button
    When user enters "FI_RNC_%" in the location+ field
    And user clicks on search
    Then user should see related country CI information
    When user clicks on clear button
    When user enters "DK_RNC_%" in the location+ field
    And user clicks on search
    Then user should see related country CI information
    When user clicks on clear button
    When user enters "EE_RNC_%" in the location+ field
    And user clicks on search
    Then user should see related country CI information
    When user clicks on clear button
    When user enters "LT_RNC_%" in the location+ field
    And user clicks on search
    Then user should see related country CI information
    When user clicks on clear button
    When user enters "NO_RNC_%" in the location+ field
    And user clicks on search
    Then user should see related country CI information
    Then user logsOut and closes the browser