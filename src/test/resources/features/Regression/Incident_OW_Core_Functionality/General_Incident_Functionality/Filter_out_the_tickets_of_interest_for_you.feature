@Filter_out_the_tickets_of_interest_for_you @Incident
  Feature: filtering of tickets
    Scenario: user can filter tickets of interest12

      Given user is on the OneWorkflow login page
      When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user selects "Problem" under "All Tickets" dropdown
      Then user should only see change records
      When user selects "Change Record" under "All Tickets" dropdown
      Then user should only see problem tickets
      When user selects "Trouble Ticket" under "All Tickets" dropdown
      Then user should only see trouble tickets
      When user selects "Known Error" under "All Tickets" dropdown
      Then user should only see known error tickets
      When user selects "Work Order" under "All Tickets" dropdown
      Then user should only see work order tickets
      When user selects "All Tickets" under "All Tickets" dropdown
      And user clicks on more filters button
      Then user switches to frame
      And user clicks on more filters "Assignment Profile" tab
      And user enters "Mobile service-FLEN" in the search bar
      Then user clicks on more filters search button
      And user selects shown assignment profile
      And user clicks on more filters add button
      And user clicks on more filters apply button
      And user switches to window 0
      Then user should only see tickets with assigned profile of Mobile service-FLEN
      When user selects "Single Country:Finland" under "All" dropdown
      Then user should only see Finnish tickets with assigned profile of Mobile service-FLEN
