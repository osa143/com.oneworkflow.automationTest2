@E2E_Security_Console

  Feature: E2E verification of the API security console
    Scenario: E2E verification of the API security console

      When user is on the OneWorkflow login page for security console
      And user logs in with valid username "apitester1" and password as "badger"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      And user validates security console is displayed
      When user clicks on create new client button
      And user enters client name as "Test Client Name"
      When user opens and selects "- oneworkflow-userautomaint" from "User" dropdown
      And user validates chosen name "f12023" is in the user field
      When user opens and selects "- Roberta-F11925" from "User" dropdown
      Then user validates old user value is cleared and new value "f11925" is set
      Then user clears value in field and enters user as "api"
      And user validates user list is shown and selects user "apitester1"
      And user enters summary as "Test Client Summary"
      Then user clicks on submit button
      And user clicks close on confirmation window
      Then user validates created user "Test Client Name" is present under "Client Name" dropdown
      When user clicks create new operation button
      And user enters operation name as "Test Operation Name21"
      And user clicks on submit button
      And user clicks close on confirmation window
      Then user validates created operation "Test Operation Name21" is present under "Operation" dropdown
      Then user selects "Client Name" as "Test Client Name"
      Then user validates that "apitester1New" is present under user and readonly
      When user clicks the pencil icon
      Then user validates client name is readonly
      And user validates operation is readonly
      And user validates user is editable and not read only
      When user enters user as "apitester1New"
      And user clicks on the confirm button
      Then user validates user as "apitester1New"
      Then user selects "Operation" as "Test Operation Name"
      And user clicks on the enable button
      Then user validates "Test Operation Name" is present under the request table in row 1
      Then user selects "Operation" as "Attach CI"
      And user clicks on the enable button
      Then user validates "Attach CI" is present under the request table in row 2
      Then user selects "Operation" as "Create Change Request"
      And user clicks on the enable button
      Then user validates "Create Change Request" is present under the request table in row 3
      Then user selects "Operation" as "Create Problem"
      And user clicks on the enable button
      Then user validates "Create Problem" is present under the request table in row 4
      When user selects "Test Operation Name" request in the table
      And user clicks on the Edit GUID button
      And user enters new GUID ID as "New Test GUID13"
      Then user clicks on submit button
      And user clicks close on confirmation window
      And user clicks on the Edit GUID button
      And user validates new GUID is shown as "New Test GUID13"
      When user closes Edit GUID window
      When user selects "Test Operation Name" request in the table
      And user clicks on the disable button
      Then user validates "New Test GUID" request isnt present in the table
      When user clicks on the reset button
      Then all entries should be cleared from the table
      When user selects the preferences as "Remove Column:API Client Name"
      Then user validates "API Client Name" column is not present
      When user selects the preferences as "Remove Column:API Operation"
      Then user validates "API Operation" column is not present
      When user selects the preferences as "Remove Column:OperationStatus"
      Then user validates "Operation Status" column is not present
      When user selects the preferences as "Reset"
      Then user validates "API Client Name" column is present
      And user validates "Status" column is present
      And user validates "API Operation" column is present
      And user validates "OperationStatus" column is present
      When user selects "Client Name" as "Test Client Name"
      And user clicks on remove client button
      Then user validates "Test Client Name" isnt present under the "Client Name" drop down
      Then user selects "Operation" as "Test Operation Name"
      And user clicks on removal operation button
      Then user validates "Test Operation" isnt present under the "Operation" drop down
      When user clicks on home button
      Then user validates agent console is displayed correctly
      When user logsOut
      Then user switches to window 0
      And user clicks on main page refresh
      Then user validates the OW login page is displayed
