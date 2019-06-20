@Linked_Items_&_Change_To_KE
  Feature: linking of trouble and change ticket to KE
    Scenario: user is able to link a change and trouble ticket to a known error

      Given user is on the OneWorkflow login page
      When user logs in with valid username "frvi96_auto" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create trouble event
      And user switches to window 1
      Then trouble record form should appear in new tab
      When user clicks on sweden checkbox under affected BU's
      When user enters "Problem test" in Title field
      And user selects request type as "Customer"
      And user enters description as "A customer complaint"
      And user clicks on save button on the problem form
      Then ticket should be created and status should be assigned
      And user switches to window 1
      When user clicks on change record from agent console
      And user switches to window 3
      Then change record form should open in a new tab
      When user clicks on sweden checkbox under affected BU's
      And user selects request type as "Normal Change"
      And user selects title as "IT:Mobile:Billing" on Change record page
      And user selects request category as "Cable splicing" on change record page
      And user enters description as "Correcting error"
      And user enters reason field as "none"
      And user selects priority as "Major"
      And user enters "Problem initiator" in the change builder field
      And user enters "New implementation" in the implementation field
      And user enters "Yes" in the test plan field
      And user enters "Not possible" in the rollback field
      And user enters "Comm plan" in the communication plan field
      And user enters "Not possible" in the ver of functionality field
      And user enters "No Risk" in the risk description field
      Then user clicks on schedule tab
      And user enters request start date as "00:00:00" one day in the future
      And user enters request end date as "02:00:00" one day in the future
      And user enters impact duration as "5" minutes
      And user selects estimated impact as "No Impact"
      And user clicks on save button
      Then user clicks on risk tab
      And user selects answer as "Impact to other systems/technologies are unclear"
      And user selects answer as "No"
      And user selects answer as "Tested successfully, this is a pilot"
      And user selects answer as "Yes (outcome of the change can be instantly verified)"
      And user selects answer as "Yes"
      And user selects answer as "Simple"
      And user selects last answer as "No"
      And user clicks on save button
      Then user clicks on Diagnosis tab
      And user clicks on CI search button
      When user clicks on clear button
      And user selects search for as "All CIs"
      And  user enters "SE_CPE_FRECPE5" in name field
      And user clicks on search button on CI search window
      And user selects a CI from list
      And user selects impact level as "No Impact"
      And user clicks on relate CI
      And user closes warning message and clicks on close button
      Then CI should be listed and displayed under the Diagnosis tab
      When user clicks on Send button
      Then ticket should be created and status should be assigned
      And user switches to window 1
      When user clicks on create known error
      And user switches to window 3
      Then known error form should appear in new tab
      And user enters "Known Error B" in Title field
      And user selects request type as "Rejected:Ticket Rejected"
      And user enters description as "A known error"
      And user selects priority as "Minor"
      And user clicks on save button
      Then user validates ticket status as "Draft"
      And user clicks on linked items tab
      And user selects target application first dropdown as "OS3 Change"
      And user selects target application second dropdown as "Caused by"
      When user clicks on link button
      Then select target request window should open
      When user enters ticket in ticket ID+ field
      And user clicks on search button on CI search window
      Then change ticket should appeared in the list on select target request window
      And user highlights ticket on select target request window
      And user clicks on accept button
      Then change ticket should now appear in the list of linked items
      And user clicks on linked items tab
      And user selects target application first dropdown as "OS3 Change"
      And user selects target application second dropdown as "Caused by"
      When user clicks on link button
      Then select target request window should open
      When user enters ticket in ticket ID+ field
      And user clicks on search button on CI search window
      Then incident ticket should appeared in the list on select target request window
      When user highlights ticket on select target request window
      And user clicks on accept button
      Then incident ticket should now appear in the list of linked items
