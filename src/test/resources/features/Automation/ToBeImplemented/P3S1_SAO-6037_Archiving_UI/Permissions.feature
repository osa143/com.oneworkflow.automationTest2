@SAO-6037_Archiving_UI

  Feature: UI Validation on archiving forms
    Scenario: Validation of permissions for archive forms

      # Scenario 1 - No Permissions
      Given user is on the OneWorkflow login page
      And user logs in with valid username "" and password as ""
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      And user validates search menu options as "<Invalid>"

      #Scenario 2 - Valid Permissions (Admin)
      Given user is on the OneWorkflow login page
      When user logs in with valid username "" and password as ""
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      And user validates search menu as "<Valid>"



      |Invalid         |Valid              |
      |Open Search Form|Open Search Form   |
      |Search For      |Search Archive Form|
      |                |Search For         |










