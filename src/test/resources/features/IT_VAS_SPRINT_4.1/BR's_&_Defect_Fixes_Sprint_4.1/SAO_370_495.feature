@SAO_370_495
Feature: Alarm tab in agent console
  Scenario: User is able to view alarm details and make modifications from the agent console

    Given user is on the OneWorkflow login page
    When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user enters ticket id as "OP-000000898807" in the agent console search box and searches for ticket
    Then trouble ticket should be present in agent console
    When user highlights present ticket
    And user clicks on "Alarms" tab
    Then user should see an alarm present
    When user sets the preferences under the alarm tab as "Remove Column:Alarm ID"
    Then user shouldn't see "Alarm ID" column
    When user sets the preferences under the alarm tab as "Add Column:Alarm ID"
    Then user should see "Alarm ID" column
    When user double clicks on the alarm present
    Then user switches to frame 2
    Then alarm details should be displayed in new window
    When user clicks on close button
    Then trouble ticket should be present in agent console
    When user selects action dropdown as "Open Full View"
    Then user should see list of alarms in alarm console
    Then user closes alarm console
    When user selects one secondary alarm
    And user selects action dropdown as "Detach"
    And  user clicks "Yes" on the popup
    Then user shouldn't see the detached alarm
    When user selects one secondary alarm
    And user selects action dropdown as "Make Primary"
    And user clicks ok on the Secondary Primary popup
    Then user validates secondary alarm turns primary
    When user selects one secondary alarm
    And user selects action dropdown as "Detach & Create"
    And user clicks "Yes" on the popup
    Then trouble record form should appear in new tab
    And user switches to window 1
    And user clicks on save button on the problem form
    Then ticket should be created and status should be assigned
    When user clicks on Diagnosis tab
    Then CI should be listed and displayed under the Diagnosis tab
    Then user validates OLA value is set
    When user switches to window 0
    And user selects one secondary alarm
    And user selects action dropdown as "Terminate"
    And user clicks on refresh button on alarms tab
    When user switches to window 1
    Then user validates ticket status as "cleared"
