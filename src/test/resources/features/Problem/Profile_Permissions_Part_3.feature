@Profile_Permissions_Part_3
  Feature: Validation of permissions
    Scenario: user permission testing

      Given user is on the OneWorkflow login page
      When user logs in with valid username "frvi96_auto" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create problem record
      Then problem record form should appear in new tab
      When user clicks on sweden checkbox under affected BU's
      And user clicks on save button on the problem form
      Then multiple error messages should appear with red boarder around fields
      When user enters "proactive investigation of: frvi96_auto" in Title field
      And user selects request type as "Access Networks:RAN Optimization"
      And user enters description as "E2E Test"
      And user selects impact type as moderate:limited
      And user selects urgency as low
      And user clicks on save button on the problem form
      Then ticket should be created and status should be assigned
      When user clicks on Ack button
      Then problem ticket status should be under investigation
      And change should also be reflected in the timeline as ""
      Then user gets ticket value
      And user logsOut
      When user logs in with valid username "syvaptu1_auto" and password as "Test@1234"
      Then user clicks on search and selects open search forms and problem record
      And user switches to window 1
      Then user enters Problem Ticket
      When user changes status to "Investigation Complete"
      And user enters route cause details as "Bad Management"
      And user selects root cause code as Technical:HW error under route cause
      And user enters RC found date as current date
      And user clicks on save button on the problem form
      When user changes status to "Closed"
      And user enters decision go no go as current date
      And user selects solved under closure code
      And user enters solution as "A change in processes"
      Then user clicks on save button on the problem form
      And change should also be reflected in the timeline as ""

