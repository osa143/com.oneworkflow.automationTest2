@advanced_Search
#Passed
Feature: SLA Target time availability in Incident Record

  Scenario: SLA Target time availability in Incident Record


    Given user is on the OneWorkflow login page
    When user logs in with valid user and password
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user selects search menu as "Open Search Form:Trouble Event"
    And user switches to window 1
    When user clicks on advanced search button
    And user waits 5 secs
    And user enters "'Trouble Ticket #' = \"OP-000001737760\"" in the advanced search bar
    And user clicks Search on ticket search
    Then ticket should be displayed











