Feature: Service affecting incidents from Nokia should trigger the appropriate disturbance
  In order to improve brand reputation and satisfy local regulation
  As an Incident Manager
  I want customers and authorities to be notified of service affecting Nokia incidents

  #Test requires someone from Nokia side to create incidents, one with degradation of service, one with loss of service and one with no impact, we then check that service info is activated on the tickets with loss of service or degradation of service

  Scenario: Service information is activated for Nokia incidents that are causing a loss of service
    Given there is no already escalated incident with 'Source' equal to 'Nokia_TTN_DK'
    When Nokia creates a new disturbance incident towards One Workflow
    And at least one of the attached CIs has an 'Impact Level equal to 'Loss of Service'
    Then 'Service Information' is 'Activated'

  Scenario: Service information is activated for Nokia incidents that are causing a degradation of service
    Given there is no already escalated incident with 'Source' equal to 'Nokia_TTN_DK'
    When Nokia creates a new disturbance incident towards One Workflow
    And at least one of the attached CIs has an 'Impact Level' equal to 'Degradation of Service'
    Then 'Service Information' is 'Activated'

  Scenario: Service information is not activated for Nokia incidents that are no impacting services
    Given there is no already escalated incident with 'Source' equal to 'Nokia_TTN_DK'
    When Nokia creates a new disturbance incident towards One Workflow
    And all of the attached CIs have an 'Impact Level' equal to 'No Impact'
    Then no 'Service Information' will be activated


