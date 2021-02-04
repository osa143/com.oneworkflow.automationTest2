@Quick_create_WO @OW_Incident

Feature: Automation - OW - Quickcreate WO

  Scenario: Automation - OW - Quickcreate WO

    Given user is on the OneWorkflow login page
    When user logs in with valid user and password
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on "Search / Quick Create" tab
    And user clicks on "Work Order" tab
    And user selects quick create priority as "Major"
    And user enters quick create work order title as "Quick create work order"
    And user selects quick create type as "Analysis"
    And user enters quick create work order description as "Quick create work order"
    Then user clicks on work order quick create button
    And user switches to window 1
    When user selects assigned profile dropdown as "Core:Mobile:Mobile PS:Mob PS Core WEST"
    And user enters "Change_Automation_1" in assignee
    Then user clicks on save button
    And user clicks on Ack button
    Then user validates ticket status as "Work In Progress"
    When user changes status to "Cleared" on work order page
    And user selects completion code as "Success"
    And user clicks on "Schedule" tab
    And user enters schedule end as current date
    Then user clicks on save button
    When user changes status to "Closed" on work order page
    And user clicks on save button
    Then user validates ticket status as "Closed"