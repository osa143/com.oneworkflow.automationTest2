Feature: TeMIP creates an incident with a QoS fault code and service information is activated
  In order to improve brand reputation and satisfy local regulation
  As an Incident Manager
  I want customers and authorities to be notified of service affecting QoS site alarm incidents

  #TeMIP creates an QoS incident, service info on ticket should be activated on OW

  Scenario: An incident created with a QoS fault domain will have have service information activated
    Given there is no open incident in One Workflow
    When a fault management system creates an incident
    And the fault domain value is 'QoS'
    Then service information is activated for that incident