@SAO_4722

Feature: SAO_4722 - CI Name that contains " | " does not get attached to Diagnosis tab

  Scenario: SAO_4722 - CI Name that contains pipe symbol does not get attached to Diagnosis tab

    Given user is on the OneWorkflow login page
    When user logs in with valid user and password
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create trouble event
    And user switches to window 1
    Then trouble record form should appear in new tab
    And user clicks on sweden checkbox under affected BU's
    Then user enters title as "Test"
    And user selects request type as "Event" on trouble event page
    Then user enters description as "Test Description"
    And user clicks save button
    Then ticket should be created and status should be assigned
    And user adds CI "NO_XWDM_NO- MAN0007|NO_XWDM_TRA_Empty_NO- MAN0007" to the ticket
    Then user clicks on Diagnosis tab
    And user validates CI "NO_XWDM_NO- MAN0007|NO_XWDM_TRA_Empty_NO- MAN0007" is listed