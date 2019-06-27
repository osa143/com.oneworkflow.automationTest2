@Assignee
Feature: Changing of assignee for problem ticket

  Scenario: User is able to change assignment/assignee on problem ticket

    Given user is on the OneWorkflow login page
    When user logs in with valid username "Tohall_copy" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create problem record
    And user switches to window 1
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
    When user logs in with valid username "mina09_auto" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    And user clicks on search and selects open search forms and problem record
    And user switches to window 2
    And user enters Problem Ticket
    And user clicks Search on ticket search
    When user clicks on Ack button
    Then problem ticket status should be under investigation
    When user clicks on assignment under sections
    Then user selects assigned profile dropdown as "Problem Management:Problem Initiator"
    And user selects assignee as "Tohall_copy" by using alphabet "u" key up 16 times
    And user clicks on save button on the problem form
    Then change should also be reflected in the timeline "STATUS MODIFIED:mina09:Tohall_copy"
    When user clicks on assignment under sections
    Then user selects assigned profile dropdown as "Problem Management:Problem Manager"
    And user selects assignee as "frvi96_auto" by using alphabet "g" key up 0 times
    And user clicks on save button on the problem form
    And change should also be reflected in the timeline "STATUS MODIFIED:Tohall_copy:frvi96_auto"
    And user "frvi96_auto" is listed as the assigned profile
    And user gets ticket value
    Then user logsOut
    And user goes back to login page
    When user logs in with valid username "frvi96_auto" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    And user clicks on search and selects open search forms and problem record
    And user switches to window 3
    Then problem record form should appear in new tab
    And user enters Problem Ticket
    And user clicks Search on ticket search
    And user should see problem ticket
    Then user changes status to "Under Investigation"
    And problem ticket status should be under investigation
    And change should also be reflected in the timeline as "STATUS MODIFIED.  Status has changed from Assigned to Under Investigation. "
    Then user clicks on "Interested Parties" tab
    And user clicks on add button
    And user switches to frame
    And user selects type as "Additional Access" under interested parties
    And user clicks on radio button user
    And user enters "Thgi00" in login name plus field
    And user "Tomas Gillgren" should be listed
    Then user is able to highlight/select "Tomas Gillgren"
    And user selects access radio button as read and write
    And  user selects auto notify radio button as yes
    And user clicks on save button under interested parties frame
    Then user validates "Tomas Gillgren" is listed as an interested party
    And change should also be reflected in the timeline as "The User Thomas Gillgren has been added as interested parties."
    Then user clicks on "Additional Info" tab
    And user enters "Thgi00" in the analysis team member one field
    And user clicks on save button on the problem form
    And user validates "Thgi00" is listed under analysis team member one field
    When user clicks on assignment under sections
    Then user selects assigned profile dropdown as "Problem Management:Problem Manager"
    And user selects assignee as "mina09_auto" by using alphabet "n" key up 0 times
    And user clicks on save button on the problem form
    And change should also be reflected in the timeline "STATUS MODIFIED:mina09:Tohall_copy"
    Then user logsOut
    And user logs in with valid username "Tohall_copy" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    And user clicks on search and selects open search forms and problem record
    And user switches to window 4
    Then problem record form should appear in new tab
    And user enters Problem Ticket
    And user clicks Search on ticket search
    And user should see problem ticket
    Then user clicks on "Interested Parties" tab
    And user highlights/selects user "Thgi00"
    And user clicks on remove button
    Then user "Thgi00" shouldn't be listed anymore
    When user changes status to "Investigation Complete"
    And user clicks on save button on the problem form
    Then an error message should appear: "Required field (without a default) not specified : Root Cause Details (ARERR 9424)"
    And an error message should appear: "Required field (without a default) not specified : Root Cause Code (ARERR 9424)"
    And an error message should appear: "Required field (without a default) not specified : RC found date (ARERR 9424)"
    Then user selects root cause code as Technical:HW error under route cause
    And user enters route cause details as "Bad management"
    And user enters RC found date as current date
    Then user clicks on save button on the problem form
    And user validates ticket status as "Investigation Complete"
    And change should also be reflected in the timeline as "STATUS MODIFIED.  Status has changed from Under Investigation to Investigation Complete. "
