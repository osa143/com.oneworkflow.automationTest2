Feature: Change Requests with Active Service Information are sent to MBOSS
  In order to improve brand reputation and satisfy local regulation
  As a Change Manager
  I want customers and authorities to be notified of service affecting changes via MBOSS

  Scenario: Change requests with active service information and active CIs should be sent to MBOSS
    Given there is an change request with an active service information
    And there is a CI with an active impact record
    When the MBOSS file automation generates a new file to send to the respective country
    Then the change requests and CIs will be included in those files

  Scenario: Change requests with no active service information should not be sent to MBOSS
    Given there is an incident with no active service information
    When the MBOSS file automation generates a new file to send to the respective country
    Then the change requests and CIs will not be included in those files

  Scenario: Change requests with no CIs with an active impact record should not be sent to MBOSS
    Given there is a change request with no CIs with active impact record
    When the MBOSS file automation generates a new file to send to the respective country
    Then the change requests and CIs will not be included in those files

  Scenario: Change Requests with a mixture of CIs with active and inactive impact record should only send CIs with active impact records to MBOSS
    Given there is an change request with an active service information
    And there are some CIs with an active impact record
    And there are some CIs with inactive impact records
    When the MBOSS file automation generates a new file to send to the respective country
    Then the change requests will be included in those files
    And the CIs which have active impact records will be included in those files
    And the CIs which have inactive impact records will not be included in those files

  Scenario: Change requests that affect Denmark will be sent to MBOSS Denmark
    Given there is a change request with with an 'Affected Business Unit' equal to 'Denmark'
    When the MBOSS file automation generates a new file to send
    Then the change request and CIs will not be included in the Denmark MBOSS file

  Scenario: Change requests that affect Norway will be sent to MBOSS Norway
    Given there is a change request with with an 'Affected Business Unit' equal to 'Norway'
    When the MBOSS file automation generates a new file to send
    Then the change request and CIs will not be included in the Norway MBOSS file

  Scenario: Change requests that affect Sweden will be sent to MBOSS Sweden
    Given there is a change request with with an 'Affected Business Unit' equal to 'Sweden'
    When the MBOSS file automation generates a new file to send
    Then the change request and CIs will not be included in the Sweden MBOSS file

  Scenario: Change requests that affect Finland will be sent to MBOSS Finland
    Given there is a change request with with an 'Affected Business Unit' equal to 'Finland'
    When the MBOSS file automation generates a new file to send
    Then the change request and CIs will not be included in the Finland MBOSS file
