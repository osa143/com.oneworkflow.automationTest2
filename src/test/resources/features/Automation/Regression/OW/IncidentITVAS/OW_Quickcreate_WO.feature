@Automation_OW_Quickcreate_WO
#Automation - OW - Quickcreate WO[s]

Feature: Automation - OW - Quickcreate WO

  Scenario: Automation - OW - Quickcreate WO

    Given user is on the OneWorkflow login page
    When user logs in with valid user and password
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on "Search / Quick Create" tab
    And user clicks on work order tab
    And user clicks on sweden checkbox under affected BU's
    And user selects quick create source as "One Workflow"
    And user selects priority as "Major"
    And user enters quick create title as "Test Title"
    And user selects quick create request type as "Customer"
    And user enters quick create description as "Test Desc"
    Then user clicks on quick create button