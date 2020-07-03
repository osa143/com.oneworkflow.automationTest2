@Problem_Archive

Feature: Problem Archive Form
  Scenario: User validates archive UI

    Given user is on the OneWorkflow login page
    And user logs in with valid username "" and password as ""
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user selects search menu as "Search Archive Form:Problem Record"
    Then user validates "Problem" archive search form is opened
    When user enters "Closed" in the "Status" field
    And user clicks on the search button
    Then user validates "Closed" archived tickets are shown
    And user validates archived criteria is met
    Then user clicks on the new search button
    And user enters "Withdrawn" in the "Status" field
    And user clicks on the search button
    Then user validates "Withdrawn" archived tickets are shown
    And user validates archived criteria is met
    When user clicks on the new search button
    And user enters "%" in the source field
    And user clicks on the search button
    Then user validates archived Problem tickets are shown
    When user clicks on the new search button
    And user clicks on sweden checkbox under affected BU's
    And user clicks on the search button
    Then user validates "Sweden" archived tickets are shown
    When user clicks on the new search button
    And user enters "%" in the "Title" field
    And user clicks on the search button
    Then user validates archived Problem tickets are shown
    When user clicks on the new search button
    And user enters "%" in the "Request Type" field
    And user clicks on the search button
    Then user validates archived Problem tickets are shown
    When user clicks on the new search button
    And user enters "%" in the "Description" field
    And user clicks on the search button
    Then user validates archived Problem tickets are shown
    When user clicks on the new search button
    And user clicks on assignment under sections
    Then user selects valid assigned profile
    And user clicks on the search button
    And user validates tickets shown relate to selected assigned profile
    When user clicks on the new search button
    And user clicks on owner under sections
    Then user selects valid owner profile
    And user clicks on the search button
    And user validates tickets shown relate to selected owner profile
    When user clicks on the new search button
    And user enters ticket id as "%"
    And user clicks on the search button
    Then user validates archived Problem tickets are shown
    And user clicks on "Timeline" tab
    Then user validates archived timeline data is present
    And user clicks on "Diagnosis" tab
    Then user validates archived CI data is present
    And user clicks on "Interested Parties" tab
    Then user validates archived risk question data is present
    And user clicks on "Notifications" tab
    Then user validates archived email data is present
    And user clicks on "Linked Items" tab
    Then user validates archived linked items data is present
    And user clicks on "Work Orders" tab
    Then user validates archived Work Order data is present
    When user clicks on CTI details under sections
    And user clicks on location under sections
    And user clicks on owner under sections
    And user clicks on assignment under sections
    And user clicks on details under sections
    And user clicks on On Hold under sections
    And user clicks on vendor under sections
    And user clicks on attachments under sections
    And user clicks on closure under sections
    Then user validates data is present and matches archive criteria (if applicable)





