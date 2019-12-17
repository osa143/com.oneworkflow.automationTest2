@MimerTriggerTest

  Feature: Triggering Rule Configurations
    Scenario: Triggering Impact Analysis for ACE products

      Given user has triggered manually a truesight alarm into One Workflow
      And user is logged into OneWorkflow
      When user has got the ticket ID from the integraion form
      And user searches for OP ID on trouble search form
      Then user should see Truesight OP ticket
      And user validates source field as "TrueSight"
      And user validates title field as "CUSTOMER_IMPACTED"
      When user clicks on alarms tab
      Then user validates alarm is present
      When user clicks on Diagnosis tab
      Then user validates CI is present
      And user validates impacted CI's from SIA are added into impacted CI's table
      And ID is “SIA ID”
      And Filter is “Full Impact Analysis”
      And Response is “SIA ID”
      And Object is “Incident CI”




