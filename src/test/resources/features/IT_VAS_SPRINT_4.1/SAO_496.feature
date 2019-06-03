@SAO_496
Feature: Linking of Incident Ticket to Normal Change during implementation window

  Scenario: Normal Change

    Given User is on the OneWorkflow login page
    When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on change record from agent console
    Then change record page should be opened and Change form is displayed
    And User selects template as All:Mobile:RAN-Externals:RAN connectivity
    When User selects request type as normal change
    And User enters as "Change_Automation_1" in Change Builder field
    Then User enters start time as some minutes fast from current sweden time
    And User enters Request End time as some minutes fast from request start time
    And User enters impact duration as some minutes
    And user clicks on save button
    Then new tabs should be displayed including Diagnosis tab
    When User clicks on Diagnosis tab
    And user clicks on CI search button
    Then CI search tab should be opened
    When user clicks on clear button and selects search for all cis
    And  user enters "One WorkFlow system test" in name field
    And  user clicks on search button on CI search window
    And user selects a CI from list
    And user Choose impact level as degradation of service
    And  user clicks on relate CI
    And user closes warning message and clicks on close button
    Then CI should be listed and displayed under the Diagnosis tab
    When User clicks on Send button
    Then send button becomes inactive and Ack button should be active
    When user clicks on save button
    Then form should be saved
    Then User changes status to Analysis
    And User changes status to Approval Requested
    And User changes status to Schedule Requested
    And User changes status to Implementation
    And User validates ticket status
    Then User creates Trouble ticket from Change Request
    Then New tab should be opened
    Then User fills value for request type
    And User presses the save button
    And User Validates change value in timeline
    Then User waits for implementation to finish
    And Verify a new OP ticket has been created
    Then Verify new OP has other OP in container
    And   user logsOut and closes the browser

