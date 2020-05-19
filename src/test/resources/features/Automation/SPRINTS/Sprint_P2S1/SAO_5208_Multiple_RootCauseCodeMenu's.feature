@Multiple_root_causes_code_menus
 #passed
Feature: Problem, root causes code menus

  Scenario: Multiple root causes code menus, 4 with one Primary

    Given user is on the OneWorkflow login page
    When user logs in with valid username "frvi96_auto" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create problem record
    And user switches to window 1
    Then problem record form should appear in new tab
    When user creates problem ticket with following details
    |Title                                  |RequestType |Description   |ImpactType      |Urgency|AccountableOrg|AffectedOrg|
    |proactive investigation of: frvi96_auto|CPS:IT:Other|UAT Test close|Moderate/Limited|Low    |CA_Infra      |CA_IT      |

    Then ticket should be created and status should be assigned
    Then user clicks on Ack button
    And problem ticket status should be under investigation
    Then user changes status to investigation complete
    Then user should see root cause code primary drop down as mandatory
    And user should see additional root cause code drop down as optional
    And user selects root cause code as Technical:HW error under route cause
    When user clicks edit button for additional root cause
    Then user should see "Root Cause Codes"
    When user selects multiple additional root cause codes as "External:Other/People:Other/Process and Organisation:Other/Technical:Other"
    And user enters route cause details as "Bad Management"
    And user enters RC found date as current date
    And user clicks on save button
    And change should also be reflected in the timeline as "STATUS MODIFIED.  Status has changed from Under Investigation to Investigation Complete. "
    Then additional root cause codes should be saved as "External | Other; People | Other; Process and Organisation | Other; Technical | Other;"
    When user clicks edit button for additional root cause
    And click on any secondary root cause code and click on make primary button
    Then root cause should be changed to primary root cause code
    When user clicks apply button change should be reflected on primary root cause text area
    When user clicks on edit button for additional root cause code
    And click on any secondary root cause code and click on remove selected
    And user clicks apply button 
    When user changes status to closed
    And user clicks on save button
    And an error message should appear: "Required field (without a default) not specified :Closure Code (ARERR 9424)"
    And an error message should appear: "Required field (without a default) not specified :Solution (ARERR 9424)"
    And an error message should appear: "Required field (without a default) not specified :Solution Found Date (ARERR 9424)"
    And user selects solved under closure code
    And user enters solution as "A change in processes"
    And user enters solution found date as current date
    Then user clicks on save button
    And user validates ticket status as "Closed"

