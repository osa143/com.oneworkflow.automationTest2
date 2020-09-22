@SAO-5787_Helix_AlarmCounterUpdate

  Feature: Alarm counter should be updated on create/append/update messages
    Scenario: user validates alarm counter is updated for create/update/append messages

      Given user has access to Helix
      When user generates an alarm towards Helix
      Then Helix should be able to process alarm(s) and create an incident towards OW
      And user stores ticket ID from Helix
      Then user logs in with valid user and password to OW
      And user opens the ticket with alarms from Helix
      Then user validates alarm counter is set to 0
      When user triggers an update message towards the same ticket
      Then user validates alarm counter is updated
      When user triggers another create message on same CI (which should convert to an append)
      Then user validates alarm counter is updated