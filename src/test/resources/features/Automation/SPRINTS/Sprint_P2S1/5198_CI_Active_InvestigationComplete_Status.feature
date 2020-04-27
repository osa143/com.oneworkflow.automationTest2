@5198

Feature: 5198

  Scenario: All CI Impact Statuses will remain ‘Active’until the status of the problem moves
            to closed, and then it will move to ‘Inactive’

    Given user is on the OneWorkflow login page
    When user logs in with valid username "frvi96_auto" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create problem record
    And user switches to window 1
    Then problem record form should appear in new tab
    When user creates problem ticket with following details
    |Title                                  |RequestType |Description   |ImpactType      |Urgency|AccountableOrg|AffectedOrg|
    |proactive investigation of: frvi96_auto|CPS:IT:Other|UAT Test close|Moderate/Limited|Low    |CA_Infra      |CA_IT      |

    Then ticket should be created and status should be assigned
    When user adds below CI's to the ticket
      |   CI Name     |
      |SE_SGSN_FREMME2|
      |SE_SGSN_HYMME2 |
      |SE_SGSN_LDHMME1|
      |SE_SGSN_VRRMME1|
    Then user clicks on Ack button
    And problem ticket status should be under investigation
    Then user changes status to investigation complete
    And user selects root cause code as Technical:HW error under route cause
    And user enters route cause details as "Bad Management"
    And user enters RC found date as current date
    And user clicks on save button
    And user validates ticket status as "Investigation Completed"
    And user validates CI "Impact Status" is "Active"
    When user changes status to closed
    And user clicks on save button
    And user selects solved under closure code
    And user enters solution as "A change in processes"
    And user enters solution found date as current date
    Then user clicks on save button
    And user validates ticket status as "Closed"
    And user validates CI "Impact Status" is "Inactive"

