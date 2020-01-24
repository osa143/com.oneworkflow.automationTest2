@workorder_field_validation @workorder_Priority_field_validation

  Feature:Work Order Priority field validation
    Scenario: Priority  field validation

      Given user is on the OneWorkflow login page
      And user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create work order
      Then user switches to window 1
      Then multiple statuses "Unknown:Info:Minor:Major:Critical:Emergency:(Clear)" should be available in "Priority" dropdown
      And user logsOut and accepts alert


