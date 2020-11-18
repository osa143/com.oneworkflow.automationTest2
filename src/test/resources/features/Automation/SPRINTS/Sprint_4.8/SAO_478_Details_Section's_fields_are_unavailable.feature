@SAO_478

Feature: SAO-478 - Details Sections fields are unavailable

  Scenario: SAO-478 - Details Section's fields are unavailable

#    Given user is on the OneWorkflow login page
#    And user logs in with valid username "ChangeManager1_Automation" and password as "Test@1234"
#    Then user successfully logged in to OneWorkflow and agent console should be displayed
#    When user clicks on create change record
#    Then user switches to window 1
#    When user selects request type as "Standard Change"
#    And user selects template as "All:IT:Other:NSO , new packages install"
#    When user enters "CI B2" in the change builder field
#    And user enters as "SAO-478" in service and customer impact
#    And user enters request start time as 10 minutes past from "Europe/London" timezone "MM/dd/yyyy HH:mm:ss" format
#    And user enters request end time as 30 minutes past from "Europe/London" timezone "MM/dd/yyyy HH:mm:ss" format
#    And user enters impact duration as "10" minutes
#    Then user enters description as "SAO-478"
#    And user clicks save button
#    And user waits 3 secs
#    Then user clicks on "Diagnosis" tab
#    And user adds CI "SE_CPE_FRECPE5" to change ticket with impact level "No Impact"
#    And user waits 5 secs
#    Then user clicks on Send button
#    And user waits 20 secs
#   # And user should see confirmation message and clicks on yes button
#    And user validates ticket status as "Assigned"
#    And user validates Implementation is readonly
#    And user validates Test Plan is readonly
#    And user validates Rollback is readonly
#    And user validates Communication plan is read only
#    And user validates Ver of Functionality is readonly
#    And user validates Risk Description is read only
#    Then user clicks on Ack button
#    And user waits 3 secs
#    #And user validates ticket status as "Analysis"
#    And user validates Implementation is readonly
#    And user validates Test Plan is readonly
#    And user validates Rollback is readonly
#    And user validates Communication plan is read only
#    And user validates Ver of Functionality is readonly
#    And user validates Risk Description is read only
#    Then user changes status to "Approval Requested"
#    And user clicks save button
#    And user waits 5 secs
#    Then user changes status to "Analysis"
#    And user clicks save button
#    And user validates Implementation is readonly
#    And user validates Test Plan is readonly
#    And user validates Rollback is readonly
#    And user validates Communication plan is read only
#    And user validates Ver of Functionality is readonly
#    And user validates Risk Description is read only
    Given user logs in with valid username "ChangeInitiatorInternal1" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user selects search menu as "Open Search Form:Change Record"
    When user clicks on create change record
    Then user switches to window 1
    When user selects request type as "Normal Change"
    Then user selects title as "Mobile:IMS Core" on Change record page
    And user selects request category as "Software Installation" on change record page
    And user enters description as "TEST TICKET PLEASE IGNORE - Automated Test for Normal Change (External Initiator)"
    And user enters reason field as "Regression"
    And user selects priority as "Minor"
    And user enters "Privacy Data: Just Testing" in the change builder field
    Then user enters as "Test Data - Ignore Ticket" in service and customer impact
    And user enters start time as 24 hours fast from current sweden time in "MM/dd/yyyy HH:mm:ss a" format
    And user enters end time as 28 hours fast from current sweden time in "MM/dd/yyyy HH:mm:ss a" format
    And user enters impact duration as "45" minutes
    And user selects estimated impact dropdown as "Degradation of Service"
    When user enters "Regression - Change Management Process" in the implementation field
    And user enters "Regression - Change Management Process" in the test plan field
    And user enters "Regression - Change Management Process" in the rollback field
    And user enters "Regression - Change Management Process" in the communication plan field
    And user enters "Regression - Change Management Process" in the ver of functionality field
    And user enters "Regression - Change Management Process" in the risk description field
    Then user clicks save button
    When user clicks on Risk tab
    And user gets current risk score value
    When user answers all risk questions as below
    And user selects answer as "Impact to other systems/technologies are unclear"
    And user selects answer as "No"
    And user selects answer as "Tested successfully, this is a pilot"
    And user selects answer as "Yes (outcome of the change can be instantly verified)"
    And user selects answer as "Yes"
    And user selects answer as "Simple"
    And user selects last answer as "Yes"
    Then user validates risk score gets updated
    And user adds CI "SE_EPG_FREEPG1" to change ticket with impact level "Loss of Service"
    And user waits 5 secs
    Then user clicks on Send button
    #And user validates ticket status as "Assigned"
    Then user clicks on Ack button
   # And user validates ticket status as "Analysis"
    And user validates Implementation isn't readonly
    And user validates Test Plan isn't readonly
    And user validates Rollback isn't readonly
    And user validates Communication Plan* isn't readonly
    And user validates Ver of Functionality* isn't readonly
    And user validates Risk Description* isn't readonly
    #And user stores change ticket
#    Then user logsOut from One workflow
#    Given user logs in with valid username "ChangeInitiatorInternal1" and password as "Test@1234"
#    Then user successfully logged in to OneWorkflow and agent console should be displayed
#    When user selects search menu as "Open Search Form:Change Record"
#    Then user enters ticket previously created and searches
#    And ticket should be displayed
#    And user validates Implementation isn't readonly
#    And user validates Test Plan isn't readonly
#    And user validates Rollback isn't readonly
#    And user validates Communication Plan* isn't readonly
#    And user validates Ver of Functionality* isn't readonly
#    And user validates Risk Description* isn't readonly
#    Then user logsOut from One workflow
    When user logs in with valid username "DC CS Core (Voice)_auto" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user selects search menu as "Open Search Form:Change Record"
    Then user enters ticket previously created and searches
    And ticket should be displayed
    Then user validates Communication Plan* isn't readonly
    And user validates Ver of Functionality* isn't readonly
    And user validates Risk Description* isn't readonly
    Then user logsOut from One workflow
    When user logs in with valid username "DC IMS Core_auto" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user selects search menu as "Open Search Form:Change Record"
    Then user enters ticket previously created and searches
    And ticket should be displayed
    Then user validates Communication Plan* isn't readonly
    And user validates Ver of Functionality* isn't readonly
    And user validates Risk Description* isn't readonly
    Then user logsOut from One workflow
    When user logs in with valid username "ChangeManager1_Automation" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user selects search menu as "Open Search Form:Change Record"
    Then user enters ticket previously created and searches
    And ticket should be displayed
    Then user changes status to "Approval Requested"
    And user clicks save button
    And user validates Implementation is readonly
    And user validates Test Plan is readonly
    And user validates Rollback is readonly
    And user validates Communication plan is read only
    And user validates Ver of Functionality is readonly
    And user validates Risk Description is read only
    Then user changes status to "Analysis"
    And user validates Implementation isn't readonly
    And user validates Test Plan isn't readonly
    And user validates Rollback isn't readonly
    And user validates Communication Plan* isn't readonly
    And user validates Ver of Functionality* isn't readonly
    And user validates Risk Description* isn't readonly




