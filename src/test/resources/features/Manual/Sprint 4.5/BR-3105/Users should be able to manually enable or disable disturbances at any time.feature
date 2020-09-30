Feature: Users should be able to manually enable/disable disturbances at any time
  In order to improve brand reputation and satisfy local regulation
  As an Incident Manager
  I want customers and authorities to be notified of service affecting 5G incidents

  Scenario: Service information can be manually activated for 5G incidents
    Given there is an incident with no active service information
    When a user selects a new service information and click 'Enable'
    Then the selected 'Service Information' is 'Activated'

  Scenario: Service information can be manually de-activated for 5G incidents
    Given there is an incident with an active service information
    When the user selects the service information and clicks 'Disable'
    Then the selected 'Service Information' is set to 'Inactive'