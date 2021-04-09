@Archiving_SIDConsole

  Feature: Define rules for how long the records should be kept on the main form and on the Archive form
    Scenario: User validates records are archived after the archive date

      #Scenario 1: Trouble Tickets
      Given user is on the OneWorkflow login page
      And user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user selects SID console from agent console
      Then SID console page should be opened
      When user enters "SE_UMTSCell_560571" within the name+ field
      And user selects archived data radio button
      And user clicks on CI search button
      Then user validates CI "SE_UMTSCell_560571" is listed
      When user clicks on the show history button
      Then user validates that archived entries are shown


