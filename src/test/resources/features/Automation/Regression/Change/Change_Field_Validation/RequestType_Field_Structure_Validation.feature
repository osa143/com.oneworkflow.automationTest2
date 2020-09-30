@change @RequestType_fieldValidation
  #passed

 Feature: validation of change request type field structure
   Scenario: validation of change request type field structure
     Given user is on the OneWorkflow login page
     And user logs in with valid user and password
     Then user successfully logged in to OneWorkflow and agent console should be displayed
     When user clicks on create change record
     Then user switches to window 1
     Then change record page should be opened and Change form is displayed
     And user verifies request type field is visible
     Then multiple statuses "Normal Change:Standard Change:Urgent Change:(clear)" should be available in "Request Type" dropdown readonly
     And user logsOut and accepts alert


