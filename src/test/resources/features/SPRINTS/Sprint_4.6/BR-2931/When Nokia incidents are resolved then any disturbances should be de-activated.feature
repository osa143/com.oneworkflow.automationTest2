Feature: Resolved service affecting incidents from Nokia should trigger the de-activating of service information
  In order to improve brand reputation and satisfy local regulation
  As an Incident Manager
  I want customers and authorities to be notified of service affecting Nokia incidents

  #Test requires someone from Nokia side to create incidents with all relative information, when they send the resolved message, we then check that the resolved message is received

  Scenario: Service information is de-activated for Nokia incidents when the incident is resolved by Nokia
    Given there is an incident with 'Source' equal to 'Nokia_TTN_DK'
    And there is an active service information
    When Nokia updates the disturbance incident in One Workflow to 'Cleared' status
    Then all activate 'Service Information' are set to 'Inactive'