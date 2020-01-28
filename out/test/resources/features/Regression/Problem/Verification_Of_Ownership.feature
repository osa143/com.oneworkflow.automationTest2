@Verification_of_ownership @problem @Reg_Problem
  #passed
Feature: Verification of Problem ticket owner

  Scenario: user shouldn't be able to alter a problem ticket not assigned to them

    Given user is on the OneWorkflow login page
    When user logs in with valid username "Tohall_copy" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create problem record
    And user switches to window 1
    Then problem record form should appear in new tab
    When user clicks save button
    Then an error message should appear: "Please select at least one country of impact for this problem. (ARERR 10000)"
    When user clicks on sweden checkbox under affected BU's
    And  user clicks save button
    Then multiple error messages should appear with red boarder around fields
    When user enters "proactive investigation of Tohall_Copy" in Title field
    And user selects request type as "CPS:IT:Other" on Problem record page
    And user enters description as "UAT Test3"
    And user selects impact type as moderate:limited
    And user selects urgency as low
    And user clicks on assignment under sections
    And user selects assigned profile dropdown as "Problem Management:Problem Initiator"
    #And user selects assigned profile dropdown as "Problem Initiator"
    And user enters "Tohall_copy" in assignee
    And user clicks on save button on the problem form
    Then ticket should be created and status should be assigned
    And user gets ticket value
    Then user logsOut
    And user goes back to login page
    #username and password are not correct for below step, replace credentials
    And user logs in with valid username "mina09_auto" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    And user clicks on search and selects open search forms and problem record
    And user switches to window 2
    And user enters Problem Ticket
    And user clicks Search on ticket search
    #When user tries to Ack the ticket but its shouldn't allow
    When user verifies status is read only
    Then problem ticket status should be assigned
    Then request type should be read only

