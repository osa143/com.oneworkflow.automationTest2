@SAO-4422
Feature: Fault management system outbound ack validation
  Scenario: Fault management system outbound ack validation
#TEMIP# *CreateIncidentInbound*
    Given user has access to TeMIP system
    When user sends an alarm towards TeMIP
    And user searches for the alarm and creates a ticket from alarm (or gets rage created ticket ID)
    Then user Logs into OW using valid username/password
    And user searches for TeMIP created ticket
    And user validates ticket is created successfully with alarms and CI's appended
    And user stores ticket ID for next update test
# *UpdateIncidentInbound*
    Given user has a ticket created from TeMIP with Alarms
    When user modifies alarm information from TeMIP and sends towards OW
    Then user searches for ticket
    And user validates update is seen on OW
    And user stores ticket ID for Append test
# AppendAlarmInbound
    Given user has a ticket created from TeMIP with Alarms
    When user appends alarm to existing OW ticket from TeMIP
    And user searches for ticket within OW and validates alarms are appended successfully
    And user clears alarms in OW
    When user changes status to cleared
    And user enters closure code details
    And user clears CI impact
    Then user saves ticket
    When user changes status to closed
    And user enters remaining mandatory fields
    And user saves ticket
    Then ticket should be saved and closed
#TRUESIGHT# *CreateIncidentInbound*
    Given user has access to TrueSight system
    When user sends an alarm towards Truesight
    And user searches for the alarm and creates a ticket from alarm (or gets rage created ticket ID)
    Then user Logs into OW using valid username/password
    And user searches for TrueSight created ticket
    And user validates ticket is created successfully with alarms and CI's appended
    And user stores ticket ID for next update test
# *UpdateIncidentInbound*
    Given user has a ticket created from TrueSight with Alarms
    When user modifies alarm information from TeMIP and sends towards OW
    Then user searches for ticket
    And user validates update is seen on OW
    And user stores ticket ID for Append test
# AppendAlarmInbound
    Given user has a ticket created from TrueSightwith Alarms
    When user appends alarm to existing OW ticket from TrueSight
    And user searches for ticket within OW and validates alarms are appended successfully
    And user clears alarms in OW
    When user changes status to cleared
    And user enters closure code details
    And user clears CI impact
    Then user saves ticket
    When user changes status to closed
    And user enters remaining mandatory fields
    And user saves ticket
    Then ticket should be saved and closed