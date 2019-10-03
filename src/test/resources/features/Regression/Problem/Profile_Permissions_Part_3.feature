@Profile_Permissions_Part_3 @problem
  #Passed
  Feature: Validation of permissions
    Scenario: user permission testing

      Given user is on the OneWorkflow login page
      When user logs in with valid username "frvi96_auto" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create problem record
      And user switches to window 1
      Then problem record form should appear in new tab
      When user clicks on sweden checkbox under affected BU's
      And user clicks save button
      Then multiple error messages should appear with red boarder around fields
      When user enters "proactive investigation of: frvi96_auto" in Title field
      And user selects request type as "Access Networks:RAN Optimization" on Problem record page
      And user enters description as "E2E Test"
      And user selects impact type as moderate:limited
      And user selects urgency as low
      And user clicks on save button on the problem form
      Then ticket should be created and status should be assigned
      When user clicks on Ack button
      Then problem ticket status should be under investigation
      And change should also be reflected in the timeline as "STATUS MODIFIED.  Status has changed from Assigned to Under Investigation. "
      Then user gets ticket value
      And user logsOut
      And user goes back to login page
      When user logs in with valid username "syvaptu1_auto" and password as "Telia@1234"
      Then user clicks on search and selects open search forms and problem record
      And user switches to window 2
      Then user enters Problem Ticket
      And user clicks Search on ticket search
      When user changes status to "Investigation Complete" on problem record page
      And user enters route cause details as "Bad Management"
      And user selects root cause code as Technical:HW error under route cause
      And user enters RC found date as current date
      And user clicks on save button on the problem form
      And change should also be reflected in the timeline as "STATUS MODIFIED.  Status has changed from Under Investigation to Investigation Complete. "
      When user changes status to "Closed" on problem record page
      And user enters actual finish as current date
      And user enters decision go no go as current date
      And user selects solved under closure code
      And user enters solution as "A change in processes"
      And user enters solution found date as current date
      Then user clicks on save button on the problem form
      And change should also be reflected in the timeline as "STATUS MODIFIED.  Status has changed from Investigation Complete to Closed. "





