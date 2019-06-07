@SAO_496_Standard Change
Feature: Linking of Incident Ticket to Standard Change during implementation window
  Scenario: Standard Change
    Given user is on the OneWorkflow login page
    When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on change record from agent console
    Then change record page should be opened and Change form is displayed
    And user selects template as "All:IT:Other:Test Template [UAT] - Standard change"
    When user selects request type as "Standard Change"
    And user enters as "Change_Automation_1" in Change Builder field
    And user enters as "Test ticket no impact" in service and customer impact
    Then user enters start time as some minutes fast from current sweden time
    And user enters Request End time as some minutes fast from request start time
    And user enters impact duration as "5" minutes
    And user clicks on save button
    Then new tabs should be displayed including Diagnosis tab
    When user clicks on Diagnosis tab
    And user clicks on CI search button
    Then CI search tab should be opened
    When user clicks on clear button
    And user selects search for as "All CIs"
    And user enters "td722" in name field
    And user clicks on search button on CI search window
    And user selects a CI from list
    And user selects impact level as "Degradation of Service"
    And user clicks on relate CI
    And user closes warning message and clicks on close button
    Then CI should be listed and displayed under the Diagnosis tab
    When user clicks on Send button
    Then send button becomes inactive and Ack button should be active
    When user clicks on save button
    Then form should be saved
    When user clicks on linked items tab
    Then user selects target application first dropdown as "OS3-Operations"
    And user selects target application second dropdown as "Caused"
    And user clicks on link button
    Then trouble record form should appear in new tab
    And user selects Category as "Event"
    And user clicks on save button on the problem form
    Then trouble ticket should be created and status should be assigned
    When user clicks on Diagnosis tab
    And user clicks on CI search button
    Then user clicks on clear button
    And user selects search for as "All CIs"
    And user enters "td722" in name field
    And user clicks on search button on CI search window
    And user selects a CI from list
    And user selects impact level as "Degradation of Service"
    And user clicks on relate CI
    And user closes warning message and clicks on close button
    Then CI should be listed and displayed under the Diagnosis tab
    When user clicks on linked items tab
    Then user should see value for Change record listed with relationship type "caused"
    And user opens listed change record
    Then user waits for agreed end time +5 minutes
    And user validates ticket status as "Implementation"
    Then user clicks on linked items tab
    And user should see value for Trouble event listed with relationship type "Caused by"
    Then user validates that auto created OP container is present
    And user logsOut and closes the browser
