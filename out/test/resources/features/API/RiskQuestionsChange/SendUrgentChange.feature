@SendUrgentChange
  #user needs to get the ticket from API
  Feature: Send button on urgent change (API created ticket)
    Scenario: Send button on urgent change (API created ticket)

      Given user is on the OneWorkflow login page
      When user logs in with valid username "ChangeManager1_Automation" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user selects search menu as "Open Search Form:Change Record/Project/Freeze"
      And user enters ticket id as ""
      Then user should see change record ticket
      When user clicks on Send button
      Then error message should display as "Please Provide an answer to all of the risk questions provided"
      When user clicks on risk tab
      Then user validates risk questions are all blank



