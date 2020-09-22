@SAO-5412

  Feature: User validates append message converts to append if alarm/CI already exists
    Scenario: User validates append message converts to append if alarm/CI already exists

      Given user has access to Helix
      When user generates an alarm towards Helix
      Then Helix should be able to process alarm(s) and create an incident towards OW
      And user stores ticket ID from Helix
      Then user logs in with valid user and password to OW
      And user opens Helix created ticket
      When user generates an append message on a CI/Alarm that already exists in OW
      Then user validates append message is converted to an update message and alarm is updated