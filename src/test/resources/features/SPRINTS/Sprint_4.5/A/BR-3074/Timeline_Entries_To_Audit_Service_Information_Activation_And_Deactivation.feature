Feature: Timeline Entries to Audit Service Information Activation and Deactivation
  In order to provide better auditing of the sending and stopping of disturbance information
  As a Change Manager
  I want visibility of who has been activating and deactivating service information and when this occurred

  Scenario: Service information is activated
    Given a change request has no active service information
    When a service information is activated
    Then a timeline entry is added with the service information text
    And when it was activated
    And who activated it

  Scenario: Service information is deactivated
    Given a change request has an active service information
    When a service information is deactivated
    Then a timeline entry is added with the service information text
    And when it was deactivated
    And who deactivated it
