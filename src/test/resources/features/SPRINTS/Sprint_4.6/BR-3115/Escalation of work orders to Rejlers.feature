Feature: Escalation of work orders to Rejlers
  In order to efficiently solve incidents and meet customer service level agreements
  As an incident manager
  I need to be able to assign work orders to Rejlers

  Scenario: Sending a work order to the Rejlers system
    Given I have a work order
    And the 'Assignment Profile' is equal to 'Rejlers - FS - NO - B2B'
    And the 'SLA Class' field is not empty
    And the 'Estimated Ready' field is not empty
    And the 'Header' field on the 'B2B Dispatch' tab is not empty
    And the 'Message' field on the 'B2B Dispatch' tab is not empty
    And there is a Swedish mobile CI attached
    And the location detail are not empty
    When I click the 'Save' button
    Then the a create work order message is sent to Rejlers
    And the 'Responsible Group' field in the message is equal to 'rejlers.no'
    And the 'Counter Party ID' field in the message is equal to 'rejlers.no/b2b_nr2'