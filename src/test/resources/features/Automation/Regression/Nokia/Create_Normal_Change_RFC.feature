@Create_Normal_Change_RFC1
# Tags: optional

Feature: Create Normal Change RFC

  Scenario: Create Normal Change RFC

    Given user is on the OneWorkflow login page
    When user logs in with valid user and password
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create change record
    Then user switches to window 1
    When user selects request type as "Normal Change"
    And user selects template as "All:IT:Other:TEST TEMPLATE [UAT] - Normal Change"
    Then user enters "Testing" in the change builder field
    And user enters as "Testing" in service and customer impact
    And user enters start time as 24 hours fast from current sweden time in "MM/dd/yyyy HH:mm:ss a" format
    And user enters end time as 28 hours fast from current sweden time in "MM/dd/yyyy HH:mm:ss a" format
    And user enters impact duration as "45" minutes
    And user selects estimated impact dropdown as "Degradation of Service"
    Then user clicks on save button
    Then user validates availability of tabs "Timeline:Diagnosis:Risk:Schedule:Interested Parties:Approval:Notifications:Linked Items:Work Orders:Service Level:Related Project:Service Info:Telenor" on change record page
    When user clicks on Risk tab
    And user gets current risk score value
    When user answers all risk questions as below
    And user selects answer as "Impact to other systems/technologies are unclear"
    And user selects answer as "No"
    And user selects answer as "Tested successfully, this is a pilot"
    And user selects answer as "Yes (outcome of the change can be instantly verified)"
    And user selects answer as "Yes"
    And user selects answer as "Simple"
    And user selects last answer as "Yes"
    Then user validates risk score gets updated
    When user clicks on Send button
    Then an error message should appear: "Please select at least one country of impact for this change. (ARERR 10000)"
    When user clicks on sweden checkbox under affected BU's
    Then user clicks on Send button
    Then error message should display as "You must select at least one CI in the Diagnosis Tab (ARERR 10000)" on change record page
    And user adds CI "DK_SYNC_ALG1_ToP" to change ticket with impact level "Loss of Service"
    When user clicks on Send button
    Then user validates ticket status as "Assigned"
    When user clicks on Ack button
    And user waits 3 secs
    Then user validates ticket status as "Analysis"
    When user changes status to "Approval Requested"
    Then user clicks save button
    And user waits 30 secs
    When user clicks on ticket refresh button
    And user clicks "Telenor" tab
    Then user validates Nokia ticket ID is present
    