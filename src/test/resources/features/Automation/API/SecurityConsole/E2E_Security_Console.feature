@E2E_Security_Console

  Feature: E2E verification of the API security console
    Scenario: E2E verification of the API security console

      Given user has a valid user available who has security console access
      When user is on the OneWorkflow login page
      And user logs in with valid username "" and password as ""
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      Then user navigates to the security console
      And user validates security console is displayed
      When user clicks on create new client button
      And user enters client name as "Test Client Name"
      And user validates user dropdown can be opened
      Then user selects a random user from the list
      And user validates chosen name is in the user field
      Then user selects a different user from the user list
      And user validates old user value is cleared and new value is set
      Then user clears value in field
      #when entering 3 letters, the search for users containing those 3 letters will occur
      And user enters user as "api"
      And user validates user list is shown
      And user selects user "apitester1"
      And user enters summary as "Test Client Summary"
      Then user clicks on submit button
      And user clicks ok on confirmation window
      Then user validates created user is present under client name dropdown
      When user clicks create new operation button
      And user enters operation name as "Test Operation Name"
      And user clicks on submit button
      Then user validates created operation is present under operation dropdown
      When user selects client name as "Test Client Name"
      Then user validates that "apitester1" is present under user and readonly


