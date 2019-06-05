@SAO_496
Feature: Linking of Incident Ticket to Normal Change during implementation window

  Scenario: Normal Change

    Given user is on the OneWorkflow login page
    When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on change record from agent console
    Then change record page should be opened and Change form is displayed
    And user selects template as All:Mobile:RAN-Externals:RAN connectivity
    When user selects request type as normal change
    And user enters as "Change_Automation_1" in Change Builder field
    Then user enters start time as some minutes fast from current sweden time
    And user enters Request End time as some minutes fast from request start time
    And user enters impact duration as "5" minutes
    And user clicks on save button
    Then new tabs should be displayed including Diagnosis tab
    When user clicks on Diagnosis tab
    And user clicks on CI search button
    Then CI search tab should be opened
    When user clicks on clear button and selects search for all cis
    And user enters "One WorkFlow system test" in name field
    And user clicks on search button on CI search window
    And user selects a CI from list
    And user Choose impact level as degradation of service
    And user clicks on relate CI
    And user closes warning message and clicks on close button
    Then CI should be listed and displayed under the Diagnosis tab
    When user clicks on Send button
    Then send button becomes inactive and Ack button should be active
    When user clicks on save button
    Then form should be saved
    Then user changes status to Analysis
    And user changes status to Approval Requested
    And user changes status to Schedule Requested
    And user changes status to Implementation
    And user validates ticket status
    Then user creates Trouble ticket from Change Request
    Then new tab should be opened
    Then user fills value for request type
    And user presses the save button
    And user Validates change value in timeline
    Then user waits for implementation to finish
    And verify a new OP ticket has been created
    Then verify new OP has other OP in container
    And user logsOut and closes the browser
