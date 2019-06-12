@Pending_Status
Feature: User is able to change status to pending

  Scenario: User logs into One workflow, creates a problem ticket, changes status to pending then checks ticket status

    Given user is on the OneWorkflow login page
    When user logs in with valid username "frvi96_auto" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create problem record
    Then problem record form should appear in new tab
    When user clicks on sweden checkbox under affected BU's
    When user enters "proactive investigation of: frvi96_auto" in Title field
    And user selects request type as "Access Networks:RAN Optimization"
    And user enters description as "UAT Test6"
    And user selects impact type as moderate:limited
    And user selects urgency as low
    And user clicks on save button on the problem form
    Then ticket should be created and status should be assigned
    Then user clicks on Ack button
    And problem ticket status should be under investigation
    And change should also be reflected in the timeline as "STATUS MODIFIED.  Status has changed from Assigned to Under Investigation ."
    Then user enters "There is no known work around available" in the work around field
    When user changes status to "pending"
    And user clicks on save button on the problem form
    Then an error message "Required field (without a default) not specified : To Date (ARERR 9424) " should appear with red boarder around to date field
    And an error message "Required field (without a default) not specified : Reason (ARERR 9424) " should appear with red boarder around reason field
    Then user enters date value as a week in the future
    And user selects incident ongoing from the reason dropdown
    And user clicks on save button on the problem form
    Then user validates ticket status as "Pending"
    And change should also be reflected in the timeline as "STATUS MODIFIED.  Status has changed from Under Investigation to Pending ."
    When user clicks on release button
    Then problem ticket status should be under investigation
    And change should also be reflected in the timeline as "STATUS MODIFIED.  Status has changed from Pending to Under Investigation ."
    When user changes status to "Pending"
    And user enters date value as 15 minutes in the future
    And user selects incident ongoing from the reason dropdown
    Then user validates ticket status as "Pending"
    And change should also be reflected in the timeline as "STATUS MODIFIED.  Status has changed from Under Investigation to Pending ."
    Then user waits for 30 minutes
    And problem ticket status should be under investigation
    And change should also be reflected in the timeline as "STATUS MODIFIED.  Status has changed from Pending to Under Investigation ."
    Then user logsOut and closes the browser

