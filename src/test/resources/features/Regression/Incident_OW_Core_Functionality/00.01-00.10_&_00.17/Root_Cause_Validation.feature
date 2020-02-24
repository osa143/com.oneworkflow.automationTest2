@Root_Cause_Validation

  Feature: Root cause field validation
    Scenario: Root cause field validation

      Given user is on the OneWorkflow login page
      When user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create trouble event
      And user switches to window 1
      Then trouble record form should appear in new tab
      And user enters title as "Test"
      Then user selects request type as "Event"
      And user enters description as "Test Desc"
      Then user clicks on sweden checkbox under affected BU's
      Then user clicks save button
      And trouble ticket should be created and status should be assigned
      Then user clicks on Ack button
      And user validates ticket status as "Work In Progress"
      Then user selects status as "Cleared"
      Then user clicks on root cause under sections
      #Then user validates root cause availbility
      Then multiple values should be available in "Root Cause" dropdown


      | DropdownValue        | DropdownValuesToBePresent |
      | Change:Configuration | Customer:N/A:Operator:Other:Supplier (like electricity):TC Fieldforce:Telia Company:Third Party:Vendor |
      | Change:Fiber work    | Customer:N/A:Operator:Other:Supplier (like electricity):TC Fieldforce:Telia Company:Third Party:Vendor |
      | Change:Human Mistake | Customer:N/A:Operator:Other:Supplier (like electricity):TC Fieldforce:Telia Company:Third Party:Vendor |
      | Change:Not Enough Testing | Customer:N/A:Operator:Other:Supplier (like electricity):TC Fieldforce:Telia Company:Third Party:Vendor |
      | Change:Other (Requires explanation | Customer:N/A:Operator:Other:Supplier (like electricity):TC Fieldforce:Telia Company:Third Party:Vendor |
      | Change:Routine                     | Customer:N/A:Operator:Other:Supplier (like electricity):TC Fieldforce:Telia Company:Third Party:Vendor |
      | Change:Service Window Exceeded     | Customer:N/A:Operator:Other:Supplier (like electricity):TC Fieldforce:Telia Company:Third Party:Vendor |
      | Change:Traffic Affecting Not Understood | Customer:N/A:Operator:Other:Supplier (like electricity):TC Fieldforce:Telia Company:Third Party:Vendor |
      | Change:Unclear | Customer:N/A:Operator:Other:Supplier (like electricity):TC Fieldforce:Telia Company:Third Party:Vendor                          |
      | Environment:Extreme weather | Customer:N/A:Operator:Other:Supplier (like electricity):TC Fieldforce:Telia Company:Third Party:Vendor             |
      | Environment:Fire | Customer:N/A:Operator:Other:Supplier (like electricity):TC Fieldforce:Telia Company:Third Party:Vendor                        |
      | Environment:Flooding | Customer:N/A:Operator:Other:Supplier (like electricity):TC Fieldforce:Telia Company:Third Party:Vendor                    |
      | Environment:Heat     | Customer:N/A:Operator:Other:Supplier (like electricity):TC Fieldforce:Telia Company:Third Party:Vendor                    |
      | Environment:Lightning | Customer:N/A:Operator:Other:Supplier (like electricity):TC Fieldforce:Telia Company:Third Party:Vendor                   |
      | Environment:Other | Customer:N/A:Operator:Other:Supplier (like electricity):TC Fieldforce:Telia Company:Third Party:Vendor                       |
      | Hardware Failure:Antenna aligment | N/A:Operator:Other:Supplier (like electricity):TC Fieldforce:Telia Company:Third Party:Vendor                |
      | Hardware Failure:Antenna equipment fault | Customer:N/A:Operator:Other:Supplier (like electricity):TC Fieldforce:Telia Company:Third Party:Vendor |
      | Hardware Failure:Cable cut | Customer:N/A:Operator:Other:Supplier (like electricity):TC Fieldforce:Telia Company:Third Party:Vendor               |
      | Hardware Failure:Card (unit) | Customer:N/A:Operator:Other:Supplier (like electricity):TC Fieldforce:Telia Company:Third Party:Vendor             |
      | Hardware Failure Chassis (unit) | Customer:N/A:Operator:Other:Supplier (like electricity):TC Fieldforce:Telia Company:Third Party:Vendor          |
      | Hardware Failure Connector fault | Customer:N/A:Operator:Other:Supplier (like electricity):TC Fieldforce:Telia Company:Third Party:Vendor         |
      | Hardware Failure:Cross connection | Customer:N/A:Operator:Other:Supplier (like electricity):TC Fieldforce:Telia Company:Third Party:Vendor        |
      | Hardware Failure:Device (unit)    | Customer:N/A:Operator:Other:Supplier (like electricity):TC Fieldforce:Telia Company:Third Party:Vendor        |
      | Hardware Failure:Disc (Unit)      | Customer:N/A:Operator:Other:Supplier (like electricity):TC Fieldforce:Telia Company:Third Party:Vendor        |
      | Hardware Failure:Fan (unit)       | Customer:N/A:Operator:Other:Supplier (like electricity):TC Fieldforce:Telia Company:Third Party:Vendor        |
      | Hardware Failure:Filter           | Customer:N/A:Operator:Other:Supplier (like electricity):TC Fieldforce:Telia Company:Third Party:Vendor        |
      | Hardware Failure:Fuse             | Customer:N/A:Operator:Other:Supplier (like electricity):TC Fieldforce:Telia Company:Third Party:Vendor        |
      | Hardware Failure:Grounding        | N/A:Operator:Other:Supplier (like electricity):TC Fieldforce:Telia Company:Third Party:Vendor                 |
      | Hardware Failure:Line quality     | Customer:N/A:Operator:Other:Supplier (like electricity):TC Fieldforce:Telia Company:Third Party:Vendor        |
      | Hardware Failure:Memory (card)    | Customer:N/A:Operator:Other:Supplier (like electricity):TC Fieldforce:Telia Company:Third Party:Vendor        |
      | Hardware Failure:Noise problem    | Customer:N/A:Operator:Other:Supplier (like electricity):TC Fieldforce:Telia Company:Third Party:Vendor        |
      | Hardware Failure:Other (Requires explanation) | Customer:N/A:Operator:Other:Supplier (like electricity):TC Fieldforce:Telia Company:Third Party:Vendor |
      | Hardware Failure:Port (unit)                  | Customer:N/A:Operator:Other:Supplier (like electricity):TC Fieldforce:Telia Company:Third Party:Vendor |
      | Hardware Failure:Power (unit)                 | Customer:N/A:Operator:Other:Supplier (like electricity):TC Fieldforce:Telia Company:Third Party:Vendor |
      | Hardware Failure:Processor (card)             | Customer:N/A:Operator:Other:Supplier (like electricity):TC Fieldforce:Telia Company:Third Party:Vendor |
      | Hardware Failure:Signal level                 | Customer:N/A:Operator:Other:Supplier (like electricity):TC Fieldforce:Telia Company:Third Party:Vendor |
      | Logical:Capacity                              | Customer:N/A:Operator:Other:Supplier (like electricity):TC Fieldforce:Telia Company:Third Party:Vendor |
      | Logical:Configuration                         | Customer:N/A:Operator:Other:Supplier (like electricity):TC Fieldforce:Telia Company:Vendor |
      | Logical:Logical connection                    | Customer:N/A:Operator:Other:Supplier (like electricity):TC Fieldforce:Telia Company:Third Party:Vendor |
      | Logical:Memory depleted                       | Customer:N/A:Operator:Other:Supplier (like electricity):TC Fieldforce:Telia Company:Third Party:Vendor |
      | Logical:Other                                  | Customer:N/A:Operator:Other:Supplier (like electricity):TC Fieldforce:Telia Company:Third Party:Vendor |
      | Logical:Routing                                | Customer:N/A:Operator:Other:Supplier (like electricity):TC Fieldforce:Telia Company:Third Party:Vendor |
      | No Cause Found:N/A                             | Customer:N/A:Operator:Other:Supplier (like electricity):TC Fieldforce:Telia Company:Third Party:Vendor |
      | No Fault:Monitoring                            | Customer:N/A:Operator:Other:Supplier (like electricity):TC Fieldforce:Telia Company:Vendor             |
      | No Fault:Other (Requires explanation)          | Customer:N/A:Operator:Other:Supplier (like electricity):TC Fieldforce:Telia Company:Third Party:Vendor |
      | Other party responsibility:Other (Requires explanation) | Customer:N/A:Operator:Other:Supplier (like electricity):TC Fieldforce:Telia Company:Third Party:Vendor |
      | Power:Change                                            | Customer:N/A:Operator:Other:Supplier (like electricity):TC Fieldforce:Telia Company:Third Party:Vendor |
      | Power:Human Mistake                                     | Customer:Operator:Other:Supplier (like electricity):TC Fieldforce:Telia Company:Third Party:Vendor     |
      | Power:Other                                             | Customer:N/A:Operator:Other:Supplier (like electricity):TC Fieldforce:Telia Company:Third Party:Vendor |
      | Power:Power Customer Premise                            | Customer:N/A:Operator:Other:Supplier (like electricity):TC Fieldforce:Telia Company:Third Party:Vendor |
      | Power:Power Equipment Failure                           | Customer:N/A:Operator:Other:Supplier (like electricity):TC Fieldforce:Telia Company:Third Party:Vendor |
      | Power:Power Quality                                     | Customer:N/A:Operator:Other:Supplier (like electricity):TC Fieldforce:Telia Company:Third Party:Vendor |
      | Power:Power Supplier Node                               | Customer:N/A:Operator:Supplier (like electricity):TC Fieldforce:Telia Company:Third Party:Vendor       |
      | Power:Power Test                                        | Customer:N/A:Operator:Other:Supplier (like electricity):TC Fieldforce:Telia Company:Third Party:Vendor |
      | Preventive Maintenance:Other (Requires explanation)     | Customer:N/A:Operator:Other:Supplier (like electricity):TC Fieldforce:Telia Company:Third Party:Vendor |
      | Preventive Maintenance:Test                             | Customer:N/A:Operator:Other:Supplier (like electricity):TC Fieldforce:Telia Company:Third Party:Vendor |
      | Security:DOS Attack                                     | Customer:N/A:Operator:Other:Supplier (like electricity):TC Fieldforce:Telia Company:Third Party:Vendor |
      | Security:Malicious Software                             | Customer:N/A:Operator:Other:Supplier (like electricity):TC Fieldforce:Telia Company:Third Party:Vendor |
      | Security:Other                                          | Customer:N/A:Operator:Other:Supplier (like electricity):TC Fieldforce:Telia Company:Third Party:Vendor |
      | Security:Physical Intrusion                             | Customer:N/A:Operator:Other:Supplier (like electricity):TC Fieldforce:Telia Company:Third Party:Vendor |
      | Security:Theft                                          | Customer:N/A:Operator:Other:Supplier (like electricity):TC Fieldforce:Telia Company:Third Party:Vendor |
      | Security:Vandalism                                      | Customer:N/A:Operator:Other:Supplier (like electricity):TC Fieldforce:Telia Company:Third Party:Vendor |
      | Software Fault:Bug                                      | Customer:N/A:Operator:Other:Supplier (like electricity):TC Fieldforce:Telia Company:Third Party:Vendor |
      | Software Fault:Crash                                    | Customer:N/A:Operator:Other:Supplier (like electricity):TC Fieldforce:Telia Company:Third Party:Vendor |
      | Software Fault:Hang                                     | Customer:N/A:Operator:Other:Supplier (like electricity):TC Fieldforce:Telia Company:Third Party:Vendor |
      | Software Fault:Other                                    | Customer:N/A:Operator:Other:Supplier (like electricity):TC Fieldforce:Telia Company:Third Party:Vendor |
