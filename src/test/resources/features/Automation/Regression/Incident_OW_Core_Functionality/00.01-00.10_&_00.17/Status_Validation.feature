@StatusFieldValidation

  Feature: Status field validation
    Scenario Outline: Status field validation

      Given user is on the OneWorkflow login page
      When user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create trouble event
      And user switches to window 1
      Then trouble record form should appear in new tab
      Then multiple statuses "New:Closed:(clear)" should be available in "Status" dropdown
      Then trouble record form should appear in new tab
      When user validates BU availability
      And user clicks on "<BU_Name1>" checkbox under affected BU's
      And user clicks on "<BU_Name2>" checkbox under affected BU's
      Then user validates "<BU_Name1>" and "<BU_Name2>" checkboxes are selected
      When user enters "<Title>" in Title field in Trouble event
      And user enters description as "<Description>"
      And user selects request type as "Customer" on trouble event page
      Then user clicks on save button
      Then multiple statuses "Assigned:Cleared:Pending:Withdrawn:(clear)" should be available in "Status*" dropdown
      And ticket should be created and status should be assigned
      When user clicks on Diagnosis tab
      And user clicks on CI search button
      Then user switches to frame
      And user clicks on clear button
      And user enters "<CI Name1>" in name field
      Then user clicks on search button on CI search window
      And user selects CI "<CI Name1>"
      Then multiple statuses "Degradation of Service:Loss of Service:No Impact:(clear)" should be available in "Level*" dropdown
      And user selects impact level as "Degradation of Service"
      Then user clicks on relate CI
      Then user closes warning message
      Then user clicks on save button
      Then multiple statuses "Cleared:Pending:Withdrawn:Work In Progress:(clear)" should be available in "Status*" dropdown
      And user logsOut and accepts alert





      Examples:
        |BU_Name1 |BU_Name2 |Location|Location Name         |Title                        |Description                  |CI Name1          |CI Name2        |CI Name         |Validate BU |
        |Norway   |Finland  |NO_     |NO_Site_VSF087        |Test case MT004 Norway E2E   |Test case MT004 Norway E2E   |NO_EPG_OSL900EPG2|DK_EPG_AMBEPG1  |NO_EPG_OSL900EPG2|Denmark     |