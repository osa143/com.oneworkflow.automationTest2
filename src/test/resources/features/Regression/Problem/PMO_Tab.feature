
@PMO_Tab
Feature: PMO Tab

  Scenario: PMO Tab

    Given user is on the OneWorkflow login page
    When user logs in with valid username "Tohall_copy" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create problem record
    And user switches to window 1
    Then problem record form should appear in new tab
    When user clicks on sweden checkbox under affected BU's
    And user enters "Proactive investigation of Automation Test" in Title field
    And user selects request type as "Access Networks:RAN Optimization" on Problem record page
    And user enters description as "UAT Test1 withdraw after Ack"
    And user selects impact type as moderate:limited
    And user selects urgency as low
    And user clicks on save button on the problem form
    Then ticket should be created and status should be assigned
    And user gets ticket value
    When user verifies PM office tab visibility
    Then PM office tab should not be visible
    Then user logsOut
    And user goes back to login page
    When user logs in with valid username "syvaptu1_auto" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    And user clicks on search and selects open search forms and problem record
    And user switches to window 2
    And user enters Problem Ticket
    And user clicks Search on ticket search
    When user verifies PM office tab visibility
    Then PM office tab should be visible
    When user enters "Secret problem stuff" in the problem review field
    And user clicks on save button
    And problem review field should be updated with the text "Secret problem stuff"
    And user logsOut
    And user switches to window 1
    And user goes back to login page
    When user logs in with valid username "frvi96_auto" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    And user clicks on search and selects open search forms and problem record
    And user switches to window 2
    And user enters Problem Ticket
    And user clicks Search on ticket search
    When user changes status to "Withdrawn"
    And user selects withdrawn reason as false alarm and clicks save
    And user clicks on yes button on warning window
    Then user validates ticket status as "Withdrawn"
    And change should also be reflected in the timeline as "STATUS MODIFIED.  Status has changed from Assigned to Withdrawn. "
    And user logsOut
    And user switches to window 1
    And user goes back to login page
    When user logs in with valid username "syvaptu1_auto" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    And user clicks on search and selects open search forms and problem record
    And user switches to window 2
    And user enters Problem Ticket
    And user clicks Search on ticket search
    When user verifies PM office tab visibility
    Then PM office tab should be visible
    When user enters "Secret problem stuff" in the problem review field
    And user clicks on save button
    And problem review field should be updated with the text "Secret problem stuffSecret problem stuff"