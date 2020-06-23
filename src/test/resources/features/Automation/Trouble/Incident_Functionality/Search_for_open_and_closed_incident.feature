@Search_for_open_and_closed_incidents

  Feature: Search for open and closed incidents
    Scenario: Search for open and closed incidents

      Given user is on the OneWorkflow login page
      When user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed





    11:04
      When user selects search menu as "Open Search Form:Trouble Event"
      And user switches to window 1
      Then user should see blank trouble search form
      When user changes status to "Closed" on trouble event page
      And user clicks on location under sections
      And user enters "SE_" within the location ID+
      And user clicks Search on ticket search
      And user should see "Closed" "SE" tickets
      And user clicks on main page refresh
      When user changes status to "Closed" on trouble event page
      And user clicks on location under sections
      And user enters "FI_" within the location ID+
      And user clicks Search on ticket search
      And user should see "Closed" "FI" tickets
      And user clicks on main page refresh
      When user changes status to "Closed" on trouble event page
      And user clicks on location under sections
      And user enters "LT_" within the location ID+
      And user clicks Search on ticket search
      And user should see "Closed" "LT" tickets
      And user clicks on main page refresh
      When user changes status to "Closed" on trouble event page
      And user clicks on location under sections
      And user enters "NO_" within the location ID+
      And user clicks Search on ticket search
      And user should see "Closed" "NO" tickets
      And user clicks on main page refresh
      And user changes status to "Closed" on trouble event page
      And user clicks on location under sections
      And user enters "DK_" within the location ID+
      And user clicks Search on ticket search
      And user should see "Closed" "DK" tickets
      And user clicks on main page refresh
      And user changes status to "Closed" on trouble event page
      And user clicks on location under sections
      And user enters "EE_" within the location ID+
      And user clicks Search on ticket search
      And user should see "Closed" "EE" tickets
      When user changes status to "Assigned" on trouble event page
      And user clicks on location under sections
      And user enters "SE_" within the location ID+
      And user clicks Search on ticket search
      And user should see "Assigned" "SE" tickets
      And user clicks on main page refresh
      When user changes status to "Assigned" on trouble event page
      And user clicks on location under sections
      And user enters "FI_" within the location ID+
      And user clicks Search on ticket search
      And user should see "Assigned" "FI" tickets
      And user clicks on main page refresh
      When user changes status to "Assigned" on trouble event page
      And user clicks on location under sections
      And user enters "LT_" within the location ID+
      And user clicks Search on ticket search
      And user should see "Assigned" "LT" tickets
      And user clicks on main page refresh
      When user changes status to "Assigned" on trouble event page
      And user clicks on location under sections
      And user enters "NO_" within the location ID+
      And user clicks Search on ticket search
      And user should see "Assigned" "NO" tickets
      And user clicks on main page refresh
      And user changes status to "Assigned" on trouble event page
      And user clicks on location under sections
      And user enters "DK_" within the location ID+
      And user clicks Search on ticket search
      And user should see "Assigned" "DK" tickets
      And user clicks on main page refresh
      And user changes status to "Assigned" on trouble event page
      And user clicks on location under sections
      And user enters "EE_" within the location ID+
      And user clicks Search on ticket search
      And user should see "Assigned" "EE" tickets