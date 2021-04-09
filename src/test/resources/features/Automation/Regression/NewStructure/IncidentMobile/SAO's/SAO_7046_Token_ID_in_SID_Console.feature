@SAO_7046 @Incident_SAO

Feature: SAO-7046 - Token ID in SID Console

  Scenario: SAO-7046 - Token ID in SID Console

    Given user is on the OneWorkflow login page
    When user logs in with valid user and password
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user selects SID console from agent console
    Then SID console page should be opened
    And dropdown values "CIs with Location:All CIs:Circuit CIs:CIs by TokenId:(clear)" should be available in search for dropdown
    When user enters "SE_AAA_AAA98SE" in name field
    And user clicks on search button on CI search window
    Then user gets token ID for the CI
    When user clicks on clear button
    When user selects search for as "CIs by TokenId" on CI search window
    Then user should see location plus as read only
    And user enters saved token ID and searches
    Then user validates CI "SE_AAA_AAA98SE" and token ID is present for the CI
    