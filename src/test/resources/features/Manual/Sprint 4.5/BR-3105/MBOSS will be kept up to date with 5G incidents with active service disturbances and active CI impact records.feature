Feature: MBOSS will be kept up to date with 5G incidents with active service disturbances and active CI impact records
  In order to improve brand reputation and satisfy local regulation
  As an Incident Manager
  I want customers and authorities to be notified of service affecting 5G incidents

  Scenario: 5G incidents with active service information and active CIs should be sent to MBOSS
    Given there is an incident with an active service information
    And there is a CI with an active impact record
    When the MBOSS file automation generates a new file to send to MBOSS
    Then the incident and CIs will be included in those files

  Scenario: 5G incidents with no active service information should not be sent to MBOSS
    Given there is an incident with no active service information
    When the MBOSS file automation generates a new file to send to MBOSS
    Then the incident and CIs will not be included in those files

  Scenario: 5G incidents with no CIs with an active impact record should not be sent to MBOSS
    Given there is an incident with no CI with an active impact record
    When the MBOSS file automation generates a new file to send to MBOSS
    Then the incident and CIs will not be included in those files

  Scenario: 5G incidents with a mixture of CIs with active and inactive impact record should only send CIs with active impact records to MBOSS
    Given there is an incident with an active service information
    And there are some CIs with an active impact record
    And there are some CIs with inactive impact records
    When the MBOSS file automation generates a new file to send to MBOSS
    Then the incident will be included in those files
    And the CIs which have active impact records will be included in those files
    And the CIs which have inactive impact records will not be included in those files

  Scenario: 5G incidents with in closed, cleared and withdrawn should not be sent to MBOSS
    Given there is an incident with a 'Status' is equal to 'Cleared', 'Closed' or 'Withdrawn'
    When the MBOSS file automation generates a new file to send to MBOSS
    Then the incident and CIs will not be included in those files