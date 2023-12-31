@Profile_Permissions_Part_2 @ProblemRegression
  #Passed

  Feature: profile permissions part 2
    Scenario:  profile permissions part 2

      Given user is on the OneWorkflow login page
      When user logs in with valid username "frvi96_auto" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create problem record
#      When user clicks on agent console create problem record
      And user switches to window 1
      Then problem record form should appear in new tab
      When user creates problem ticket with below details
        |               Title                  |RequestType |Description                 |ImpactType      |Urgency|
        |Proactive investigation of frvi96_auto|XX_Test:Functional Test|UAT Profile Permissions test|Moderate/Limited|Low    |
      Then ticket should be created and status should be assigned
      And user validates "Restricted Info" tab is not visible
      Then user tries to change the status to "Under investigation"
#      But user should be unable to change the ticket status
      When user gets ticket value
      And user logsOut
#      And user goes back to login page
      Then user navigates back to login page using URL
      When user logs in with valid username "syvaptu1_auto" and password as "Test@1234"
#      And user clicks agent console search menu
#      And user selects agent console open search form
#      And user selects agent console search problem
      And user clicks on search and selects open search forms and problem record
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
#      And user goes back to login page
      Then user navigates back to login page using URL
      And user logs in with valid username "tohall_copy" and password as "Test@1234"
#      And user clicks agent console search menu
#      And user selects agent console open search form
#      And user selects agent console search problem
      And user clicks on search and selects open search forms and problem record
      And user switches to window 3
      Then user enters Problem Ticket
      And user clicks Search on ticket search
      And user verifies status is read only
      But ticket field should be grayed out
      And user validates "Restricted Info" tab is not visible

