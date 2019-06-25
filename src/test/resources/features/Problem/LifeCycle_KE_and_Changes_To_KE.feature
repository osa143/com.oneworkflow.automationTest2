@LifeCycle_KE_and_Changes_To_KE

    Feature: life cycle known error and change known error

    Scenario:user is able to change life cycle to known error

      Given user is on the OneWorkflow login page
      When user logs in with valid username "frvi96_auto" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create known error
      And user switches to window 1
      Then known error form should appear in new tab
      And user enters "Known Error B" in Title field
      And user selects request type as "Rejected:Ticket Rejected" on known error page
      And user enters description as "A known error"
      And user selects priority as "Minor"
      And user clicks on save button
      Then user validates ticket status as "Draft"
      When user clicks on "Interested Parties" tab
      And user clicks on add button under interested parties
      And user switches to frame 2
      And user selects type as "Additional Access" under interested parties
      And user clicks on radio button user
      And user enters "Tohall_copy" in login name plus field
      And user clicks on search under add interested party
      Then problem initiator should be listed without an email address
      When user highlights Problem initiator's row the one without email address
      And user selects access radio button as read and write
      And  user selects auto notify radio button as yes
      Then problem Initiator should be listed as a interested party with Read Write access.
      When user clicks on Diagnosis tab
      And user clicks on CI search button
      Then CI search panel should open
      And  user enters "SE_CPE_FRECPE5" in name field
      And user clicks on search button on CI search window
      And user selects a CI from list
      And user selects impact level as "No Impact"
      And user clicks on relate CI
      And user closes warning message and clicks on close button
      Then CI should be listed and displayed under the Diagnosis tab
      When user changes status to "Published"
      And user clicks on save button
      Then known error ticket status should be "Published"
      When user enters description as "More information"
      And user clicks on save button
      Then change should also be reflected in the timeline as ""
      When user clicks on timeline tab
      And user selects Auto text:Tech bridge closed
      Then change should also be reflected in the timeline as ""
      When user selects action dropdown as "Time Tracking"
      Then time tracking window should open
      When user selects activity dropdown as "Working On Ticket"
      And user enters "20" in minutes field
      And user clicks on Ok button
      Then change should also be reflected in the timeline as ""
      When user changes status to "closed"
      And user clicks on save button
      Then an error message should appear and a red border should be visible around the closure code field
      When user selects error code as "Full impact"
      And user clicks on save button
      Then known error ticket status should be "Closed"