@SAO-427-BR2863-Bulk_Loading_Error_Message_Impact_Duration_Trouble @SAO-427
Feature: checking of bulk loading error message impact duration
  Scenario: user checks the impact duration message of bulk loading error

    Given user is on the OneWorkflow login page
    When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create trouble event
    And user switches to window 1
    Then trouble record form should appear in new tab
    When user clicks on sweden checkbox under affected BU's
    And user enters "SAO-427 Test Bulk Loading Error Message - Impact Duration" in Title field
    And user selects request type as "Event" on trouble event page
    And user enters description as "SAO-427 Test Bulk Loading Error Message - Impact Duration"
    And user clicks on save button
    Then ticket should be created and status should be assigned
    When user clicks on Diagnosis tab
    And user clicks on "Add Bulk Import" button
    And user switches to frame
    Then user should see bulk ci loading window
    And user validates "From*" is visible
    And user validates "To+" is visible
    And user validates "Hrs" is visible
    And user validates "Mins" is visible
    And user validates "Days" is visible
    And user validates "Secs" is visible
    When user selects impact level as "No Impact"
    And user enters impact from date as current date
    And user enters impact to date as current date -4h
    And user clicks on "Manual Input" radio button
    And user enters "One Workflow" in manual CI search box
    Then user clicks on save button under bulk import
    And user should see error message of "Errors where found:Impact From date must be before Impact To date. Please check and make the necessary corrections, or contact the System Adminsitrators with the above error. (ARERR 10000)"
    And user closes warning message
    When user clears "To+" date field
    And user clicks on bulk import save button
    Then user should see error message of "Please fill in all required fields to relate the selected CIs. (Impact Type, Category, Level, From (Date), To (Date)) (ARERR 10000)"
    And user closes warning message
    When user clears manual CI search box
    And user clicks on bulk import save button
    Then user should see error message of "Please type in or paste the list of CIs you you want to relate. (ARERR 10000)"
    And user closes warning message
    And user clicks on bulk import close button
