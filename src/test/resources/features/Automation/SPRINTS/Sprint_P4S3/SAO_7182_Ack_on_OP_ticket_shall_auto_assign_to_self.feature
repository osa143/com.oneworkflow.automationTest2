@SAO_7182_Ack_on_OP_ticket_shall_auto_assign_to_self

Feature: SAO-7182 - Ack on OP ticket shall auto-assign to self

  Scenario: SAO-7182 - Ack on OP ticket shall auto-assign to self

    Given user is on the OneWorkflow login page
    When user logs in with valid user and password
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create trouble event
    And user switches to window 1
    And user clicks on sweden checkbox under affected BU's
    And user enters "SAO-7182 Test" in Title field in Trouble event
    And user selects request type as "Customer" on trouble event page
    And user enters description as "SAO-7182 Test"
    And user clicks save button
    Then ticket should be created and status should be assigned
    When user gets trouble ticket value
    And user logsOut from One workflow
    Then user goes back to login page
    When user logs in with valid username "Change_Automation_7" and password as "Test@1234"
    And user selects search menu as "Open Search Form:Trouble Event"
    And user switches to window 2
    And user enters trouble ticket in ticket ID+ field
    Then user clicks Search on ticket search
    When user clicks on Ack button
    And user clicks on assignment under sections
    And user validates assignee is "Change_Automation_7"
    Then user validates last ack by as "Change_Automation_7"
    When user logsOut
    And user goes back to login page
    When user logs in with valid username "ChangeManager2_Automation" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create trouble event
    And user switches to window 3
    And user clicks on sweden checkbox under affected BU's
    And user enters "SAO-7182 Test" in Title field in Trouble event
    And user selects request type as "Customer" on trouble event page
    And user enters description as "SAO-7182 Test"
    And user clicks save button
    Then ticket should be created and status should be assigned
    When user gets trouble ticket value
    And user logsOut from One workflow
    Then user goes back to login page
    When user logs in with valid username "Change_Automation_7" and password as "Test@1234"
    And user selects search menu as "Open Search Form:Trouble Event"
    And user switches to window 4
    And user enters trouble ticket in ticket ID+ field
    Then user clicks Search on ticket search
    When user clicks on Ack button
    And user clicks on assignment under sections
    And user validates assignee is "ChangeManager2_Automation"
    Then user validates last ack by as "Change_Automation_7"




