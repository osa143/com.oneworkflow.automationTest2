@change @Estimated_impact_field_structure_validation
  #passed

Feature: Validation of change Estimated Impact field structure
  Scenario:Validation of change Estimated Impact field structure

    Given user is on the OneWorkflow login page
    And user logs in with valid user and password
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create change record
    Then user switches to window 1
    Then change record page should be opened and Change form is displayed
    Then multiple statuses "Degradation of Service:Loss of Service:No Impact:(clear)" should be available in "Estimated Impact" dropdown
    And user logsOut and accepts alert