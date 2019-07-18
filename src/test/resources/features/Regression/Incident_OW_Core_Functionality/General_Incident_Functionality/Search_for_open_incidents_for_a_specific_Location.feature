@Search_for_open_incidents_for_a_specific_Location @Incident
Feature: open incident location search
  Scenario: user can search for all countries open incident tickets

    Given user is on the OneWorkflow login page
    When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user selects search menu as "Open Search Form:Trouble Event"
    Then user should see blank trouble search form
    When user changes status to "Assigned"
    And user clicks on "Location" under sections
    And user enters "SE_" in the location ID+ field
    Then user clicks Search on ticket search
    And user should see assigned "Swedish" tickets
    When user clicks on main page refresh
    And user changes status to "Assigned"
    And user clicks on "Location" under sections
    And user enters "FI_" in the location ID+ field
    Then user clicks Search on ticket search
    And user should see assigned "Finland" tickets
    When user clicks on main page refresh
    And user changes status to "Assigned"
    And user clicks on "Location" under sections
    And user enters "LT_" in the location ID+ field
    Then user clicks Search on ticket search
    And user should see assigned "Lithuania" tickets
    When user clicks on main page refresh
    And user changes status to "Assigned"
    And user clicks on "Location" under sections
    And user enters NO_" in the location ID+ field
    Then user clicks Search on ticket search
    And user should see assigned "Norway" tickets
    When user clicks on main page refresh
    And user changes status to "Assigned"
    And user clicks on "Location" under sections
    And user enters "DK_" in the location ID+ field
    Then user clicks Search on ticket search
    And user should see assigned "Denmark" tickets
    When user clicks on main page refresh
    And user changes status to "Assigned"
    And user clicks on "Location" under sections
    And user enters "EE_" in the location ID+ field
    Then user clicks Search on ticket search
    And user should see assigned "Estonia" tickets
