@Status_field_validation @change
#Passed

  Feature: validation of status field structure
    Scenario: validation of status field structure
      Given user is on the OneWorkflow login page
      And user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create change record
      Then user switches to window 1
      Then change record page should be opened and Change form is displayed
      When user verifies status is read only
      Then user validates ticket status as "New"
#      Then multiple statuses "New" should be available in "Status" dropdown
      And user logsOut and accepts alert

