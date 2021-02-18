@BR_515 @OW_Incident

Feature: BR-515 - Hierarchic escalated tickets[s]

  Scenario: BR-515 - Hierarchic escalated tickets[s]

    Given user is on the OneWorkflow login page
    When user logs in with valid user and password
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create trouble event
    And user switches to window 1
    Then trouble record form should appear in new tab
    When user clicks on sweden checkbox under affected BU's
    And user enters "Test BR-515" in Title field in Trouble event
    And user selects request type as "Customer" on trouble event page
    And user enters description as "Test BR-515"
    And user selects assignment profile dropdown as "Control Center:Monitoring:CC IT"
    And user enters "CC IT" in assignee
    And user clicks on save button
    Then ticket should be created and status should be assigned
    And user validates hierarchic escalation level is read only
    When user selects impact as "Critical" on trouble event page
    And user selects importance as "Critical"
    And user clicks on priority check button
    #Then user validates hierarchic escalation level isnt read only
    And user waits 4 secs
    And user validates hierarchic escalation level as "Escalation manager (EM)"
    When user clicks "Work Orders" tab
    And user double clicks on work order and opens
    And user switches to window 2
    And user clicks on assignment under sections
    And user validates assigned profile as "Escalation Manager"
    And user clicks on Ack button
    Then user validates ticket status as "Work In Progress"
    When user changes status to "Cleared" on work order page
    And user selects completion code as "Success"
    And user clicks on "Schedule" tab
    And user enters schedule end as current date
    Then user clicks on save button
    And user validates ticket status as "Cleared"
    When user changes status to "Closed" on work order page
    And user clicks on save button
    And user validates ticket status as "Closed"
    And user switches to window 1
    Then user clicks on Ack button
    And user validates ticket status as "Work In Progress"
    When user changes status to "Cleared" on trouble event page
    And user selects fault position as "N/A:N/A" on trouble event page
    And user selects cause as "N/A:N/A:N/A" on trouble event page
    And user enters event end time as current time
    And user clicks save button
    Then user validates ticket status as "Cleared"
    When user changes status to "Closed" on trouble event page
    And user selects action dropdown as "N/A:N/A" on trouble event page
    And user enters closure info as "Testing"
    And user clicks save button
    Then user validates ticket status as "Closed"
    

    