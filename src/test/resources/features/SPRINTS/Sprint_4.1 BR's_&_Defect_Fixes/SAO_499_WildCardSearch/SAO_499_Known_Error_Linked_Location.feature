#passed
@SAO_499_KnownError_Location
@SAO_499
Feature: data searching using wildcards
  Scenario: KnownError_Location

    Given user is on the OneWorkflow login page
    When user logs in with valid username "Tohall_copy" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create known error
    And user switches to window 1
    When user enters "SAO_499 Wild Card Search" in Title field
    And user selects request type as "Risks & Failures:Lack of RACI" on known error page
    And user enters description as "SAO_499 Wild Card Search"
    And user selects priority as "Info"
    Then user clicks on save button
    When user clicks on linked items tab
    And user selects target application first dropdown as "OS3 - Known Error"
    And user clicks on link button
    Then user switches to frame
    And user clicks on the clear button
    When user searches below in the location+ field and verifies Ticket information
      |locationIdPlus |
      |SE_            |
      |FI_            |
      |EE_            |
      |DK_            |
      |NO_            |
      |LT_            |
    And user clicks on cancel on select target window