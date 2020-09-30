@SAO-5778_Helix_AutoCloseGracePeriod

  Feature: Helix Autoclose grace period
    Scenario: user validates Autoclose grace period

#[Main] When the last alarm on an incident is cleared then the incident auto-closure should be triggered with a grace period

    #Scenario 1
      Given all alarms related to an incident are cleared except for one alarm that is still active
      When Helix sends an update alarm message to One Workflow for the last alarm
      And the update message has a 'clear time' value populated
      Then One Workflow will update that alarm to cleared status
      And update the incident to cleared status
      And update the auto close time on the incident to the time that the last alarm was updated to cleared(server timestamp when the status of the alarm was changed) + 15 minutes

    #Scenario 2
      Given all alarms related to an incident are cleared
      And the Do not auto-close field is not checked
      And any related work orders are in closed status
      When the auto-close date on the incident elapses
      Then the incident should be moved to closed status

    #Scenario 3
      Given all alarms related to an incident are cleared
      And the Do not auto-close field is not checked
      And any related work orders are in closed status
      When user triggers an update message towards the cleared alarm
      Then user validates ticket status as Assigned
      And user validates auto-close date is cleared
      And user validates timeline entry is made

    #Scenario 4
      Given all alarms related to an incident are cleared
      And the Do not auto-close field is not checked
      And any related work orders are in closed status
      When user triggers an Append message towards the cleared alarm
      Then user validates ticket status as Assigned
      And user validates auto-close date is cleared
      And user validates timeline entry is made







