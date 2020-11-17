@SAO_7046

Feature: SAO-7046 - Token ID in SID Console

  Scenario: SAO-7046 - Token ID in SID Console

    Given user is on the OneWorkflow login page
    When user logs in with valid user and password
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user selects SID console from agent console
    Then SID console page should be opened
    And user validates "CIs by TokenId" is present under search for dropdown
    When user enters "" in manual CI search box
    And user clicks on CI search button
    Then user copies token ID present
    When user selects search for dropdown as "CI by TokenId"
    And user validates location+ field as read only
    And user enters stored token ID and searches
    Then user validates token ID is present
    