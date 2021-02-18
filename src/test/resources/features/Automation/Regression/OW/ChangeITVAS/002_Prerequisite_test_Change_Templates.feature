@002_Prerequisite_test_Change_Templates


Feature: 002 Prerequisite test - Change Templates [aR]
  Scenario: 002 Prerequisite test - Change Templates [aR]

    Given user is on the OneWorkflow login page
    When user logs in with valid username "cm_appadmin1_auto" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user selects change template under administration
    Then user validates template console is displayed
    When user selects service provider as "Telia Company"
    And user clicks show templates button
    Then templates should appear
    When user selects "TEST TEMPLATE [UAT] - Standard Change" and clicks open
    And user switches to frame
    Then user validates service provider as "All"
    And user validates customer+ as "All"
    And user validates status as "Enabled"
    And user validates save button is present
    #And user clicks on "Further Details" tab
    And user validates template type as "IT"
    And user validates template subtype as "Other"
    And user validates template name as "TEST TEMPLATE [UAT] - Standard Change"
    And user validates template description as "TEST TEMPLATE [UAT] - Standard Change"
    And user validates template reason as ""
    When user clicks on further details tab
    And user validates "Category" has no info present
    Then user validates "Type" has no info present
    Then user validates "Item" has no info present
    Then user validates "Technology" has no info present
    Then user validates "Implementation Steps" as ""
    Then user validates "Test Plan" as ""
    Then user validates "Rollback" as ""
    Then user validates "Communication Plan" as ""
    Then user validates "Verification of Functionality" as ""
    Then user validates "Risk Description" as ""
    Then user clicks on close button
    When user selects "TEST TEMPLATE [UAT] - Normal Change" and clicks open
    And user switches to frame
    Then user validates service provider as "All"
    And user validates customer+ as "All"
    And user validates status as "Enabled"
    And user validates template type as "IT"
    And user validates template subtype as "Other"
    And user validates template name as "TEST TEMPLATE [UAT] - Normal Change"
    And user validates template description as "TEST TEMPLATE [UAT] - Normal Change"
    And user validates template request type as "Normal Change"
    And user validates template pre-approved as "No"
    And user validates template title as "IT | Other"
    And user validates template request category as "Configuration"
    And user validates template priority as "Major"
    And user validates template estimated impact as "Loss of Service"
    And user validates template expected alarms as "Many"
    And user validates template description as ""
    And user validates template reason as ""
    When user clicks on further details tab
    And user validates "Category" has no info present
    Then user validates "Type" has no info present
    Then user validates "Item" has no info present
    Then user validates "Technology" has no info present
    Then user validates "Implementation Steps" as ""
    Then user validates "Test Plan" as ""
    Then user validates "Rollback" as ""
    Then user validates "Communication Plan" as ""
    Then user validates "Verification of Functionality" as ""
    Then user validates "Risk Description" as ""
    Then user clicks on close button
