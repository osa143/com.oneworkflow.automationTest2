@Linked_Items_&_Change_To_KE
  #Passed
  #CI search window
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
      And user selects request type as "Customer" on trouble event page
      And user enters description as "A customer complaint"
      And user clicks on save button
      And user gets ticket value
      Then ticket should be created and status should be assigned
      When user clicks on change record from agent console
      And user switches to window 2
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
      Then user clicks on "Schedule" tab
      And user enters as "Test ticket no impact" in service and customer impact
      And user enters start time as 10 minutes fast from current sweden time
      And user enters end time as 20 minutes fast from current sweden time
      And user enters impact duration as "5" minutes
      And user selects estimated impact as "No Impact"
      And user clicks on save button
      And user gets change ticket value
      Then user clicks on Risk tab
      And user answers all risk questions as below
      And user selects answer as "Impact to other systems/technologies are unclear"
      And user selects answer as "No"
      And user selects answer as "Tested succesfully, this is a pilot"
      And user selects answer as "Yes (outcome of the change can be instantly verified)"
      And user selects answer as "Yes"
      And user selects answer as "Simple"
      And user selects last answer as "No"
      And user clicks on save button
      Then user clicks on Diagnosis tab
      And user clicks on CI search button
      And user switches to frame
      And user selects search for as "All CIs"
      And  user enters "SE_CPE_FRECPE5" in name field
      And user clicks on search button on CI search window
      And user selects a CI from list
      And user selects impact level as "No Impact"
      And user clicks on relate CI
      And user closes warning message
      And user clicks on close button on CI search window
      Then CI should be listed and displayed under the Diagnosis tab
      When user clicks on Send button
      Then ticket should be created and status should be assigned
      When user clicks on create known error
      And user switches to window 3
      Then known error form should appear in new tab
      And user enters "Known Error B" in Title field
      And user selects request type as "Rejected:Ticket Rejected" on known error page
      And user enters description as "A known error"
      And user selects priority as "Minor"
      And user clicks on save button
      Then user validates ticket status as "Draft"
      And user clicks on linked items tab
      And user selects target application first dropdown as "OS3 - Operations"
      And user selects target application second dropdown as "Is workaround for"
      When user clicks on link button
      Then select target request window should open
      And user switches to frame
      When user enters ticket in ticket ID+ field
      And user clicks on the search button on select target request
      And user clicks on accept button
      Then user validates 1 linked ticket availability
      And user clicks on linked items tab
      And user selects target application first dropdown as "OS3 - Change"
      And user selects target application second dropdown as "Caused by"
      When user clicks on link button
      Then select target request window should open
      And user switches to frame
      When user enters change ticket in ticket ID+ field
      And user clicks on the search button on select target request
      And user clicks on accept button
      Then user validates 2 linked ticket availability
