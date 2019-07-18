@Search_for_closed_incidents_for_a_specific_Location @Incident
  Feature: closed incident location search
    Scenario: user can search for all countries closed incident tickets

      Given user is on the OneWorkflow login page
      When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user selects search menu as "Open Search Form:Trouble Event"
      Then user should see blank trouble search form
      When user changes status to "Closed"
      And user clicks on "Location" under sections
      And user enters "SE_" in the location ID+ field
      Then user clicks Search on ticket search
      And user should see closed "Swedish" tickets
      When user clicks on main page refresh
      And user changes status to "Closed"
      And user clicks on "Location" under sections
      And user enters "FI_" in the location ID+ field
      Then user clicks Search on ticket search
      And user should see closed "Finland" tickets
      When user clicks on main page refresh
      And user changes status to "Closed"
      And user clicks on "Location" under sections
      And user enters "LT_" in the location ID+ field
      Then user clicks Search on ticket search
      And user should see closed "Lithuania" tickets
      When user clicks on main page refresh
      And user changes status to "Closed"
      And user clicks on "Location" under sections
      And user enters NO_" in the location ID+ field
      Then user clicks Search on ticket search
      And user should see closed "Norway" tickets
      When user clicks on main page refresh
      And user changes status to "Closed"
      And user clicks on "Location" under sections
      And user enters "DK_" in the location ID+ field
      Then user clicks Search on ticket search
      And user should see closed "Denmark" tickets
      When user clicks on main page refresh
      And user changes status to "Closed"
      And user clicks on "Location" under sections
      And user enters "EE_" in the location ID+ field
      Then user clicks Search on ticket search
      And user should see closed "Estonia" tickets

      

