@workorder_field_validation @workorder_SLAClass_field_validation

  Feature:Work Order SLAClass field validation
    Scenario: SLAClass  field validation

      Given user is on the OneWorkflow login page
      And user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create work order
      Then user switches to window 1
#      Then multiple statuses "DEFAULT:(Clear)" should be available in "SLA Class" dropdown
      And User selects "SLA Class" as dropdownValue and should see values for "notreadonly"
      | DropdownValue | DropdownValuesToBePresent|
      | DEFAULT       |12 Hours repair time:2 Hours repair time:24 Hours repair time:3 Days repair time:3 months repair time:3 weeks repair time:4 Hours repair time:8 Hours repair time:xxh. Work with judged on individual assignments|


