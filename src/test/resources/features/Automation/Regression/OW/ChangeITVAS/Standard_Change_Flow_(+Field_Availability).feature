@Standard_Change_Flow_(+Field_Availability)

Feature: Standard Change Flow (+Field Availability) [aR]

  Scenario: Standard Change Flow (+Field Availability) [aR]

    Given user is on the OneWorkflow login page
    When user logs in with valid username "ow_basic2_auto" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create change record
    Then user switches to window 1
    When user clicks save button
    Then error message should display as "Please fill up all the mandatory fields in the Details Panel to create a Change Request. (ARERR 10000)" on change record page
    When user selects request type as "Standard Change"
    And user validates "Template*" is mandatory
    And user selects template as "All:IT:Other:TEST TEMPLATE [UAT] - Standard Change"
    When user enters as "Diana Sisters" in Change Builder field
    And user enters as "Test" in service and customer impact
    And user enters request start time as 10 minutes past from "Europe/London" timezone "MM/dd/yyyy HH:mm:ss" format
    And user enters request end time as 20 minutes past from "Europe/London" timezone "MM/dd/yyyy HH:mm:ss" format
    And user enters impact duration as "0" minutes
    Then user enters description as "Regression - Change Management Process"
    And user clicks on save button
    Then user should see change record ticket
    When user clicks on "Interested Parties" tab
    And user validates "Diana Sisters" is listed as an interested party
    When user adds CI "dummy" to change ticket with impact level "No Impact"
    Then CI should be listed and displayed under the Diagnosis tab
    When user enters as "Mario Super" in Change Builder field
    And user switches to frame
    And user clicks on search under add interested party
    And user selects user "Mario Super" in user table
    And user clicks on save button under interested parties frame
    Then user clicks save button
    When user clicks on "Interested Parties" tab
    And user validates "Mario Super" is listed as an interested party
    And user validates relationship as "Change Builder"
    And user validates auto notify as "Yes"
    Then user validates access as "Read Only"
    When user clicks copy to new action button
    And user clicks copy to new action button
    Then user validates standard change has not been copied
    When user clicks on Send button
    Then user validates ticket status as "Assigned"
    When user clicks on details under sections
    And user validates Implementation is readonly
    And user validates Test Plan is readonly
    And user validates Rollback is readonly
    And user validates Communication plan is read only
    And user validates Ver of Functionality is readonly
    Then user validates Risk Description is read only
    When user gets change ticket value
    And user switches to window 0
    And user enters ticket previously created and searches in agent console and highlights
    And user waits for 5 minutes
    And user validates status in timeline as "Scheduled"
    And user double clicks on timeline to open ticket
    Then user switches to window 2
    When user clicks on details under sections
    And user validates Implementation is readonly
    And user validates Test Plan is readonly
    And user validates Rollback is readonly
    And user validates Communication plan is read only
    And user validates Ver of Functionality is readonly
    Then user validates Risk Description is read only
    And user switches to window 0
    And user waits for 5 minutes
    And user clicks timeline refresh button
    And user validates status in timeline as "Implementation"
    And user double clicks on timeline to open ticket
    Then user switches to window 3
    When user clicks on details under sections
    And user validates Implementation is readonly
    And user validates Test Plan is readonly
    And user validates Rollback is readonly
    And user validates Communication plan is read only
    And user validates Ver of Functionality is readonly
    Then user validates Risk Description is read only
    When user switches to window 0
    And user waits for 5 minutes
    And user clicks timeline refresh button
    And user validates status in timeline as "Completed"
    And user double clicks on timeline to open ticket
    Then user switches to window 4
    When user clicks on details under sections
    And user validates Implementation is readonly
    And user validates Test Plan is readonly
    And user validates Rollback is readonly
    And user validates Communication plan is read only
    And user validates Ver of Functionality is readonly
    Then user validates Risk Description is read only
    When user clicks on ticket refresh button
    And user validates ticket status as "Closed"
    Then user gets change ticket value
    When user selects search menu as "Open Search Form:Change Record/Project/Freeze"
    And user switches to window 5
    And user enters ticket in ticket ID+ field
    Then user validates ticket status as "Closed"
    When user clicks on details under sections
    And user validates Implementation is readonly
    And user validates Test Plan is readonly
    And user validates Rollback is readonly
    And user validates Communication plan is read only
    And user validates Ver of Functionality is readonly
    Then user validates Risk Description is read only




