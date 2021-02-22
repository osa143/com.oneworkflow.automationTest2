@Call_Copy_to_New_Verification

Feature: Call Copy to New (Verification) [aRr]

  Scenario: Call Copy to New (Verification) [aRr]

    Given user is on the OneWorkflow login page
    When user logs in with valid username "cm_adminaccess1_auto" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create change record
    And user switches to window 1
    And user enters expected alarms as "Test Expected Alarms"
    And user enters project code as "Test Project Code"
    And user creates change ticket with following details
      |RequestType  |Title            |RequestCategory|Description     |Reason|Priority|ChangeBuilder        |Implementation    |TestPlan|RollBack    |CommPlan|VerOfFunctionality|Risk   |ServiceCustomerImpact|ImpactDuration|EstimatedImpact|
      |Normal Change|IT:Mobile:Billing|Cable splicing |Correcting error|none  |Major   |Closure from analysis|New implementation|Yes     |Not possible|CommPlan|Not possible      |No Risk|Test ticket no impact|5             |No Impact      |
    Then user adds CI "One Workflow" to change ticket with impact level "No Impact"
    Then user gets change ticket value
    When user clicks on CTI details under sections
    And user clicks on location under sections
    And user clicks on owner under sections
    And user clicks on assignment under sections
    And user clicks on On Hold under sections
    And user clicks on vendor under sections
    And user clicks attachments under sections
    Then user clicks on closure under sections
    When user clicks copy to new button
    Then user switches to window 2
    And user validates new CR ticket details are same as original CR ticket details
    When user clicks on CTI details under sections
    And user clicks on location under sections
    And user clicks on owner under sections
    And user clicks on assignment under sections
    And user clicks on On Hold under sections
    And user clicks on vendor under sections
    And user clicks attachments under sections
    Then user clicks on closure under sections
    Then user validates new change fields are null
    When user enters request start time 24 hours ahead of current date
    And user enters request end time 192 hours ahead of current date
    And user enters impact duration as "1" Days
    And user enters impact duration as "1" hours
    And user enters impact duration as "1" minutes
    And user enters impact duration as "1" seconds
    And user selects estimated impact as "No Impact"
    Then user clicks save button
    When user clicks on Diagnosis tab
    And user validates primary ci as "One Workflow"
    And user validates Change CI "One Workflow" impact type is "Planned" in row 1
    And user validates Change CI "One Workflow" impact category is "Actual" in row 1
    And user validates Change CI "One Workflow" impact level is "No Impact" in row 1
    And user validates Change CI "One Workflow" impact status is "Pending" in row 1
    And user validates Change impact from time is same as request start time
    And user validates Change impact to time is same as request end time
    Then user clicks on "Schedule" tab
    And user validates impact duration days as "1"
    And user validates impact duration hours as "1"
    And user validates impact duration minutes as "1"
    And user validates impact duration seconds as "1"
    When user adds CI "dummy" to change ticket with impact level "Degradation of Service"
    Then CI should be listed and displayed under the Diagnosis tab
    When user clicks on timeline tab
    Then change should also be reflected in the timeline as "Copy To New from Change Request" on row 4
    When user clicks on risk tab
    Then user validates risk questions are not answered
    When user clicks on "Interested Parties" tab
    Then user validates "Adminaccess1" is listed as an interested party
    When user clicks on "Approval" tab
    Then user validates version column has no entries
    When user clicks on "Notifications" tab
    And user clicks on "Sent" tab
    Then user validates there are no sent notifications
    When user clicks on linked items tab
    Then user validates Linked ID column as empty
    When user clicks on "Work Orders" tab
    Then user validates Work Order column as empty
    When user clicks on "Service Level" tab
    And user validates SLA Title column as empty
    When user clicks on "Related Project" tab
    Then user validates Change Project ID column as empty
    When user clicks on "Service Info" tab
    Then user validates Channel column as empty
    When user clicks on "Telenor" tab
    Then user validates ExternalTicketId Field as empty
