@SAO_3295 @IncidentCoverage

Feature: SAO-3295 Not able to open attachments in OP tickets.

  Scenario: SAO-3295 Not able to open attachments in OP tickets.

    Given user is on the OneWorkflow login page
    When user logs in with valid user and password
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create trouble event
    And user switches to window 1
    Then trouble record form should appear in new tab
    And user clicks on sweden checkbox under affected BU's
    And user enters "Test SAO-3295" in Title field in Trouble event
    Then user selects request type as "Customer" on trouble event page
    And user enters description as "Test SAO-3295"
    Then user clicks attachments under sections
    And  user adds attachment and verifies under "internal"
      | summary   | description | fullFilePath       | attachments |
      | Test Text | Test Text   | attachement.doc.txt | 1           |
    And user clicks on the added attachment
    Then user clicks attachment open button
    And user switches to window 1
    And user clicks on the added attachment
    Then user clicks attachment open button
    And user switches to window 1
    And  user adds attachment and verifies under "external"
      | summary   | description | fullFilePath       | attachments |
      | Test Text2 | Test Text2   | attachement.doc.txt | 2           |
    And user clicks on the added attachment
    Then user clicks attachment open button
    And user switches to window 1
    And user clicks on the added attachment
    Then user clicks attachment open button
