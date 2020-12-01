@BR_3054_Open_a_CR_from_SID_Console


Feature: BR-3054 - Open a CR from SID Console [SaR]

  Scenario: BR-3054 - Open a CR from SID Console [SaR]

    Given user is on the OneWorkflow login page
    When user logs in with valid username "ChangeManager1_Automation" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user selects SID console from agent console
    Then SID console page should be opened
    When user enters name field as "One Workflow"
    And user clicks on CI search button
    And user selects CI with category "Software" type "Business Function Specific Software" and item "System"
    And user clicks show history
    Then user validate "CR" are displayed in "Ticket ID" column
    When user double clicks first CR ticket
    And user validates ticket is opened in new tab
