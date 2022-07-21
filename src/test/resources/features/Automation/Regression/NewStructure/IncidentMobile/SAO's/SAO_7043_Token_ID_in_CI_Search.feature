@SAO_7043 @Incident_SAO

Feature:SAO-7043 - 'Token ID' in CI Search

  Scenario: 'Token ID' in CI Search for all ticket types

    Given user is on the OneWorkflow login page
    When user logs in with valid username "frvi96_auto" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
#    When user clicks on create trouble event
    When user clicks on agent console create trouble event
    And user switches to window 1
    Then trouble record form should appear in new tab
#    When user clicks on sweden checkbox under affected BU's
    When user clicks on OP sweden checkbox under affected BU's
    And user enters "Test SAO-6737" in Title field in Trouble event
    And user selects request type as "Customer" on trouble event page
    And user enters description as "Test SAO-6737"
    And user clicks on save button
    Then ticket should be created and status should be assigned
    When user clicks on Diagnosis tab
    And user clicks on CI search button
    And user switches to frame
    And dropdown values "CIs with Location:All CIs:Circuit CIs:CIs by TokenId:(clear)" should be available in search for dropdown
    When user enters "One Workflow" in name field
    And user clicks on search button on CI search window
    Then user gets token ID for the CI
    When user clicks on clear button
    When user selects search for as "CIs by TokenId" on CI search window
    Then user should see location plus as read only
    And user enters saved token ID and searches
    Then user validates CI "One Workflow" and token ID is present for the CI
    When user selects a CI from list
    When user selects impact level as "No Impact"
    And user clicks on relate CI
    And user closes warning message
    And user clicks on close button on CI search window
    Then user validates CI "One Workflow" is listed
    And user validates CI columns "TokenId" availability
    When user clicks on create work order
    And user switches to window 2
    Then work order form should appear in new tab
    When user enters title as "Test SAO-6737"
    Then user selects request type as "Analysis" in work order page
    And user enters description as "Test SAO-6737"
    Then user selects priority as "Major"
    And user clicks save button
    When user clicks on Diagnosis tab
    And user clicks on CI search button
    And user switches to frame
    And dropdown values "CIs with Location:All CIs:Circuit CIs:CIs by TokenId:(clear)" should be available in search for dropdown
    When user enters "One Workflow" in name field
    And user clicks on search button on CI search window
    Then user gets token ID for the CI
    When user clicks on clear button
    When user selects search for as "CIs by TokenId" on CI search window
    Then user should see location plus as read only
    And user enters saved token ID and searches
    Then user validates CI "One Workflow" and token ID is present for the CI
    When user selects a CI from list
    When user selects impact level as "No Impact"
    And user clicks on relate CI
    And user closes warning message
    And user clicks on close button on CI search window
    Then user validates CI "One Workflow" is listed
    And user validates CI columns "TokenId" availability
    When user clicks on create problem record
    And user switches to window 3
    Then problem record form should appear in new tab
    When user creates problem ticket with below details
      |Title        |RequestType            |Description  |ImpactType      |Urgency|
      |Test SAO-6737|XX_Test:Functional Test|Test SAO-6737|Moderate/Limited|Low    |
    Then ticket should be created and status should be assigned
    When user clicks on Diagnosis tab
    And user clicks on CI search button
    And user switches to frame
    And dropdown values "CIs with Location:All CIs:Circuit CIs:CIs by TokenId:(clear)" should be available in search for dropdown
    When user enters "One Workflow" in name field
    And user clicks on search button on CI search window
    Then user gets token ID for the CI
    When user clicks on clear button
    When user selects search for as "CIs by TokenId" on CI search window
    Then user should see location plus as read only
    And user enters saved token ID and searches
    Then user validates CI "One Workflow" and token ID is present for the CI
    When user selects a CI from list
    When user selects impact level as "No Impact"
    And user clicks on relate CI
    And user closes warning message
    And user clicks on close button on CI search window
    Then user validates CI "One Workflow" is listed
    And user validates CI columns "TokenId" availability
    When user clicks on create known error
    And user switches to window 4
    Then known error form should appear in new tab
    And user should see "Next Assessment Date" dropdown as optional
    And user enters "Test SAO-6737" in Title field
    And user selects request type as "CPS:IT:Other" on known error page
    And user enters description as "Test SAO-6737"
    And user selects priority as "Minor"
    When user clicks on save button
    Then user validates ticket status as "Draft"
    When user clicks on Diagnosis tab
    And user clicks on CI search button
    And user switches to frame
    And dropdown values "CIs with Location:All CIs:Circuit CIs:CIs by TokenId:(clear)" should be available in search for dropdown
    When user enters "One Workflow" in name field
    And user clicks on search button on CI search window
    Then user gets token ID for the CI
    When user clicks on clear button
    When user selects search for as "CIs by TokenId" on CI search window
    Then user should see location plus as read only
    And user enters saved token ID and searches
    Then user validates CI "One Workflow" and token ID is present for the CI
    When user selects a CI from list
    When user selects impact level as "No Impact"
    And user enters impact from date as current date
    And user clicks on relate CI
    And user closes warning message
    And user clicks on close button on CI search window
    Then user validates CI "One Workflow" is listed
    And user validates CI columns "TokenId" availability
    When user clicks on create change record
    And user switches to window 5
    When user creates change ticket with following details
      |RequestType  |Title            |RequestCategory|Description  |Reason|Priority|ChangeBuilder    |Implementation    |TestPlan|RollBack    |CommPlan|VerOfFunctionality|Risk   |ServiceCustomerImpact|ImpactDuration|EstimatedImpact|
      |Normal Change|IT:Mobile:Billing|Cable splicing |Test SAO-6737|none  |Major   |Problem initiator|New implementation|Yes     |Not possible|CommPlan|Not possible      |No Risk|Test ticket no impact|5             |No Impact      |
    When user clicks on Diagnosis tab
    And user clicks on CI search button
    And user switches to frame
    And dropdown values "CIs with Location:All CIs:Circuit CIs:CIs by TokenId:(clear)" should be available in search for dropdown
    When user enters "One Workflow" in name field
    And user clicks on search button on CI search window
    Then user gets token ID for the CI
    When user clicks on clear button
    When user selects search for as "CIs by TokenId" on CI search window
    Then user should see location plus as read only
    And user enters saved token ID and searches
    Then user validates CI "One Workflow" and token ID is present for the CI
    When user selects a CI from list
    When user selects impact level as "No Impact"
    And user clicks on relate CI
    And user closes warning message on CI search window for change ticket
    And user clicks on close button on CI search window
    Then user validates CI "One Workflow" is listed
    And user validates CI columns "TokenId" availability


