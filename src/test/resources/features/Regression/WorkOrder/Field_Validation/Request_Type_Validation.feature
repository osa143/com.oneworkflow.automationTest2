@workorder_field_validation @workorder_Request_Type_field_validation

  Feature:Work Order Request Type field validation
    Scenario: Request Type field validation

      Given user is on the OneWorkflow login page
      And user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create work order
      Then user switches to window 1
      Then multiple statuses "Analysis:Escalation:EXTERNAL - MOBILE:Implementation:Maintenance:Order Spare Part:SA Request:Service Request:Supplier Action:Third Party:Warranty:(clear)" should be available in "Request Type" dropdown
      And User selects "Request Type" as dropdownValue and should see values for "notreadonly"
     | DropdownValue | DropdownValuesToBePresent|
#     |SA Request |Administration:Configuration:Roaming:Roaming:Support:Test|
     |Service Request |            |


      And user logsOut and accepts alert





