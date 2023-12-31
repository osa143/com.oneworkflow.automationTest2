@LifeCycle_KE_and_Changes_To_KE @ProblemRegression
  #passed
#CI search window
    Feature: life cycle known error and change known error
    Scenario: LifeCycle KE + Change KE - user is able to change life cycle to known error

      Given user is on the OneWorkflow login page
      When user logs in with valid username "frvi96_auto" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create known error
#      When user clicks on agent console create known error
      And user switches to window 1
      Then known error form should appear in new tab
      And user enters "Known Error B" in Title field
      And user selects request type as "XX_Test:Functional Test" on known error page
      And user enters description as "A known error"
      And user selects priority as "Minor"
      And user clicks on save button
      Then user validates ticket status as "Draft"
      When user clicks on "Interested Parties" tab
      And user clicks on add button under interested parties
      And user switches to frame
      And user selects type as "Additional Access" under interested parties
      And user clicks on radio button user
#      And user waits 15 secs
      Then user enters "Tohall_copy" in login name plus field
      And user clicks on search under add interested party
      When user highlights present user under add interested party
      And user selects access radio button as read and write
      And user selects auto notify radio button as yes
      And user clicks on save button under interested parties frame
#      Then problem initiator user should be listed under interested parties tab
      And user clicks on save button
      And user adds CI "SE_AAA_AAA99SE" to the ticket
      Then CI should be listed and displayed under the Diagnosis tab
      When user changes status to "Published" on problem record page
      And user selects "Known Error Code" as "Risk accepted"
      And user selects affected organisation as "DivX"
      And user selects accountable organisation as "DivX"
      And user clicks on save button
      Then known error ticket status should be "Published"
      When user enters description as "More information"
      And user clicks on save button
      And user clicks yes on save confirmation message
      And user waits 5 secs
      Then user clicks on "Timeline" tab
      Then change should also be reflected in the timeline as "STATUS MODIFIED.  Status has changed from Draft to Published. Known Error Code has changed from  to Risk accepted. Accountable Org. has changed from  to CA_IT. Affected Orgs. has changed from  to CA_Infra;." on row 2
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
      When user selects closure code as "Solved"
      When user clicks on "Diagnosis" tab
      And user right clicks on CI "SE_CPE_FRECPE5" and selects "Impact:Clear All"
      And user should see confirmation message for impact clear and user clicks yes
      And user clicks on save button
      Then known error ticket status should be "Closed"
