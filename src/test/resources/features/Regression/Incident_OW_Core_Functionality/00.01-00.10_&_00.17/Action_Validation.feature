@Action_Field_Validation

  Feature: Action field validation
    Scenario: Action field validation

      Given user is on the OneWorkflow login page
      When user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create trouble event
      And user switches to window 1
      Then trouble record form should appear in new tab
      And user clicks on closure under sections
      #Then user validates fault position availbility
      Then multiple values should be available in "Action" dropdown

        | DropdownValue                       | DropdownValuesToBePresent                                                                              |
        | Alarm configuration change          | Other:Telia Company                                                                                    |
        | Auto closed                         | Automation                                                                                             |
        | Capacity increase                   | Customer:Other:Other Service Provider:Telia Company:Third Party                                        |
        | Customer guidance                   | Other:Telia Company                                                                                    |
        | Customer has repaired               | Customer                                                                                               |
        | Duplicate                           | N/A                                                                                                    |
        | Fault dissapeared by itself         | N/A                                                                                                    |
        | Final notification done             | Telia Company                                                                                          |
        | Level adjustment                    | Customer:Other:Other Service Provider:Supplier:TC Field Force:Telia Company:Third Party:Unclear:Vendor |
        | N/A                                 | N/A                                                                                                    |
        | No Action                           | N/A:Telia Company                                                                                      |
        | No faults found                     |                                                                                                        |
        | Other                               | Other                                                                                                  |
        | Other Service Provider has repaired | Other Service Provider                                                                                 |
        | Repair                              | Customer:Other:Other Service Provider:Supplier:TC Field Force:Telia Company:Third Party:Unclear:Vendor |
        | Replace                             | Customer:Other:Other Service Provider:Supplier:TC Field Force:Telia Company:Third Party:Unclear:Vendor |
        | Reset                               | Customer:Other:Other Service Provider:Supplier:TC Field Force:Telia Company:Third Party:Unclear:Vendor |
        | Service change                      | Customer:Other:Other Service Provider:Telia Company:Unclear                                            |
        | Service termination                 | Customer:Other:Other Service Provider:Telia Company:Unclear                                            |
        | Software upgrade                    | Customer:Other:Other Service Provider:Supplier:TC Field Force:Telia Company:Third Party:Unclear:Vendor |