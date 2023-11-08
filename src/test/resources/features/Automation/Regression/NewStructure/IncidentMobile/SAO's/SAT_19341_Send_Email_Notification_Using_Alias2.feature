@SAT_19341

  Feature: SAT-19341
    Scenario: SAT-19341

      Given user is on the OneWorkflow login page
      When user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create trouble event
      And user switches to window 1
      Then trouble record form should appear in new tab
      When user clicks on sweden checkbox under affected BU's
      And user enters "Test SAO-19341" in Title field in Trouble event
      And user selects request type as "Customer" on trouble event page
      And user enters description as "Test SAO-19341"
      And user clicks on save button
      Then ticket should be created and status should be assigned
      When user clicks on Diagnosis tab
      And user clicks on CI search button
