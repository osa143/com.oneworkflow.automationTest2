@Permissions_ChangeInitiator_Internal

Feature: Permissions - ChangeInitiator-Internal [aR]

  Scenario: Permissions - ChangeInitiator-Internal [aR]

    Given user is on the OneWorkflow login page
    When user logs in with valid username "ChangeInitiatorInternal1" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create change record
    Then user switches to window 1
    When user clicks save button
    Then error message should display as "Please fill up all the mandatory fields in the Details Panel to create a Change Request. (ARERR 10000)" on change record page
    When user selects request type as "Standard Change"
    And user clicks on sweden checkbox under affected BU's
    And user selects template as "All:IT:Carrier:Telia Carrier UAT Changes"
    And user enters "_" in the change builder field
    And user enters as "Test" in service and customer impact
    And user enters request start time 24 hours ahead of current date
    And user enters request end time 48 hours ahead of current date
    And user enters impact duration as "5" minutes
    And user enters description as "Testing"
    And user clicks on save button
    Then user gets change ticket value
    When user clicks on Diagnosis tab
    And user clicks on CI search button
    Then user switches to frame
    When user enters "dummy%" in the name+ field
    And user clicks on search button on CI search window
    And user selects all CI's that appear
    And user selects impact level as "Loss of Service"
    And user clicks on relate CI
    And user closes warning message on change add CI
    And user clicks yes on save confirmation message
    Then CI should be listed and displayed under the Diagnosis tab
    When user clicks on Send button
    And user waits 5 secs
    Then user validates ticket status as "Assigned"
    When user clicks on Diagnosis tab
    And user clicks on CI search button
    And user validates CI Search is disabled
    Then user right clicks on primary CI and validates options "Refresh:Preferences:Primary Cause Search:Show" are available
    And user right clicks on secondary CI and validates options "Refresh:Preferences:Show" are available
    And user right clicks on primary CI and validates options "Make Primary:Set CTI:Impact:Detach:Create Work Order" are disabled
    And user right clicks on secondary CI and validates options "Make Primary:Set CTI:Impact:Detach:Create Work Order" are disabled
    When user clicks "Schedule" tab
    Then user validates fields under schedule tab are read only
    And user logsOut
    And user goes back to login page
    And user logs in with valid username "cm_adminaccess1_auto" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user selects search menu as "Open Search Form:Change Record/Project/Freeze"
    And user switches to window 2
    And user enters ticket previously created and searches
    Then ticket should be displayed
    When user clicks on Ack button
    Then user validates ticket status as "Analysis"
    When user clicks on Diagnosis tab
    And user clicks on CI search button
    Then user validates CI Search is disabled
    Then user right clicks on primary CI and validates options "Refresh:Preferences:Primary Cause Search:Show" are available
    And user right clicks on secondary CI and validates options "Refresh:Preferences:Show" are available
    And user right clicks on primary CI and validates options "Make Primary:Set CTI:Impact:Detach:Create Work Order" are disabled
    And user right clicks on secondary CI and validates options "Make Primary:Set CTI:Impact:Detach:Create Work Order" are disabled
    When user clicks "Schedule" tab
    Then user validates fields under schedule tab are read only
    When user changes status to "Approval Requested"
    And user clicks save button
    When user gets change ticket value
    And user logsOut
    And user goes back to login page
    And user logs in with valid username "ChangeInitiator/Builder1" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user selects search menu as "Open Search Form:Change Record/Project/Freeze"
    And user switches to window 3
    And user enters ticket previously created and searches
    Then ticket should be displayed
    When user clicks on Diagnosis tab
    And user clicks on CI search button
    Then user validates CI Search is disabled
    Then user right clicks on primary CI and validates options "Refresh:Preferences:Primary Cause Search:Show" are available
    And user right clicks on secondary CI and validates options "Refresh:Preferences:Show" are available
    And user right clicks on primary CI and validates options "Make Primary:Set CTI:Impact:Detach:Create Work Order" are disabled
    And user right clicks on secondary CI and validates options "Make Primary:Set CTI:Impact:Detach:Create Work Order" are disabled
    When user clicks "Schedule" tab
    Then user validates fields under schedule tab are read only
    When user gets change ticket value
    And user logsOut
    And user goes back to login page
    And user logs in with valid username "cm_adminaccess1_auto" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user selects search menu as "Open Search Form:Change Record/Project/Freeze"
    And user switches to window 3
    And user enters ticket previously created and searches
    Then ticket should be displayed
    When user clicks "Approve" tab
    And user clicks on view button
    When user clicks "Approve" tab
    And user clicks save button
    Then user validates ticket status as "Approved"
    When user gets change ticket value
    And user logsOut
    And user goes back to login page
    And user logs in with valid username "ChangeInitiator/Builder1" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user selects search menu as "Open Search Form:Change Record/Project/Freeze"
    And user switches to window 4
    And user enters ticket previously created and searches
    Then ticket should be displayed
    When user clicks on Diagnosis tab
    And user clicks on CI search button
    Then user validates CI Search is disabled
    Then user right clicks on primary CI and validates options "Refresh:Preferences:Primary Cause Search:Show" are available
    And user right clicks on secondary CI and validates options "Refresh:Preferences:Show" are available
    And user right clicks on primary CI and validates options "Make Primary:Set CTI:Impact:Detach:Create Work Order" are disabled
    And user right clicks on secondary CI and validates options "Make Primary:Set CTI:Impact:Detach:Create Work Order" are disabled
    When user clicks "Schedule" tab
    Then user validates fields under schedule tab are read only
    When user changes status to "Schedule Requested"
    And user clicks save button
    And user validates ticket status as "Scheduled"
    When user clicks on Diagnosis tab
    And user clicks on CI search button
    Then user validates CI Search is disabled
    Then user right clicks on primary CI and validates options "Refresh:Preferences:Primary Cause Search:Show" are available
    And user right clicks on secondary CI and validates options "Refresh:Preferences:Show" are available
    And user right clicks on primary CI and validates options "Make Primary:Set CTI:Impact:Detach:Create Work Order" are disabled
    And user right clicks on secondary CI and validates options "Make Primary:Set CTI:Impact:Detach:Create Work Order" are disabled
    When user clicks "Schedule" tab
    Then user validates fields under schedule tab are read only
    When user changes status to "Implementation"
    And user clicks save button
    Then user validates ticket status as "Implementation"
    When user clicks on Diagnosis tab
    And user clicks on CI search button
    Then user validates CI Search is disabled
    Then user right clicks on primary CI and validates options "Refresh:Preferences:Primary Cause Search:Show" are available
    And user right clicks on secondary CI and validates options "Refresh:Preferences:Show" are available
    And user right clicks on primary CI and validates options "Make Primary:Set CTI:Impact:Detach:Create Work Order" are disabled
    And user right clicks on secondary CI and validates options "Make Primary:Set CTI:Impact:Detach:Create Work Order" are disabled
    When user clicks "Schedule" tab
    Then user validates fields under schedule tab are read only
    When user changes status to "Completed"
    And user selects completed code as "Successful"
    And user selects actual impact as "No Impact"
    And user clicks on Diagnosis tab
    And user right clicks on CI "dummy" and selects "Impact:Update"
    Then user switches to frame
    And user enters impact from time as past on impact details bulk update window
    And user enters impact to time as past on impact details bulk update window
    Then user clicks confirm checkbox
    And user clicks on bulk update save button
    When user right clicks on CI "dummy" and clears impact for all CI's
    And user clicks save button
    Then user validates ticket status as "Completed"
    When user clicks on Diagnosis tab
    And user clicks on CI search button
    Then user validates CI Search is disabled
    Then user right clicks on primary CI and validates options "Refresh:Preferences:Primary Cause Search:Show" are available
    And user right clicks on secondary CI and validates options "Refresh:Preferences:Show" are available
    And user right clicks on primary CI and validates options "Make Primary:Set CTI:Impact:Detach:Create Work Order" are disabled
    And user right clicks on secondary CI and validates options "Make Primary:Set CTI:Impact:Detach:Create Work Order" are disabled
    When user clicks "Schedule" tab
    Then user validates fields under schedule tab are read only
    When user changes status to "Closed"
    And user enters review details as "Test Details"
    And user selects closure code as "Successful"
    And user clicks save button
    When user clicks on Diagnosis tab
    And user clicks on CI search button
    Then user validates CI Search is disabled
    Then user right clicks on primary CI and validates options "Refresh:Preferences:Primary Cause Search:Show" are available
    And user right clicks on secondary CI and validates options "Refresh:Preferences:Show" are available
    And user right clicks on primary CI and validates options "Make Primary:Set CTI:Impact:Detach:Create Work Order" are disabled
    And user right clicks on secondary CI and validates options "Make Primary:Set CTI:Impact:Detach:Create Work Order" are disabled
    When user clicks "Schedule" tab
    Then user validates fields under schedule tab are read only