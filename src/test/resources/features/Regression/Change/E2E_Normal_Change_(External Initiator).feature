@E2E_Normal_Change_External_Initiator @Change
Feature: External Normal Change E2E
  Scenario: External user processes a normal change ticket

    Given user is on the OneWorkflow login page
    When user logs in with valid username "ChangeInitiator/Builder1" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create change record
    Then user switches to window 1
    When user clicks save button
    Then error message should display as "Please fill up all the mandatory fields in the Details Panel to create a Change Request. (ARERR 10000)" on change record page
    When user enters "Regression - Change Management Process" in the implementation field
    And user enters "Regression - Change Management Process" in the test plan field
    And user enters "Regression - Change Management Process" in the rollback field
    And user enters "Regression - Change Management Process" in the communication plan field
    And user enters "Regression - Change Management Process" in the ver of functionality field
    And user enters "Regression - Change Management Process" in the risk description field
    When user clicks save button
    And multiple error messages should appear with red boarder around fields
    #  When user clicks on "Calendar" under actions
#      #Need to check this as it appears in a different window not different Tab
#      And user switches to window 2
#      When user enters "Change Record" in calendar search box
#      And user clicks on ticket type "Change Record"
#      Then user validates change records are shown in calendar
#      When user clicks on a present change record
#      #Need to check this as well
#      And user switches to frame
#      And user clicks on open button on calendar
#      Then user should see change record
#      And user closes change record window
#      And user closes calendar window
      #When user clicks on sweden checkbox under affected BU's
    And user selects request type as "Normal Change"
    Then user selects title as "Mobile:CS Core (Voice)" on Change record page
    And user selects request category as "Software Installation" on change record page
    And user enters description as "TEST TICKET PLEASE IGNORE - Automated Test for Normal Change (External Initiator)"
    And user enters reason field as "Regression"
    And user selects priority as "Minor"
    And user enters "Privacy Data: Just Testing" in the change builder field
    Then user enters as "Test Data - Ignore Ticket" in service and customer impact
    Then user enters request start time 24 hours ahead of current date
    And user enters request end time 28 hours ahead of current date
    And user enters impact duration as "45" minutes
    And user selects estimated impact dropdown as "Degradation of Service"
    And user clicks on save button
    And user waits
    Then user validates availability of tabs "Timeline:Diagnosis:Risk:Schedule:Interested Parties:Approval:Notifications:Linked Items:Work Orders:Service Level:Related Project:Service Info:Telenor" on change record page
    When user clicks on owner under sections
    And user validates owner profile as "Change Initiator-External"
    And user validates owner as "ChangeInitiator/Builder1"
    Then user clicks on Send button
    Then error message should display as "You must provide an answer to all the risk question outlined in the Risk tab before Send (ARERR 10000)" on change record page
    When user clicks on Risk tab
    And user gets current risk score value
    When user answers all risk questions as below
    And user selects answer as "Impact to other systems/technologies are unclear"
    And user selects answer as "No"
    And user selects answer as "Tested successfully, this is a pilot"
    And user selects answer as "Yes (outcome of the change can be instantly verified)"
    And user selects answer as "Yes"
    And user selects answer as "Simple"
    And user selects last answer as "No"
    Then user validates risk score gets updated
    Then user clicks on Send button
    Then an error message should appear: "Please select at least one country of impact for this change. (ARERR 10000)"
    When user clicks on sweden checkbox under affected BU's
    And user clicks on Send button
    Then error message should display as "You must select at least one CI in the Diagnosis Tab (ARERR 10000)" on change record page
    And user clicks on Diagnosis tab
    And user clicks on CI search button
    Then user switches to frame
    And CI search tab should be opened
    When user enters "FI_MGW_SMG03TRE" in the name+ field
    Then user clicks on search button on CI search window
    And user selects a CI from list
    And user selects impact level as "Degradation of Service"
    And user clicks on relate CI
    Then user closes warning message
    And user clicks on close button on CI search window
    And CI should be listed and displayed under the Diagnosis tab


