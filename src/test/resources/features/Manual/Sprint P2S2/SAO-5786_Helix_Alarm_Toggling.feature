@Helix_Alarm_Toggling

Feature: As a fault management system Helix should be able to create incidents
  Scenario: As a fault management system Helix should be able to create incidents

    Given user has access to Helix
    When user generates an alarm towards Helix
    Then Helix should be able to process alarm(s) and create an incident towards OW
    And user stores ticket ID from Helix
    Then user logs in with valid user and password
    And user opens the ticket with alarms from Helix
    Then user validates alarm information/ticket is created/received correctly
    And user validates alarm toggling is present under alarms tab on OW
    Then user sends an append message with alarm status as toggling towards same OW ticket
    And user validates alarm is appended successfully
    And user validates alarm toggling is present under alarms tab on OW
    Then user sends an append message with alarm status not toggling towards same OW ticket
    And user validates alarm is appended successfully
    Then user triggers an update message to the alarm that doesnt have toggling status, to update alarms status to toggling
    And user validates alarm status is updated to be toggling