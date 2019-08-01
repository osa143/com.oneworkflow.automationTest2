@PLAZA_Reject_Incident @PLAZA_Incident_Flow
  #Ticket ID to come from Plaza
Feature: Plaza creation of incident ticket - OW Rejects Incident
  Scenario: user validates plaza incident ticket - OW Rejects Incident

    Given user is on the OneWorkflow login page
    When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user selects search menu as "Open Search Form:Trouble Event"
    And user switches to window 1
    Then user should see blank trouble search form
    When user enters ticket id as ""
    Then user should see plaza incident ticket
    #will need to get the information plaza is sending to validate if its correct
    And user validates ticket information
    When user clicks on reject button
    And user adds rejection reason as "Testing"
    Then user clicks on save button
    Then ticket should be rejected towards Plaza
    #Need to verify on plaza side that ticket is rejected

