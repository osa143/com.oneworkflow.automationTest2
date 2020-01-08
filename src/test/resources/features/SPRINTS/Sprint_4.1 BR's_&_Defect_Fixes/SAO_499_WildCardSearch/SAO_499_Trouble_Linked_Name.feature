@Trouble_Linked_Name
Feature: data searching using wildcards
  Scenario: user is able to search for data using wildcards

    Given user is on the OneWorkflow login page
    When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on search and selects open search forms and problem record
    And user switches to window 1
    Then user should see blank problem search form
    When user enters ticket id as "OP-000000899105"
    And user clicks Search on ticket search
    Then user should see trouble ticket
    When user clicks on linked items tab
    And user selects target application second dropdown as "OS3 - Operations"
    And user clicks on link button
    Then user switches to frame
    And user clicks on the clear button
    When user enters "SE_" in the linked name field
    And user clicks on the search button
    Then user should see ticket related to Sweden
    And user clicks on the clear button
    When user enters "FI_" in the linked name field
    And user clicks on the search button
    Then user should see ticket related to Finland
    And user clicks on the clear button
    When user enters "EE_" in the linked name field
    And user clicks on the search button
    Then user should see ticket related to Estonia
    And user clicks on the clear button
    When user enters "DK_" in the linked name field
    And user clicks on the search button
    Then user should see ticket related to Denmark
    And user clicks on the clear button
    When user enters "NO_" in the linked name field
    And user clicks on the search button
    Then user should see ticket related to Norway
    And user clicks on the clear button
    When user enters "LT_" in the linked name field
    And user clicks on the search button
    Then user should see ticket related to Lithuania




