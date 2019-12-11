Feature: Users should be able to manually enable/disable disturbances at any time
  In order to improve brand reputation and satisfy local regulation
  As an Incident Manager
  I want customers and authorities to be notified of service affecting Nokia incidents

  #Test requires ticket with active service info, we should then be able to go into this ticket, and manually disable/reenable this again,

  Scenario: Service information can be manually activated for Nokia incidents
    Given there is an incident with 'Source' equal to 'Nokia_TTN_DK'
    And there is no active service information
    When a user selects a new service information and click 'Enable'
    Then the selected 'Service Information' is 'Activated'

  Scenario: Service information can be manually de-activated for Nokia incidents
    Given there is an incident with 'Source' equal to 'Nokia_TTN_DK'
    And there is an active service information
    When the user selects the service information and clicks 'Disable'
    Then the selected 'Service Information' is set to 'Inactive'