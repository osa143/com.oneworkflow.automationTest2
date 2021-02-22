@BR_2344_BR_2390_Actual_Impact_&_Review_Details_Normal_Change @OW_Change


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
    Then user validates ticket status as "Implementation"
    When user selects status as "Completed"
    And user selects actual impact as "No Impact"
    And user selects completed code as "Successful"
    And user clicks on save button
    Then user validates ticket status as "Completed"
    When user changes status to "Closed"
    And user selects closure code as "Closed Successfully"
    And user enters review details as "Test ticket"
    And user clicks save button
    Then user validates ticket status as "Closed"
    And user should see review details "Test ticket"

