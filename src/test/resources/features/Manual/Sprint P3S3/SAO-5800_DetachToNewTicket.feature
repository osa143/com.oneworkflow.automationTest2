@SAO-6682

  Feature: user is able to detach one alarm from a ticket and attach it to another
    Scenario: user is able to detach one alarm from a ticket and attach it to another

      Given user has access to Helix
      When user generates an alarm towards Helix
      Then Helix should be able to process alarm(s) and create an incident towards OW
      And user stores ticket ID from Helix
      Then user logs in with valid user and password to OW
      And user opens the ticket with alarms from Helix
      And user validates alarm(s) information is correct
      Then user validates there is at least 2 alarms attached
      When user selects an alarm that isnt primary
      And user clicks on detach and create button
      Then user selects selected rows option
      And user clicks yes button under confirmation window
      Then user validates new OP request is opened with fields populated from original ticket
      And user clicks on the save button
      Then user validates new OP is created successfully
      And user validates detached alarm is appended



