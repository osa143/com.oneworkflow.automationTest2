@02.15 @Incident @02
#passed
  Feature: Search for known error using quick search based on category
    Scenario: Search for known error using quick search based on category

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
      When user clicks on CTI details under sections
      And user selects Category as "Core"
      And user selects Type as "Other"
      And user selects Item as "BR"
      And user clicks on save button
      Then user validates ticket status as "Draft"
      Then user gets ticket value
      And user logsOut
      Then user goes back to login page
      Given user is on the OneWorkflow login page
      When user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create trouble event
      And user switches to window 2
      Then trouble record form should appear in new tab
      When user clicks on sweden checkbox under affected BU's
      And user enters "Test Case 02.15 Search for Known Errors" in Title field in Trouble event
      And user selects request type as "Customer" on trouble event page
      And user enters description as "Test Case 02.15 Search for Known Errors"
      And user clicks on save button
      Then ticket should be created and status should be assigned
      And user adds CI "SE_SGSN_VRRMME1" to the ticket
      And user clicks on "Diagnosis" tab
      Then CI should be listed and displayed under the Diagnosis tab
      When user clicks on CTI details under sections
      And user selects Category as "Core"
      And user selects Type as "Other"
      And user selects Item as "BR"
      Then user clicks on save button
      When user clicks on linked items tab
      And user selects target application first dropdown as "OS3 - Known Error"
      And user selects target application second dropdown as "Has workaround"
      And user clicks on link button
      Then user switches to frame
      And user clicks on the clear button
      And user selects Category as "Core"
      And user selects Type as "Other"
      And user selects Item as "BR"
      And user clicks on the search button
      And user should see known error ticket listed
      And user clicks on cancel on select target window








