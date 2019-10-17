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
    And user enters "Test Request" in the plaza request field
    And user enters "cc100cgas001" in the plaza CI field
    And user enters "Test Description" in the plaza description field
    Then user clicks on the plaza submit button
    And user should see ICM number and stores value
    Then user clicks on ICM number
    And user validates internal case management form opens
    When user enters "Test update" in the ticket timeline
    And user clicks on plaza send button
    Then user validates plaza ticket has update to timeline

    Given user is on the OneWorkflow login page
    When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user selects search menu as "Open Search Form:Work Order"
    And user switches to window 1
    Then user should see blank work order form
    When user enters ticket id as ""
    Then user should see plaza work order
      #will need to get the information plaza is sending to validate if its correct
    And user validates ticket information
