@Profile_Permissions_Part_2 @problem
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
      When user enters "Proactive investigation of: frvi96_auto" in Title field
      And user selects request type as "Carrier:IT:All" on Problem record page
      And user enters description as "UAT Profile Permissions test 2"
      And user selects impact type as moderate:limited
      And user selects urgency as low
      And user clicks on save button on the problem form
      Then ticket should be created and status should be assigned
      And user validates "Restricted Info" tab is not visible
      Then user tries to change the status to "Under investigation"
      But user should be unable to change the ticket status
      When user gets ticket value
      And user logsOut
      And user goes back to login page
      When user logs in with valid username "syvaptu1_auto" and password as "Telia@1234"
      Then user clicks on search and selects open search forms and problem record
      And user switches to window 2
      Then user enters Problem Ticket
      And user clicks Search on ticket search
      When user changes status to "Under Investigation" on problem record page
      And user clicks on save button on the problem form
      Then problem ticket status should be under investigation
      When user clicks on "Restricted Info" tab
      And user enters "Restricted info" in the information field
      And user clicks on save button on the problem form
      Then change should also be reflected in the timeline as "STATUS MODIFIED.  Status has changed from Assigned to Under Investigation."
      When user logsOut
      And user goes back to login page
      And user logs in with valid username "Tohall_copy" and password as "Test@1234"
      Then user clicks on search and selects open search forms and problem record
      And user switches to window 3
      Then user enters Problem Ticket
      And user clicks Search on ticket search
      And user verifies status is read only
      But ticket field should be grayed out
      And user validates "Restricted Info" tab is not visible

