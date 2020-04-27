Feature: TeMIP appends an alarm to the existing site alarm incident
  In order to improve brand reputation and satisfy local regulation
  As an Incident Manager
  I want customers and authorities to be notified of service affecting QoS site alarm incidents

  #Send alarms to OW – check alarms are there, append another alarm to ticket within OW, check that alarms are there

  Scenario: TeMIP appends a cell alarm to an incident with a site alarm
    Given there is an open site alarm incident in One Workflow
    When TeMIP appends a cell alarm using the incident id of the incident with the site alarm
    Then no incident will be created
    And the alarm will be appended to the existing site alarm incident