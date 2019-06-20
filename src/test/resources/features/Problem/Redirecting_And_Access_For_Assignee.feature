@Assignee
Feature: Changing of assignee for problem ticket

  Scenario: User is able to change assignment/assignee on problem ticket

    Given user is on the OneWorkflow login page
    When user logs in with valid username "Tohall_copy" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create problem record
    Then problem record form should appear in new tab
    When user clicks on sweden checkbox under affected BU's
    When user enters "proactive investigation of Tohall_Copy" in Title field
    And user selects request type as Access Networks:RAN NSN 2G:3G:4G
    And user enters description as "UAT Test4"
    And user selects impact type as moderate:limited
    And user selects urgency as low
    And user clicks on save button on the problem form
    Then ticket should be created and status should be assigned
    And user gets ticket value
    Then user logsOut
    And user goes back to login page
    When user logs in with valid username "frvi96_auto" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    And user clicks on search and selects open search forms and problem record
    And user switches to window 2
    And user enters Problem Ticket
    And user clicks Search on ticket search
    When user clicks on Ack button
    Then problem ticket status should be under investigation
    When user clicks on assignment under sections
    Then user selects Problem management: Problem initiator under the assigned profile dropdown
    And user selects Tohall copy under assignee profile dropdown
    And user clicks on save button on the problem form
    And change should also be reflected in the timeline as "Request has been reassigned from Assignee user "mina09" to  Assignee  user "Tohall_copy". "
    Then user selects problem management:Problem manager
    And user selects frvi96_auto under the assignee profile
    And user clicks on save button on the problem form
    And change should also be reflected in the timeline as "Request has been reassigned from Assignee user "Tohall_copy" to  Assignee  user "frvi96_auto". "
    And user selects request type as "Access Networks:RAN Optimization"
    And user clicks on save button
    Then problem ticket status should be assigned
    And user "frvi96_auto" is listed as the assigned profile
    And change should also be reflected in the timeline as "Ticket Request Type has changed from "Access Networks | RAN NSN 2G/3G/4G" to "Access Networks | RAN Optimization". "
    And user gets ticket value
    Then user logsOut
    When user logs in with valid username "frvi96_auto" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    And user clicks on search and selects open search forms and problem record
    Then problem record form should appear in new tab
    And user enters Problem Ticket
    And user clicks Search on ticket search
    And ticket should be displayed
    Then user changes ticket status to under investigation
    And problem ticket status should be under investigation
    And change should also be reflected in the timeline as "STATUS MODIFIED.  Status has changed from Assigned to Under Investigation. "
    Then user clicks on interested parties tab
    And user clicks on Interested parties Add Button
    And user switches to frame
    Then user selects additional access under type dropdown
    And user clicks on user checkbox
    And user enters "Thgi00" under the login name+ field
    And user "Tomas Gillgren" should be listed
    Then user is able to highlight/select "Tomas Gillgren"
    And user clicks on read-write checkbox under access
    And user clicks on yes checkbox under auto notify
    And user clicks on save button under interested parties frame
    Then user validates "Tomas Gillgren" is listed as an interested party
    And change should also be reflected in the timeline as "The User Thomas Gillgren has been added as interested parties."
    Then user clicks on additional info tab
    And user enters "Thgi00" in the analysis team member 1 field
    And user clicks on save button on the problem form
    And user validates "Thgi00" is listed under analysis team member 1 field
    When user clicks on assignment under sections
    Then user selects Problem management: Problem initiator under the assigned profile dropdown
    And user selects mina09_auto under assignee profile dropdown
    And user clicks on save button on the problem form
    And change should also be reflected in the timeline as "Request has been reassigned from Assignee user "mina09" to  Assignee  user "Tohall_copy"."
    Then user logsOut
    And user logs in with valid username "Tohall_copy" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    And user clicks on search and selects open search forms and problem record
    Then problem record form should appear in new tab
    And user enters Problem Ticket
    And user clicks Search on ticket search
    And problem ticket should be visible
    Then user clicks on interested parties tab
    And user highlights/selects user "Thgi00"
    And clicks on remove button
    Then user "Thgi00" shouldn't be listed anymore
    Then user selects investigation complete under the status dropdown
    And user clicks on save button on the problem form
    Then an error message "Required field (without a default) not specified : Root Cause Details (ARERR 9424)" should appear with red boarder around Route cause details
    And an error message "Required field (without a default) not specified : Root Cause Code (ARERR 9424)" should appear with red boarder around Route cause code
    And an error message "Required field (without a default) not specified : RC found date (ARERR 9424)" should appear with red boarder around RC found date
    Then user selects Technical:HW Error under route cause dropdown
    And user enters route cause details as "Bad management"
    And user enters RC found date as current date
    Then user clicks on save button on the problem form
    And problem ticket status should be investigation complete
    And change should also be reflected in the timeline as "STATUS MODIFIED.  Status has changed from Under Investigation to Investigation Complete. "
