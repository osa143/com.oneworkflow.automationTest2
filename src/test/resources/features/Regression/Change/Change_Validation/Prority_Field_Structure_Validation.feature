@change @Priority_field_structure_validation
  #passed

Feature: Validation of change Priority field structure
  Scenario:Validation of change Priority field structure

    Given user is on the OneWorkflow login page
    And user logs in with valid user and password
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create change record
    Then user switches to window 1
    Then change record page should be opened and Change form is displayed
    And user verifies priority field is visible
    Then multiple statuses "Critical:Major:Minor:Info:Unknown" should be available in "Priority" dropdown
    And user logsOut and accepts alert
