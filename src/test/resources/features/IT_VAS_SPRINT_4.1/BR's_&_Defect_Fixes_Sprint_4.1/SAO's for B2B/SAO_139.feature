@SAO_139
Feature: B2B Error handling
  Scenario: user should see error message and created ticket

    Given user is on the OneWorkflow login page
    When user logs in with valid username "Change_Automation_1" and password as "Telia@1234"
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
    When user enters "FI_LTECell_Valpe4H" in name field
    And user clicks on search button on CI search window
    And user selects a CI from list
    And user selects impact level as "No Impact"
    And user clicks on relate CI
    Then user closes warning message and clicks on close button
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
    When user clicks on assignment under sections
    And user clicks on apply B2B button
    #And user selects assigned profile dropdown as "Field Service:Mobile (B2B):Eltel - FS - FIN - B2B"
    Then user should see assigned profile as "Eltel - FS - FIN - B2B"
    When user selects SLA class as "10 Hours repair time"
    #validate Event start+SLA
    Then user validates estimated ready time is updated for 10 hours
    When user clicks on B2B dispatch tab
    And user enters header value as "Test"
    And user enters message value as "Automated Test"
    Then user clicks on save button on the problem form
    When user switches to window 1
    Then user should see OP ticket listed with title of: "Error in the B2B Interface"
    When user gets B2B ticket value
    And user selects search menu as "Open Search Form:Trouble Event"
    Then user enters B2B ticket value
    And user clicks on the search button
    Then user should see trouble ticket
    And user validates title as "Error in the B2B Interface"
    And user validates request type as "Maintenance"
    #The WO ID will be different every time
    And user validates description as "Your work order WO-000000037328 has error. Please take a look"



