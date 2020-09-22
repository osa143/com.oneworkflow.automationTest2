@OP-000002265703

  Feature:
    Scenario:

      Given user is on OW login page and logs in with valid credentials
      Then agent console should be displayed
      When user clicks on change record
      Then change record form should be opened
      And user enters request start as 5 minutes in the future
      Then user enters request end as 15 minutes in the future
      And user fills in mandatory fields then clicks save button
      Then change ticket should be created
      When user adds a CI and selects an affected BU
      And user clicks send button
      Then status should be Assigned
      When a Alarm from TrueSight is sent with same CI between start and end time in CR ticket
      Then OP ticket1 is created
      When user clicks on linked items tab in CR ticket
      And OP ticket created from TrueSight should be present
      Then user should see timeline notification  "Correlation to ticket. Relationship Type: Caused"
      And user waits 15 minutes
      Then container ticket should be created once request end time is reached
      Then user clicks on linked items tab
      And user clicks refresh under linked items tab
      Then user validates OP ticket has been created from escalator
      And user opens container (escalator) ticket
      Then user clicks linked items tab
      And user validates container ticket "Is master of" (TrueSight) child ticket
      And user validates correlation timeline notification
      Then user opens child ticket
      And user click linked items tab
      Then user validates child ticket "Is child of" container ticket
      And user validates correlation timeline notification
      Then user assigns child to "Backup"
      And user clicks save button
      Then user switches to container ticket
      And user unlinks tickets
      Then user validates correlation has been removed in the timeline and linked items
      And user switches to child
      Then user validates correlation has been removed in the timeline and linked items
      And user switches to container ticket
      Then user closes container ticket
      And user validates correlation has been removed in timeline and linked items
      Then user switches to child ticket
      And user validates correlation has been removed in timeline and linked items
      And user switches to agent console
      Then user selects ticket type as "Trouble Ticket"
      And user selects "Exclude Child Tickets"
      Then user validates child ticket is present