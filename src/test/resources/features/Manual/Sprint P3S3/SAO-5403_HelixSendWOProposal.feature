@SAO-5403

  Feature: OW sends a list of WO proposal rules to Helix
    Scenario: OW sends a list of WO proposal rules to Helix

      Given user is logged into OW with a valid admin user
      When user selects administration menu as "BMC Remedy:BMC Atrium CMDB Console"
      Then user validates BMC atrium console is opened
      When user selects application launcher option as "Integration Engines:Atrium Integrator"
      Then user validates Atrium Integrator console is shown
      And user selects helix from the "directory to display jobs" dropdown
      Then user selects the "Export_WORules" Job
      And user clicks on the run job button
      Then user waits for job to complete
      And user validates Job is run successfully
      And user validates Helix receives CSV WO rules file (can only validate if with helix access)



