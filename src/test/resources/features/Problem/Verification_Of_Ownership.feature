@Verification_of_ownership
Feature: Verification of Problem ticket owner

  Scenario: user shouldn't be able to alter a problem ticket not assigned to them

    Given user is on the OneWorkflow login page
    When user logs in with valid username "Tohall_copy" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create problem record
    Then problem record form should appear in new tab
    When user clicks on save button on the problem form
    Then an error message should appear: "Please select at least one country of impact for this problem. (ARERR 10000)"
    When user clicks on sweden checkbox under affected BU's
    And  user clicks on save button on the problem form
    Then multiple error messages should appear with red boarder around fields
    When user enters "proactive investigation of Tohall_Copy" in Title field
    And user selects request type as "Access Networks:RAN Optimization"
    And user enters description as "UAT Test3"
    And user selects impact type as moderate:limited
    And user selects urgency as low
    And user clicks on save button on the problem form
    Then ticket should be created and status should be assigned
    And user gets ticket value
    Then user logsOut
    And user goes back to login page
    #username and password are not correct
    And user logs in with valid username "mina09_auto" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    And user clicks on search and selects open search forms and problem record
    And user switches to window 2
    And user enters Problem Ticket
    And user clicks Search on ticket search
    When user tries to Ack the ticket but its shouldn't allow
    When user tries to change the status to "Withdrawn"
    Then problem ticket status should be assigned
    When user tries to change request type as Access Networks:RAN NSN 2G:3G:4G
    Then request type should be RAN optimization
    Then user logsOut and closes the browser
