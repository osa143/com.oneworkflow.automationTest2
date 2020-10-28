@SAO_5994
#SAO-5994-OP-000002126347 - Cannot add all fields to email template

Feature: SAO-5994-OP-000002126347 - Cannot add all fields to email template

  Scenario: SAO-5994-OP-000002126347 - Cannot add all fields to email template

    Given user is on the OneWorkflow login page
    And user logs in with valid user and password
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create change record
    And user switches to window 1
    Then change record form should open in a new tab
    When user selects request type as "Standard Change"
    Then user selects template as "All:IT:Other:TEST TEMPLATE [UAT] - Standard Change"
    And user enters as "Change_Automation_3" in Change Builder field
    Then user enters request start time 24 hours ahead of current date
    And user enters request end time 28 hours ahead of current date
    Then user selects estimated impact as "No Impact"
    And user enters impact duration as "3" hours
    And user clicks save button
    Then user clicks on "Diagnosis" tab
    And user waits 5 secs
    And user adds CI "One Workflow" to change ticket with impact level "No Impact"
    And CI should be listed and displayed under the Diagnosis tab
    When user clicks on Send button
    Then user validates ticket status as "Assigned"
    When user clicks on Ack button
   # Then user validates ticket status as "Analysis"
    And user waits 5 secs
    And user changes status to "Approval Requested"
    Then user clicks save button
    #And user validates ticket status as "Approved"
    Then user changes status to "Schedule Requested"
    And user clicks save button
    Then user validates ticket status as "Scheduled"
    When user changes status to "Implementation"
    Then user clicks on schedule tab
    And user enters event end time as current time
    Then user clicks save button
    And user clicks on "Email > Outgoing" under actions
    Then user switches to frame
    And user selects unique name as "CM Maintenance Work"
    Then user selects HTML radio button
    And user clicks on preview button
    And user switches to frame 2
    Then user validates all fields entered has populated info
