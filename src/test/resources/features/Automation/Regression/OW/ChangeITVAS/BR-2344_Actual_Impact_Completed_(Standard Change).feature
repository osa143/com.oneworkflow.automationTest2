@BR-2344_Actual_Impact_Completed_Standard_Change


Feature: BR-2344 - Actual Impact - Completed (Standard Change)

  Scenario: BR-2344 - Actual Impact - Completed (Standard Change)

    Given user is on the OneWorkflow login page
    When user logs in with valid username "ChangeManager1_Automation" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user opens a standard change in implementation status with 1 CI attached
    And user clicks on Diagnosis tab
    Then user right clicks on primary CI and selects "Impact:Clear All"
    And user clicks on yes on CI warning window
    When user changes status to "Completed"
    And user clicks save button
    Then error message should display as "Required field (without a default) not specified : Actual Impact" on change record page
    And user validates ticket was not saved as "Completed" status