@E2E_problem_and_known_error @problem @Reg_Problem  @prob
#passed
# This test also covers SAO-5334 Hide section vendor
  Feature: E2E problem and known error

    Scenario: E2E problem and known error

      Given user is on the OneWorkflow login page
      When user logs in with valid username "Tohall_copy" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create problem record
      And user switches to window 1
      Then problem record form should appear in new tab
      And user validates vendor section is not present
      When user creates problem ticket with below details
        |Title                                  |RequestType |Description   |ImpactType      |Urgency|
        |proactive investigation of: frvi96_auto|CPS:IT:Other|UAT Test close|Moderate/Limited|Low    |
      Then ticket should be created and status should be assigned
      And user validates vendor section is not present
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
      And user validates vendor section is not present
      Then change should also be reflected in the timeline as "STATUS MODIFIED.  Status has changed from Assigned to Under Investigation."
      And user clicks on assignment under sections
      Then user selects assigned profile dropdown as "Problem Management:Problem Initiator"
      #Then user selects assigned profile dropdown as "Problem Initiator"
      And user enters "Tohall_copy" in assignee
      And user clicks on save button on the problem form
      Then change should also be reflected in the timeline "Request has been reassigned from Assignee user :frvi96_auto:Tohall_copy"
      Then user logsOut
      And user goes back to login page
      When user logs in with valid username "Tohall_copy" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      And user clicks on search and selects open search forms and problem record
      And user switches to window 3
      And user enters Problem Ticket
      And user clicks Search on ticket search
      When user changes status as Investigation Complete on problem record page
      When user selects root cause code as "Technical:HW error"
      And user enters route cause details as "Bad management"
      And user enters RC found date as current date
      And user clicks on save button
      Then user validates ticket status as "Investigation Complete"
      And user validates vendor section is not present
      And change should also be reflected in the timeline as "STATUS MODIFIED.  Status has changed from Under Investigation to Investigation Complete."
      And user logsOut
      And user switches to window 2
      And user goes back to login page
      When user logs in with valid username "frvi96_auto" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      And user clicks on search and selects open search forms and problem record
      And user switches to window 3
      And user enters Problem Ticket
      And user clicks Search on ticket search
      When user clicks on linked items tab
      And user selects target application first dropdown as "OS3 - Known Error"
      And user selects target application second dropdown as "Caused by"
      And user clicks on create button under linked items
      And user switches to window 4
      Then known error ticket status should be "New"
      And user validates vendor section is not present
      And user gets known error ticket
      When user enters "Test ticket" in Title field
      And user clicks on save button
      Then known error ticket status should be "Draft"
      And user validates vendor section is not present
      And user logsOut
      And user switches to window 4
      And user goes back to login page
      When user logs in with valid username "syvaptu1_auto" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      And user clicks on search and selects open search forms and problem record
      And user switches to window 5
      And user enters Problem Ticket
      And user clicks Search on ticket search
      When user changes status to "Closed" on problem record page
      And user clicks save button
      Then mandatory fields should be indicated in bold
      And user selects solved under closure code
      And user enters solution as "A change in processes"
      And user enters solution found date as current date
      And user clicks on save button
      Then user validates ticket status as "Closed"
      And user validates vendor section is not present
      And change should also be reflected in the timeline as "STATUS MODIFIED.  Status has changed from Investigation Complete to Closed. "
      And user selects search menu as "Open Search Form:Known Error"
      And user switches to window 6
      And user enters known error ticket
      And user clicks Search on ticket search
      When user changes status to "Published" on known error page
      And user selects "Known Error Code" as "Risk accepted"
      And user selects accountable organisation as "CA_Infra"
      And user selects affected organisation as "CA_Infra"
      And user clicks on save button
      Then user validates ticket status as "Published"
      And user validates vendor section is not present
      When user changes status to "Closed" on known error page
      And user clicks save button
      When user selects closure code as "Solved"
      And user clicks on save button
      Then user validates ticket status as "Closed"
      And user validates vendor section is not present
      And user validates all fields are read only and not editable




