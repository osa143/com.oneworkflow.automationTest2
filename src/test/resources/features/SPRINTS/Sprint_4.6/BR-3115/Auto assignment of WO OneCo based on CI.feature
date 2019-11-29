Feature: Automatic assignment of work orders OneCo based on CI
  In order to efficiently solve incidents and meet customer service level agreements
  As an incident manager
  I need to be able to assign work orders to OneCo

  Scenario: Creating a work order from an incident
    Given I have an incident with a Norwegian mobile CI attached
    And the Norwegian CI is maintained by OneCo
    When I create a work order from the incident
    And I click the 'Apply B2B' button
    Then the 'Assignment Profile' field is populated with 'OneCo - FS - NO - B2B'