@workorder_field_validation @workorder_Status_field_validation

Feature:Work Order Status field validation
  Scenario: Work Order Status validation

    Given user is on the OneWorkflow login page
    And user logs in with valid user and password
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create work order
    Then user switches to window 1
    When user verifies status is read only
    Then user validates ticket status as "New"
    When user enters title as "<title>"
    And user selects request type as "Maintenance" on work order page
    And user enters description as "Description"
    And user selects priority as "Info"
    Then user clicks on save button
    Then multiple statuses "New:Pending:Withdrawn:(clear)" should be available in "Status*" dropdown
    Then user selects assigned profile dropdown as "PLAZA"
    And user enters "PLAZA" in assignee
    And user clicks on Diagnosis tab
    And user clicks on CI search button
    Then user switches to frame
    And CI search tab should be opened
    And user selects Category as "Core"
    And user selects Type as "Mobile CS Core Network"
    Then user enters "FI_MGW_SMG03TRE" in the name+ field
    Then user clicks on search button on CI search window
    And user selects a CI from list
    And user selects impact level as "Degradation of Service"
    And user clicks on relate CI
    Then user closes warning message
    And user waits
    Then user clicks on save button
    Then multiple statuses "Assigned:Pending:Withdrawn:(clear)" should be available in "Status*" dropdown
    And user clicks on Ack button
    Then multiple statuses "Pending:Work In Progress:Cleared:Withdrawn:(clear)" should be available in "Status*" dropdown
    And user selects status as "Cleared"
    And user selects resolved group as "PLAZA"
    And user selects resolved person as "PLAZA"
    And user selects completion code as "Success"
    Then user clicks on schedule tab
    And user enters actual schedule start date as "2020-01-23 15:37:2"
    And user enters actual schedule end date as "2020-01-24 00:00:00"
    Then user clicks on save button
    Then multiple statuses "Work In Progress:Cleared:Closed:(clear)" should be available in "Status*" dropdown
    And user selects status as "Closed"
    Then user clicks on save button
    When user verifies status is read only
    Then user validates ticket status as "Closed"

  





