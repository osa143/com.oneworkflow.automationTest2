Feature: Change Requests with Active Service Information are sent to MBOSS
  In order to improve brand reputation and satisfy local regulation
  As a Change Manager
  I want customers and authorities to be notified of service affecting changes via MBOSS

  #Test requires us to send a CR with no active service info and someone on the MBOSS side needs to check the CR cannot be found (or maybe someone on OW side to look at outgoing logs and verify its not there)
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


  #Test requires us to send a CR, with random CI’s that have inactive and active impact records, we then validate only the active records are sent to MBOSS (Johan needed to check MBOSS side)
  Scenario: Change Requests with a mixture of CIs with active and inactive impact record should only send CIs with active impact records to MBOSS
    Given there is an change request with an active service information
    And there are some CIs with an active impact record
    And there are some CIs with inactive impact records
    When the MBOSS file automation generates a new file to send to the respective country
    Then the change requests will be included in those files
    And the CIs which have active impact records will be included in those files
    And the CIs which have inactive impact records will not be included in those files


  #Test requires us to send a CR for DENMARK with active impact records, we then validate its sent to MBOSS Denmark
  Scenario: Change requests that affect Denmark will be sent to MBOSS Denmark
    Given there is a change request with with an 'Affected Business Unit' equal to 'Denmark'
    When the MBOSS file automation generates a new file to send
    Then the change request and CIs will not be included in the Denmark MBOSS file

  #Test requires us to send a CR for NORWAY with active impact records, we then validate its sent to MBOSS NORWAY
  Scenario: Change requests that affect Norway will be sent to MBOSS Norway
    Given there is a change request with with an 'Affected Business Unit' equal to 'Norway'
    When the MBOSS file automation generates a new file to send
    Then the change request and CIs will not be included in the Norway MBOSS file

  #Test requires us to send a CR for SWEDEN with active impact records, we then validate its sent to MBOSS Finland
  Scenario: Change requests that affect Sweden will be sent to MBOSS Sweden
    Given there is a change request with with an 'Affected Business Unit' equal to 'Sweden'
    When the MBOSS file automation generates a new file to send
    Then the change request and CIs will not be included in the Sweden MBOSS file

  #Test requires us to send a CR for FINLAND with active impact records, we then validate its sent to MBOSS Finland
  Scenario: Change requests that affect Finland will be sent to MBOSS Finland
    Given there is a change request with with an 'Affected Business Unit' equal to 'Finland'
    When the MBOSS file automation generates a new file to send
    Then the change request and CIs will not be included in the Finland MBOSS file
