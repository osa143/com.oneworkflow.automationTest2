@05.02_Incident_summary @Incident

Feature: user enters closure info
  Scenario: user enters closure information

    Given user is on the OneWorkflow login page
    When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create trouble event
    And user switches to window 1
    Then trouble record form should appear in new tab
    When user clicks on sweden checkbox under affected BU's
    And user enters "Test case 05.02 Incident Summary" in Title field in Trouble event
    And user selects request type as "Customer" on trouble event page
    And user enters description as "Test case 05.02 Incident Summary"
    And user clicks on save button
    Then ticket should be created and status should be assigned
    When user clicks on Diagnosis tab
    And user clicks on CI search button
    Then user switches to frame
    When user enters "SE_EPG_FREEPG1" in name field
    And user clicks on search button on CI search window
    And user selects a CI from list
    Then user selects impact level as "Degradation of Service"
    And user clicks on relate CI
    And error message should display as "Please verify that there are no impacted CI's in other tickets by using Show CR Matching (ARWARN 10000)"
    And user clicks on close button on CI search window
    When user changes status to "Cleared" on trouble event page
    And user selects fault position as "N/A:N/A" on trouble event page
    And user selects cause as "N/A:N/A:N/A" on trouble event page
    And user selects action dropdown as "N/A:N/A" on trouble event page
    And user enters closure info as "Test Ticket"
    Then user enters event end time as current time
    When user clicks on Diagnosis tab
    And user right clicks on primary CI and selects "Impact:Clear All"
    And user should see confirmation message for impact clear and clicks ok
    And user clicks on save button
    Then user validates ticket status as "Cleared"
    When user changes status to "Closed" on trouble event page
    And user clicks on save button
    Then user validates ticket status as "Closed"
    And user validates closure info is present
