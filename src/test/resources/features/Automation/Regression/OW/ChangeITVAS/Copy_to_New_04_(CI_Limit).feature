@Copy_to_New_04_CI_Limit


Feature: Copy to New 04 (CI Limit) [aR]

  Scenario: Copy to New 04 (CI Limit) [aR]

    Given user is on the OneWorkflow login page
    When user logs in with valid username "ow_basic2_auto" and password as "Test@1234"
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
    When user clicks on "Diagnosis" tab
    When user clicks copy to new button
    And user closes confirmation for copy to new by pressing cancel button
    When user adds CI "FI_%cell%" to change ticket with impact level "Loss of Service"
    Then user validates CI confirmation message for copy to new is shown
    And user closes confirmation for copy to new by pressing x
    When user adds CI "dummy" to change ticket with impact level "Loss of Service"
    Then CI should be listed and displayed under the Diagnosis tab
    When user clicks copy to new button
    And user validates "Change Request CR-000000064707 got 101 related CI's. This number of CIs cannot be copied. Do you want to create the new request without CIs?" message is displayed
    And user closes confirmation for copy to new by pressing x
    When user clicks copy to new button
    And user closes confirmation for copy to new by pressing cancel button
    When user clicks copy to new button
    Then user clicks no on copy to new popup
    When user clicks copy to new button
    Then user clicks yes on copy to new popup
    And user switches to window 2
    When user enters request start time 24 hours ahead of current date
    And user enters request end time 48 hours ahead of current date
    And user selects estimated impact as "No Impact"
    And user enters impact duration as "5" minutes
    And user enters as "Test" in service and customer impact
    Then user clicks save button
    When user clicks on Diagnosis tab
    Then user validates no CIs are displayed




