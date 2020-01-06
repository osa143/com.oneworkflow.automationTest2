@00.09
@Incident
@00
#passed
  Feature: validation impact field availability in incident record

    Scenario: validation impact field availability in incident record

      Given user is on the OneWorkflow login page
      When user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create trouble event
      And user switches to window 1
      Then trouble record form should appear in new tab
      When user validates impact field availability
      Then multiple statuses "No:Minor:Medium:Major:Critical" should be available in "Impact" dropdown readonly



