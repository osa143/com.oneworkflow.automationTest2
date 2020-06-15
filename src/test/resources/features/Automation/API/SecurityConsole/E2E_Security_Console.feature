@E2E_Security_Console
   #API:SYS:ADM:SecurityConsole

  Feature: E2E verification of the API security console
    Scenario: E2E verification of the API security console

      Given user has a valid user available who has security console access
      When user is on the OneWorkflow login page
      And user logs in with valid username "" and password as ""
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      Then user navigates to the security console
      And user validates security console is displayed
      When user clicks on "create new client" button
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
      When user selects the pencil icon
      Then user validates "Client Name" is readonly
      And user validates "Operation" is readonly
      And user validates "User" is editable
      When user enters user as "apitester1New"
      And user clicks on the "Confirm" button
      Then user validates user as "apitester1New"
      When user selects operation as "Test Operation Name"
      And user clicks on the enable button
      Then user validates "Test Operation Name" is present under the request table
      When user selects operation as "Attach CI"
      And user clicks on the enable button
      Then user validates "Attach CI" is present under the request table
      When user selects operation as "Create Change Request"
      And user clicks on the enable button
      Then user validates "Create Change Request" is present under the request table
      When user selects operation as "Create Problem"
      And user clicks on the "Enable" button
      Then user validates "Create Problem" is present under the request table
      When user selects "Test Operation Name" request in the table
      And user clicks on the "Edit GUID" button
      Then user validates edit guid window shows
      And user enters new GUID as "New Test GUID"
      Then user clicks on submit button
      And user clicks ok on pop up window
      And user validates new GUID is shown
      When user selects "New Test GUID" request in the table
      And user clicks on the "Disable" button
      Then user validates "New Test GUID" request isnt present in the table
      When user clicks on the "Reset" button
      Then user valdiates all entries clear from the table
      And user validates "Client Name" value is cleared
      And user validates "User" value is cleared
      And user validates "Operation" value is cleared
      When user selects preferences as "Remove Column:API Client Name"
      Then user validates "API Client Name" column is not present
      When user selects preferences as "Remove Column:API Client Name"
      Then user validates "API Operation" column is not present
      When user selects preferences as "Remove Column:API Client Name"
      Then user validates "Operation Status" column is not present
      When user selects preferences as "Reset"
      Then user validates "API Client Name" column is present
      And user validates "Status" column is present
      And user validates "API Operation" column is present
      And user validates "Operation Status" column is present
      When user selects client name as "Test Client Name"
      And user clicks on "Remove Client" button
      Then user validates "Test Client Name" isnt present
      When user selects operation name as "Test Operation"
      And user clicks on "Remove Operation" button
      Then user validates "Test Operation" isnt present
      When user clicks on "home" button
      Then user validates agent console is displayed correctly
      When user logsOut and accepts alert
      Then user switches to window 0
      And user clicks on main page refresh
      Then user validates the OW login page is displayed
