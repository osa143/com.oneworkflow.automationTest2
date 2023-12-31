@Linked_Items_&_Change_To_KE @ProblemRegression
  #Passed
  #CI search window
  Feature: linked items and change to KE
    Scenario: linked items and change to KE - user is able to link a change and trouble ticket to a known error

      Given user is on the OneWorkflow login page
      When user logs in with valid username "frvi96_auto" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create trouble event
#      When user clicks on agent console create trouble event
      And user switches to window 1
      Then trouble record form should appear in new tab
#      When user clicks on OP sweden checkbox under affected BU's
      When user clicks on sweden checkbox under affected BU's
      When user enters "Problem test" in Title field
      And user selects request type as "Customer" on trouble event page
      And user enters description as "A customer complaint"
      And user clicks on save button
#      And user gets ticket value
#      Then ticket should be created and status should be assigned
      When user clicks on change record from agent console
#      When user clicks on agent console create change record
      And user switches to window 2
      Then change record form should open in a new tab
      When user creates change ticket with following details
      |RequestType  |Title            |RequestCategory|Description     |Reason|Priority|ChangeBuilder    |Implementation    |TestPlan|RollBack    |CommPlan|VerOfFunctionality|Risk   |ServiceCustomerImpact|ImpactDuration|EstimatedImpact|
      |Normal Change|IT:Mobile:Billing|Cable splicing |Correcting error|none  |Major   |Problem initiator|New implementation|Yes     |Not possible|CommPlan|Not possible      |No Risk|Test ticket no impact|5             |No Impact      |
      And user gets change ticket value
      Then user clicks on Risk tab
      And user answers all risk questions as below
      And user selects answer as "Impact to other systems/technologies are unclear"
      And user selects answer as "No"
      And user selects answer as "Tested successfully, this is a pilot"
      And user selects answer as "Yes (outcome of the change can be instantly verified)"
      And user selects answer as "Yes"
      And user selects answer as "Simple"
      And user selects last answer as "No"
      And user clicks on save button
#      And user adds CI "aa789win01t" to change ticket with impact level "No Impact"
      And user adds CI "SE_AAA_AAA99SE" to change ticket with impact level "No Impact"
      When user clicks on Send button
      Then ticket should be created and status should be assigned
      When user clicks on create known error
      And user switches to window 3
      Then known error form should appear in new tab
      And user enters "Known Error B" in Title field
      And user selects request type as "CPS:IT:Other" on known error page
      And user enters description as "A known error"
      And user selects priority as "Minor"
      And user clicks on save button
      Then user validates ticket status as "Draft"
      When user changes status to "Published" on problem record page
      And user selects "Known Error Code" as "Risk accepted"
      And user selects affected organisation as "DivX"
      And user selects accountable organisation as "DivX"
      And user clicks save button
      Then known error ticket status should be "Published"
      And user clicks on linked items tab
      And user selects target application first dropdown as "OS3 - Operations"
      And user selects target application second dropdown as "Is workaround for"
      When user clicks on link button
      Then select target request window should open
      And user switches to frame
      When user enters ticket in ticket ID+ field
      And user clicks on the search button on select target request
      And user clicks on accept button
      And user selects target application first dropdown as "(clear)"
      When user clicks on cleared checkbox under linked items tab
      And user clicks on radio button closed
      And user validates radio button open is selected
      Then user validates 1 linked ticket availability
      And user clicks on cleared checkbox under linked items tab
      When user clicks on open checkbox under linked items tab
      And user clicks on radio button closed
      And user validates radio button cleared is selected
      And user clicks on linked items tab
      And user selects target application first dropdown as "OS3 - Change"
      And user selects target application second dropdown as "Caused by"
      When user clicks on link button
      Then select target request window should open
      And user switches to frame
      When user enters change ticket in ticket ID+ field
      And user clicks on the search button on select target request
      And user clicks on accept button
      And user selects target application first dropdown as "(clear)"
      When user clicks on radio button closed
      And user clicks on cleared checkbox under linked items tab
      And user validates radio button open is selected
      Then user validates 2 linked ticket availability
      And user clicks on radio button closed
      And user clicks on open checkbox under linked items tab
      And user validates radio button cleared is selected
      Then user validates -1 linked ticket availability

