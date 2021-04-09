@SAO_7739

Feature: SAO - 7739 - Child alarms Dispaly checkbox functionality revisited

  Scenario: SAO - 7739 - Child alarms Dispaly checkbox functionality revisited

    Given user is on the OneWorkflow login page
    And user logs in with valid user and password
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user enters ticket id as "" in the agent console search box and searches for ticket
    And user highlights present ticket
    And user clicks on alarms tab
    And user selects action dropdown as "Open Full View"
    When user clicks on display active child alarms radio button
    Then user should see child alarms present in alarms tab
    When user clicks on display active child alarms radio button
    When user clicks on alarm in row one
    And user clicks open alarm button
    Then alarm info should be opened
    And user clicks refresh button on alarm tab
    And user clicks on alarm in row two
    And user clicks on terminate
    Then user should see alarm status as ""
    When user clicks on alarm in row three
    And user clicks on detach alarm button
    Then alarm should no longer be visible
    When user clicks on alarm in row four
    And user clicks on detach and create alarm button
    And user switches to window 2
    And user clicks save button
    Then ticket should be created and status should be assigned
    And user switches to window 1
    And user clicks refresh button on alarm tab
    Then alarm should no longer be visible
    When user clicks on alarm in row five
    And user clicks make primary alarm button
    Then user should alarm in row four as primary



