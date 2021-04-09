@SAO-7759

  Feature: Diagnosis Tab Rehaul

    @SAO_7759_IncidentOW
    Scenario: Incident OW
      Given user is on the OneWorkflow login page
      When user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create trouble event
      And user switches to window 1
      Then trouble record form should appear in new tab
      When user clicks on sweden checkbox under affected BU's
      And user enters "Test Case SAO-7759 - Diagnosis Tab Rehaul - Incident OW" in Title field in Trouble event
      And user selects request type as "Customer" on trouble event page
      And user enters description as "Test Case SAO-7759 - Diagnosis Tab Rehaul - Incident OW"
      And user clicks on save button
      Then ticket should be created and status should be assigned
      When user adds CI "One Workflow" to the ticket with impact level "No Impact"
      Then user validates CI "One Workflow" is listed
      Then user clicks on the related CI impact
      Then user validates CI "One Workflow" is listed under related ci impacts table

    @SAO_7759_IncidentAPI
    Scenario: Incident API
      #Prereq: Ticket created from API with a CI attached
      Given user is on the OneWorkflow login page
      When user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user selects search menu as "Open Search Form:Trouble Event"
      And user switches to window 1
      #to be populated with API ticket ID
      Then user enters ticket id as ""
      Then user validates CI "One Workflow" is listed
      And user clicks on the related CI impact
      Then user validates CI "One Workflow" is listed under related ci impacts table

    @SAO_7759_ChangeOW
    Scenario: Change OW
      Given user is on the OneWorkflow login page
      And user logs in with valid username "ow_basic1" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create change record
      Then change record form should open in a new tab
      When user selects request type as "Standard Change"
      Then user selects template as "All:IT:Other:TEST TEMPLATE [UAT] - Standard Change"
      And user enters "Testing" in the change builder field
      Then user enters request start time 24 hours ahead of current date
      And user enters request end time 28 hours ahead of current date
      Then user selects estimated impact as "No Impact"
      And user enters impact duration as "4" hours
      And user clicks save button
      Then user clicks on Diagnosis tab
      And user adds CI "One Workflow" to change ticket with impact level "No Impact"
      Then user clicks on the related CI impact
      Then user validates CI "One Workflow" is listed under related ci impacts table

    @SAO_7759_ChangeAPI
    Scenario: Change API
      #Prereq: Ticket created from API with a CI attached
      Given user is on the OneWorkflow login page
      When user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user selects search menu as "Open Search Form:Change Record/Project/Freeze"
      #to be populated with API ticket ID
      Then user enters ticket id as ""
      Then user validates CI "One Workflow" is listed
      And user clicks on the related CI impact
      Then user validates CI "One Workflow" is listed under related ci impacts table

