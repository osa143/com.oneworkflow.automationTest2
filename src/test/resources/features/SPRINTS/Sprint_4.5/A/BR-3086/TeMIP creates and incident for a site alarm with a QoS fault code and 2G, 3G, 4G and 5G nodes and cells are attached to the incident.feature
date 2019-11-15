Feature: TeMIP creates and incident for a site alarm with a QoS fault code and 2G, 3G, 4G and 5G nodes and cells are attached to the incident
  In order to improve brand reputation and satisfy local regulation
  As an Incident Manager
  I want customers and authorities to be notified of service affecting QoS site alarm incidents

  #Run test that sends the 2g, 3g 4g and 5g, OW then checks the CMDB from this alarm and adds all nodes to the ticket

  Scenario: 2G, 3G, 5G and 5G nodes and cells are attached to a TeMIP created QoS site alarm incident
    Given there is no open incident in One Workflow for the site alarm
    And there are 2G nodes and cells for the site in the One Workflow CMDB
    And there are 3G nodes and cells for the site in the One Workflow CMDB
    And there are 4G nodes and cells for the site in the One Workflow CMDB
    And there are 5G nodes and cells for the site in the One Workflow CMDB
    When TeMIP creates an incident in One Workflow for the site alarm
    And the fault domain is 'QoS'
    Then all GSM cells with the matching site id will be attached to the incident
    And all NodeB devices with the matching site id will be attached to the incident
    And all UMTS cells with the matching site id will be attached to the incident
    And all eNodeB devices with the matching site id will be attached to the incident
    And all LTE cells with the matching site id will be attached to the incident
    And all gNodeB devices with the matching site id will be attached to the incident
    And all NR cells with the matching site id will be attached to the incident