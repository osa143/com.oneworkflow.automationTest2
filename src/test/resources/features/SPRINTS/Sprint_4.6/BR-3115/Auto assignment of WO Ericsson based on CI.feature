Feature: Automatic assignment of work orders Ericsson based on CI
  In order to efficiently solve incidents and meet customer service level agreements
  As an incident manager
  I need to be able to assign work orders to Ericsson

  Scenario: Creating a work order from an incident
    Given I have an incident with a Swedish mobile CI attached
    And the Swedish CI is maintained by Ericsson
    When I create a work order from the incident
    And I click the 'Apply B2B' button
    Then the 'Assignment Profile' field is populated with 'Ericsson - FS - SE - B2B'