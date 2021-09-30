@Close_Ticket @ProblemRegression
 #passed
Feature: Close and Clone Problem
  #Below scenario also covers-SAO-5208-Multiple root causes code menus, 4 with one Primary and
  #SAO-5198, All CI Impact Statuses will remain ‘Active’until the status of the problem moves to closed
  #SAO-5337	Restrictions on PB closure
  Scenario: Close and Clone Problem - User logs into One workflow, creates a problem ticket, closes it then clones it


    Given user is on the OneWorkflow login page
    When user logs in with valid username "frvi96_auto" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create problem record
    And user switches to window 1
    Then problem record form should appear in new tab
    When user creates problem ticket with below details
      |Title                                  |RequestType            |Description   |ImpactType      |Urgency|
      |proactive investigation of: frvi96_auto|XX_Test:Functional Test|UAT Test close|Moderate/Limited|Low    |
    Then ticket should be created and status should be assigned
    When user adds below CI's to the ticket
      |   CI Name     |
      |SE_SGSN_FREMME2|
      |SE_SGSN_HYMME2 |
      |SE_SGSN_LDHMME1|
      |SE_SGSN_VRRMME1|
    Then user clicks on Ack button
    And problem ticket status should be under investigation
    Then user changes status to investigation complete
    And user validates CI "Impact Status" is "Active"
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
    Then root cause should be changed to "Primary" root cause code
    And click on any secondary root cause code and click on remove selected
    And click apply button on additional root cause codes window
    And user clicks on save button
    Then user validates root cause code is "External | Other"
    Then additional root cause codes should be saved as "People | Other; Process and Organisation | Other; Technical | HW error;"
    When user changes status to closed
    Then error message should display for close ticket as "Your user profile doesn't allow you to change the status to \"Closed\". (ARERR 10000)"
    Then user gets ticket value
    And user logsOut
    Then user goes back to login page
    When user logs in with valid username "syvaptu1_auto" and password as "Test@1234"
    Then user clicks on search and selects open search forms and problem record
    And user switches to window 2
    Then user enters Problem Ticket
    And user clicks Search on ticket search
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
    And user validates CI "Impact Status" is "Inactive"
    And change should also be reflected in the timeline as "Status has changed from Investigation Complete to Closed."
    When user clicks on clone button
    And user switches to window 3
    Then problem record form should appear in new tab
    And user validates ticket status as "Investigation Complete"
