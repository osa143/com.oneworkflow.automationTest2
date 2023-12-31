@PMO_Tab3 @ProblemRegression
#passed
Feature: PMO Tab

  @PMO_Tab_problem2
  Scenario: PMO Tab for problem ticket
    Given user is on the OneWorkflow login page
    When user logs in with valid username "tohall_copy" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create problem record
#    When user clicks on agent console create problem record
    And user switches to window 1
    Then problem record form should appear in new tab
    When user creates problem ticket with below details
      |Title                                  |RequestType            |Description |ImpactType      |Urgency|
      |proactive investigation of: frvi96_auto|XX_Test:Functional Test|PMO Tab Test|Moderate/Limited|Low    |
    Then ticket should be created and status should be assigned
    And user gets ticket value
    When user verifies PM office tab visibility
    Then PM office tab should not be visible
    Then user logsOut
#    And user goes back to login page
    And user navigates back to login page using URL
    When user logs in with valid username "syvaptu1_auto" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
#    And user clicks agent console search menu
#    And user selects agent console open search form
#    And user selects agent console search problem
    And user clicks on search and selects open search forms and problem record
    And user switches to window 2
    And user enters Problem Ticket
    When user clicks Search on ticket search
    Then user validates availability of tabs "PM Office"
    And user clicks on "PM Office" tab
    When user enters "Secret problem stuff" in the problem review field
    And user clicks on save button
    And problem review field should be updated with the text "Secret problem stuff"
    And user logsOut
    And user switches to window 1
#    And user goes back to login page
    And user navigates back to login page using URL
    When user logs in with valid username "frvi96_auto" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
#    And user clicks agent console search menu
#    And user selects agent console open search form
#    And user selects agent console search problem
    And user clicks on search and selects open search forms and problem record
    And user switches to window 2
    And user enters Problem Ticket
    And user clicks Search on ticket search
    And user changes status to "Withdrawn" on problem record page
    And user selects withdrawn reason as false alarm and clicks save
    And user clicks on yes button on warning window
    And user waits 5 secs
#    Then user validates ticket status as "Withdrawn"
#    And change should also be reflected in the timeline as "STATUS MODIFIED.  Status has changed from Assigned to Withdrawn. "
    And user logsOut
    And user switches to window 1
#    And user goes back to login page
    And user navigates back to login page using URL
    When user logs in with valid username "syvaptu1_auto" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
#    And user clicks agent console search menu
#    And user selects agent console open search form
#    And user selects agent console search problem
    And user clicks on search and selects open search forms and problem record
    And user switches to window 2
    And user enters Problem Ticket
    And user clicks Search on ticket search
    When user verifies PM office tab visibility
    Then PM office tab should be visible
    When user enters "Secret problem stuff" in the problem review field
    And user clicks on save button
    And problem review field should be updated with the text "Secret problem stuffSecret problem stuff"


  @PMO_Tab_known_error_ticket_1
  Scenario: PMO Tab for known error ticket

    Given user is on the OneWorkflow login page
    When user logs in with valid username "Tohall_copy" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
#    When user clicks on create known error
    When user clicks on agent console create known error
    And user switches to window 1
    Then problem record form should appear in new tab
    When user enters "PM Office Tab for Known Error" in Title field
    And user selects request type as "XX_Test:Functional Test" on known error page
    And user enters description as "A known error"
    And user selects priority as "Minor"
    And user clicks on save button
    Then user validates ticket status as "Draft"
    And user gets known error ticket
    When user verifies PM office tab visibility
    Then PM office tab should not be visible
    Then user logsOut
#    And user goes back to login page
    And user navigates back to login page using URL
    When user logs in with valid username "syvaptu1_auto" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
#    And user selects search menu as "Open Search Form:Known Error"
    And user clicks agent console search menu
    And user selects agent console open search form
    And user selects agent console search known error
    And user switches to window 2
    And user enters known error ticket
    And user clicks Search on ticket search
    Then user validates availability of tabs "PM Office"
    And user clicks on "PM Office" tab
    When user enters "Secret problem stuff" in the problem review field
    And user clicks on save button
    And user clicks on "PM Office" tab
    And problem review field should be updated with the text "Secret problem stuff"
    And user logsOut
    And user switches to window 2
#    And user goes back to login page
    And user navigates back to login page using URL
    When user logs in with valid username "frvi96_auto" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
#    And user selects search menu as "Open Search Form:Known Error"
    And user clicks agent console search menu
    And user selects agent console open search form
    And user selects agent console search known error
    And user switches to window 3
    And user enters known error ticket
    And user clicks Search on ticket search
    And user changes status to "Withdrawn" on problem record page
    And user selects withdrawn reason as false alarm and clicks save
    And user clicks on yes button on warning window
    Then user validates ticket status as "Withdrawn"
    And change should also be reflected in the timeline as "STATUS MODIFIED.  Status has changed from Draft to Withdrawn. "
    And user logsOut
    And user switches to window 2
#    And user goes back to login page
    And user navigates back to login page using URL
    When user logs in with valid username "syvaptu1_auto" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    And user clicks agent console search menu
    And user selects agent console open search form
    And user selects agent console search known error
    And user switches to window 3
    And user enters known error ticket
    And user clicks Search on ticket search
    When user verifies PM office tab visibility
    Then PM office tab should be visible
    And user clicks on "PM Office" tab
    When user enters "Secret problem stuff" in the problem review field
    And user clicks on save button
    And problem review field should be updated with the text "Secret problem stuffSecret problem stuff"