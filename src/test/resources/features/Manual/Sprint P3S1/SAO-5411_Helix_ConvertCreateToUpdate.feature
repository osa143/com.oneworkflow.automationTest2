@Helix_ConvertToUpdate

  Feature: Helix Convert create to append
    Scenario: user validates create message converts successfully into an append message

      Given user has access to Helix
      When user generates an alarm towards Helix
      Then Helix should be able to process alarm(s) and create an incident towards OW
      And user stores ticket ID from Helix
      Then user logs in with valid user and password to OW
      And user opens the ticket with alarms from Helix
      When user triggers another create message towards OW on the same alarm/CI
      Then user validates create message is converted to an update message and alarm/CI is updated accordingly (if applicable)


