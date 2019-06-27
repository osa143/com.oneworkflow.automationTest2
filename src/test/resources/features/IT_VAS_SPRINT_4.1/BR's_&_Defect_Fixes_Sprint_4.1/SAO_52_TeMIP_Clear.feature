@SAO_52_TeMIP_Clear
#UAT execution due to B2B needed
Feature: Closing of incident ticket that has linked WO

  Scenario: User is able to close an incident after closing a WO linked to it

    Given user is on the OneWorkflow login page
    When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user selects search menu as "Open Search Form:Trouble Event"
    Then trouble record form should appear in new tab
    And user switches to window 1
    And user enters ticket id as "OP-000000898604"
    Then trouble ticket should appear related to TeMIP
    When user clicks on work order tab
    And user clicks on create from ticket
    When user switches to window 2
    And user validates ticket status as "New"
    And user validates parent ticket id availability
    Then user clicks on save button on the problem form
    And user validates ticket status as "New"
    And user validates child ticket details are same as parent ticket
    Then user clicks on save button on the problem form
    When user switches to window 1
    And clicks on ticket refresh button
    Then user clicks on work order tab
    And user validates child WorkOrder availability
    And user validates WorkOrder status as "OPEN"
    When user switches to window 2
    And user clicks on apply B2B button
    Then user should see assigned profile as "B2B"
    And user should see B2B dispatch tab
    Then user clicks on Diagnosis tab
    And CI should be listed and displayed under the Diagnosis tab
    Then user selects SLA class as "118hv"
    And user validates estimated ready time is updated
    When user clicks on B2B dispatch tab
    And user enters header value as "Test"
    And user enters message value as "Automated Test"
    And user clicks on save button on the problem form
    When user clicks on B2B dispatch tab
    Then user should see assigned update within B2B outbound events
    When user clicks on inbound events refresh button
    Then user should see inbound acknowledgment event
    And user should see WFM ticket ID
    And user should see dispatch status as "submitted"
    Then user changes status to "Work in Progress"
    And user clicks on save button on the problem form
    And user validates ticket status as "Work in Progress"
    Then user changes status to "Cleared"
    And user validates ticket status as "Cleared"
    Then user changes status to "Closed"
    And user validates ticket status as "Closed"
    Then user switches to window 1
    And clicks on ticket refresh button
    And user validates WorkOrder status as "CLOSED"
    Then user clicks on alarms tab
    When user highlights all shown alarms
    And user clicks on terminate
    And user clicks refresh button on alarm tab
    And user validates alarm status is cleared
    Then user changes status to "Cleared"
    And user clicks on save button on the problem form
    Then user changes status to "Closed"
    And user clicks on save button on the problem form
    Then user validates ticket status as "Closed"
