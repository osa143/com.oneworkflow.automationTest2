@Search_for_closed_incidents_for_a_specific_Location @Incident
  Feature: closed incident location search
    Scenario: user can search for all countries closed incident tickets

      Given user is on the OneWorkflow login page
      When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user selects search menu as "Open Search Form:Trouble Event"
      And user switches to window 1
      Then user should see blank trouble search form
      When user changes status to "Closed" on trouble event page
      And user clicks on location under sections
      And user enters "SE_" within the location ID+ field
      And user switches to frame
      And user should see closed "Swedish" tickets
      And user clicks on cancel button
      And user changes status to "Closed" on trouble event page
      And user enters "FI_" within the location ID+ field
      And user switches to frame
      And user should see closed "Finland" tickets
      And user clicks on cancel button
      And user changes status to "Closed" on trouble event page
      And user enters "LT_" within the location ID+ field
      And user switches to frame
      And user should see closed "Lithuania" tickets
      And user clicks on cancel button
      And user changes status to "Closed" on trouble event page
      And user enters "NO_" within the location ID+ field
      And user switches to frame
      And user should see closed "Norway" tickets
      And user clicks on cancel button
      And user changes status to "Closed" on trouble event page
      And user enters "DK_" within the location ID+ field
      And user switches to frame
      And user should see closed "Denmark" tickets
      And user clicks on cancel button
      And user changes status to "Closed" on trouble event page
      And user enters "EE_" within the location ID+ field
      And user switches to frame
      And user should see closed "Estonia" tickets
      And user clicks on cancel button


      

