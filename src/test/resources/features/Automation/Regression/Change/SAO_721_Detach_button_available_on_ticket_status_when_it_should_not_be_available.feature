@SAO_721
#ALM-4055 (OP-000001134928): Detach button available on ticket status, when it should not be available

Feature: SAO-721 - Detach button available on ticket status, when it should not be available

  Scenario: SAO-721 - Detach button available on ticket status, when it should not be available
    
    Given user is on the OneWorkflow login page
    And user logs in with valid username "ow_basic1" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create change record
    Then change record form should open in a new tab
    When user selects request type as "Standard Change"
    Then user selects template as "All:IT:Other:TEST TEMPLATE [UAT] - Standard Change"
    And user enters "Testing" in the change builder field
    Then user enters request start time 24 hours ahead of current date
    And user enters request end time 28 hours ahead of current date
    Then user selects estimated impact as "No Impact"
    And user enters impact duration as "4" hours
    And user clicks save button
    Then user clicks on Diagnosis tab
    And user adds CI "One Workflow" to change ticket with impact level "No Impact"
    #Then user validates Detach is enabled
    And user clicks on Send button
    Then user clicks on Diagnosis tab
    And user validates Detach&Create is disabled
    Then user stores ticket id
    And user logsOut
    #Then user clicks login
    And user logs in with valid username "ChangeManager1_Automation" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
#click search change record
    And user enters change ticket in ticket ID+ field
    Then user clicks Search on ticket search
    And user changes status to "Analysis"
    Then user clicks save button
    And user logsOut
    #Then user clicks login
    And user logs in with valid username "ow_basic1" and password as "Test@1234"
#click search change record
    And user enters change ticket in ticket ID+ field
    Then user clicks Search on ticket search
    And user clicks on Diagnosis tab
    And user validates Detach&Create is disabled
    And user logsOut
    #Then user clicks login
    And user logs in with valid username "ChangeManager1_Automation" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
#click search change record
    And user enters change ticket in ticket ID+ field
    Then user clicks Search on ticket search
    And user changes status to "Approval Requested"
    Then user clicks save button
    And user logsOut
    #Then user clicks login
    And user logs in with valid username "ow_basic1" and password as "Test@1234"
    #click search change record
    And user enters change ticket in ticket ID+ field
    Then user clicks Search on ticket search
    And user clicks on Diagnosis tab
    And user validates Detach&Create is disabled
