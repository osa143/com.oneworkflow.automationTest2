@Archiving_Tickets

  Feature: Define rules for how long the records should be kept on the main form and on the Archive form
    Scenario: User validates records are archived after the archive date

      #Scenario 1: Trouble Tickets - Closed
      Given user is on the OneWorkflow login page
      And user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user selects search menu as "Search Archive Form:Trouble Event"
      Then user validates Archive Form is shown
      When user enters "" in the ticket ID field
      And user clicks on the search button
      Then user validates archive fields are shown

      #Scenario 1.1: Trouble Tickets - Withdrawn
      Given user is on the OneWorkflow login page
      And user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user selects search menu as "Search Archive Form:Trouble Event"
      Then user validates Archive Form is shown
      When user enters "" in the ticket ID field
      And user clicks on the search button
      Then user validates archive fields are shown

      #Scenario 2: Change Tickets
      Given user is on the OneWorkflow login page
      And user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user selects search menu as "Search Archive Form:Change Record/Project/Freeze"
      Then user validates Archive Form is shown
      When user enters "" in the ticket ID field
      And user clicks on the search button


      #Scenario 3: Problem Tickets
      Given user is on the OneWorkflow login page
      And user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user selects search menu as "Search Archive Form:Problem Record"
      Then user validates Archive Form is shown
      When user enters "" in the ticket ID field
      And user clicks on the search button


      #Scenario 4: Work Order Tickets
      Given user is on the OneWorkflow login page
      And user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      Then user validates Archive Form is shown
      When user enters "" in the ticket ID field
      And user clicks on the search button



