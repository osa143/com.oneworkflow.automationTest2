@Problem_Link_To_New_Known_Error_And_Withdraw
  Feature: user is able to link problem to new known error and withdraw
    Scenario: user opens problem ticket, then opens known error and withdraws

      Given user is on the OneWorkflow login page
      Given user is on the OneWorkflow login page
      When user logs in with valid username "frvi96_auto" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create problem record
      Then problem record form should appear in new tab
      When user clicks on sweden checkbox under affected BU's
      When user enters "proactive investigation of: frvi96_auto" in Title field
      And user selects request type as "Access Networks:RAN Optimization"
      And user enters description as "UAT Test Known Error linked items"
      And user selects impact type as moderate:limited
      And user selects urgency as low
      And user clicks on save button on the problem form
      Then ticket should be created and status should be assigned
      Then user clicks on Ack button
      And problem ticket status should be under investigation
      And change should also be reflected in the timeline as "STATUS MODIFIED.  Status has changed from Assigned to Under Investigation ."
      Then user changes status to investigation complete
      And user selects root cause code as Technical:HW error under route cause
      And user enters route cause details as "Bad Management"
      And user enters RC found date as current date
      Then user clicks on save button
      And change should also be reflected in the timeline as "STATUS MODIFIED.  Status has changed from Under Investigation to Investigation Complete. "
      Then user clicks on linked items tab
      And user selects OS3-known error under target application dropdown
      And user selects caused by under target application dropdown 2
      When user clicks on add button under linked items
      Then a known error ticket should appear in new tab
      And a known error ticket should be in status new
      Then user clicks on save button on the problem form
      And user validates that ticket is in draft status
      Then user clicks on linked items tab on known error form
      And user clicks on radio button cleared
      And problem ticket should be listed
      When user changes status to "Withdrawn"
      And user clicks on yes on warning window
      Then an error message "Required field (without a default) not specified : Withdrawn Reason (ARERR 9424)" should appear with red boarder around withdrawn reason
      When user selects withdrawn reason as false alarm and clicks save
      Then user should see confirmation message and clicks on yes button
      And user validates ticket status as "Withdrawn"
      Then user logsOut and closes the browser



