@SAO-5662 @Helix_Create

  Feature: As a fault management system Helix should be able to create incidents
    Scenario: As a fault management system Helix should be able to create incidents

      Given user has access to Helix
      When user generates an alarm towards Helix
      Then Helix should be able to process alarm(s) and create an incident towards OW
      And user stores ticket ID from Helix
      Then user logs in with valid user and password
      And user opens the ticket with alarms from Helix
      Then user validates alarm information/ticket is created/received correctly