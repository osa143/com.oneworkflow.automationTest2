@Profile_Permissions_Part_2
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
      When user enters "Proactive investigation of: frvi96_auto" in Title field
      And user selects request type as "Access Networks:RAN NSN 2G/3G/4G"
      And user enters description as "UAT Profile Permissions test 2"
      And user selects impact type as moderate:limited
      And user selects urgency as low
      And user clicks on save button on the problem form
      Then ticket should be created and status should be assigned
      And user validates restricted info tab is not visible
      Then user tries to change the status to "Under investigation"
      But user should be unable to change the ticket status
      When user gets ticket value
      And user logsOut
      When user logs in with valid username "syvaptu_auto" and password as "Test@1234"
      Then user clicks on search and selects open search forms and problem record
      And user switches to window 1
      Then user enters Problem Ticket
      When user changes status to "Under Investigation"
      And user clicks on save button on the problem form
      Then problem ticket status should be under investigation
      When user clicks on restricted info tab
      And user enters "Restricted info" in the information field
      And user clicks on save button on the problem form
      Then change should also be reflected in the timeline as ""
      When user logsOut
      And user logs in with valid username "Tohall_copy" and password as "Test@1234"
      Then user clicks on search and selects open search forms and problem record
      And user switches to window 1
      Then user enters Problem Ticket
      And user tries to change the status to "Investigation Complete"
      But ticket field should be grayed out
      And user validates restricted info tab is not visible

