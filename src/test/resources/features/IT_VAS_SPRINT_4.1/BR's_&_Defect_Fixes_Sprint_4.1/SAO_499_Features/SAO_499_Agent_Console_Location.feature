@SAO_499_Agent_Console_Location
#May not be able to run this test in ST due to performance issues
Feature: data searching using wildcards
  Scenario: user is able to search for data using wildcards

    Given user is on the OneWorkflow login page
    When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on the "Search / Quick Create" tab
    And user enters "SE_a" in the Location ID+ field
    #may need quite a large delay here - takes a while to open the box
    Then user clicks on quick search button
    And user should see list of CI's related to Sweden
    Then user clicks on the close button
    When user clicks on the "Search / Quick Create" tab
    And user enters "DK_a" in the Location ID+ field
    #may need quite a large delay here - takes a while to open the box
    Then user clicks on quick search button
    And user should see list of CI's related to denmark
    Then user clicks on the close button
    When user clicks on the quick search clear button
    And user enters "FI_a" in the Location ID+ field
    #may need quite a large delay here - takes a while to open the box
    Then user clicks on quick search button
    And user should see list of CI's related to finland
    Then user clicks on the close button
    When user clicks on the "Search / Quick Create" tab
    And user enters "EE_a" in the Location ID+ field
    #may need quite a large delay here - takes a while to open the box
    Then user clicks on quick search button
    And user should see list of CI's related to estonia
    Then user clicks on the close button
    When user clicks on the quick search clear button
    And user enters "LT_a" in the Location ID+ field
    #may need quite a large delay here - takes a while to open the box
    Then user clicks on quick search button
    And user should see list of CI's related to lithuania
    Then user clicks on the close button
    When user clicks on the "Search / Quick Create" tab
    And user enters "NO_a" in the Location ID+ field
    #may need quite a large delay here - takes a while to open the box
    Then user clicks on quick search button
    And user should see list of CI's related to norway
    Then user clicks on the close button
