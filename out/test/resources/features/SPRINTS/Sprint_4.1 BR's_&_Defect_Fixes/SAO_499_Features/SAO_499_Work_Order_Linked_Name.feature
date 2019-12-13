@SAO_499_Work_Order_Linked
Feature: data searching using wildcards
  Scenario: user is able to search for data using wildcards

    Given user is on the OneWorkflow login page
    When user logs in with valid username "Change_Automation_1" and password as "Telia@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user selects search menu as "Open Search Form:Work Order"
    And user switches to window 1
    Then user should see blank work order form
    When user enters ticket id as "WO-000000122801"
    And user clicks Search on ticket search
    Then user should see work order
    When user clicks on linked items tab
    And user selects target application second dropdown as "OS3 - Work Order"
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

