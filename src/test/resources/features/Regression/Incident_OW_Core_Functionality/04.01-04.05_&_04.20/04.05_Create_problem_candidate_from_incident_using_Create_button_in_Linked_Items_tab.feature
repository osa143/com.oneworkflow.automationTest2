@04.05
@Incident
@04
  #passed
  Feature: create problem candidate from incident using create button in linked items
    Scenario: create problem candidate from incident using create button in linked items

      Given user is on the OneWorkflow login page
      When user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create trouble event
      And user switches to window 1
      Then trouble record form should appear in new tab
      When user clicks on sweden checkbox under affected BU's
      And user enters "Test case 04.05 Create Problem Candidate From Incident" in Title field in Trouble event
      And user selects request type as "Customer" on trouble event page
      And user enters description as "Test case 04.03 Create Problem Candidate From Incident"
      And user clicks on save button
      Then ticket should be created and status should be assigned
      And user gets trouble ticket value
      When user clicks on linked items tab
      And user selects target application first dropdown as "OS3 - Problem"
      And user selects target application second dropdown as "Investigates"
      Then user clicks on create button under linked items
      And user switches to window 2
      When user selects request type as "Carrier:INFRA:Infrastructure" in problem form
      And user selects impact type as "Moderate/Limited"
      And user selects urgency as "Low"
      Then user clicks on save button
      And ticket should be created and status should be assigned
      And user gets ticket value
      When user clicks on linked items tab
      Then user validates 1 linked ticket availability
      Then change should also be reflected in the timeline as "Correlation to ticket " for OP ticket
      When user switches to window 1
      And user clicks on linked items tab
      Then user validates 1 linked ticket availability
      Then change should also be reflected in the timeline as "Correlation to ticket " for PB ticket


