@E2E_Normal_Change_(Internal_Initiator) @Change
  Feature: Internal Normal Change E2E
    Scenario: Internal user processes a normal change ticket

      Given user is on the OneWorkflow login page
      When user logs in with valid username "ChangeInitiatorInternal1" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create change record
      Then user switches to window 1
      When user clicks on save button on the problem form
      Then error message should display as "Please fill up all the mandatory fields in the Details Panel to create a Change Request. (ARERR 10000)"
      And user switches to frame
      Then user closes warning by pressing OK button
      When user enters "Regression - Change Management Process" in the implementation field
      And user enters "Regression - Change Management Process" in the test plan field
      And user enters "Regression - Change Management Process" in the rollback field
      And user enters "Regression - Change Management Process" in the communication plan field
      And user enters "Regression - Change Management Process" in the ver of functionality field
      And user enters "Regression - Change Management Process" in the risk description field
      Then user clicks on save button on the problem form
      And multiple error messages should appear with red boarder around fields
      When user clicks on "Calendar" under actions
      #Need to check this as it appears in a different window not different Tab
      And user switches to window
      When user enters "Change Record" in calendar search box
      And user clicks on ticket type "Change Record"
      Then user validates change records are shown in calendar
      When user clicks on a present change record
      #Need to check this as well
      And user switches to frame
      And user clicks on open button on calendar
      Then user should see change record
      And user closes change record window
      And user closes calendar window
      When user clicks on sweden checkbox under affected BU's
      And user selects request type as "Normal Change"
      Then user selects title as "Mobile:IMS Core" on Change record page
      And user enters description as "TEST TICKET PLEASE IGNORE - Automated Test for Normal Change (External Initiator)"



