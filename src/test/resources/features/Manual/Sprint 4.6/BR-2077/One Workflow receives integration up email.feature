Feature: One Workflow notifies Control Center when TrueSight integration is down
  In order to be able to always manage IT incidents and provide a good service
  As an incident analyst
  I need to be notified when the integration between TrueSight and One Workflow is down

  Scenario: One Workflow receives integration down email when there is already an open integration down incident
    Given there is an open integration down incident
    When One Workflow receives an integration down email from TrueSight
    Then One Workflow should ignore the email and not create a new incident