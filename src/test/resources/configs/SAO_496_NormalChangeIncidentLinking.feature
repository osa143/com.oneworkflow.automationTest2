@regression @SAO_496
Feature: Linking of Incident Ticket to Normal Change during implementation window

  Scenario: Normal Change

    Given: User is logged into Oneworkflow
    When: user creates new change record
    Then: New tab should be opened and Change form is displayed
    When : User selects request type as normal change
    And: User selects template as All/Mobile/RAN-Externals/RAN connectivity
    And: User enters as "Change_Automation_1" in Change Builder field
    Then: User Selects request start time 5 minutes fast from current sweden time
    And: User selects Request end time 5 minutes fast from request start time
    And: User fills value for impact duration as 5 minutes
    And: User clicks on save button
    Then:new tabs should be displayed including Diagnosis tab
    When: User clicks on Diagnosis tab
    And user clicks on CI search button
    And: User clicks on Send button
    And: User validates inactivity of Send button and activity of ACK button
    Then: User changes status to Analysis
    And: User changes status to Approval Requested
    And: User changes status to Schedule Requested
    And: User changes status to Implementation
    And: User validates ticket status
    Then: User creates Trouble ticket from Change Request
    Then: New tab should be opened
    Then: User fills value for request type
    And: User presses the save button
    And: User Validates change value in timeline
    Then: User waits for implementation to finish
    And: Verify a new OP ticket has been created
    Then: Verify new OP has other OP in container
    And : User Logs out

