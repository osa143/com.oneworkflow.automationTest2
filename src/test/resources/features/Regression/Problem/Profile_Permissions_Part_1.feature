@Profile_Permissions_Part_1 @problem
#Passed

  Feature: Validation of permissions part 1
    Scenario: user permission testing

      Given user is on the OneWorkflow login page
      When user logs in with valid username "frvi96_auto" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create problem record
      And user switches to window 1
      Then problem record form should appear in new tab
      When user clicks on save button on the problem form
      Then an error message should appear: "Please select at least one country of impact for this problem. (ARERR 10000)"
      When user clicks on sweden checkbox under affected BU's
      And user clicks on save button on the problem form
      Then multiple error messages should appear with red boarder around fields
      When user enters "proactive investigation of: frvi96_auto" in Title field
      And user selects request type as "Access Networks:RAN Optimization" on Problem record page
      And user enters description as "UAT Profile Permissions test"
      And user selects impact type as moderate:limited
      And user selects urgency as low
      And user clicks on save button on the problem form
      Then ticket should be created and status should be assigned
      When user clicks on "Interested Parties" tab
      When user clicks on add button under interested parties
      And user switches to frame 2
      And user selects type as "Additional Access" under interested parties
      And user clicks on radio button user
      Then user enters "Tohall_copy" in login name plus field
      And user clicks on search under add interested party
      When user highlights present user under add interested party
      And user selects access radio button as read and write
      And user selects auto notify radio button as yes
      And user clicks on save button under interested parties frame
      Then problem initiator user should be listed under interested parties tab
      And change should also be reflected in the timeline as "The User Frederic Viple has been added as interested parties."
      When user clicks on "Additional Info" tab
      And user enters "Tohall_copy" in the analysis team member one field
      And user clicks on save button on the problem form
      Then user should see problem initiator listed as analysis team member one as "Tohall_copy"
      When user clicks on "Restricted Info" tab
      And user enters "Restricted info" in the information field
      And user clicks on save button
      Then user gets ticket value
      And user logsOut
      Then user goes back to login page
      And user logs in with valid username "syvaptu1_auto" and password as "Telia@1234"
      Then user clicks on search and selects open search forms and problem record
      And user switches to window 2
      Then user enters Problem Ticket
      And user clicks Search on ticket search
      When user changes status to "Under Investigation" on problem record page
      And user clicks on save button on the problem form
      Then problem ticket status should be under investigation
      And change should also be reflected in the timeline as "STATUS MODIFIED.  Status has changed from Assigned to Under Investigation. "
      When user clicks on "Restricted Info" tab
      And user enters "More Restricted info" in the information field
      And user clicks on save button on the problem form
      Then user logsOut
      And user goes back to login page
      When user logs in with valid username "Tohall_copy" and password as "Test@1234"
      Then user clicks on search and selects open search forms and problem record
      And user switches to window 3
      Then user enters Problem Ticket
      And user clicks Search on ticket search
      When user changes status to "Investigation Complete" on problem record page
      And user selects root cause code as Technical:HW error under route cause
      And user enters route cause details as "Lacking information and RC found date"
      And user enters RC found date as current date
      Then user clicks on save button on the problem form
      And user validates ticket status as "Investigation Complete"
      And change should also be reflected in the timeline as "STATUS MODIFIED.  Status has changed from Under Investigation to Investigation Complete. "
      When user clicks on "Restricted Info" tab
      Then user validates text availability within information field
      And user enters "Even more Restricted info" in the information field
      And user clicks on save button on the problem form
      When user enters description as "More information on problem ticket"
      And user clicks on save button on the problem form
      Then change should also be reflected in the timeline "Ticket Description has changed from:UAT Profile Permissions test:UAT Profile Permissions testMore information on problem ticket"

