@SAO_117
#started in ALM from step 11 (Prasanna's comment
Feature: SLA class wrongly calculated
  Scenario: user creates a B2B work order and checks SLA class

    Given user is on the OneWorkflow login page
    When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create trouble event
    Then trouble record form should appear in new tab
    And user switches to window 1
    Then trouble record form should appear in new tab
    When user clicks on sweden checkbox under affected BU's
    And user enters "B2B Test Ticket" in Title field
    And user selects request type as "Customer" on trouble event page
    And user enters description as "B2B Test Ticket"
    And user clicks on save button
    Then ticket should be created and status should be assigned
    When user clicks on "Diagnosis" tab
    And user clicks on CI search button
    Then user switches to frame
    And user clicks on clear button
    When user enters "FI_LTECell%" in name field
    And user clicks on search button on CI search window
    And user selects a CI from list
    And user selects impact level as "No Impact"
    And user clicks on relate CI
    Then user clicks ok on CI window pop up
    When user clicks on work order tab
    And user clicks on create from ticket
    When user switches to window 2
    And user validates ticket status as "New"
    Then user clicks on save button on the problem form
    And user validates ticket status as "New"
    And user validates child ticket details are same as parent ticket
    Then user clicks on save button on the problem form
    When user switches to window 1
    And clicks on ticket refresh button
    Then user clicks on work order tab
    And user validates child WorkOrder availability
    And user validates WorkOrder status as "OPEN"
    When user switches to window 2
    And user clicks on assignment under sections
    And user clicks on apply B2B button
    Then user should see assigned profile as "Eltel - FS - FIN - B2B"
      #[SLA Class] - [Estimated Ready] is updated with calculated time (Event Start Time+SLA)
    When user selects SLA class as "10 Hours repair time (FI=A1)"
    Then user validates estimated ready time is updated
    When user selects SLA class as "2 month repair time"
    Then user validates estimated ready time is updated
    When user selects SLA class as "22 Hours repair time"
    Then user validates estimated ready time is updated

