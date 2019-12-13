Feature: Clear All message from TeMIP should clear the incident, de-activate the service information, and trigger the auto-closure
  In order to improve brand reputation and satisfy local regulation
  As an Incident Manager
  I want customers and authorities to be notified of service affecting 5G incidents

  Scenario: Clear all message is received from TeMIP
    Given there is an incident with an active service information
    When TeMIP send a clear all message to One Workflow
    Then all activate 'Service Information' are set to 'Inactive'
    And the status is set to 'Cleared'
    And all the impact records are cleared
    And the incident auto-closure is triggered