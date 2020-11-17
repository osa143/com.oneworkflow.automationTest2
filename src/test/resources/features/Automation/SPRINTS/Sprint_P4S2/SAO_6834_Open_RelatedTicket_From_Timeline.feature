@6834

  Feature: Incident
    Scenario: Ability to open related ticket from timeline entries

      Given user is on the OneWorkflow login page
      When user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create trouble event
      And user switches to window 1
      Then trouble record form should appear in new tab
      When user clicks on sweden checkbox under affected BU's
      And user enters "Parent ticket" in Title field in Trouble event
      And user selects request type as "Customer" on trouble event page
      And user enters description as "Link to child ticket"
      And user clicks on save button
      Then ticket should be created and status should be assigned
      When user clicks on create trouble event
      And user switches to window 2
      Then trouble record form should appear in new tab
      When user clicks on sweden checkbox under affected BU's
      And user enters "Child ticket" in Title field in Trouble event
      And user selects request type as "Customer" on trouble event page
      And user enters description as "Link to Master ticket"
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
      And user switches to window 2
      When user enters "Update to parent from child" in the timeline text box
      And user clicks on public radio button
      And user clicks on add button
      Then change should also be reflected in the timeline as "Update to parent from child"
      And user switches to window 1
      When user clicks on timeline filter button
      And change should also be reflected in the timeline as "Update to parent from child"
      When user uncheck include children ticket
      Then change should also be reflected in the timeline as "STATUS MODIFIED.  The trouble Status has changed: Assigned >> Work In Progress"
      When user clicks on include children ticket
      And user sets the preferences under the timeline as "Add Column:Source"
      And user double clicks on timeline to open ticket
      And user switches to window 3
      Then child ticket should be opened







