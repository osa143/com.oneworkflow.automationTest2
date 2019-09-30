@Auto_Assignment_For_Appropriate_Assignment_Group  @AutoAssignment


Feature: Incidents that match an assignment rule will be assigned to the appropriate assignment group
  In order to more efficiently respond to incidents and provide a good customer service
  As an Incident Manager
  I want to have incidents automatically assigned to an appropriate support groups


  Background:
    Given user is on the OneWorkflow login page
    When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed

  Scenario: An assignment rule with EQUAL condition on title field that matches title field on manually created incidents will be used to assign the incident
    Given I am on the create incident screen
    And all mandatory information has been populated including the title field
    And there is an existing active assignment rule with an EQUAL condition on the title field that is equal to the title on the incident
    When I click the 'Save' button
    Then the incident is saved to the database
    And the 'Status' is 'Assigned'
    And the 'Assignment Profile' is set based on the 'Assignment Profile' of the matching assignment rule

  Scenario: An assignment rule with EQUAL condition on title field that matches title field on external system created incidents will be used to assign the incident
    Given there an incident has not been created yet
    And there is an existing active assignment rule with an EQUAL condition on the title field
    When a create incident message is received from another system
    And the message is a functional escalation
    And there are no errors
    And the title field of the newly created incident is equal to the title field on an assignment rule
    Then the incident is saved to the database
    And the 'Status' is 'Assigned'
    And the 'Assignment Profile' is set based on the 'Assignment Profile' of the matching assignment rule

  Scenario: An assignment rule with LIKE condition on title field that matches part of title field on manually created incidents will be used to assign the incident
    Given I am on the create incident screen
    And all mandatory information has been populated including the title field
    And there is an existing active assignment rule with a LIKE condition on the title field that matches part of the title on the incident
    When I click the 'Save' button
    Then the incident is saved to the database
    And the 'Status' is 'Assigned'
    And the 'Assignment Profile' is set based on the 'Assignment Profile' of the matching assignment rule

  Scenario: An assignment rule with LIKE condition on title field that matches part of title field on external system created incidents will be used to assign the incident
    Given there an incident has not been created yet
    And there is an existing active assignment rule with a LIKE condition on the title field
    When a create incident message is received from another system
    And the message is a functional escalation
    And there are no errors
    And part of the title field of the newly created incident matches the title field on an assignment rule
    Then the incident is saved to the database
    And the 'Status' is 'Assigned'
    And the 'Assignment Profile' is set based on the 'Assignment Profile' of the matching assignment rule

  Scenario: When no matching assignment rules exist then manually created incidents will not be automatically assigned
    Given I am on the create incident screen
    And all mandatory information has been populated including the title field
    And there are no assignment rules that should match based on the title field
    When I click the 'Save' button
    Then the incident is saved to the database
    And the 'Status' is 'New'
    And the 'Assignment Profile' is empty

  Scenario: When no matching assignment rules exist then external system created incidents will not be automatically assigned
    Given there an incident has not been created yet
    When a create incident message is received from another system
    And the message is a functional escalation
    And there are no errors
    And there are no assignment rules that should match based on the title field
    Then the incident is saved to the database
    And the 'Status' is 'New'
    And the 'Assignment Profile' is empty





