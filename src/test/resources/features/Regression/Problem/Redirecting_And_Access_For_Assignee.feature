@Assignee @problem
#passed
#This feature covers 2 scenarios
Feature: Changing of assignee for problem ticket

  Scenario: User is able to change assignment/assignee on problem ticket

    Given user is on the OneWorkflow login page
    When user logs in with valid username "Tohall_copy" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create problem record
    And user switches to window 1
    Then problem record form should appear in new tab
    When user creates problem ticket with following details
      |               Title                  |RequestType |Description|ImpactType      |Urgency|
      |Proactive investigation of frvi96_auto|CPS:IT:Other|UAT Test4  |Moderate/Limited|Low    |
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
    #Then user selects assigned profile dropdown as "Problem Initiator"
    Then user selects assigned profile dropdown as "Problem Management:Problem Initiator"
    And user enters "Tohall_copy" in assignee
    And user clicks on save button on the problem form
    Then change should also be reflected in the timeline "STATUS MODIFIED:mina09:Tohall_copy"
    When user clicks on assignment under sections
    Then user selects assigned profile dropdown as "Problem Management:Problem Manager"
    #Then user selects assigned profile dropdown as "Problem Manager"
    And user enters "frvi96_auto" in assignee
    And user clicks on save button on the problem form
    And change should also be reflected in the timeline "STATUS MODIFIED:Tohall_copy:frvi96_auto"
    And user clicks on assignment under sections
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
    Then user changes status to "Under Investigation" on problem record page
    And problem ticket status should be under investigation
    And change should be reflected in the timeline "Request has been reassigned from Assignee user |Tohall_copy| to  Assignee  user |frvi96_auto|."
    Then user clicks on "Interested Parties" tab
    And user clicks on add button under interested parties
    And user switches to frame
    And user selects type as "Additional Access" under interested parties
    And user clicks on radio button user
    And user enters "Thgi00" in login name plus field
    And user clicks on search under add interested party
    Then user highlights "Thomas" Gillgren
    And user selects access radio button as read and write
    And  user selects auto notify radio button as yes
    And user clicks on save button under interested parties frame
    And change should also be reflected in the timeline as "The User Thomas Gillgren has been added as interested parties."
    Then user clicks on "Additional Info" tab
    And user enters "Thgi00" in the analysis team member one field
    And user clicks on save button on the problem form
    Then user clicks on "Additional Info" tab
    And user validates "Thgi00" is listed under analysis team member one field
    When user clicks on assignment under sections
    #Then user selects assigned profile dropdown as "Problem Initiator"
    Then user selects assigned profile dropdown as "Problem Management:Problem Initiator"
    And user enters "Tohall_copy" in assignee
    And user clicks on save button on the problem form
    And change should be reflected in the timeline "Request has been reassigned from Assignee user |frvi96_auto| to  Assignee  user |Tohall_copy|."
    Then user logsOut
    And user goes back to login page
    And user logs in with valid username "Tohall_copy" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    And user clicks on search and selects open search forms and problem record
    And user switches to window 4
    Then problem record form should appear in new tab
    And user enters Problem Ticket
    And user clicks Search on ticket search
    And user should see problem ticket
    Then user clicks on "Interested Parties" tab
    And user highlights user "thgi00" under interested parties
    And user clicks on remove button
    Then user Thgi00 shouldn't be listed anymore
    When user changes status to "Investigation Complete" on problem record page
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
