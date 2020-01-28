@PMO_Tab @problem @Reg_Problem
#passed
Feature: PMO Tab

  Scenario: PMO Tab

    Given user is on the OneWorkflow login page
    When user logs in with valid username "Tohall_copy" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create problem record
    And user switches to window 1
    Then problem record form should appear in new tab
    When user creates problem ticket with following details
      |Title                                     |RequestType     |Description  |ImpactType      |Urgency|
      |Proactive investigation of Automation Test|CPS:IT:Other    |UAT Test7    |Moderate/Limited|Low    |
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
    Then user validates availability of tabs "PM Office"
    And user clicks on "PM Office" tab
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
    And user changes status to "Withdrawn" on problem record page
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