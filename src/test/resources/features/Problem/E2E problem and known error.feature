@E2E problem and known error

  Feature: problem

    Scenario: E2E problem and known error

      Given user is on the OneWorkflow login page
      When user logs in with valid username "Tohall_copy" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create problem record
      And user switches to window 1
      Then problem record form should appear in new tab
      When user clicks on sweden checkbox under affected BU's
      And user enters "Proactive investigation of Automation Test" in Title field
      And user selects request type as "Access Networks:RAN Optimization" on Problem record page
      And user enters description as "E2E Test"
      And user selects impact type as moderate:limited
      And user selects urgency as low
      And user clicks on save button on the problem form
      Then ticket should be created and status should be assigned
      And user gets ticket value
      When user verifies PM office tab visibility
      Then PM office tab should not be visible
      Then user logsOut
      And user goes back to login page
      When user logs in with valid username "frvi96_auto" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      And user clicks on search and selects open search forms and problem record
      And user enters Problem Ticket
      And user clicks Search on ticket search
      When user clicks on Ack button
      Then problem ticket status should be under investigation
      Then change should also be reflected in the timeline as ""
      Then user selects assigned profile dropdown as "Problem Management:Problem Initiator"
      And user selects assignee as "probleminitiator"
      And user clicks on save button on the problem form
      Then change should also be reflected in the timeline
        |timeline message|
        |STATUS MODIFIED. Request has been reassigned from Assignee user "mina09" to  Assignee  user "probleminitiator".|
      Then user logsOut
      And user goes back to login page
      When user logs in with valid username "mina09_auto" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      And user clicks on search and selects open search forms and problem record
      And user switches to window 2
      And user enters Problem Ticket
      And user clicks Search on ticket search
      When user changes status to "Investigation Complete"
      Then mandatory fields should be indicated in bold
