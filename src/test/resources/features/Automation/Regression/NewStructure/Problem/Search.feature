@search @ProblemRegression
 #passed
  Feature: problem record Search
  Scenario: problem record Search - user is able to search for tickets using problem ticket status

    Given user is on the OneWorkflow login page
    When user logs in with valid username "Tohall_copy" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
#    And user clicks agent console search menu
#    And user selects agent console open search form
#    And user selects agent console search problem
    And user clicks on search and selects open search forms and problem record
    And user switches to window 1
    Then user should see blank problem search form
    When user verifies for all entries in status dropdown
    Then multiple statuses "New:Assigned:Under Investigation:Pending:Investigation Complete:Closed:Withdrawn:(clear)" should be available in "Status*" dropdown
    When user changes status to "Closed" on problem record page
    And user clicks Search on ticket search
    Then at least one problem ticket should appear in the list
    And user switches to window 0
#    And user clicks agent console search menu
#    And user selects agent console open search form
#    And user selects agent console search problem
    And user clicks on search and selects open search forms and problem record
    And user switches to window 2
    Then user should see blank problem search form
    When user verifies for all entries in status dropdown
    Then multiple statuses "New:Assigned:Under Investigation:Pending:Investigation Complete:Closed:Withdrawn:(clear)" should be available in "Status*" dropdown
    When user changes status to "Withdrawn" on problem record page
    And user clicks Search on ticket search
    Then at least one problem ticket should appear in the list


