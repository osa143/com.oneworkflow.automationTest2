Feature: One Workflow notifies Control Center when TrueSight integration is down
  In order to be able to always manage IT incidents and provide a good service
  As an incident analyst
  I need to be notified when the integration between TrueSight and One Workflow is down

  Scenario: TrueSight sends One Workflow an email when the integration is down
    Given the integration between TrueSight and One Workflow is up
    When the TrueSight detects that the integration is down
    Then TrueSight should send an integration down email to One Workflow