@SAO-5402_Helix_Udpdate_Clear

Feature: As a fault management system Helix should be able to update and clear alarms
  Scenario: As a fault management system Helix should be able to update and clear
    Given user has access to Helix
    When user generates an alarm towards Helix
    Then Helix should be able to process alarm(s) and create an incident towards OW
    And user stores ticket ID from Helix
    Then user logs in with valid user and password
    And user opens the ticket with alarms from Helix
    Then user validates alarm information/ticket is created/received correctly
    Then user updates the alarm from Helix towards the same OW ticket
    And user validates alarm is updated successfully
    And user validates alarm information is correct
    Then user sends an update-clear message towards the OW ticket
    And user validates the alarm is cleared in OW
    Then user refreshes page
    And user validates auto close date is updated
    And user validates the alarm is cleared in Helix