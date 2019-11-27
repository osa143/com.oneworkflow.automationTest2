
Feature: Escalation of work order to Ericsson
  In order to efficiently solve incidents and meet customer service level agreements
  As an incident manager
  I need to be able to assign work orders to Ericsson

  Scenario: Sending a work order to the Ericsson system
    Given I have a work order
    And the 'Assignment Profile' is equal to 'Ericsson - FS - SE - B2B'
    And the 'SLA Class' field is not empty
    And the 'Estimated Ready' field is not empty
    And the 'Header' field on the 'B2B Dispatch' tab is not empty
    And the 'Message' field on the 'B2B Dispatch' tab is not empty
    And there is a Swedish mobile CI attached
    And the location detail are not empty
    When I click the 'Save' button
    Then the a create work order message is sent to Ericsson
    And the 'Responsible Group' field in the message is equal to 'ericsson.com/sweden'
    And the 'Counter Party ID' field in the message is equal to 'ericsson.com/b2b_nr3'