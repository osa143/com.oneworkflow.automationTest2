@03.04 @Incident @03 @HelixRegression @Incident_NonSAO
  #passed
  Feature: Link child tickets and make master ticket
    Scenario: Link child tickets and make master ticket

      Given user is on the OneWorkflow login page
      When user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create trouble event
#      When user clicks on agent console create trouble event
      And user switches to window 1
      Then trouble record form should appear in new tab
      When user clicks on sweden checkbox under affected BU's
#      When user clicks on OP sweden checkbox under affected BU's
      And user enters "Test Case 03.04 Make Master Ticket" in Title field in Trouble event
      And user selects request type as "Customer" on trouble event page
      And user enters description as "Test Case 03.04 Make Master Ticket"
      And user clicks on save button
#      And user gets trouble ticket value
      Then ticket should be created and status should be assigned
#      And user gets trouble ticket value
#      And user clicks on agent console create trouble event
      When user clicks on create trouble event
      And user switches to window 2
      Then trouble record form should appear in new tab
      When user clicks on sweden checkbox under affected BU's
#      When user clicks on OP sweden checkbox under affected BU's
      And user enters "Test Case 03.03 Make Master Ticket (ticket 2)" in Title field in Trouble event
      And user selects request type as "Customer" on trouble event page
      And user enters description as "Test Case 03.03 Make Master Ticket(ticket 2)"
      And user clicks on save button
      Then ticket should be created and status should be assigned
      #And user clicks on Ack button
      When user clicks on linked items tab
      And user selects target application first dropdown as "OS3 - Operations"
      And user selects target application second dropdown as "Is child of"
#      And user clicks on link button
      And user clicks on OP link button
      When user switches to frame
      And user enters ticket in ticket ID+ field
      And user clicks on the search button
      And user clicks on accept button
      Then user validates linked ticket availability under linked items
      And change should also be reflected in the timeline as "Correlation to ticket;. Relationship Type: Is master of" for trouble ticket in row 1


