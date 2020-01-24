@workorder_field_validation @workorder_Status_field_validation

Feature:Work Order Status field validation
  Scenario: Work Order Status validation

    Given user is on the OneWorkflow login page
    And user logs in with valid user and password
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create work order
    Then user switches to window 1
