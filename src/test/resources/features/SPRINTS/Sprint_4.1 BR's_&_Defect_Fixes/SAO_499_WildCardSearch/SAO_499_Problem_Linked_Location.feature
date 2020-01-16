@SAO_499_Problem_Linked_Location
@SAO_499
Feature: data searching using wildcards
  Scenario: Problem_Linked_Location

    Given user is on the OneWorkflow login page
    When user logs in with valid username "Tohall_copy" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create problem record
    And user switches to window 1
    Then problem record form should appear in new tab
    When user creates problem ticket with following details
      |Title                                  |RequestType |Description                    |ImpactType      |Urgency|
      |proactive investigation of Tohall_Copy|CPS:IT:Other|UAT Test 3 Add CI and attachment|Moderate/Limited|Low    |
    Then ticket should be created and status should be assigned
    When user clicks on linked items tab
    And user selects target application first dropdown as "OS3 - Problem"
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