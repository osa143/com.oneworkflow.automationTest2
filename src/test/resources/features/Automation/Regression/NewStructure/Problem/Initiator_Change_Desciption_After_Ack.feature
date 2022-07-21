@Initiator_Change_Description_After_Ack @ProblemRegression2
  #passed
  Feature: Initiator change description after ack
  Scenario: Problem Initiator changes description after ack

    Given user is on the OneWorkflow login page
    When user logs in with valid username "Tohall_copy2" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
#    When user clicks on create problem record
    When user clicks on agent console create problem record
    And user switches to window 1
    Then problem record form should appear in new tab
    When user creates problem ticket with below details
      |Title                                  |RequestType            |Description                         |ImpactType      |Urgency|
      |proactive investigation of: frvi96_auto|XX_Test:Functional Test|Initiator Change Description after Ack|Moderate/Limited|Low    |
    Then ticket should be created and status should be assigned
    And user gets ticket value
    Then user logsOut
    And user navigates back to login page using URL
#    And user goes back to login page
    Given user is on the OneWorkflow login page
    When user logs in with valid username "frvi96_auto" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    And user clicks agent console search menu
    And user selects agent console open search form
    And user selects agent console search problem
    And user switches to window 2
    And user enters Problem Ticket
    And user clicks Search on ticket search
    When user clicks on Ack button
    Then problem ticket status should be under investigation
    And change should also be reflected in the timeline as "STATUS MODIFIED.  Status has changed from Assigned to Under Investigation"
    When user tries to change the status to "Withdrawn"
    Then problem ticket status should be under investigation
    Then user logsOut
    And user navigates back to login page using URL
#    And user goes back to login page
    Given user is on the OneWorkflow login page
    When user logs in with valid username "Tohall_copy" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    And user clicks agent console search menu
    And user selects agent console open search form
    And user selects agent console search problem
    And user switches to window 3
    And user enters Problem Ticket
    And user clicks Search on ticket search
    Then description field should be greyed out should not be able to changed

