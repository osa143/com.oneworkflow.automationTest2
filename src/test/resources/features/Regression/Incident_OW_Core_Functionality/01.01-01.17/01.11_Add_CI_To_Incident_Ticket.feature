@01.11_Add_CI_To_Incident_Ticket @Incident

Feature: Adding of CI to incident ticket
  Scenario: user is able to add CI's to incident ticket

    Given user is on the OneWorkflow login page
    When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create trouble event
    And user switches to window 1
    Then trouble record form should appear in new tab
    When user clicks on sweden checkbox under affected BU's
    And user enters "Test Case 01.11 Add CI's" in Title field in Trouble event
    And user selects request type as "Customer"
    And user enters description as "Test Case 01.11 Add CI's"
    And user clicks on save button on the problem form
    Then ticket should be created and status should be assigned
    When user clicks on Diagnosis tab
    And user clicks on CI search button
    Then user switches to frame
    And user selects ci category as "Core"
    And user selects ci type as "Mobile PS Core Network"
    And user selects ci item as "EPG"
    And user clicks on search button on CI search window
    Then user should see at least 2 nodes per country
    And user selects CI's "SE_EPG_FREEPG1, SE_EPG_HYEPG1, SE_EPG_LDHEPG1, SE_EPG_VRREPG1"
    Then user clicks on relate CI
    And an error message should appear: "Please verify that there are no impacted CI's in other tickets by using Show CR Matching (ARWARN 10000)"
    And user closes warning message
    Then user selects impact level as "Degradation of Service"
    And user clicks on relate CI
    Then user closes warning message and clicks on close button
    And user switches to window 1
    And CI should be listed and displayed under the Diagnosis tab
    And user validates primary CI is equal to "SE_EPG_FREEPG1"
    And user validates CI impact status is "Active"
    And user validates CI impact category is "Actual"
    When user right clicks on "SE_EPG_VRREPG1"
    And user selects "Impact:Update"
    And user switches to frame
    Then user selects impact name as "Loss of Service"
    And user clicks on close button on bulk update window
    Then user switches to window 1
    When user right clicks on "SE_EPG_VRREPG1"
    And user selects "Impact:Update"
    And user switches to frame
    Then user selects impact name as "Loss of Service"
    And user clicks confirm checkbox
    And user clicks on bulk update save button
    And user switches to window 1
    Then user validates CI impact level is "Loss of Service"
    Then user clicks on save button on the problem form






