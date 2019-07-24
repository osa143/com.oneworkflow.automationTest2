@02.13_Create_Multiple_Work_Orders_Internally_And_Dispatch @Incident
#passed
Feature: creation of multiple WO's and dispatch
  Scenario: user can create multiple work orders and dispatch these to different assignent groups

    Given user is on the OneWorkflow login page
    When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create trouble event
    And user switches to window 1
    Then trouble record form should appear in new tab
    When user clicks on sweden checkbox under affected BU's
    And user enters "02:13 Create Multiple Work Orders Internally And Dispatch" in Title field in Trouble event
    And user selects request type as "Customer" on trouble event page
    And user enters description as "02:13 Create Multiple Work Orders Internally And Dispatch"
    And user clicks on save button
    Then ticket should be created and status should be assigned
    When user clicks on Diagnosis tab
    And user clicks on CI search button
    And user switches to frame
    When user clicks on clear button
    Then user enters "SE_SGSN_VRRMME1" in name field
    And user clicks on search button on CI search window
    And user selects a CI from list
    Then user selects impact level as "Degradation of Service"
    And user clicks on relate CI
    #And error message should display as "Please verify that there are no impacted CI's in other tickets by using Show CR Matching (ARWARN 10000)"
    Then user closes warning message
    And user clicks on clear button
    Then user enters "SE_SGSN_LDHMME1" in name field
    And user clicks on search button on CI search window
    And user selects a CI from list
    Then user selects impact level as "Degradation of Service"
    And user clicks on relate CI
    # And error message should display as "Please verify that there are no impacted CI's in other tickets by using Show CR Matching (ARWARN 10000)"
    Then user closes warning message
    And user clicks on close button on CI search window
    Then user clicks on save button
    When user clicks on work order tab
    And user clicks on create from ticket
    Then user switches to window 2
    And user selects assigned profile dropdown as "Core:Mobile:Mobile PS:Mob PS Core WEST"
    Then user clicks on save button
    And ticket should be created and status should be assigned
    When user switches to window 1
    And user clicks on create from ticket
    Then user switches to window 3
    And user selects assigned profile dropdown as "Core:Mobile:Mobile PS:Development:Development Data-Common"
    Then user clicks on save button
    And ticket should be created and status should be assigned
    When user switches to window 1
    And user clicks on work order tab
    Then user should see work orders listed under work order tab

