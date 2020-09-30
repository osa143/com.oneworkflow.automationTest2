@SAO-6042

  Feature: User validates hearbeat notifications are sent to verify if system is down or not
    Scenario: User validates hearbeat notifications are sent to verify if system is down or not


      #Scenario 1
      Given Helix has created a heartbeat ticket towards OW
      When the autoclosure time passes
      And the ticket has the "DoNotAutoClose" checkbox unticked
      Then user validates that once the autoclosure date has been reached, the OW ticket is autoclosed

      #Scenario 2
      Given helix hasnt created a ticket towards OW within 5 minutes for heartbeat verification
      Then oneworkflow will create an incident
      And user validates assigned profile as CC