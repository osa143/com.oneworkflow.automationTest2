@Profile_Permissions_Part_4 @problem
  #passed
  #CI search window
  Feature: Validation of permissions
    Scenario: user permission testing

      Given user is on the OneWorkflow login page
      When user logs in with valid username "frvi96_auto" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create problem record
      And user switches to window 1
      Then problem record form should appear in new tab
      When user clicks on sweden checkbox under affected BU's
      And user enters "proactive investigation of: frvi96_auto" in Title field
      And user selects request type as "Carrier:IT:All" on Problem record page
      And user enters description as "E2E Test"
      And user selects impact type as moderate:limited
      And user selects urgency as low
      And user clicks on save button on the problem form
      Then ticket should be created and status should be assigned
      When user clicks on Ack button
      Then problem ticket status should be under investigation
      And change should also be reflected in the timeline as "STATUS MODIFIED.  Status has changed from Assigned to Under Investigation"
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
      And user clicks on save button
      And change should also be reflected in the timeline as "The User Tomas Hallén has been added as interested parties."
      Then user gets ticket value
      And user logsOut
      And user goes back to login page
      When user logs in with valid username "Tohall_copy" and password as "Test@1234"
      Then user clicks on search and selects open search forms and problem record
      And user switches to window 2
      Then user enters Problem Ticket
      And user clicks Search on ticket search
      When user enters description as "Some new information"
      And user clicks on save button on the problem form
      When user clicks on Diagnosis tab
      And user clicks on CI search button
      And CI search panel should open
      And user switches to frame
      Then user clicks on clear button
      And user enters "SE_CPE_FRECPE5" in name field
      And user clicks on search button on CI search window
      When user selects a CI from list
      And user selects impact level as "No Impact"
      Then user clicks on relate CI
      And user closes warning message
      And user clicks on close button on CI search window
      And user clicks on "Diagnosis" tab
      And CI should be listed and displayed under the Diagnosis tab
      When user changes status to "Investigation Complete" on problem record page
      And user clicks on Diagnosis tab
      #right click CI and then choose impact:clear all
      Then user right clicks on CI "SE_CPE_FRECPE5" and selects "Impact:Clear All"
      And user should see confirmation message for impact clear and clicks ok
      And user validates CI SE_CPE_FRECPE5 "Impact Status" is "Inactive" in row 1





