@SAO_613

Feature: SAO-613 - QuickCreate - Cannot Save OP ticket

  Scenario: SAO-613 - QuickCreate - Cannot Save OP ticket

    Given user is on the OneWorkflow login page
    When user logs in with valid user and password
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    And user clicks on "Search / Quick Create" tab
    Then user selects quick create source as "One Workflow"
    Then user selects priority as "Major"
    And user enters quick create title as "SAO-613"
    Then user selects quick create request type as "Customer"
    And user enters quick create description as "Testing"
    Then user clicks on quick create button
    And error message should display on agent console as "  Please select at least one country of impact for this problem. (ARERR 10000)  "
    And user waits 5 secs
    Then user clicks quick create affected BU as sweden
    Then user clicks on quick create button
    And user switches to window 1
    Then trouble ticket should be created and status should be assigned
    And user enters description as "New Description"
    Then user clicks save button
    And user validates ticket status as "Work In Progress"