@002_Prerequisite_test_Change_Templates


Feature: 002 Prerequisite test - Change Templates [aR]
  Scenario: 002 Prerequisite test - Change Templates [aR]

    Given user is on the OneWorkflow login page
    When user logs in with valid username "cm_appadmin1_auto" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user selects administration menu as "Templates:Change Template"
    And user switches to window 1
    And user waits 10 secs
    When user selects service provider as telia company
    And user clicks show templates button
    Then templates should appear
    And user clicks on the template next chunk button
    When user selects "TEST TEMPLATE [UAT] - Standard Change" and clicks open
    And user waits 5 secs
    Then user validates service provider as "All"
    And user validates customer+ as "All"
    And user validates status as "Enabled"
    And user validates save button is present
    And user validates template type as "IT"
    And user validates template subtype as "Other"
    And user validates template name as "TEST TEMPLATE [UAT] - Standard Change"
    And user validates template description as "TEST TEMPLATE [UAT] - Standard Change"
    And user validates template reason as "THIS CHANGE RECORD IS RESERVED FOR THE USER WHO CREATED (Creator/Change Initiator) THE CHANGE RECORD. DO NOT MODIFY THE CHANGE RECORD. *** NOTE ***  This Change Record exists in UAT (User Acceptance Test) environment. If you receive email regarding this Change Record, disregard the email as email does not relate to a production Change Record."
    When user clicks on further details tab
    And user validates template category as ""
    Then user validates CTI Template Type as ""
    Then user validates template item as ""
    Then user validates template technology as ""
    Then user validates implementation steps as "Implementation Step 1 Implementation Step 2 Implementation Step 3"
    Then user validates template test plan as "Test Result"
    Then user validates template rollback as "Rollback is not possible"
    Then user validates template communication plan as "Communication plan does not exist"
    Then user validates template verification of functionality as "Verification Step 1 Verification Step 2 Verification Step 3"
    Then user validates template risk description as "No Risk"
    Then user clicks on template close button
    And user clicks previous chunk button
    When user selects "TEST TEMPLATE [UAT] - Normal Change" and clicks open
    Then user validates service provider as "All"
    And user validates customer+ as "All"
    And user validates status as "Enabled"
    And user validates template type as "IT"
    And user validates template subtype as "Other"
    And user validates template name as "TEST TEMPLATE [UAT] - Normal Change"
    And user validates template description as "TEST TEMPLATE [UAT] - Normal Change"
    And user validates template request type as "Normal Change"
    And user validates template pre-approved no is selected
    And user validates template title as "IT | Other"
    And user validates template request category as "Configuration"
    And user validates template priority as "Major"
    And user validates template estimated impact as "Loss of Service"
    And user validates template expected alarms as "Many"
    And user validates description for template as "THIS CHANGE RECORD IS RESERVED FOR THE USER WHO CREATED (Creator/Change Initiator) THE CHANGE RECORD. DO NOT MODIFY THE CHANGE RECORD. *** NOTE *** This Change Record exists in UAT (User Acceptance Test) environment. If you receive email regarding this Change Record, disregard the email as email does not relate to a production Change Record."
    And user validates template reason as "THIS CHANGE RECORD IS RESERVED FOR THE USER WHO CREATED (Creator/Change Initiator) THE CHANGE RECORD. DO NOT MODIFY THE CHANGE RECORD. *** NOTE *** This Change Record exists in UAT (User Acceptance Test) environment. If you receive email regarding this Change Record, disregard the email as email does not relate to a production Change Record."
    When user clicks on further details tab
    And user validates template category as ""
    Then user validates CTI Template Type as ""
    Then user validates template item as ""
    Then user validates template technology as ""
    Then user validates implementation steps as "Implementation Step 1 Implementation Step 2 Implementation Step 3"
    Then user validates template test plan as "Test Result"
    Then user validates template rollback as "Rollback is not possible"
    Then user validates template communication plan as "Communication plan does not exist"
    Then user validates template verification of functionality as "Verification Step 1 Verification Step 2 Verification Step 3"
    Then user validates template risk description as "No Risk"
    Then user clicks on template close button
