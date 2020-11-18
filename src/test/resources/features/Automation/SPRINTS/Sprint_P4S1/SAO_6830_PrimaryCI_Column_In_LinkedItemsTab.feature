@6830

  Feature: Incident
    Scenario: verify primary CI column and CI for linked ticket

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
      When user adds CI "SE_LTECell_220184024" to the ticket
      Then CI should be listed and displayed under the Diagnosis tab
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
      And user switches to window 2
      When user adds CI "SE_GSM-AHS" to the ticket
      Then CI should be listed and displayed under the Diagnosis tab
      When user clicks on linked items tab
      And user should see "Primary CI" as "SE_LTECell_220184024" for linked ticket
      And user switches to window 1
      When user clicks on linked items tab
      Then user validates linked ticket availability under linked items
      And user should see "Primary CI" as "SE_GSM-AHS" for linked ticket
      
      





