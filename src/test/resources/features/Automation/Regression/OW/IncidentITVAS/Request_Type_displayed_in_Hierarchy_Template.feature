@Request_Type_displayed_in_Hierarchy_Template


Feature: Automation - Request Type displayed in Hierarchy - Template[s]

  Scenario: Automation - Request Type displayed in Hierarchy - Template[s]

    Given user is on the OneWorkflow login page
    When user logs in with valid user and password
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create work order
    And user switches to window 1
    Then work order form should appear in new tab
    When user selects template as "SA Process:Improvement/Automation:SA Process Improvement"
    And user validates request type as "Service Request | SA Process Improvement"
    And user clicks on save button
