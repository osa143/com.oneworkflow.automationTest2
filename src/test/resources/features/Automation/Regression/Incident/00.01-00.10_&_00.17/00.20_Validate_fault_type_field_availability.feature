@00.20 @Incident @00
#passed
  Feature: validation Fault type field availability in incident record

    Scenario: validation Fault type field availability in incident record

      Given user is on the OneWorkflow login page
      When user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create trouble event
      And user switches to window 1
      Then trouble record form should appear in new tab
      When user validates fault type dropdown availability
      Then multiple statuses "Access Fault:Application fault:Data Fault:Infra Fault:Network Fault:Power Fault:Roaming-Data Fault:Roaming-Voice Fault:Site Fault:Transmission Fault:TV Fault:Voice Fault:(clear)" should be available in "Fault Type" dropdown
      When user clicks on sweden checkbox under affected BU's
      Then user enters "Test case 00.20 validate options for Fault type" in Title field
      And user selects request type as "Customer" on trouble event page
      And user enters description as "Test case 00.20 validate options for Fault type"
      And user clicks on save button
      Then ticket should be created and status should be assigned
