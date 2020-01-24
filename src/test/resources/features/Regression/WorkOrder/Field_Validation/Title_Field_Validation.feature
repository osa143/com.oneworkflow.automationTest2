@workorder_field_validation @workorder_title_field_validation

  Feature:Work Order Title field validation
    Scenario: Work Order field validation

      Given user is on the OneWorkflow login page
      And user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create work order
      Then user switches to window 1
#      Then multiple statuses "(Enterprise Solution Data)\::(Enterprise Solution Speech)\::(Enterprise Solution Speech/Data)\::Alarm Configuration Backup Works:Alarm Test:Antenna Alarm:Backup:Change Analysis Work Order:Connection fault:Connection problem:Core Voice:Crazy RBS:DHCP:DNS:Edge Disabled:FDP:General | Support:GPRS accessibilitet:GPRS problem:Hardware:HomeRun:Incident Analysis Work Order:OneWorkFlow Support Request:Out of order:Planned work:Power:Problem Analysis Work Order:Rectifier Alarm:Reduced Capacity:Repeating defects: Long-term measurement:Repeating defects: Power disruption:RF Loop Test Fault:RX Diversity Lost:Software:Spare parts Site:Temperature Problem:TX Saturation (Micro)" should be available in "Title" dropdown
      And User selects "Title" as dropdownValue and should see values for "notreadonly"


     | DropdownValue | DropdownValuesToBePresent|
     |Core Voice |Roaming:Test|





