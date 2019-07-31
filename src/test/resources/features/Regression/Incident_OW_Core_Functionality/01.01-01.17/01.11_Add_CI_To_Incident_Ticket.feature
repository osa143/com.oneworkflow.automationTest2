@01.11_Add_CI_To_Incident_Ticket @Incident
#passed
  #CORE for ST, Core for SIT
   #Mobile PS Core Network
Feature: Adding of CI to incident ticket
  Scenario: user is able to add CI's to incident ticket

    Given user is on the OneWorkflow login page
    When user logs in with valid username "Change_Automation_1" and password as "Telia@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create trouble event
    And user switches to window 1
    Then trouble record form should appear in new tab
    When user clicks on sweden checkbox under affected BU's
    And user enters "Test Case 01.11 Add CI's" in Title field in Trouble event
    And user selects request type as "Customer" on trouble event page
    And user enters description as "Test Case 01.11 Add CI's"
    And user clicks on save button
    Then ticket should be created and status should be assigned
    When user clicks on Diagnosis tab
    And user clicks on CI search button
    Then user switches to frame
    And user selects Category as "Core"
    And user selects Type as "Mobile PS Core Network"
    And user selects Item as "EPG"
    #Then user should see at least 2 nodes per country
    When user enters "SE_EPG_FREEPG1" in name field
    And user clicks on search button on CI search window
    And user selects a CI from list
    Then user selects impact level as "Degradation of Service"
    And user clicks on relate CI
    And error message should display as "Please verify that there are no impacted CI's in other tickets by using Show CR Matching (ARWARN 10000)"
    And user clicks on clear button
    When user enters "SE_EPG_HYEPG1" in name field
    And user clicks on search button on CI search window
    And user selects a CI from list
    Then user selects impact level as "Degradation of Service"
    And user clicks on relate CI
    Then user closes warning message
    And user clicks on clear button
    When user enters "SE_EPG_LDHEPG1" in name field
    And user clicks on search button on CI search window
    And user selects a CI from list
    Then user selects impact level as "Degradation of Service"
    And user clicks on relate CI
    Then user closes warning message
    And user clicks on clear button
    When user enters "SE_EPG_VRREPG1" in name field
    And user clicks on search button on CI search window
    And user selects a CI from list
    Then user selects impact level as "Degradation of Service"
    And user clicks on relate CI
    Then user closes warning message
    And user clicks on close button on CI search window
    And user switches to window 1
    And CI should be listed and displayed under the Diagnosis tab
    And user validates "Primary" CI is equal to "SE_EPG_FREEPG1"
    And user validates CI "Impact Status" is "Active"
    And user validates CI "Impact Category" is "Actual"
    When user right clicks on CI SE_EPG_VRREPG1 and user selects "Impact:Update"
    And user switches to frame
    Then user selects impact name as "Loss of Service"
#    And user clicks on close button on bulk update window
#    And user validates no changes were made on the chosen CI
#    When user right clicks on CI SE_EPG_VRREPG1 and user selects "Impact:Update" without selecting checkbox
#    And user switches to frame
#    Then user selects impact name as "Loss of Service"
    And user clicks confirm checkbox
    And user clicks on bulk update save button
    Then user validates CI SE_EPG_VRREPG impact is "Loss of Service"
    Then user clicks on save button






