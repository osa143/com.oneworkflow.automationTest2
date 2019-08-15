@SAO-427-BR2862-Bulk_Loading_CTI_Details @SAO-427
Feature: checking of bulk loading CTI details
  Scenario: user checks the bulk loading CTI details

    Given user is on the OneWorkflow login page
    When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create trouble event
    And user switches to window 1
    Then trouble record form should appear in new tab
    When user clicks on sweden checkbox under affected BU's
    And user enters "SAO-427 Test Bulk Loading Error Message - Structure" in Title field
    And user selects request type as "Event" on trouble event page
    And user enters description as "SAO-427 Test Bulk Loading Error Message - Structure"
    And user clicks on save button
    Then ticket should be created and status should be assigned
    When user clicks on Diagnosis tab
    And user clicks on "Add Bulk Import" button
    And user switches to frame
    Then user should see bulk ci loading window
    And user validates "From*" is visible
    And user validates "To+" is visible
    When user selects impact level as "No Impact"
    And user enters impact from date as current date
    And user enters impact to date as current date +4h
    When user clicks on "Upload Import File" button
    Then user should see add attachment window
    When user clicks on "Choose File" Button
      #10CI's XLS no duplicate
    Then user selects XLS file with 10 CI's
    And user clicks on attachment ok button
    Then user clicks on save button under bulk import
    And user clicks on attachment ok button
    And user switches to window 1
    When user clicks on "Show Bulk Import" button
    And user switches to frame
    Then user validates uploaded file is visible
    And user clicks on "Related CIs" tab
    Then user validates at least 1 CI has "completed" status
    And user validates "Total Rows" as 10
    And user validates "Rows Ok" as 10
    And user validates "With Warnings" as 0
    And user validates "With Errors" as 0
    Then user clicks on bulk loading close button




