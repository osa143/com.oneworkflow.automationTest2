Feature: MBOSS will be kept up to date with Nokia incidents with active service disturbances and an attached CI
  In order to improve brand reputation and satisfy local regulation
  As an Incident Manager
  I want customers and authorities to be notified of service affecting Nokia incidents

  #Test requires someone from Nokia side to create incidents with all relative information in the ticket, Someone from the MBOSS side is also needed in order to test this (Johan)

  Scenario: Nokia Incidents with active service information and active CIs should be sent to MBOSS Denmark
    Given there is an incident with 'Source' equal to 'Nokia_TTN_DK'
    And there is an active service information
    And there is a CI with an active impact record
    When the MBOSS file automation generates a new file to send to Denmark
    Then the incident and CIs will be included in those files

  Scenario: Nokia Incidents with no active service information should not be sent to MBOSS Denmark
    Given there is an incident with 'Source' equal to 'Nokia_TTN_DK'
    And there is no active service information
    When the MBOSS file automation generates a new file to send to Denmark
    Then the incident and CIs will not be included in those files

  Scenario: Nokia Incidents with no CIs with an active impact record should not be sent to MBOSS Denmark
    Given there is an incident with 'Source' equal to 'Nokia_TTN_DK'
    And there is no CI with an active impact record
    When the MBOSS file automation generates a new file to send to Denmark
    Then the incident and CIs will not be included in those files

  Scenario: Nokia Incidents with a mixture of CIs with active and inactive impact record should only send CIs with active impact records to MBOSS Denmark
    Given there is an incident with 'Source' equal to 'Nokia_TTN_DK'
    And there is an active service information
    And there are some CIs with an active impact record
    And there are some CIs with inactive impact records
    When the MBOSS file automation generates a new file to send to Denmark
    Then the incident will be included in those files
    And the CIs which have active impact records will be included in those files
    And the CIs which have inactive impact records will not be included in those files

  Scenario: Nokia Incidents with in closed, cleared and withdrawn should not be sent to MBOSS Denmark
    Given there is an incident with 'Source' equal to 'Nokia_TTN_DK'
    And the 'Status' is equal to 'Cleared'
#   Or the 'Status' is equal to 'Closed'
#  Or the 'Status' is equal to 'Withdrawn'
    When the MBOSS file automation generates a new file to send to Denmark
    Then the incident and CIs will not be included in those files