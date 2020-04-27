@RiskQustion_Normal_Change_field_validation @change


  Feature: validation of Risk Question - Normal Change field structure
    Scenario: validation of Risk Question - Standard Change field structure
      Given user is on the OneWorkflow login page
      And user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create change record
      Then user switches to window 1
      Then change record page should be opened and Change form is displayed
      When user verifies status is read only
      Then user validates ticket status as "New"
      When user enters "Regression - Change Management Process" in the implementation field
      And user enters "Regression - Change Management Process" in the test plan field
      And user enters "Regression - Change Management Process" in the rollback field
      And user enters "Regression - Change Management Process" in the communication plan field
      And user enters "Regression - Change Management Process" in the ver of functionality field
      And user enters "Regression - Change Management Process" in the risk description field
      When user selects request type as "Normal Change"

      Then user selects title as "Mobile:CS Core (Voice)" on Change record page
      And user selects request category as "Software Installation" on change record page
      And user enters description as "TEST TICKET PLEASE IGNORE - Automated Test for Normal Change (Internal Initiator)"
      And user enters reason field as "Regression"
      And user selects priority as "Critical"
      And user enters "Privacy Data: Just Testing" in the change builder field
      Then user enters as "Test Data - Ignore Ticket" in service and customer impact
      And user enters start time as some minutes fast from current sweden time
      And user enters Request End time as some minutes fast from request start time
      And user enters impact duration as "2" minutes
      And user selects estimated impact dropdown as "Degradation of Service"
      And user clicks on save button
      And user waits
      And user clicks on Risk tab
      Then multiple statuses "Impact to other systems/technologies are unclear:Relations to other systems/technologies are clear in order to assess the change impact:(Clear)" should be available in "Answer" dropdown
      And user clicks Risk Question down arrow
      Then multiple statuses "No:Yes:(Clear)" should be available in "Answer" dropdown
      And user clicks Risk Question down arrow
      Then multiple statuses "Change is a common change that has been implemented successfully many times:Implemented successfully before, some problems during implementation:No testing has made or the outcome of the test was failure:Similar changes have been implemented successfully few times:Tested successfully, this is a pilot:(Clear)" should be available in "Answer" dropdown
      And user clicks Risk Question down arrow
      Then multiple statuses "No (longer period of time is required to verify the change):Yes (outcome of the change can be instantly verified):(Clear)" should be available in "Answer" dropdown
      And user clicks Risk Question down arrow
      Then multiple statuses "No:Yes:(Clear)" should be available in "Answer" dropdown
      And user clicks Risk Question down arrow
      Then multiple statuses "Highly complex:Simple:Somewhat complex:(Clear)" should be available in "Answer" dropdown
      And user clicks Risk Question down arrow
      Then multiple statuses "No:Yes:(Clear)" should be available in "Answer" dropdown
      And user logsOut and accepts alert

