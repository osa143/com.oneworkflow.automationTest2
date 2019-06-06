@Timeline_Update
Feature: User is able to update the timeline with entries
  Scenario: User logs into One workflow, creates a problem ticket and updates the timeline

    Given user is on the OneWorkflow login page
    When user logs in with valid username "frvi96_auto" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create problem record
    Then problem record form should appear in new tab
    When user clicks on sweden checkbox under affected BU's
    When user enters "proactive investigation of: frvi96_auto" in Title field
    And user selects request type as "Access Networks:RAN Optimization"
    And user enters description as "UAT Test9"
    And user selects impact type as moderate:limited
    And user selects urgency as low
    And user clicks on save button on the problem form
    Then ticket should be created and status should be assigned
    Then user clicks on Ack button
    And problem ticket status should be under investigation
    Then user selects impact type as significant:large
    And user selects urgency as High
    And user clicks on save button
    Then user validates that priority changes to major
    And change should also be reflected in the timeline as "Priority has changed from Minor to Major"
    Then user enters description as "-more information"
    And change should also be reflected in the timeline as "STATUS MODIFIED.  Status has changed from Assigned to Under Investigation"
    Then user clicks on timeline tab
    And user selects Auto text:Tech bridge closed
    And change should also be reflected in the timeline as "All parties drop from technical troubleshooting bridge."
    Then user selects Text template:analysis ongoing
    And user clicks on add button
    And change should also be reflected in the timeline as "Analysis ongoing"
    Then user selects Actions:Time tracking
    And user switches to frame
    And user selects Activity:Working on ticket
    And user enters "20" under the minutes field
    And user clicks on Ok button
    And change should also be reflected in the timeline as "Time Tracking: Working On Ticket (20 Minutes)"
    Then user logsOut and closes the browser