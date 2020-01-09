@validation_changeType_fieldStructure @change
  #failed

  Feature: validation of change type field structure
    Scenario: validation of change type field structure

      Given user is on the OneWorkflow login page
      And user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create change record
      Then user switches to window 1
      Then change record page should be opened and Change form is displayed
      When user validates change type field availability
      Then multiple statuses "Change Project:Change Record:Change Freeze:(clear)" should be available in "Change Type" dropdown
#      Then multiple statuses "Customer Reclamation:Event:Stakeholder:Third Party:(clear)" should be available in "Request Type" dropdown
#      Then multiple options "string" should be available in Title dropdown
      And user logsOut and accepts alert


