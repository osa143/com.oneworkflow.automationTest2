@Problem_Link_To_New_Known_Error_And_Withdraw @ProblemRegression
  #Passed
# This test also covers SAO-5305 Auto population from PB to KE tickets

     Feature: Problem Link to New Known Error and Withdraw
    Scenario: Problem Link to New Known Error and Withdraw - user opens problem ticket, then opens known error and withdraws

      Given user is on the OneWorkflow login page
      When user logs in with valid username "frvi96_auto" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create problem record
#      When user clicks on agent console create problem record
      And user switches to window 1
      Then problem record form should appear in new tab
      When user creates problem ticket with below details
        |Title                                  |RequestType            |Description               |ImpactType      |Urgency|
        |proactive investigation of: frvi96_auto|XX_Test:Functional Test|PB link to KE and withdraw|Moderate/Limited|Low    |
      Then ticket should be created and status should be assigned
      Then user clicks on Ack button
      And problem ticket status should be under investigation
      #And change should also be reflected in the timeline as "STATUS MODIFIED.  Status has changed from Assigned to Under Investigation ."
      Then user changes status to investigation complete
      And user selects root cause code as Technical:HW error under route cause
      And user enters route cause details as "Bad Management"
      And user enters RC found date as current date
      Then user clicks on save button
      #And change should also be reflected in the timeline as "STATUS MODIFIED.  Status has changed from Under Investigation to Investigation Complete. "
      Then user clicks on linked items tab
      And user selects target application first dropdown as "OS3 - Known Error"
      And user selects target application second dropdown as "Caused by"
      When user clicks on create button under linked items
      And user switches to window 2
      Then a known error ticket should appear in new tab
      And user validates ticket status as "New"
      #Title should be empty and not copied from problem
      And user validates title field as ""
      And user validates request type as "XX_Test | Functional Test"
      And user clicks save button
      And an error message should appear: "Required field (without a default) not specified : Title (ARERR 9424)"
      And user enters "Test ticket" in Title field
      Then user clicks on save button on the problem form
      And user validates ticket status as "Draft"
      Then user clicks on linked items tab
      And problem ticket should be listed
      When user changes status to "Withdrawn" on problem record page
      And user clicks on save button
      And user clicks on yes on warning window
      Then an error message "Required field (without a default) not specified : Withdrawn Reason (ARERR 9424)" should appear with red boarder around withdrawn reason
      When user selects withdrawn reason as false alarm and clicks save
      And user clicks on yes on warning window
      And user validates ticket status as "Withdrawn"




