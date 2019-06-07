@SAO_370_495
Feature: Alarm tab in agent console
  Scenario: User is able to view alarm details and make modifications from the agent console
    Given user is on the OneWorkflow login page
    When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user enters ticket id as "" in the search bar and searches for ticket
    Then trouble ticket should be present in agent console
    When user highlights present ticket
    And user navigates to the alarm tab
    Then user should see an alarm present
    When user clicks on preferences under the alarm tab
    And user clicks on remove column:Alarm ID
    Then user shouldn't see alarm ID column
    When user clicks on preferences under the alarm tab
    And user clicks on add column:Alarm ID
    Then user should see alarm ID column
    When user double clicks on the alarm present
    Then user should see alarm details
    When user clicks on close button
    Then trouble ticket should be present in agent console
    When user selects "open full view" from the action dropdown
    Then user should see alarm console displayed
    And user should see list of alarms
    Then user closes alarm console
    When user selects one secondary alarm
    And user clicks on detach button
    And user clicks "Yes" on the popup
    Then user shouldn't see the detached alarm
    When user selects one secondary alarm
    And user clicks on make primary button
    Then user validates secondary alarm turns primary
    When user selects one secondary alarm
    And clicks on detach & create button
    And user clicks "Yes" on the popup
    Then trouble record form should appear in new tab
    When user enters mandatory fields
    And user clicks on save button on the problem form
    Then ticket should be created and status should be assigned
    When user clicks on Diagnosis tab
    Then CI should be listed and displayed under the Diagnosis tab
    Then user validates OLA value is set
    When user switches to window 1
    And user selects one secondary alarm
    And user selects "Terminate" from the action dropdown
    And user clicks on refresh button on alarms tab
    Then user validates alarm status should be refreshed to "cleared"
