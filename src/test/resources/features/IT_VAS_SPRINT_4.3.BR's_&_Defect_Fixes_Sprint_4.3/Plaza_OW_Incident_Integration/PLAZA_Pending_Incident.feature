@PLAZA_Pending_Incident @PLAZA_Incident_Flow
  #Ticket ID to come from Plaza
Feature: Plaza creation of incident ticket - pending status
  Scenario: user validates plaza incident ticket - OW changes status to Pending

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
    When user changes status to "Pending"
    And user enters on hold to date 5 minutes in the future
    And user enters on hold reason as "Pending ticket test"
    Then user clicks on save button on the problem form
    And user validates ticket status as "Pending"

