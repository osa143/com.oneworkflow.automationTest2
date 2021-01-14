@Permissions_ChangeInitiator_External

Feature: Permissions - ChangeInitiator-External [aR]

  Scenario: Permissions - ChangeInitiator-External [aR]

    Given user is on the OneWorkflow login page
    When user logs in with valid username "ChangeInitiator/Builder1" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create change record
    Then user switches to window 1
    When user selects request type as "Standard Change"
    And user selects template as "All:IT:Carrier:Telia Carrier UAT Changes"
    And user selects template as "(clear)"
    And user selects request type as "Normal Change"
    When user enters "_" in the change builder field
    And user enters as "Test" in service and customer impact
    And user enters request start time 24 hours ahead of current date
    And user enters request end time 48 hours ahead of current date
    And user enters impact duration as "5" minutes
    Then user enters description as "Testing"
    And user clicks on save button
    And user gets ticket value
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
    When user clicks on "Risk" tab
    And user gets current risk score value
    And user answers all risk questions as below
    And user selects answer as "Impact to other systems/technologies are unclear"
    And user selects answer as "No"
    And user selects answer as "Tested successfully, this is a pilot"
    And user selects answer as "Yes (outcome of the change can be instantly verified)"
    And user selects answer as "Yes"
    And user selects answer as "Simple"
    And user selects last answer as "Yes"
    Then user validates risk score gets updated
    When user clicks on Send button
    Then user validates ticket status as "Assigned"
    When user clicks on Diagnosis tab
#   Then user validates CI Search is disabled
    And user right clicks on primary CI and validates options "Refresh:Preferences:Show" are available
    And user right clicks on secondary CI and validates options "Refresh:Preferences:Show" are available
#   Then user validates nothing happens when clicking on all read only options
    When user clicks on "Schedule" tab
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
    And user right clicks on primary CI and validates options "Refresh:Preferences:Show" are available
    And user right clicks on secondary CI and validates options "Refresh:Preferences:Show" are available
    When user clicks on "Schedule" tab
    Then user validates fields under schedule tab are read only
    When user changes status to "Approval Requested"
    And user clicks save button
    And user logsOut
    And user goes back to login page
    And user logs in with valid username "ChangeInitiator/Builder1" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user selects search menu as "Open Search Form:Change Record/Project/Freeze"
    And user switches to window 3
    And user enters ticket previously created and searches
    When user clicks on Diagnosis tab
    And user right clicks on primary CI and validates options "Refresh:Preferences:Show" are available
    And user right clicks on secondary CI and validates options "Refresh:Preferences:Show" are available
    When user clicks on "Schedule" tab
    Then user validates fields under schedule tab are read only
    And user logsOut
    And user goes back to login page
    And user logs in with valid username "cm_adminaccess1_auto" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user selects search menu as "Open Search Form:Change Record/Project/Freeze"
    And user switches to window 3
    And user enters ticket previously created and searches
    Then user changes status to "Approval Requested"
    And user clicks on save button
    When user clicks on "Approval" tab
    And user clicks on request that's "Pending Approval"
    Then user selects CAB approval
    And user clicks on view button
    Then user switches to frame
    And user enters "Change can be approved right away" in comments field
    And user clicks on approve button
    And user clicks on ticket refresh button
    Then user validates ticket status as "Approved"
    And user logsOut
    And user goes back to login page
    And user logs in with valid username "ChangeInitiator/Builder1" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user selects search menu as "Open Search Form:Change Record/Project/Freeze"
    And user switches to window 4
    And user enters ticket previously created and searches
    When user clicks on Diagnosis tab
    And user right clicks on primary CI and validates options "Refresh:Preferences:Show" are available
    And user right clicks on secondary CI and validates options "Refresh:Preferences:Show" are available
    When user clicks on "Schedule" tab
    Then user validates fields under schedule tab are read only
    When user changes status to "Schedule Requested"
    And user clicks save button
    And user validates ticket status as "Scheduled"
    When user clicks on Diagnosis tab
    And user clicks on CI search button
    Then user validates CI Search is disabled
    And user right clicks on primary CI and validates options "Refresh:Preferences:Show" are available
    And user right clicks on secondary CI and validates options "Refresh:Preferences:Show" are available
    When user clicks on "Schedule" tab
    Then user validates fields under schedule tab are read only
    When user changes status to "Implementation"
    And user clicks save button
    Then user validates ticket status as "Implementation"
    When user clicks on Diagnosis tab
    And user right clicks on primary CI and validates options "Refresh:Preferences:Show" are available
    And user right clicks on secondary CI and validates options "Refresh:Preferences:Show" are available
    When user clicks on "Schedule" tab
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
    And user right clicks on primary CI and validates options "Refresh:Preferences:Show" are available
    And user right clicks on secondary CI and validates options "Refresh:Preferences:Show" are available
    When user clicks on "Schedule" tab
    Then user validates fields under schedule tab are read only
    When user changes status to "Closed"
    And user enters review details as "Test Details"
    And user selects closure code as "Successful"
    And user clicks save button
    When user clicks on Diagnosis tab
    And user right clicks on primary CI and validates options "Refresh:Preferences:Show" are available
    And user right clicks on secondary CI and validates options "Refresh:Preferences:Show" are available
    When user clicks on "Schedule" tab
    Then user validates fields under schedule tab are read only








