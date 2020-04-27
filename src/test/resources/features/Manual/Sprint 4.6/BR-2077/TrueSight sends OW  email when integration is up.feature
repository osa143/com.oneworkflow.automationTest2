Feature: One Workflow notifies Control Center when TrueSight integration is up
  In order to be able to always manage IT incidents and provide a good service
  As an incident analyst
  I need to be notified when the integration between TrueSight and One Workflow is down

  Scenario: One Workflow receives integration up email
    Given there is an open integration down incident
    When One Workflow receives an integration up email from TrueSight
    Then the incident should be set to be auto-closed