@00.05 @Incident @00 @Incident_NonSAO
#Passed
  Feature: Validate Behaviour and options for data field called priority

    Scenario: Validate Behaviour and options for data field called priority


      Given user is on the OneWorkflow login page
      When user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
#      When user clicks on create trouble event
      When user clicks on agent console create trouble event
      And user switches to window 1
      Then trouble record form should appear in new tab
      And user verifies priority field is visible
      Then priority field must be greyed out and not possible for user to alter
#      When user clicks on denmark checkbox under affected BU's
      When user clicks on OP denmark checkbox under affected BU's
      And user enters "Test case 00.05 Validate the Priority Field" in Title field
      And user selects request type as "Customer" on trouble event page
      And user enters description as "Test case 00.05 Validate the Priority Field"
      And user selects impact as "Major" on trouble event page
      And user selects importance as "High"
      And user clicks on save button
#      And user gets ticket value
      And user gets trouble ticket value
      And user validates that priority changes to major
      When user selects search menu as "Open Search Form:Trouble Event"
      And user switches to window 2
      And user enters ticket previously created and searches
      And ticket should be displayed
      And user validates ticket priority as "Major"

