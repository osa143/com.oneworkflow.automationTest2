#passed
@SAO_499_known-Error_Name
Feature: data searching using wildcards
  Scenario: user is able to search for data using wildcards

    Given user is on the OneWorkflow login page
    When user logs in with valid username "Change_Automation_1" and password as "Telia@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user selects search menu as "Open Search Form:Problem Record"
    And user switches to window 1
    When user enters ticket id as "KE-000000009715"
    And user clicks Search on ticket search
    Then user should see known error ticket
    When user clicks on linked items tab
    And user selects target application second dropdown as "OS3 - Known Error"
    And user clicks on link button
    Then user switches to frame
    And user clicks on the clear button
    When user enters "" in location field
    When user enters "SE_" in the linked location field
    And user clicks on the search button
    Then user should see ticket related to "SE"
    And user clicks on the clear button
    When user enters "FI_" in the linked location field
    And user clicks on the search button
    Then user should see ticket related to "FI"
    And user clicks on the clear button
    When user enters "EE_" in the linked location field
    And user clicks on the search button
    Then user should see ticket related to "EE"
    And user clicks on the clear button
    When user enters "DK_" in the linked location field
    And user clicks on the search button
    Then user should see ticket related to "DK"
    And user clicks on the clear button
    When user enters "NO_" in the linked location field
    And user clicks on the search button
    Then user should see ticket related to "NO"
    And user clicks on the clear button
    When user enters "LT_" in the linked location field
    And user clicks on the search button
    Then user should see ticket related to "LT"
