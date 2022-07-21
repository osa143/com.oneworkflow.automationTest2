@03.03 @Incident @03 @Incident_NonSAO
  #passed2
  Feature: Link to master ticket
    Scenario: Link to master ticket

      Given user is on the OneWorkflow login page
      When user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
#      When user clicks on create trouble event
      When user clicks on agent console create trouble event
      And user switches to window 1
      Then trouble record form should appear in new tab
#      When user clicks on sweden checkbox under affected BU's
      When user clicks on OP sweden checkbox under affected BU's
      And user enters "Test Case 03.03 Link to master ticket" in Title field in Trouble event
      And user selects request type as "Customer" on trouble event page
      And user enters description as "Test Case 03.03 Link to master ticket ticket"
      And user clicks on save button
      Then ticket should be created and status should be assigned
#      When user clicks on create trouble event
      When user clicks on agent console create trouble event
      And user switches to window 2
      Then trouble record form should appear in new tab
#      When user clicks on sweden checkbox under affected BU's
      When user clicks on OP sweden checkbox under affected BU's
      And user enters "Test Case 03.03 Link to master ticket (ticket 2)" in Title field in Trouble event
      And user selects request type as "Customer" on trouble event page
      And user enters description as "Test Case 03.03 Link to master ticket ticket (ticket 2)"
      And user clicks on save button
      Then ticket should be created and status should be assigned
      And user gets trouble ticket value
      And user switches to window 1
      When user clicks on linked items tab
      And user selects target application first dropdown as "OS3 - Operations"
      And user selects target application second dropdown as "Is master of"
      And user clicks on link button under linked items tab
      When user switches to frame
      And user enters ticket in ticket ID+ field
      And user clicks on the search button
      And user clicks on accept button
      And user waits 6 secs
      Then user validates linked ticket availability under linked items
      And change should also be reflected in the timeline as "Correlation to ticket;. Relationship Type: Is child of" for trouble ticket in row 2





