@00.09_Validate_Impact_field_availability_in_Incident_record @Incident @00
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
      Then multiple statuses "Application fault:Data Fault:Network Fault:Roaming-Data Fault:Roaming-Voice Fault:Site Fault:Power Fault:Infra Fault:Transmission Fault:Access Fault:TV Fault:Voice Fault:(clear)" should be available in "Fault Type" dropdown



     - Missing
     - Missing

     - Missing
