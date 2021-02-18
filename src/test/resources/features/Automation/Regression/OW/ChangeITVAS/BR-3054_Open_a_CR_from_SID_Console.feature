@BR_3054_Open_a_CR_from_SID_Console @OW_Change


Feature: BR-3054 - Open a CR from SID Console [SaR]

  Scenario: BR-3054 - Open a CR from SID Console [SaR]

    Given user is on the OneWorkflow login page
    When user logs in with valid username "ChangeManager1_Automation" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create change record
    And user switches to window 1
    When user selects request type as "Standard Change"
    And user clicks on sweden checkbox under affected BU's
    And user selects template as "All:IT:Carrier:Telia Carrier UAT Changes"
    When user enters "Closure_from_Analysis_Status_Standard_Change Test" in the change builder field
    And user enters as "Test" in service and customer impact
    And user enters request start time as 5 minutes past from "Europe/London" timezone "MM/dd/yyyy HH:mm:ss" format
    And user enters request end time as 10 minutes past from "Europe/London" timezone "MM/dd/yyyy HH:mm:ss" format
    And user enters impact duration as "2" minutes
    Then user enters description as "Regression - Change Management Process"
    And user clicks on save button
    And user gets ticket value
    When user clicks on Diagnosis tab
    And user clicks on CI search button
    And user switches to frame
    And user enters "One Workflow" in the name+ field
    And user enters category as "Software"
    And user selects Type as "Application"
    And user enters item as "System"
    And user clicks on search button on CI search window
    And user selects all CI's that appear
    And user selects impact level as "Loss of Service"
    And user clicks on relate CI
    And user closes warning message on CI search window for change ticket
    And user clicks on close button on CI search window
    Then CI should be listed and displayed under the Diagnosis tab
    When user selects SID console from agent console
    And user switches to window 2
    Then SID console page should be opened
    When user enters "One Workflow" in the name+ field
    And user enters category as "Software"
    And user selects Type as "Application"
    And user enters item as "System"
    And user clicks on search button on CI search window
    And user clicks on show history
    And user clicks on ticket title
    And user waits 3 secs
    Then user validates ticket previously created is present
    When user double clicks on ticket under SID console matching ticket to open
    And user switches to window 3
    Then user should see change ticket previously created


