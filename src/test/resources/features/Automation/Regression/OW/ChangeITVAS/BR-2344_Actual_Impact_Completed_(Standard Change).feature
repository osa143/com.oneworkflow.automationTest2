@BR-2344_Actual_Impact_Completed_Standard_Change


Feature: BR-2344 - Actual Impact - Completed (Standard Change)

  Scenario: BR-2344 - Actual Impact - Completed (Standard Change)

    Given user is on the OneWorkflow login page
    When user logs in with valid username "ChangeManager1_Automation" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user selects search menu as "Open Search Form:Change Record/Project/Freeze"
    And user switches to window 1
    And user selects status as "Implementation"
    And user selects request type as "Standard Change"
    And user clicks Search on ticket search
    And user clicks on Diagnosis tab
    Then user right clicks on primary CI and selects "Impact:Clear All"
    And user should see confirmation message for impact clear and user clicks yes
    When user changes status to "Completed"
    And user clicks save button
    Then an error message should appear: "Required field (without a default) not specified : Actual Impact"
    When user gets ticket value
    And user selects search menu as "Open Search Form:Change Record/Project/Freeze"
    And user switches to window 2
    And user enters ticket previously created and searches
    And user waits 5 secs
    #validate ticket was not saved as "Completed" status
    And user validates ticket status as "Implementation"
    And user switches to window 1
    And user selects status as "Implementation"
    And user clicks on save button
