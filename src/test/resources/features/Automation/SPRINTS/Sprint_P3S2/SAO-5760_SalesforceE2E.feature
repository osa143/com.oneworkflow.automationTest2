@SAO-5760_SaleforcePending

Feature: E2E process of a Salesforce OP ticket
  Scenario: E2E Process of a Salesforce OP ticket

    Given user has access to Salesforce and is a support rep user
    When user creates a ticket with mandatory information and sends towards OW
    Then user validates that ticket is present within OW
    And user validates ticket information is correct
    And user validates ticket is assigned to correct team
    And user validates OW Ticket ID is seen within Salesforce
    When user triggers an update to the ticket on Salesforce
    Then user validates update from Salesforce is seen on OW ticket 
    When user rejects ticket back to Salesforce
    Then user validates OW ticket is readonly
    And user validates ticket is assigned back to Salesforce
    When Salesforce assign ticket back to OW
    Then user validates OW ticket is editable
    When OW user changes the assigned profile/assignee
    Then user validates update to assignment values is seen in Salesforce
    When user changes status to cleared within OW
    And user enters relative cleared information
    Then user validates cleared message is seen within Salesforce and status is updated
    When user changes status to closed
    And user enters relative closure information
    Then user validates ticket is closed successfully
    And user validates closure is seen in Salesforce as well