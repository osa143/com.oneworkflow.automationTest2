@SAO-4954

  Feature: Define rules for how long the records should be kept on the main form and on the Archive form
    Scenario: User validates records are archived after the archive date

      #Secnario 1: Tickets
      #Trouble
      Given user is on the OneWorkflow login page
      And user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user selects search menu as "Open Search Form:Trouble Event"
      And user clicks on advanced search button
      Then user enters "" in the advanced search bar
      And user clicks on the search button
      Then user validates no tickets are found
      #Secnario 1: Tickets
      #Change
      Given user is on the OneWorkflow login page
      And user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user selects search menu as "Open Search Form:Change Record/Project/Freeze"
      And user clicks on advanced search button
      Then user enters "" in the advanced search bar
      And user clicks on the search button
      Then user validates no tickets are found
      #Secnario 1: Tickets
      #Problem
      Given user is on the OneWorkflow login page
      And user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user selects search menu as "Open Search Form:Problem Record"
      And user clicks on advanced search button
      Then user enters "" in the advanced search bar
      And user clicks on the search button
      Then user validates no tickets are found
      #Secnario 1: Tickets
      #Work Order
      Given user is on the OneWorkflow login page
      And user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user selects search menu as "Open Search Form:Work Order"
      And user clicks on advanced search button
      Then user enters "" in the advanced search bar
      And user clicks on the search button
      Then user validates no tickets are found

