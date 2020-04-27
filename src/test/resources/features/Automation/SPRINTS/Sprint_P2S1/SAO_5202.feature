@5202
   Feature: SAO-5202
   Scenario: Known errors in status "Published" is viewed as inactive/cleared by One Workflow.
    Known errors in status published should be viewed as active or open.

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
     When user changes status to "Published" on problem record page
     And user clicks save button
     Then known error ticket status should be "Published"
     And user gets ticket value
     When user clicks on create trouble event
     And user switches to window 2
     Then trouble record form should appear in new tab
     When user clicks on sweden checkbox under affected BU's
     And user enters "Test case 05.02 Incident Summary" in Title field in Trouble event
     And user selects request type as "Customer" on trouble event page
     And user enters description as "Test case 05.02 Incident Summary"
     And user clicks on save button
     Then ticket should be created and status should be assigned
     When user clicks on linked items tab
     And user selects target application first dropdown as "OS3 - Known Error"
     And user selects target application second dropdown as "Has workaround"
     When user clicks on link button under linked items tab
     Then select target request window should open
     And user switches to frame
     And user enters ticket in ticket ID+ field
     And user clicks on the search button on select target request
     And user clicks accept button
     Then user validates 1 linked ticket availability
     When user clicks on open checkbox under linked items tab
     Then user validates 1 linked ticket availability
     When user clicks on cleared checkbox under linked items tab
     Then user validates 0 linked ticket availability
