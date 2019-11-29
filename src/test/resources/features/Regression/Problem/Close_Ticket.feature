@Close_Ticket @problem
 #passed
Feature: User is able to close and clone a problem ticket

  Scenario: User logs into One workflow, creates a problem ticket, closes it then clones it

    Given user is on the OneWorkflow login page
    When user logs in with valid username "frvi96_auto" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create problem record
    And user switches to window 1
    Then problem record form should appear in new tab
    When user creates problem ticket with following details
    |Title                                  |RequestType |Description   |ImpactType      |Urgency|
    |proactive investigation of: frvi96_auto|CPS:IT:Other|UAT Test close|Moderate/Limited|Low    |

    Then ticket should be created and status should be assigned
    Then user clicks on Ack button
    And problem ticket status should be under investigation
    Then user changes status to investigation complete
    And user selects root cause code as Technical:HW error under route cause
    And user enters route cause details as "Bad Management"
    And user enters RC found date as current date
    And user clicks on save button
    And change should also be reflected in the timeline as "STATUS MODIFIED.  Status has changed from Under Investigation to Investigation Complete. "
    When user changes status to closed
    And user clicks on save button
    Then an error message should appear: "Required field (without a default) not specified :Actual Finish (ARERR 9424)"
    And an error message should appear: "Required field (without a default) not specified :Closure Code (ARERR 9424)"
    And an error message should appear: "Required field (without a default) not specified :Decision Go/NoGo (ARERR 9424)"
    And an error message should appear: "Required field (without a default) not specified :Solution (ARERR 9424)"
    And an error message should appear: "Required field (without a default) not specified :Solution Found Date (ARERR 9424)"
    Then user enters actual finish as current date
    And user enters decision go no go as current date
    And user selects solved under closure code
    And user enters solution as "A change in processes"
    And user enters solution found date as current date
    Then user clicks on save button
    And user validates ticket status as "Closed"
    And change should also be reflected in the timeline as "Status has changed from Investigation Complete to Closed."
    When user clicks on clone button
    And user switches to window 2
    Then problem record form should appear in new tab
    And user validates ticket status as "Investigation Complete"
