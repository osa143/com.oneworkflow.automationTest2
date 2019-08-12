@05.05_Validate_closure_codes_structure_and_availability @Incident
  #passed
  Feature: validation of closure codes
    Scenario: user validates fault position, cause and action fields on incident ticket

      Given user is on the OneWorkflow login page
      When user logs in with valid username "Change_Automation_1" and password as "Telia@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create trouble event
      And user switches to window 1
      Then trouble record form should appear in new tab
      When user clicks on sweden checkbox under affected BU's
      And user enters "Test case 05.05 Validate Closure Codes" in Title field in Trouble event
      And user selects request type as "Customer" on trouble event page
      And user enters description as "Test case 05.03 Event End Time"
      And user clicks on save button
      Then ticket should be created and status should be assigned
      When user changes status to "Cleared" on trouble event page
      And User selects "Fault Position" as dropdownValue and should see values for "notreadonly"

        | DropdownValue | DropdownValuesToBePresent|
        | Carrier Voice | Genband |
        | Customer      | Cable/Fibre fault:Configuration failure:Other:Power failure:Telia Owned CPE:Transmission failure:Unclear |
      And User selects "Cause" as dropdownValue and should see values for "readonly"

        | DropdownValue | DropdownValuesToBePresent|
        | Change Process:Configuration | Customer:Other:Other Service Provider:Supplier:TC Field Force:Telia Company:Third Party:Unclear:Vendor |



