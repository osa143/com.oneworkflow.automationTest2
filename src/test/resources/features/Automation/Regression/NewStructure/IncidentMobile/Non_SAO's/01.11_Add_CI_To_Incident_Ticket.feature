@01.11_Add_CI_To_Incident_Ticket @Incident  @01 @HelixRegression @Incident_NonSAO
#passed
  #CORE for ST, Core for SIT
   #Mobile PS Core Network
Feature: Adding of CI to incident ticket
  Scenario: Adding of CI to incident ticket

    Given user is on the OneWorkflow login page
    When user logs in with valid user and password
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create trouble event
#    When user clicks on agent console create trouble event
    And user switches to window 1
    Then trouble record form should appear in new tab
    When user clicks on sweden checkbox under affected BU's
#    When user clicks on OP sweden checkbox under affected BU's
    And user enters "Test Case 01.11 Add CI's" in Title field in Trouble event
    And user selects request type as "Customer" on trouble event page
    And user enters description as "Test Case 01.11 Add CI's"
    And user clicks on save button
    Then ticket should be created and status should be assigned
#    And user gets trouble ticket value
    When user clicks on Diagnosis tab
    #And user validates CI columns "CI Name:PrimarySecondary:CI Priority:Business Hours:Custom Attribute4" availability
    And user clicks on CI search button
    Then user switches to frame
    And user selects Category as "CORE"
#    And user selects OP Category as "CORE"
#    And user selects OP Type as "Mobile PS Core Network"
#    And user selects OP Item as "EPG"
    And user selects Type as "Mobile PS Core Network"
    And user selects Item as "EPG"
    #Then user should see at least 2 nodes per country
    When user enters "SE_EPG_FREEPG1" in name field
    And user clicks on search button on CI search window
    And user selects a CI from list
    Then user selects impact level as "Degradation of Service"
    And user clicks on relate CI
    And user closes warning message
    When user enters "SE_EPG_HYEPG1" in name field
    And user clicks on search button on CI search window
    And user selects a CI from list
    Then user selects impact level as "Degradation of Service"
    And user clicks on relate CI
    Then user closes warning message
    When user enters "SE_EPG_LDHEPG1" in name field
    And user clicks on search button on CI search window
    And user selects a CI from list
    Then user selects impact level as "Degradation of Service"
    And user clicks on relate CI
    Then user closes warning message
    When user enters "SE_EPG_VRREPG1" in name field
    And user clicks on search button on CI search window
    And user selects a CI from list
    Then user selects impact level as "Degradation of Service"
    And user clicks on relate CI
    Then user closes warning message
    And user clicks on close button on CI search window
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






