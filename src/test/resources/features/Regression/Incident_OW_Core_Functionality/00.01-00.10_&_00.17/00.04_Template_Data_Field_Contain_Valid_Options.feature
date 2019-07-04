@Template_Data_Field_Contain_Valid_Options @Incident

Feature: Incident
  #incident

  Scenario: user validates behaviour and options for data field template


    Given user is on the OneWorkflow login page
    When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create trouble event
    And user switches to window 1
    Then trouble record form should appear in new tab
    And user verifies template field is visible
    Then multiple statuses "Site access registration:Workforce Escalation-SE:(clear)" should be available in "Template" dropdown
