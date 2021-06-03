@SAO-7759

  Feature: Diagnosis Tab Rehaul

    @SAO_7759_IncidentOW @SAO_7759_OW
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
      And user selects CI "One Workflow"
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
      And user selects CI "One Workflow"
      Then user validates CI "One Workflow" is listed under related ci impacts table

    @SAO_7759_ChangeOW @SAO_7759_OW
    Scenario: Change OW
      Given user is on the OneWorkflow login page
      And user logs in with valid username "ow_basic1" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create change record
      And user switches to window 1
      Then change record form should open in a new tab
      When user selects request type as "Standard Change"
      Then user selects template as "All:IT:Other:TEST TEMPLATE [UAT] - Standard Change"
      And user enters "Testing" in the change builder field
      Then user enters request start time 48 hours ahead of current date
      And user enters request end time 52 hours ahead of current date
      Then user selects estimated impact as "No Impact"
      And user enters impact duration as "4" hours
      And user clicks save button
      Then user clicks on Diagnosis tab
      And user adds CI "One Workflow" to change ticket with impact level "No Impact"
      Then user clicks on the related CI impact
      And user selects CI "One Workflow"
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
      And user selects CI "One Workflow"
      Then user validates CI "One Workflow" is listed under related ci impacts table

      @SAO_7759_ProblemOW @SAO_7759_OW
      Scenario: Problem OW
        Given user is on the OneWorkflow login page
        When user logs in with valid username "Tohall_copy" and password as "Test@1234"
        Then user successfully logged in to OneWorkflow and agent console should be displayed
        When user clicks on create problem record
        And user switches to window 1
        Then problem record form should appear in new tab
        When user creates problem ticket with below details
          |               Title                  |RequestType            |Description                        |ImpactType      |Urgency|
          |Proactive investigation of frvi96_auto|XX_Test:Functional Test|Diagnosis Tab Rehaul PB            |Moderate/Limited|Low    |
        Then ticket should be created and status should be assigned
        When user clicks on Diagnosis tab
        When user adds CI "One Workflow" to the ticket with impact level "No Impact"
        Then user clicks on the related CI impact
        And user selects CI "One Workflow"
        Then user validates CI "One Workflow" is listed under related ci impacts table

      @SAO_7759_ProblemAPI
      Scenario: Problem API
        #Prereq: Ticket created from API with a CI attached
        Given user is on the OneWorkflow login page
        When user logs in with valid user and password
        Then user successfully logged in to OneWorkflow and agent console should be displayed
        When user selects search menu as "Open Search Form:Problem Record"
      #to be populated with API ticket ID
        Then user enters ticket id as ""
        Then user validates CI "One Workflow" is listed
        And user clicks on the related CI impact
        And user selects CI "One Workflow"
        Then user validates CI "One Workflow" is listed under related ci impacts table

      @SAO_7759_WorkOrderOW @SAO_7759_OW
      Scenario: WorkOrder OW
        Given user is on the OneWorkflow login page
        And user logs in with valid user and password
        Then user successfully logged in to OneWorkflow and agent console should be displayed
        When user clicks on create work order
        Then user switches to window 1
        When user enters title as "Diagnosis Tab Rehaul - WO"
        And user selects request type as "Maintenance" on work order page
        And user enters description as "Diagnosis Tab Rehaul - WO"
        And user selects priority as "Info"
        Then user clicks on save button
        When user clicks on "Diagnosis" tab
        Then user adds CI "One Workflow" to the ticket with impact level "No Impact"
        Then user clicks on the related CI impact
        And user selects CI "One Workflow"
        Then user validates CI "One Workflow" is listed under related ci impacts table

      @SAO_7759_WorkOrderAPI
      Scenario: WorkOrder API
        #Prereq: Ticket created from API with a CI attached
        Given user is on the OneWorkflow login page
        When user logs in with valid user and password
        Then user successfully logged in to OneWorkflow and agent console should be displayed
        When user selects search menu as "Open Search Form:Work Order"
      #to be populated with API ticket ID
        Then user enters ticket id as ""
        Then user validates CI "One Workflow" is listed
        And user clicks on the related CI impact
        And user selects CI "One Workflow"
        Then user validates CI "One Workflow" is listed under related ci impacts table


