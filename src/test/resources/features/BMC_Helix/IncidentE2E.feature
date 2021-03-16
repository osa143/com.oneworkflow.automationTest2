@Incident @Regression
Feature: Incident
  In order to verify incident functionality
  I want to create an incident and process to till end

  Background: Common steps for all scenarios
    Given I navigate to BMC Helix login page "https://helix-demo.ans-digital.com/arsys/shared/login.jsp?/arsys/home"
    When I enter username as "Allen" and password as "@A9P-WwA7_DDMTJ_"
    And I click on login button
    Then I should see BMC helix homepage

  Scenario: Incident End to End
    When I click on applications
    And I click on incident management and click new incident
    Then new incident window should be opened
    When I select "Company*+" as  "Calbro Services"
    And I select customer as Allen
    And I enter summary as "Test summary"
    And I select impact as "1-Extensive/Widespread"
    And l select urgency as "1-Critical"
    And I enter assigned group as "Change Management"
    And I click save button
    Then Incident should be created successfully
    When I open recent tickets and double click on ticket previously created
    Then ticket status should be "Assigned"
    And I click on next stage button
    And I select assignee as "Allen Allbrook"
    And I enter resolution as "Success"
    And I click save button on modify incident page
    And I click on next stage button
    And I select status reason as "Automated Resolution Reported"
    And I click save button on modify incident page
    Then ticket status should be "Resolved"
    When I click on next stage button
    Then ticket status should be "Closed"
    When I click on logout
    Then I should be logged out successfully








