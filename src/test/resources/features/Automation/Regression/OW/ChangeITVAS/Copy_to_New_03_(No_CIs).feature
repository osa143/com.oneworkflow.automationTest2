@Copy_to_New_03_(No_CIs)

Feature: Copy to New 03 (No CIs) [aR]

  Scenario: Copy to New 03 (No CIs) [aR]

    Given user is on the OneWorkflow login page
    When user logs in with valid username "'ChangeInitiatorInternal1" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user selects search menu as "Open Search Form:Change Record/Project/Freeze"
    And user switches to window 1
    And user searches for ticket id ""
    Then ticket should be displayed
    When user clicks copy to new button
    And user closes copy to new confirmation window
    Then user validates copy to new functionality was not activated
    When user clicks copy to new button
    And user clicks copy to new cancel button
    Then user validates copy to new functionality was not activated
    When user clicks copy to new button
    And user clicks copy to new no button
    And user switches to window 2
    Then new CR form should be displayed with unique change record id
    When user clicks on CTI details under sections
    #uservalidates cti details fields are null
    And user clicks on location under sections
    #user validates all location fields are null
    When user enters request start time 24 hours ahead of current date
    And user enters request end time 48 hours ahead of current date
    And user selects estimated impact as "No Impact"
    And user enters impact duration as "5" minutes
    And user enters as "Test" in service and customer impact
    Then user clicks save button
    When user clicks on Diagnosis tab
    Then user validates no CIs are displayed
    When user clicks copy to new button
    Then user validates copy to new information content "Change Request <CR ID> holds no related CI's. Do you still want to make a copy of this Change Request?"
    When user clicks copy to new cancel button
    Then user validates copy to new functionality was not activated
    When user clicks copy to new button
    And user clicks copy to new no button
    Then user validates copy to new functionality was not activated
    When user clicks copy to new button
    And user clicks copy to new yes button
    And user switches to window 3
    Then new CR form should be displayed with unique change record id
    When user enters request start time 24 hours ahead of current date
    And user enters request end time 48 hours ahead of current date
    And user selects estimated impact as "No Impact"
    And user enters impact duration as "5" minutes
    And user enters as "Test" in service and customer impact
    Then user clicks save button
    When user clicks on Diagnosis tab
    Then user validates no CIs are displayed
