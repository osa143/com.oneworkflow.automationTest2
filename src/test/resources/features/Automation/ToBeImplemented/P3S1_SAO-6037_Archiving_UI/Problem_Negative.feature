@Problem_Archive_Negative

Feature: Problem Archive Form
  Scenario: User validates archive UI

    Given user is on the OneWorkflow login page
    And user logs in with valid username "" and password as ""
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user selects search menu as "Search Archive Form:Problem Record"
    Then user validates "Problem" archive search form is opened
    When user enters "Under Investigation" in the "Status" field
    And user clicks on the search button
    Then error message should display as "No matches were found for your qualification. (ARWARN 9296)"




