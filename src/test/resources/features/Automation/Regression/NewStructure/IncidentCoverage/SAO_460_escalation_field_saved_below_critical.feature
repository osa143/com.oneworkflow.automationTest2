@SAO_460 @IncidentCoverage
#OP-000000878549-ALM-3924-Escalation - escalation field saved below critical

Feature: SAO-460 - OP-000000878549-ALM-3924-Escalation - escalation field saved below critical

  Scenario: SAO-460 - OP-000000878549-ALM-3924-Escalation - escalation field saved below critical
    Given user is on the OneWorkflow login page
    When user logs in with valid user and password
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create trouble event
    And user switches to window 1
    Then trouble record form should appear in new tab
    When user enters "SAO-460" in Title field in Trouble event
    And user selects request type as "Customer" on trouble event page
    Then user enters description as "Testing"
    And user clicks on sweden checkbox under affected BU's
    And user clicks save button
    Then ticket should be created and status should be assigned
    And user validates ticket priority as "Minor"
    Then user validates hierarchic escalation level is read only
    And user selects impact as "Critical" on trouble event page
    Then user selects importance as "Critical"
    And user clicks save button
    And user waits 5 secs
    Then user validates ticket priority as "Emergency"
    #And user validates hierarchic escalation level as "Escalation manager (EM)"
    And user validates hierarchic escalation level isnt read only
