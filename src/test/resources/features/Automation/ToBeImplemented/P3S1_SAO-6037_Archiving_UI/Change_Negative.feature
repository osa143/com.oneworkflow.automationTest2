@Change_Archive_Negative

Feature: Change Archive Form
  Scenario: User validates archive UI

    Given user is on the OneWorkflow login page
    And user logs in with valid username "" and password as ""
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user selects search menu as "Search Archive Form:Change Record/Project/Freeze"
    And user validates "Change" search archive form is opened
    When user selects change type as "Change Project"
    And user enters "Assigned" in the "Status" field
    And user clicks on the search button
    Then error message should display as "No matches were found for your qualification. (ARWARN 9296)" on change record page
    When user selects change type as "Change Record"
    And user enters "Completed" in the "Status" field
    And user clicks on the search button
    Then error message should display as "No matches were found for your qualification. (ARWARN 9296)" on change record page
    When user selects change type as "Change Freeze"
    And user enters "Assigned" in the "Status" field
    And user clicks on the search button
    Then error message should display as "No matches were found for your qualification. (ARWARN 9296)" on change record page

