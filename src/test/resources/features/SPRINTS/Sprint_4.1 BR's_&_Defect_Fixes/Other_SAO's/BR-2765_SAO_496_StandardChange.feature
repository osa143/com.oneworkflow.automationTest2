@SAO_496_Standard_Change
Feature: Linking of Incident Ticket to Standard Change during implementation window
  Scenario: Standard Change
    Given user is on the OneWorkflow login page
    When user logs in with valid username "Change_Automation_3" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on change record from agent console
    Then change record form should open in a new tab
    When user clicks on sweden checkbox under affected BU's
    And user selects request type as "Standard Change"
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
    And user enters impact duration as "5" minutes
    And user selects estimated impact as "No Impact"
    And user clicks on save button
    Then new tabs should be displayed including Diagnosis tab
    And user gets ticket value
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
    And user closes warning message
    And user clicks on close button on CI search window
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
    And user closes warning message
    And user clicks on close button on CI search window
    Then CI should be listed and displayed under the Diagnosis tab
    When user clicks on linked items tab
    Then user should see value for Change record listed with relationship type "caused"
    And user opens listed change record
    Then user waits for agreed end time +5 minutes
    And user validates ticket status as "Implementation"
    Then user clicks on linked items tab
    And user should see value for Trouble event listed with relationship type "Caused by"
    Then user validates that auto created OP container is present

