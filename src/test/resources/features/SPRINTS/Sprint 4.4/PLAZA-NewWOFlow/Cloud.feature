@Cloud @PlazaWONew
  #Have added ID's for the fields as well, should be correct

Feature: New WO flow Plaza
  Scenario: Cloud - New WO flow Plaza

    Given user is on the Plaza login page
    When user enters username "testauto" and password as "test123" and clicks on login
    Then user should see the plaza home page
    When user enters "Ask" in plaza search box
    And user opens internal case form
    Then user should see internal case form appear
    And user selects "IT Infrastructure" under Service area dropdown
    And user selects "Cloud" under Service area category dropdown
    And user selects service as "Skypoint - private cloud"
    And user enters "Test Request" in the plaza request field
    And user enters "cc100cgas001" in the plaza CI field
    And user enters "Test Description" in the plaza description field
    Then user clicks on submit button on plaza form
    And user gets plaza request id
    And user clicks on plaza request id
    And user validates internal case management form opens
    When user enters "Test Update" in the ticket timeline
    And user clicks on plaza send button
    Then user validates plaza ticket has update to timeline
    And user opens new tab
    Given user is on the OneWorkflow login page
    When user logs in with valid user and password
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user selects search menu as "Open Search Form:Work Order"
    And user switches to window 2
    Then user should see blank work order form
    When user enters plaza request id in the source id field
    And user clicks on the search button
