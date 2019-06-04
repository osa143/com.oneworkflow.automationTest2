@Initiator_Link_Tickets
Feature: Verification of ability to link tickets
  Scenario: user should be able to link different types of tickets together

    Given user is on the OneWorkflow login page
    When user logs in with valid username "Tohall_copy" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create problem record
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
    Then Trouble record form should appear in new tab
    And user switches to window 2
    When user clicks on sweden checkbox under affected BU's
    And user enters "A Problem Test" in Title field
    And user selects request type as Customer
    And user enters description as "A Customer Complaint"
    And user clicks on save button
    Then trouble ticket should be created and status should be assigned
    When user clicks on create change record
    Then Change record form should open in a new tab
    And user switches to window 3
    When user clicks on sweden checkbox under affected BU's
    And user selects template as All:IT:Other:TEST TEMPLATE[UAT]-Normal Change
    #And user selects request category as cable splicing
    #And user enters description as "Correcting error"
    #And user enters reason field as "none"
    #And user selects priority as major
    #And user enters "Problem initiator" in the change builder field
    #And user enters "New implementation" in the implementation field
    #And user enters "Yes" in the test plan field
    #And user enters "Not possible" in the rollback field
    #And user enters "Comm plan" in the communication plan field
    #And user enters "Not possible" in the ver of functionality field
    #And user enters "No Risk" in the risk description field
    And user enters "Test Ticket No Impact" in the service and customer impact field
    And user enters request start date as "00:00:00" one day in the future
    And user enters request end date as "02:00:00" one day in the future
    And user enters impact duration as "5" minutes
    And user selects estimated impact dropdown as no impact
    And user clicks on save button
    Then user clicks on risk tab
    And user selects Impact to other systems/technologies are unclear under change impact to other systems dropdown
    And user selects No under Have resources and preparation been adequately secured for the change dropdown
    And user selects Tested successfully, this is a pilot under the tested and earlier implementation of similar changes
    And user selects Yes (outcome of the change can be instantly verified under is verification under is verification instant dropdown
    And user selects Yes under is rollback possible dropdown
    And user selects Simple under what is the complexity of this change dropdown
    And user selects No under does this change need CAB approval dropdown
    And user clicks on save button
    Then User clicks on Diagnosis tab
    And user clicks on CI search button
    When user clicks on clear button and selects search for all cis
    And  user enters "SE_CPE_FRECPE5" in name field
    And user clicks on search button
    And user selects a SE_CPE_FRECPE5 from list
    And user Choose impact level as no impact
    And  user clicks on relate CI
    And user closes warning message and clicks on close button
    Then CI should be listed and displayed under the Diagnosis tab
    When User clicks on Send button
    Then ticket should be created and status should be assigned
    And user gets ticket value
    When user switches to window "Linked Tab"
    Then user clicks on linked items tab
    And user selects OS3 change under target application dropdown
    And user selects caused by under target application dropdown 2
    When user clicks on link button
    Then select target request window should open
    And user enters change ticket in ticket ID+ field
    And user clicks ticket checkbox
    And user clicks accept button
    Then user switches to window "Trouble Form"
    And user gets ticket value
    When user switches to window "Problem Form"
    And user selects OS3 operations under target application dropdown
    And user selects is related to under target application dropdown 2
    When user clicks on link button
    Then select target request window should open
    And user switches to frame
    And user enters trouble ticket in ticket ID+ field
    And user clicks ticket checkbox
    And user clicks accept button
    Then trouble ticket should be in list of linked items
    And Change ticket should be in list of linked items
    Then user logsOut and closes the browser