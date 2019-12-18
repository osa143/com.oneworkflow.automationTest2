@LifeCycle_KE_and_Changes_To_KE
  #passed
#CI search window
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
      Then user enters "Tohall_copy" in login name plus field
      And user clicks on search under add interested party
      When user highlights present user under add interested party
      And user selects access radio button as read and write
      And user selects auto notify radio button as yes
      And user clicks on save button under interested parties frame
      Then problem initiator user should be listed under interested parties tab
      And user clicks on save button
      And user adds CI "SE_CPE_FRECPE5" to the ticket
      Then CI should be listed and displayed under the Diagnosis tab
      When user changes status to "Published" on problem record page
      And user clicks on save button
      Then known error ticket status should be "Published"
      When user enters description as "More information"
      And user clicks on save button
      Then change should also be reflected in the timeline as "STATUS MODIFIED.  Status has changed from Draft to Published." on row 1
      When user clicks on timeline tab
      And user selects Auto text:Tech bridge closed
      Then change should also be reflected in the timeline as "All parties drop from technical troubleshooting bridge."
      When user selects Actions:Time tracking
      Then time tracking window should open
      When user selects activity dropdown as "Working On Ticket"
      And user enters "20" in minutes field
      And user clicks on Ok button
      Then change should also be reflected in the timeline as "Time Tracking: Working On Ticket (20 Minutes)"
      When user changes status to "Closed" on problem record page
      And user clicks save button
      Then an error message should appear: "Required field (without a default) not specified : Closure Code (ARERR 9424)"
      When user selects error code as "Full Impact"
      #When user selects closure code as "Full Impact"
      When user clicks on "Diagnosis" tab
      And user right clicks on CI "SE_CPE_FRECPE5" and selects "Impact:Clear All"
      And user should see confirmation message for impact clear and user clicks yes
      And user clicks on save button
      Then known error ticket status should be "Closed"