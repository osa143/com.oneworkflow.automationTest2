@6761 @Incident_SAO

Feature: Change
  Scenario: Priority level limitation

    Given user is on the OneWorkflow login page
    When user logs in with valid user and password
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create change record
    Then user switches to window 1
    When user selects request type as "Standard Change"
    Then dropdown values "Critical:Major:Minor:Info:Unknown" should be available in "Priority" dropdown
    When user selects request type as "Normal Change"
    Then dropdown values "Critical:Major:Minor:Info:Unknown" should be available in "Priority" dropdown
    When user selects priority as "Minor"
    And user selects request type as "Urgent Change"
    ##Priority value should be cleared##
    Then priority should be ""
    And dropdown values "Critical:Major" should be available in "Priority" dropdown
    When user selects template as "All:IT:Carrier:Telia Carrier UAT Changes"
    Then user validates request type as readonly
    And user validates Priority is readonly
    And user enters request start time 2 hours ahead of current date
    And user enters request end time 5 hours ahead of current date
    And user enters impact duration as "3" hours
    And user selects estimated impact dropdown as "No Impact"
    And user enters "Test Ticket" in the change builder field
    Then user clicks on save button
