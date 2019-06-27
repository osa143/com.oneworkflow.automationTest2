@E2E_problem_and_known_error

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
      Then user logsOut
      And user goes back to login page
      When user logs in with valid username "frvi96_auto" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      And user clicks on search and selects open search forms and problem record
      And user switches to window 2
      And user enters Problem Ticket
      And user clicks Search on ticket search
      When user clicks on Ack button
      Then problem ticket status should be under investigation
      #Then change should also be reflected in the timeline as ""
      Then user selects assigned profile dropdown as "Problem Management:Problem Initiator"
      And user selects assignee as "Tohall_copy" by using alphabet "u" key up 16 times
      And user clicks on save button on the problem form
      Then change should also be reflected in the timeline "Request has been reassigned from Assignee user :mina09:probleminitiator"
      Then user logsOut
      And user goes back to login page
      When user logs in with valid username "Tohall_copy" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      And user clicks on search and selects open search forms and problem record
      And user switches to window 2
      And user enters Problem Ticket
      And user clicks Search on ticket search
      When user changes status to "Investigation Complete"
      #Then mandatory fields should be indicated in bold
      When user selects root cause code as Technical:HW error under route cause
      And user enters route cause details as "Bad management"
      And user enters RC found date as current date
      And user clicks on save button
      Then problem ticket status should be under investigation
      And change should also be reflected in the timeline as ""
      And user logsOut
      And user goes back to login page
      When user logs in with valid username "frvi96_auto" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      And user clicks on search and selects open search forms and problem record
      And user enters Problem Ticket
      And user clicks Search on ticket search
      When user clicks on linked items tab
      And user selects target application first dropdown as "OS3 Known Error"
      And user selects target application second dropdown as "Caused by"
      And user clicks on create button under linked items
      And user switches to window 3
      Then known error ticket status should be "New"
      And user gets ticket value
      When user selects request type as "Risks & Failures:Lack of Business Continuity Management (BCM)"
      And user enters description as "Test"
      And user clicks on save button
      Then known error ticket status should be "Draft"
      And user switches to window 3
      When user changes status to "Closed"
     # Then mandatory fields should be indicated in bold
      When user enters decision go no go as current date
      And user selects solved under closure code
      And user enters solution as "A change in processes"
      And user enters solution found date as current date
      And user clicks on save button
      Then ticket status should be closed
      And change should also be reflected in the timeline as ""
      And user logsOut
      And user goes back to login page
      When user logs in with valid username "syvaptu1_auto" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      And user clicks on search and selects open search forms and problem record
      And user switches to window 4
      And user enters Problem Ticket
      And user clicks Search on ticket search
      When user changes status to "Published"
      And user clicks on save button
      Then user validates ticket status as "Published"
      When user changes status to "Closed"
      And user clicks on save button
     #  And mandatory fields should be indicated in bold
      When user selects closure code as "Full impact"
      And user clicks on save button
      Then user validates ticket status as "Closed"



