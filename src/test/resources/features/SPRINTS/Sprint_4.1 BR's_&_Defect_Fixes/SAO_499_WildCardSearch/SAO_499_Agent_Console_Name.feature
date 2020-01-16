@SAO_499_Agent_Console_Name
@499
#PASSED
Feature: data searching using wildcards
  Scenario: Agent_Console_Name

    Given user is on the OneWorkflow login page
    When user logs in with valid user and password
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on "Search / Quick Create" tab
    And user enters "SE_Site_" in the Location Name+ field
    And user switches to frame
    And user should see list of CI's related to "SE"
    Then user clicks on the close button
    And user enters "DK_Site_" in the Location Name+ field
    And user switches to frame
    And user should see list of CI's related to "DK"
    Then user clicks on the close button
    When user clicks on the quick search clear button
    And user enters "FI_Site_" in the Location Name+ field
    And user switches to frame
    And user should see list of CI's related to "FI"
    Then user clicks on the close button
    And user enters "EE_Site_" in the Location Name+ field
    And user switches to frame
    And user should see list of CI's related to "EE"
    Then user clicks on the close button
    When user clicks on the quick search clear button
    And user enters "LT_Site_" in the Location Name+ field
    And user switches to frame
    And user should see list of CI's related to "LT"
    Then user clicks on the close button
    And user enters "NO_Site_" in the Location Name+ field
    And user switches to frame
    And user should see list of CI's related to "NO"
    Then user clicks on the close button

