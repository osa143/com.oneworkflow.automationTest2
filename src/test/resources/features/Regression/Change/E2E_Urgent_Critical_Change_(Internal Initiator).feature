@E2E_Urgent_Critical_Change_(Internal_Initiator)

Feature: Internal Urgent Critical Change E2E
  Scenario: Internal user processes a normal change ticket

    Given user is on the OneWorkflow login page
    When user logs in with valid username "ChangeInitiatorInternal1" and password as "Test@1234"
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
    When user selects request type as "Urgent Change"
    Then user selects title as "Mobile:RAN NSN" on Change record page
    And user selects request category as "Software Installation" on change record page
    And user enters description as "TEST TICKET PLEASE IGNORE - Automated Test for Urgent Major Critical (Internal Initiator)"
    And user enters reason field as "Regression"
    And user selects priority as "Critical"
    And user enters "CI B2" in the change builder field
    Then user enters as "Test Data - Ignore Ticket" in service and customer impact
    Then user enters request start time 2 hours ahead of current date
    And user enters request end time 5 hours ahead of current date
    And user enters impact duration as "3" hours
    And user selects estimated impact dropdown as "Degradation of Service"
    And user clicks on save button
    And user waits
    Then user validates availability of tabs "Timeline:Diagnosis:Risk:Schedule:Interested Parties:Approval:Notifications:Linked Items:Work Orders:Service Level:Related Project:Service Info:Telenor" on change record page
    When user clicks on owner under sections
    And user validates owner profile as "Change Initiator-Internal"
    And user validates owner as "ChangeInitiatorInternal1"
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
    When user clicks on estonia checkbox under affected BU's
    And user clicks on Send button
    Then error message should display as "You must select at least one CI in the Diagnosis Tab (ARERR 10000)" on change record page
    And user clicks on Diagnosis tab
    And user clicks on CI search button
    Then user switches to frame
    And CI search tab should be opened
    And user selects Category as "Core"
    And user selects Type as "Mobile CS Core Network"
    Then user enters "FI_MGW_SMG03TRE" in the name+ field
    Then user clicks on search button on CI search window
    And user selects a CI from list
    And user selects impact level as "Degradation of Service"
    And user clicks on relate CI
    Then user closes warning message
    And user clicks on close button on CI search window
    And CI should be listed and displayed under the Diagnosis tab
    When user clicks on Show CR Matching button
    Then user should see Show CR Matching table appear
    When user clicks on "Interested Parties" tab
    And user enters email address as "Test123xxx@Test123xxx.com"
    And user clicks on add email button
    Then user should see new email "Test123xxx@Test123xxx.com" added in "Email Address" in row 2
    When user clicks on Send button
    Then user validates ticket status as "Assigned"

