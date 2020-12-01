@BR_2344_&_BR_2390_Actual_Impact_&_Review_Details_(Normal_Change)


Feature: BR-2344 & BR-2390 - Actual Impact & Review Details (Normal Change) [SaR]

  Scenario: BR-2344 & BR-2390 - Actual Impact & Review Details (Normal Change) [SaR]

    Given user is on the OneWorkflow login page
    When user logs in with valid username "ChangeManager1_Automation" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user selects search menu as "Open Search Form:Change Record/Project/Freeze"
    And user switches to window 1
    Then user should see blank change record search form
    When user selects request type as "Normal Change"
    And user selects status as "Implementation"
    And user clicks Search on ticket search
    Then ticket should be displayed
    When user clicks on Diagnosis tab
    And user right clicks on CI present and updates impact
    Then user right clicks on CI present and clears impact for all CI's
    When user changes status to "Completed"
    And user clicks save button
    Then user validates warning message as "Required field (without a default) not specified : Actual Impact" in row 1
    When user clicks timeline refresh
    Then user validates closed timeline message is not present
    When user selects actual impact as "No Impact"
    And user selects completed code as "Successful"
    And user clicks save button
    Then user validates ticket status as "Closed"
    When user changes status to "Closed"
    And user selects closure code as "Test Ticket"
    #step9 unsure, please check
    And user enters review details as ""
    And user clicks save button
    Then user validates ticket status as "Closed"
    And user validates "3000" characters in review details field
