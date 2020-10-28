@Automation_OW_Quickcreate_OP_ticket
#Automation - OW - Quickcreate OP ticket[s]

Feature: OW - Quickcreate OP ticket

  Scenario: OW - Quickcreate OP ticket[s]

    Given user is on the OneWorkflow login page
    When user logs in with valid user and password
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on "Search / Quick Create" tab
    And user clicks on sweden checkbox under affected BU's
    And user selects quick create source as "One Workflow"
    And user selects priority as "Major"
    And user enters quick create title as "Test Title"
    And user selects quick create request type as "Customer"
    And user enters quick create description as "Test Desc"
    Then user clicks on quick create button
    And user switches to window 1
    When user clicks on assignment under sections
    And user clicks on Ack button
    Then user validates ticket status as "Work In Progress"
    When user changes status to "Cleared" on trouble event page
    And user selects fault position as "N/A:N/A" on trouble event page
    And user selects cause as "N/A:N/A:N/A" on trouble event page
    And user enters event end time as current time
    And user clicks save button
    Then user validates ticket status as "Cleared"
    When user changes status to "Closed" on trouble event page
    And user selects action dropdown as "N/A:N/A" on trouble event page
    And user enters closure info as "Test Info"
    And user clicks save button
    Then user validates ticket status as "Closed"
