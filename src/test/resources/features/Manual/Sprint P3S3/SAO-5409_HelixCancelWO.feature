@SAO-5409

  Feature: Cancel WO Scenario
    Scenario: Cancel WO Scenario

      #Scenario 1: Withdrawn WO successfully
      Given user has a created OP ticket with active alarms from Helix that has a linked WO
      And the WO is in assigned status with the do not autoclose checkbox unticked
      When user clears all active alarms within the OP ticket
      Then user validates linked WO is withdrawn

      #Scenario 2: WIP WO, doesnt get withdrawn
      Given user has a created OP ticket with active alarms from Helix that has a linked WO
      And the WO is in work in progress status
      When user clears all active alarms within the OP ticket
      Then user validates linked WO doesnt get withdrawn





