@Initiator_Create_Ticket @ProblemRegression
  #Passed
  Feature: initiator create ticket and withdraw
  Scenario: initiator create ticket and withdraw

    Given user is on the OneWorkflow login page
    When user logs in with valid username "tohall_copy" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create problem record
#    When user clicks on agent console create problem record
    Then problem record form should appear in new tab
    And user switches to window 1
    When user clicks save button
    Then an error message should appear: "Please select at least one country of impact for this problem. (ARERR 10000)"
    When user clicks on sweden checkbox under affected BU's
    And user clicks save button
    Then multiple error messages should appear with red boarder around fields
    When user enters "proactive investigation of Tohall_Copy" in Title field
    And user selects request type as "XX_Test:Functional Test" on Problem record page
    And user enters description as "SIT Test- Initiator create ticket and withdraw "
    And user selects impact type as moderate:limited
    And user selects urgency as low
    And user clicks on save button on the problem form
    Then ticket should be created and status should be assigned
    When user changes status to "Withdrawn" on problem record page
    And user clicks on save button on the problem form
    And user clicks on yes on warning window
#    Then an error message "Required field (without a default) not specified : Withdrawn Reason (ARERR 9424)" should appear with red boarder around withdrawn reason
    When user selects withdrawn reason as false alarm and clicks save
    And user should see confirmation message and clicks on yes button
    Then problem ticket should be withdrawn




