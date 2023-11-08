@Timeline_Update @ProblemRegression
#passed
  Feature: Timeline update
  Scenario: Timeline update

    Given user is on the OneWorkflow login page
    When user logs in with valid username "frvi96_auto" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create problem record
#    When user clicks on agent console create problem record
    And user switches to window 1
    Then problem record form should appear in new tab
    When user creates problem ticket with below details
      |               Title                  |RequestType            |Description          |ImpactType      |Urgency|
      |Proactive investigation of frvi96_auto|XX_Test:Functional Test|Timeline updates Test|Moderate/Limited|Low    |
    Then ticket should be created and status should be assigned
    And user gets ticket value
    Then user clicks on Ack button
    And problem ticket status should be under investigation
    Then user selects impact type as significant:large
    And user selects urgency as High
    And user clicks on save button
    Then user validates that priority changes to major
    And change should also be reflected in the timeline as "STATUS MODIFIED.  Ticket Priority has changed from Info to Major. " on row 1
    Then user enters description as "-more information"
    And change should also be reflected in the timeline as "STATUS MODIFIED.  Status has changed from Assigned to Under Investigation. " on row 2
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
