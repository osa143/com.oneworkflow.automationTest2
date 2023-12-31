@496_Normal_Change
Feature: Linking of Incident Ticket to Normal Change during implementation window

  Scenario: Normal Change

    Given user is on the OneWorkflow login page
    When user logs in with valid username "Change_Automation_1" and password as "Telia@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on change record from agent console
    And user switches to window 1
    Then change record form should open in a new tab
    When user clicks on sweden checkbox under affected BU's
    And user selects request type as "Normal Change"
    And user selects template as "All:Mobile:Billing:Nobill - Customer refund (SE)"
    And user selects title as "IT:Mobile:Billing" on Change record page
    And user selects request category as "Cable splicing" on change record page
    And user enters description as "Correcting error"
    And user enters reason field as "none"
    And user selects priority as "Major"
    And user enters "Problem initiator" in the change builder field
    And user enters "New implementation" in the implementation field
    And user enters "Yes" in the test plan field
    And user enters "Not possible" in the rollback field
    And user enters "Comm plan" in the communication plan field
    And user enters "Not possible" in the ver of functionality field
    And user enters "No Risk" in the risk description field
    Then user clicks on "Schedule" tab
    And user enters as "Test Service and customer impact" in service and customer impact
    And user enters start time as some minutes fast from current sweden time
   And user enters Request End time as some minutes fast from request start time
    And user enters impact duration as "4" minutes
    And user selects estimated impact as "No Impact"
    And user clicks on save button
    Then new tabs should be displayed including Diagnosis tab
    And user gets ticket value
    When user clicks on Diagnosis tab
    And user clicks on CI search button
    And user switches to frame
    When user clicks on clear button
    And user selects search for as "All CIs"
    And user enters "One WorkFlow system test" in name field
    And user clicks on search button on CI search window
    And user selects a CI from list
    And user selects impact level as "Degradation of Service"
    And user clicks on relate CI
    And user closes warning message
    And user clicks on close button on CI search window
    Then CI should be listed and displayed under the Diagnosis tab
    When user clicks on risk tab
    When user answers all risk questions as below
    And user selects answer as "Impact to other systems/technologies are unclear"
    And user selects answer as "No"
    And user selects answer as "Tested successfully, this is a pilot"
    And user selects answer as "Yes (outcome of the change can be instantly verified)"
    And user selects answer as "Yes"
    And user selects answer as "Simple"
    And user selects last answer as "No"
    When user clicks on Send button
    And user waits
    Then send button becomes inactive and Ack button should be active
    When user clicks on save button
    Then form should be saved
    Then user changes status to "Analysis"
    And user clicks on save button
    And user changes status to "Approval Requested"
    And user clicks on save button
    And user logsOut
    And user goes back to login page
    Given user is on the OneWorkflow login page
    When user logs in with valid username "ChangeManager1_Automation" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    And user selects search menu as "Open Search Form:Change Record/Project/Freeze"
    And user switches to window 2
    And user enters ticket previously created
    And user clicks Search on ticket search
    When user clicks on "Approval" tab
    And user clicks on request thats pending approval
    And user clicks on view button
    Then user switches to frame
    And user enters "Change can be approved right away" in comments field
    And user clicks on approve button
    Then user switches to window 1
    And user changes status to "Schedule Requested"
    And user clicks on save button
    And user changes status to "Implementation"
    And user clicks on save button
    And user validates ticket status
    Then user clicks on create trouble event
    Then trouble record form should appear in new tab
    When user clicks on sweden checkbox under affected BU's
    And user enters "Test creation of container" in Title field in Trouble event
    And user enters description as "Test creation of container"
    And user selects request type as "Customer" on trouble event page
    And user clicks on save button
    And change should also be reflected in the timeline as ""
    Then user waits for implementation to finish
    #After implementation, new op should be created and other OP ticket should show up in container of original OP ticket
    And verify a new OP ticket has been created
    Then verify new OP has other OP in container

