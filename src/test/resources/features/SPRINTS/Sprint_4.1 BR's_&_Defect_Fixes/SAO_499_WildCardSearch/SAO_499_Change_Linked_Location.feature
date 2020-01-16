@SAO_499_Change_Ticket_Linked_Location
@499
#PASSED
Feature: data searching using wildcards
  Scenario: Change_Ticket_Linked_Location

    Given user is on the OneWorkflow login page
    When user logs in with valid username "ChangeManager1_Automation" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user selects search menu as "Open Search Form:Change Record/Project/Freeze"
    And user switches to window 1
    Then user should see blank change record search form
    When user selects change type as "Change Record"
    And user selects status as "Assigned"
    And user clicks Search on ticket search
    Then user should see change record ticket
    When user clicks on "Linked Items" tab
    And user selects target application first dropdown as "OS3 - Change"
    And user clicks on link button
    Then user switches to frame
    When user clicks on the clear button
    When user searches below in the location+ field and verifies Ticket information
    |locationIdPlus |
    |SE_            |
    |FI_            |
    |EE_            |
    |DK_            |
    |NO_            |
    |LT_            |
    And user clicks on cancel on select target window