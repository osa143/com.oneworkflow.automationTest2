@WorkOrder_Negative

  Feature: Work Order Archive Form
    Scenario: User validates archive UI

      Given user is on the OneWorkflow login page
      And user logs in with valid username "" and password as ""
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user selects search menu as "Search Archive Form:Work Order"
      Then user validates "Work Order" archive search form is opened
      When user enters "Assigned" in the "Status" field
      And user clicks on the search button
      Then error message should display as "No matches were found for your qualification. (ARWARN 9296)"
