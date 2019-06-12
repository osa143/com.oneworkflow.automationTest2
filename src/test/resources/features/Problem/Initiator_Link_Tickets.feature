@Initiator_Link_Tickets
Feature: Verification of ability to link tickets
  Scenario: user should be able to link different types of tickets together

    Given user is on the OneWorkflow login page
    When user logs in with valid username "Tohall_copy" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create problem record
    And user switches to window 1
    Then problem record form should appear in new tab
    When user clicks on sweden checkbox under affected BU's
    When user enters "proactive investigation of Tohall_Copy" in Title field
    And user selects request type as Access Networks:RAN NSN 2G:3G:4G
    And user enters description as "UAT Test2 Linked items"
    And user selects impact type as moderate:limited
    And user selects urgency as low
    And user clicks on save button on the problem form
    Then ticket should be created and status should be assigned
    When user clicks on create trouble event
    And user switches to window 2
    Then trouble record form should appear in new tab
    When user clicks on sweden checkbox under affected BU's
    And user enters "A Problem Test" in Title field
    And user selects request type as "Customer" on trouble event page
    And user enters description as "A Customer Complaint"
    And user clicks on save button
    Then ticket should be created and status should be assigned
    When user clicks on create change record
    And user switches to window 3
    Then change record form should open in a new tab
    When user clicks on sweden checkbox under affected BU's
    And user selects template as "All:IT:Other:TEST TEMPLATE [UAT] - Normal Change"
    And user selects request type as "Normal Change"
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
    Then user clicks on schedule tab
    And user enters request start date as "00:00:00" one day in the future
    And user enters request end date as "02:00:00" one day in the future
    And user enters impact duration as "5" minutes
    And user selects estimated impact as "No Impact"
    And user clicks on save button
    Then user clicks on risk tab
    And user selects answer as "Impact to other systems/technologies are unclear"
    And user selects answer as "No"
    And user selects answer as "Tested succesfully, this is a pilot"
    And user selects answer as "Yes (outcome of the change can be instantly verified)"
    And user selects answer as "Yes"
    And user selects answer as "Simple"
    And user selects last answer as "No"
    And user clicks on save button
    Then user clicks on Diagnosis tab
    And user clicks on CI search button
    When user clicks on clear button
    And user selects search for as "All CIs"
    And  user enters "SE_CPE_FRECPE5" in name field
    And user clicks on search button on CI search window
    And user selects a CI from list
    And user selects impact level as "No Impact"
    And user clicks on relate CI
    And user closes warning message and clicks on close button
    Then CI should be listed and displayed under the Diagnosis tab
    When user clicks on Send button
    Then ticket should be created and status should be assigned
    And user gets ticket value
    And user switches to window 1
    When user clicks on linked items tab
    And user selects target application first dropdown as "OS3 Change"
    And user selects target application second dropdown as "Caused by"
    When user clicks on link button
    Then select target request window should open
    And user switches to frame
    And user enters ticket in ticket ID+ field
    And user clicks on CI search button
    And user clicks ticket checkbox
    And user clicks accept button
    When user clicks on linked items tab
    And user selects target application first dropdown as "OS3 - Operations"
    And user selects target application second dropdown as "Is related to"
    When user clicks on link button
    Then select target request window should open
    And user switches to frame
    And user enters ticket in ticket ID+ field
    And user clicks ticket checkbox
    And user clicks accept button
    Then trouble ticket should be in list of linked items
    And change ticket should be in list of linked items
    Then user logsOut and closes the browser


    # And fill the base page fields with data
    # |template|ALL:IT:Other:BlaBla:Bla/5G|
    # |sweden|true|