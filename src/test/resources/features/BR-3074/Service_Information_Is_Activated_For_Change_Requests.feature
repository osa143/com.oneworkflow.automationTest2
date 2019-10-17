Feature: Service information activation for change requests
  In order to improve brand reputation and satisfy local regulation
  As a Change Manager
  I want customers and authorities to be notified of service affecting changes
  Scenario: Service information is activated for urgent change request
    Given 'Request Type' is 'Urgent'
    And 'Estimated Impact' is 'Loss of Service' Or 'Estimated Impact' is 'Degradation of Service'
    And 'Priority' is 'Critical' Or 'Priority' is 'Major'
    When I change the 'Status' from 'Analysis' to 'Approval Requested'
    Then 'Service Information' is 'Activated'

  Scenario: Service information is activated for normal change request
    Given 'Request Type' is 'Normal'
    And 'Estimated Impact' is 'Loss of Service' Or 'Estimated Impact' is 'Degradation of Service'
    And 'Priority' is 'Critical' Or 'Priority' is 'Major'
    When I change the 'Status' from 'Analysis' to 'Approval Requested'
    Then 'Service Information' is 'Activated'

  Scenario: Service information is activated for standard change request
    Given 'Request Type' is 'Standard'
    And 'Status' is 'New'
    And 'Estimated Impact' is 'Loss of Service' Or 'Estimated Impact' is 'Degradation of Service'
    And 'Priority' is 'Critical' Or 'Priority' is 'Major'
    When the change initiator changes the clicks the 'Send' button
    Then 'Status' changes to 'Assigned'
    And 'Service Information' is 'Activated'
