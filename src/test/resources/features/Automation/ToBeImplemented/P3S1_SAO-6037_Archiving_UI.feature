@SAO-6037_Archiving_UI

  Feature: UI Validation on archiving forms
    Scenario: User validates archive forms new UI functionality

      #####INCIDENT#####
      Given user is on the OneWorkflow login page
      And user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user selects search menu as "Open Search Form:Trouble Event"
      And user clicks on advanced search button
      Then user enters "" in the advanced search bar


