@Copy_to_New_04_CI_Limit


Feature: Copy to New 04 (CI Limit) [aR]

  Scenario: Copy to New 04 (CI Limit) [aR]

    Given user is on the OneWorkflow login page
    When user logs in with valid username "cm_adminaccess1_auto" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create change record
    Then user switches to window 1
    When user selects template as "All:IT:Other:TEST TEMPLATE [UAT] - Normal Change"
    And user enters request start time 24 hours ahead of current date
    And user enters request end time 48 hours ahead of current date
    And user enters impact duration as "1" minutes
    And user enters "_" in the change builder field
    And user enters as "Test" in service and customer impact
    Then user clicks save button
    When user adds CI "FI_%cell%" to change ticket with impact level "Loss of Service"
    When user clicks copy to new button
    And user validates "Change Request <CR ID> got 100  related CI's. Do you want to copy theCI's across to the new request?" message displayed
    And user closes copy to new confirmation window
    Then user validates copy to new functionality was not activated
    When user adds CI "dummy" to change ticket with impact level "Loss of Service"
    Then CI should be listed and displayed under the Diagnosis tab
    When user clicks copy to new button
    And user validates "Change Request CR-000000064707 got 101 related CI's. This number of CIs cannot be copied. Do you want to create the new request without CIs?" message displayed
    And user closes copy to new confirmation window
    Then user validates copy to new functionality was not activated
    When user clicks copy to new button
    And user clicks copy to new cancel button
    Then user validates copy to new functionality was not activated
    When user clicks copy to new button
    And user clicks copy to new no button
    Then user validates copy to new functionality was not activated
    When user clicks to new button
    And user clicks copy to new yes button
    And user switches to window 2
    Then new CR form should be displayed with unique change record id
    When user enters request start time 24 hours ahead of current date
    And user enters request end time 48 hours ahead of current date
    And user selects estimated impact as "No Impact"
    And user enters impact duration as "5" minutes
    And user enters as "Test" in service and customer impact
    Then user clicks save button
    When user clicks on Diagnosis tab
    Then user validates no CIs are displayed




