@SAO_499_SID_Location
Feature: data searching using wildcards
  Scenario: user is able to search for data using wildcards

    Given user is on the OneWorkflow login page
    When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user selects SID console from agent console
    Then SID console page should be opened
    Then user switches to window 1
    When user enters "%_Site_BIA" in the location+ field
    And user clicks on search
    Then user should see related country CI information
    When user clicks on clear button
    When user enters "%_Site_alaköyliö" in the location+ field
    And user clicks on search
    Then user should see related country CI information
    When user clicks on clear button
    When user enters "%_Site_S1530" in the location+ field
    And user clicks on search
    Then user should see related country CI information
    When user clicks on clear button
    When user enters "%_Site_TALLI" in the location+ field
    And user clicks on search
    Then user should see related country CI information
    When user clicks on clear button
    When user enters "%_Site_40A" in the location+ field
    And user clicks on search
    Then user should see related country CI information
    When user clicks on clear button
    When user enters "%_Site_BSK" in the location+ field
    And user clicks on search
    Then user should see related country CI information
    When user clicks on clear button
    When user enters "SE_%_a" in the location+ field
    And user clicks on search
    Then user should see related country CI information
    When user clicks on clear button
    When user enters "FI_%_a" in the location+ field
    And user clicks on search
    Then user should see related country CI information
    When user clicks on clear button
    When user enters "DK_%_a" in the location+ field
    And user clicks on search
    Then user should see related country CI information
    When user clicks on clear button
    When user enters "EE_%_a" in the location+ field
    And user clicks on search
    Then user should see related country CI information
    When user clicks on clear button
    When user enters "LT_%_a" in the location+ field
    And user clicks on search
    Then user should see related country CI information
    When user clicks on clear button
    When user enters "NO_%_a" in the location+ field
    And user clicks on search
    Then user should see related country CI information
    When user clicks on clear button
    When user enters "SE_Site_%" in the location+ field
    And user clicks on search
    Then user should see related country CI information
    When user clicks on clear button
    When user enters "FI_Site_%" in the location+ field
    And user clicks on search
    Then user should see related country CI information
    When user clicks on clear button
    When user enters "DK_Site_%" in the location+ field
    And user clicks on search
    Then user should see related country CI information
    When user clicks on clear button
    When user enters "EE_Site_%" in the location+ field
    And user clicks on search
    Then user should see related country CI information
    When user clicks on clear button
    When user enters "LT_Site_%" in the location+ field
    And user clicks on search
    Then user should see related country CI information
    When user clicks on clear button
    When user enters "NO_Site_%" in the location+ field
    And user clicks on search
    Then user should see related country CI information
