@ClosureCode_field_validation @change
#Passed

Feature: validation of Closure Code field structure
  Scenario: validation of status field structure
    Given user is on the OneWorkflow login page
    And user logs in with valid user and password
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create change record
    Then user switches to window 1
    Then change record page should be opened and Change form is displayed
    When user enters "Regression - Change Management Process" in the implementation field
    And user enters "Regression - Change Management Process" in the test plan field
    And user enters "Regression - Change Management Process" in the rollback field
    And user enters "Regression - Change Management Process" in the communication plan field
    And user enters "Regression - Change Management Process" in the ver of functionality field
    And user enters "Regression - Change Management Process" in the risk description field
    When user selects request type as "Normal Change"
    Then user selects title as "Mobile:CS Core (Voice)" on Change record page
    And user selects request category as "Software Installation" on change record page
    And user enters description as "TEST TICKET PLEASE IGNORE - Automated Test for Normal Change (Internal Initiator)"
    And user enters reason field as "Regression"
    And user selects priority as "Critical"
    And user enters "Privacy Data: Just Testing" in the change builder field
    Then user enters as "Test Data - Ignore Ticket" in service and customer impact
    And user enters start time as 24 hours fast from current sweden time
    And user enters end time as 28 hours fast from current sweden time
    And user enters impact duration as "45" minutes
    And user selects estimated impact dropdown as "Degradation of Service"
    And user clicks on save button
    And user waits
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
    And user waits
    When user clicks on Send button
    Then user validates ticket status as "Assigned"
    When user clicks on Ack button
    And user clicks on save button
    And user waits
    Then user validates ticket status as "Analysis"
    And user selects status as "Approval Requested"
    And user clicks on save button
    And user waits
    And user selects status as "Schedule Requested"
    And user clicks on save button
    And user waits
    And user selects status as "Implementation"
    And user clicks on save button
    And user waits
    And user selects status as "Completed"
    And user selects actual impact as "Degradation of Service"
    And user selects completed code as "Successful"
    And user selects status as "Completed"
    When user clicks on Diagnosis tab
    And user right clicks on primary CI and selects "Impact:Clear"
    And user clicks on yes on CI warning window
    And user clicks on save button
    And user waits
    Then multiple statuses "Pending:Completed:Closed:(clear)" should be available in "Status*" dropdown
    And user selects status as "Closed"
    Then multiple statuses "Closed Successfully:Closed with Issues:Test Ticket:(clear)" should be available in "Closure Code*" dropdown