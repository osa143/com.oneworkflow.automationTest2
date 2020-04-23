@SAO-5268

  Feature: Truesight customer affecting alarms
    Scenario: user validates TrueSight customer affecting alarms trigger SIA impact analysis

    #Scenario 1: TrueSight creates a new incident and triggers the SIA impact analysis
      Given there is no open TrueSight incident on the CI
      When TrueSight sends an alarm to One Workflow related to the CI
      And the alarm has a 'Customer Affecting' value equal to "Yes"
      Then One Workflow will request an impact analysis on the CI from SIA
      And an CIs that are 'service' type CIs will be added to the impacted CIs table on the TrueSight incident
    #Scenario 2: TrueSight creates a new incident and does not trigger the SIA impact analysis
      Given there is no open TrueSight incident on the CI
      When TrueSight sends an alarm to One Workflow related to the CI
      And the alarm has a 'Customer Affecting' value not equal to "Yes"
      Then One Workflow will not request an impact analysis from SIA
    #Scenario 3: TrueSight appends a new customer affecting alarm to a non-customer affecting incident and triggers the SIA impact analysis
      Given there is an open TrueSight incident on the CI
      And all of the currently attached alarms have a 'Customer Affecting' value not equal to "Yes"
      When TrueSight appends a new alarm to One Workflow related to the CI
      And the alarm has a 'Customer Affecting' value equal to "Yes"
      Then One Workflow will request an impact analysis on the CI from SIA
      And an CIs that are 'service' type CIs will be added to the impacted CIs table on the TrueSight incident
    #Scenario 4: TrueSight updates an existing non-customer affecting alarm to a customer affecting and triggers the SIA impact analysis
      Given there is an open TrueSight incident on the CI
      And all of the currently attached alarms have a 'Customer Affecting' value not equal to "Yes"
      When TrueSight updates one of the alarms in One Workflow
      And the update has a 'Customer Affecting' value equal to "Yes"
      Then One Workflow will request an impact analysis on the CI from SIA
      And an CIs that are 'service' type CIs will be added to the impacted CIs table on the TrueSight incident
