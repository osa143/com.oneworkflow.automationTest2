@PMO_Tab_known_error_ticket @problem @Reg_Problem
#passed
  #Covers SAO-5335_Add_PMO_Tab_KE
Feature: PMO Tab

  Scenario: PMO Tab for known error ticket

    Given user is on the OneWorkflow login page
    When user logs in with valid username "Tohall_copy" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create known error
    And user switches to window 1
    Then problem record form should appear in new tab
    When user enters "PM Office Tab for Known Error" in Title field
    And user selects request type as "XX_Test:Functional Test" on known error page
    And user enters description as "A known error"
    And user selects priority as "Minor"
    And user clicks on save button
    Then user validates ticket status as "Draft"
    Then ticket should be created and status should be assigned
    And user gets known error ticket
    When user verifies PM office tab visibility
    Then PM office tab should not be visible
    Then user logsOut
    And user goes back to login page
    When user logs in with valid username "syvaptu1_auto" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    And user clicks on search and selects open search forms and problem record
    And user switches to window 2
    And user enters known error ticket
    And user clicks Search on ticket search
    When user clicks on next tab button
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
    And user enters known error ticket
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
    When user clicks on next tab button
    Then PM office tab should be visible
    When user enters "Secret problem stuff" in the problem review field
    And user clicks on save button
    And problem review field should be updated with the text "Secret problem stuffSecret problem stuff"