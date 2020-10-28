@Automation_Request_Type_displayed_in_Hierarchy
#Automation - Request Type displayed in Hierarchy[s]

Feature: Request Type displayed in Hierarchy[s]

  Scenario: Request Type displayed in Hierarchy[s]

    Given user is on the OneWorkflow login page
    When user logs in with valid user and password
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create work order
    And user switches to window 1
    Then work order form should appear in new tab
    When user selects request type as "SA Request:Configuration" in work order page
    Then user validates request type as "SA Request | Configuration"