@workorder_field_validation @workorder_Template_field_validation

  Feature:Work Order Template field validation
    Scenario:Work Order Template field validation

      Given user is on the OneWorkflow login page
      And user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create work order
      Then user switches to window 1
      Then multiple statuses "Add or update credit rejection code in NEO CCH:Athene parameter change (DK):Core Data | Roaming:Core Voice:Fokus:General | Support:IMSI load:IP Transport:Minor change/bugfix - no impact:Modify Admin rules:New NP Operator code in Fokus (DK):NS Status activation/change (DK):OSS:Policy Manager DK CR:Premium number ranges (DK):Preventive Maintenance | General:Problem Management:SA Process:SMSC | Roaming:Standard number ranges (DK):Terminals in Fokus:User addition for Tertium GUI in Foton (DK):VAS:(clear)" should be available in "Template" dropdown readonly
      And User selects "Template" as dropdownValue and should see values for "readonly"
     | DropdownValue | DropdownValuesToBePresent|
     |Core Voice     |Core Voice \| Roaming:Core Voice│Blocking MVNO & SP services:Core Voice│CELLdata in CS Core:Core Voice│Configuration Number ranges:Core Voice│Delivery Enterprise Services|
     |Fokus     |Changes in Fokus Security Profiles (DK):Dealers in Fokus (DK):Fokus Batch Runs:Fokus discounts (DK):Fokus letters (DK):Fokus operation (DK):Fokus price and parameter changes (DK):Fokus visitor roaming prices (DK)|
     |IP Transport  |  IP Transport \| Roaming:IP Transport│Firewall │Openings        |
     |OSS:Workflow     |Assignment Profile Request OW|
     |Problem Management     |Data Collection:Resource Allocation Request:Root Cause Analysis:Root Cause Analysis - TASK:Work Around Analysis|
     |SA Process:Improvement/Automation     |SA Process Improvement|
     |VAS:Large Account     |SMS Large Account - DK|

      And user logsOut and accepts alert


