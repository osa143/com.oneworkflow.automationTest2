@filter_out_agent_console_and_filter_tickets_of_interest @Incident_NonSAO

  Feature: filter out agent console and filter tickets of interest
    Scenario: filter out agent console and filter tickets of interest

      Given user is on the OneWorkflow login page
      When user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user selects "Problem" under all tickets
      # PB for problem Tickets
      Then user should only see "PB" tickets
      When user selects "Change Record" under all tickets
      # CR for change Tickets
      Then user should only see "CR" tickets
      When user selects "Trouble Ticket" under all tickets
      # OP for trouble Tickets
      Then user should only see "OP" tickets
      When user selects "Known Error" under all tickets
      # KE for known error Tickets
      Then user should only see "KE" tickets
      When user selects "Work Order" under all tickets
      # WO for work order Tickets
      Then user should only see "WO" tickets
      When user selects "All Tickets" under all tickets
      And user clicks on more filters button
      And user clicks on "Assignment Profile" tab
      And user enter in the search as "Mobile service-FLEN" on user more filters window
      Then user clicks search button on more user filters window
      And user selects shown assignment profile
      And user clicks on more filters add button
      And user clicks on apply button on user more filters window
      Then user should only see tickets with "Assignee Profile" of "Mobile service-FLEN"
      When user selects all dropdown as "Single Country:Finland"
      Then user should only see tickets with "Countries" of "Finland"
      When user selects all roles dropdown as "Creator (user level)"
      Then user should only see tickets assigned to current "Owner Profile" as "CC Mob&Access-Common:Problem Manager:Mob PS Core WEST"
