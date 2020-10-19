@WO_E2E
#OS3:WO:Request:SID_RelatedCIs-ShowLocationGetInstanceId OS3:SID:CIDetails:setCIDetails

Feature: WO Location Details and CI History

  Scenario: WO Location Details and CI History

    Given user is on the OneWorkflow login page
    And user logs in with valid user and password
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create work order
    Then user switches to window 1
    When user enters title as "Testing"
    Then user selects request type as "Analysis" in work order page
    And user enters description as "Testing"
    Then user selects priority as "Major"
    And user selects assigned profile dropdown as "Core:Mobile:Mobile PS:Mob PS Core WEST"
    Then user enters "Change_Automation_3" in assignee
    And user clicks save button
    Then ticket should be created and status should be assigned
    When user adds CI "SE_CPE_FRECPE5" to the ticket with impact level "Degradation of Service"
    And user clicks on Diagnosis tab
    Then user validates CI "SE_CPE_FRECPE5" is listed
    When user right clicks on CI "SE_CPE_FRECPE5" and selects "Show:Location Details"
    Then user switches to frame
    And user validates location details frame is opened
    Then user clicks on close button
    When user right clicks on CI "SE_CPE_FRECPE5" and selects "Show:Location Details"
    Then user 

    #Then user right clicks on CI and selects