@SAO_7043
# Tags: optional

Feature: SAO-7043 - 'Token ID' in CI Search

  Scenario: SAO-7043 - 'Token ID' in CI Search

    Given user is on the OneWorkflow login page
    When user logs in with valid user and password
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create trouble event
    And user switches to window 1
    Then trouble record form should appear in new tab
    When user clicks on sweden checkbox under affected BU's
    And user enters "Test SAO-6737" in Title field in Trouble event
    And user selects request type as "Customer" on trouble event page
    And user enters description as "Test SAO-6737"
    And user clicks on save button
    Then ticket should be created and status should be assigned
    When user clicks on Diagnosis tab
    And user clicks on CI search button
    And user validates "CIs by TokenId" is present under search for dropdown
    When user enters "" in manual CI search box
    And user clicks on CI search button
    Then user copies token ID present
    When user selects search for dropdown as "CI by TokenId"
    And user validates location+ field as read only
    And user enters stored token ID and searches
    Then user validates token ID is present
    When user selects impact level as "No Impact"
    And user clicks on relate CI
    And user clicks ok on CI window pop up
    And user clicks on close button on CI search window
    Then user validates CI "" is listed
    And user validates token ID column is displayed in diagnosis tab

    When user clicks on create work order
    And user switches to window 2
    Then work order form should appear in new tab
    When user enters title as "Testing"
    Then user selects request type as "Analysis" in work order page
    And user enters description as "Testing"
    Then user selects priority as "Major"
    And user clicks save button
    When user clicks on Diagnosis tab
    And user clicks on CI search button
    And user validates "CIs by TokenId" is present under search for dropdown
    When user enters "" in manual CI search box
    And user clicks on CI search button
    Then user copies token ID present
    When user selects search for dropdown as "CI by TokenId"
    And user validates location+ field as read only
    And user enters stored token ID and searches
    Then user validates token ID is present
    When user selects impact level as "No Impact"
    And user clicks on relate CI
    And user clicks ok on CI window pop up
    And user clicks on close button on CI search window
    Then user validates CI "" is listed
    And user validates token ID column is displayed in diagnosis tab

    When user clicks on create change record
    And user switches to window 3
    When user selects request type as "Standard Change"
    And user selects template as "All:IT:Other:TEST TEMPLATE [UAT] - Standard Change"
    When user enters "CI B2" in the change builder field
    And user enters as "Automation Test" in service and customer impact
    And user enters request start time as 30 minutes past from "Europe/London" timezone "MM/dd/yyyy HH:mm:ss" format
    And user enters request end time as 50 minutes past from "Europe/London" timezone "MM/dd/yyyy HH:mm:ss" format
    And user enters impact duration as "20" minutes
    Then user enters description as "Regression - Change Management Process"
    And user clicks on save button
    When user clicks on Diagnosis tab
    And user clicks on CI search button
    And user validates "CIs by TokenId" is present under search for dropdown
    When user enters "" in manual CI search box
    And user clicks on CI search button
    Then user copies token ID present
    When user selects search for dropdown as "CI by TokenId"
    And user validates location+ field as read only
    And user enters stored token ID and searches
    Then user validates token ID is present
    When user selects impact level as "No Impact"
    And user clicks on relate CI
    And user clicks ok on CI window pop up
    And user clicks on close button on CI search window
    Then user validates CI "" is listed
    And user validates token ID column is displayed in diagnosis tab

    When user clicks on create problem record
    And user switches to window 4
    Then problem record form should appear in new tab
    When user creates problem ticket with below details
      |Title                                  |RequestType            |Description               |ImpactType      |Urgency|
      |proactive investigation of: frvi96_auto|XX_Test:Functional Test|PB link to KE and withdraw|Moderate/Limited|Low    |
    Then ticket should be created and status should be assigned
    When user clicks on Diagnosis tab
    And user clicks on CI search button
    And user validates "CIs by TokenId" is present under search for dropdown
    When user enters "" in manual CI search box
    And user clicks on CI search button
    Then user copies token ID present
    When user selects search for dropdown as "CI by TokenId"
    And user validates location+ field as read only
    And user enters stored token ID and searches
    Then user validates token ID is present
    When user selects impact level as "No Impact"
    And user clicks on relate CI
    And user clicks ok on CI window pop up
    And user clicks on close button on CI search window
    Then user validates CI "" is listed
    And user validates token ID column is displayed in diagnosis tab

   #User logs out
    When user clicks on create known error
    And user switches to window 5
    Then known error form should appear in new tab
    And user should see "Next Assessment Date" dropdown as optional
    And user enters "SAO-5324" in Title field
    And user selects request type as "CPS:IT:Other" on known error page
    And user enters description as "A known error"
    And user selects priority as "Minor"
    When user clicks on save button
    Then user validates ticket status as "Draft"
    When user clicks on Diagnosis tab
    And user clicks on CI search button
    And user validates "CIs by TokenId" is present under search for dropdown
    When user enters "" in manual CI search box
    And user clicks on CI search button
    Then user copies token ID present
    When user selects search for dropdown as "CI by TokenId"
    And user validates location+ field as read only
    And user enters stored token ID and searches
    Then user validates token ID is present
    When user selects impact level as "No Impact"
    And user clicks on relate CI
    And user clicks ok on CI window pop up
    And user clicks on close button on CI search window
    Then user validates CI "" is listed
    And user validates token ID column is displayed in diagnosis tab






