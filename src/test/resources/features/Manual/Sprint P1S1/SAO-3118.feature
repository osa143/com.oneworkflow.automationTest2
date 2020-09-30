@SAO-3118

Feature: FEAT-21 External system WSDL validation upgrade
  Scenario: FEAT-21 External system WSDL validation upgrade

#This will be covered with the normal CO system tests, below is just a very basic outline of the generic flow for CO systems


    Given user has access to a third party/CO system
    When user creates a ticket in the third party/CO system and sends towards OW
    And user stores ticket ID
    When user logs into oneworkflow with valid user credentials
    And user searches for the externally created ticket
    Then user should see external ticket
    And user validates ticket information is the same as external system
    Then user updates oneworkflow timeline entry, description and adds an attachment
    And user saves the ticket
    Then user validates updated ticket information is sent to external system
    When user changes status to "Cleared"
    And user enters mandatory fields
    Then user saves ticket
    And ticket should be saved in cleared status and user cant make updates on OW side
    Then user validates updated ticket information is sent to external system
    When user changes the status in CO/TP system to closed
    And user saves ticket
    Then user validates external ticket is closed
    And user validates OW ticket is closed




