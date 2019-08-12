@SAO-427-BR2430_CI_not_found_prompt_for_CI_Search @SAO-427
Feature: checking of bulk loading Location details
  Scenario: user checks the bulk loading location details

    Given user is on the OneWorkflow login page
    When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create trouble event
    And user switches to window 1
    Then trouble record form should appear in new tab
    When user clicks on sweden checkbox under affected BU's
    And user enters "SAO-427 Test Bulk Loading CI not found Prompt" in Title field
    And user selects request type as "Event" on trouble event page
    And user enters description as "SAO-427 Test Bulk Loading CI not found Prompt"
    And user clicks on save button under bulk import WIN_0_700025244
    Then ticket should be created and status should be assigned
    When user clicks on Diagnosis tab
    And user clicks on "Add Bulk Import" button
    And user switches to frame
    Then user should see bulk ci loading window
    And user validates "Impact Type*" is visible
    And user validates "Category*" is visible
    And user validates "Level*" is visible
    And user validates "From*" is visible
    And user validates "To+" is visible
    And user validates "Hrs" is visible
    And user validates "Mins" is visible
    And user validates "Days" is visible
    And user validates "Secs" is visible
    And user validates "Ignore Duplicate CIs" is visible
    And user validates "Upload File" radio button is visible
    And user validates "Manual Input" radio button is visible
    And user validates "Download File Template" is visible
    And user validates "Upload Import File" is visible
    And user validates "Save" is visible
    And user validates "Close" is visible
    When user clicks on "Manual Input" radio button
    And user enters impact from date as current date midnight
    And user enters impact to date as current date midnight +4 hours
    And user selects impact level as "Degradation of Service"
    And user enters hours as "3"
    And user enters "abcdefghijklmnopqrstuvwxyz" in manual CI search box
    Then user clicks on save button under bulk import
    And user validates import message appears
    Then user clicks on ok button
    And user switches to window 1
    When user clicks on "Show Bulk Import" button
    Then user switches to frame
    #May want to store the number as int as we may reuse the same method
    And user validates related jobs has 1 entry
    And user highlights related job
    Then user clicks on "Related CIs" tab
    And user validates warning message as "No CI named 'abcdefghijklmnopqrstuvwxyz' was found!"
    And user validates status message as "Completed (With Warnings)"
    Then user clicks on bulk loading close button





