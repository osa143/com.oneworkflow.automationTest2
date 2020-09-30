@SAO-5663 @Helix_Append

Feature: As a fault management system Helix should be able to create incidents
  Scenario: As a fault management system Helix should be able to create incidents

    Given user has a ticket created from Helix with an alarm present
    When user appends another alarm towards the same ticket
    Then user validates new alarm is appended successfully
