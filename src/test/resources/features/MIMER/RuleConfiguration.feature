@MimerRuleConfiguration

  Feature: Rule Configuration

    #will use the same rule for all 3 tests, create new, update, then delete new so we dont mess with anything else

    Scenario: New rules can be configured using different conditions
      Given I am on the rules configuration form
      When I click the 'New' button
      Then the new rule configuration form is displayed
      When I enter all mandatory rule configuration details
      And I click on save button
      Then new rule should be created successfully

    Scenario: Existing rules can be updated
      Given I am on the rules configuration form
      When I select a existing rule
      And click the 'Open' button
      Then the modify rule configuration form is displayed
      And I update the existing rule and click ok
      Then rule should be updated in the system

    Scenario: Existing rules can be deleted
      Given I am on the rules configuration form
      When I select a existing rule
      And click the 'Delete' button
      Then the warning message should be displayed
      And I click ok button on warning message
      Then rule should be deleted from the system