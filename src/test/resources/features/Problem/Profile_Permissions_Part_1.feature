@Profile_Permissions_Part_1
  Feature: Validation of permissions
    Scenario: user permission testing

      Given user is on the OneWorkflow login page
      When user logs in with valid username "frvi96_auto" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create problem record
      Then problem record form should appear in new tab
      When user clicks on save button on the problem form
      Then an error message should appear: "Please select at least one country of impact for this problem. (ARERR 10000)"
      When user clicks on sweden checkbox under affected BU's
      And user clicks on save button on the problem form
      Then multiple error messages should appear with red boarder around fields
      When user enters "proactive investigation of: frvi96_auto" in Title field
      And user selects request type as "Access Networks:RAN Optimization"
      And user enters description as "UAT Profile Permissions test"
      And user selects impact type as moderate:limited
      And user selects urgency as low
      And user clicks on save button on the problem form
      Then ticket should be created and status should be assigned
      When user clicks on add button under interested parties
      And user selects type as "Additional Access" under interested parties
      And user clicks on radio button user
      Then user enters "Tohall_copy" in login name plus field
      When user highlights present user
      And user selects access radio button as read and write
      And user selects auto notify radio button as yes
      And user clicks on save button under interested parties frame
      Then problem initiator user should be listed under interested parties tab
      And change should also be reflected in the timeline as ""
      When user clicks on additional info tab
      And user enters "" in the analysis team member 1 field
      And user clicks on save button on the problem form
      Then user should see problem initiator listed as analysis team member 1
      When user clicks on restricted info tab
      And user enters "Restricted info" in the information field
      Then user gets ticket value
      When user logsOut
      And user logs in with valid username "syvaptu1_auto" and password as "Test@1234"
      Then user clicks on search and selects open search forms and problem record
      And user switches to window 1
      Then user enters Problem Ticket
      When user changes status to "Under Investigation"
      And user clicks on save button on the problem form
      Then problem ticket status should be under investigation
      And change should also be reflected in the timeline as ""
      When user clicks on restricted info tab
      And user enters "More Restricted info" in the information field
      And user clicks on save button on the problem form
      Then user logsOut
      When user logs in with valid username "Tohall_copy" and password as "Test@1234"
      Then user clicks on search and selects open search forms and problem record
      And user switches to window 1
      Then user enters Problem Ticket
      When user changes status to investigation complete
      And user selects root cause code as Technical:HW error under route cause
      And user enters route cause details as "Lacking information and RC found date"
      And user enters RC found date as current date
      Then user clicks on save button on the problem form
      And user validates ticket status as "Investigation Complete"
      And change should also be reflected in the timeline as ""
      When user clicks on restricted info tab
      Then user validates text availability within information field
      And user enters "Even more Restricted info" in the information field
      And user clicks on save button on the problem form
      When user enters description as "More information on problem ticket"
      And user clicks on save button on the problem form
      Then change should also be reflected in the timeline as ""

