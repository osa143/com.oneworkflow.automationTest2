@E2ETroubleAPI
  #Need API created Ticket
Feature: E2E flow for ticket created by API
  Scenario: E2E flow for ticket created by API

    Given user is on the OneWorkflow login page
    When user logs in with valid username "ChangeManager1_Automation" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user selects search menu as "Open Search Form:Trouble Event"
    And user enters ticket id as ""
    Then user should see trouble ticket
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
    And user right clicks on CI "SE_EPG_FREEPG1" and selects "Impact:Clear All"
    And user should see confirmation message for impact clear and clicks ok
    And user clicks on save button and closes warning messages
    Then user validates ticket status as "Cleared"
    When user changes status to "Closed" on trouble event page second time
    And user clicks on save button
    Then user validates ticket status as "Closed"
