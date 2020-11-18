@Bulk_Loading_Error_Message_impact_duration_Change @SAO-427 @other_change*
  #passed
Feature: checking of bulk loading error message impact duration
  Scenario: user checks the impact duration message of bulk loading error

    Given user is on the OneWorkflow login page
    And user logs in with valid user and password
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create change record
    Then user switches to window 1
    And user selects request type as "Normal Change"
    Then user selects title as "Mobile:CS Core (Voice)" on Change record page
    And user selects request category as "Software Installation" on change record page
    And user enters description as "TEST TICKET PLEASE IGNORE - SAO-427 Test Bulk Loading CI not found Prompt Change"
    And user enters reason field as "Regression"
    And user selects priority as "Critical"
    And user enters "Privacy Data: Just Testing" in the change builder field
    When user enters "Regression - Change Management Process" in the implementation field
    And user enters "Regression - Change Management Process" in the test plan field
    And user enters "Regression - Change Management Process" in the rollback field
    And user enters "Regression - Change Management Process" in the communication plan field
    And user enters "Regression - Change Management Process" in the ver of functionality field
    And user enters "Regression - Change Management Process" in the risk description field
    Then user enters as "Test Data - Ignore Ticket" in service and customer impact
    And user enters start time as 24 hours fast from current sweden time in "MM/dd/YYYY HH:mm:ss" format
    And user enters end time as 28 hours fast from current sweden time in "MM/dd/YYYY HH:mm:ss" format
    And user enters impact duration as "45" minutes
    And user selects estimated impact dropdown as "Degradation of Service"
    And user clicks on save button
    When user clicks on Diagnosis tab
    And user clicks on Add Bulk Import button
    And user switches to frame
    Then user should see bulk ci loading window
    When user selects impact level as "No Impact"
    And user selects impact type as "Un-Planned"
    And user clicks on Manual Input radio button
    And user enters impact from date as current date midnight plus 24 hours on bulk CI loading window
    And user enters impact to date as current date midnight plus 30 hours on bulk CI loading window
    When user clicks on Manual Input radio button
    And user enters "One Workflow" in manual CI search box
    Then user clicks on save button under bulk import
    And user should see error message of "(300825): From date cannot be in the future for planned impact record." on bulk cI window
    And user should see error message of "To date cannot be in the future for un-planned impact record." on bulk cI window and clicks ok
    And user switches to frame
    And user enters impact from date as current date midnight plus -20 hours on bulk CI loading window
    And user enters impact to date as current date midnight plus -24 hours on bulk CI loading window
    And user clicks on save button under bulk import
    Then user should see error message of "'Impact From' cannot be set in the past. (ARERR 10000)" on bulk cI window
    And user should see error message of "'Impact From' cannot be set in the past. (ARERR 10000)" on bulk cI window and clicks ok
    And user switches to frame
    And user enters impact from date as current date midnight plus 48 hours on bulk CI loading window
    And user enters impact to date as current date midnight plus 24 hours on bulk CI loading window
    And user clicks on save button under bulk import
    Then user should see error message of "Impact From date must be before Impact To date." on bulk cI window
    And user should see error message of "Impact From date must be before Impact To date." on bulk cI window and clicks ok
    And user switches to frame
    And user enters "" in manual CI search box
    Then user clicks on save button under bulk import
    Then user should see error message of "Please type in or paste the list of CIs you you want to relate. (ARERR 10000)" on bulk cI window
    And user should see error message of "Please type in or paste the list of CIs you you want to relate. (ARERR 10000)" on bulk cI window and clicks ok
    And user switches to frame
    And user clicks on bulk loading close button





