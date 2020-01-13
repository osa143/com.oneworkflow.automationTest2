@Cause_Field_Validation

  Feature: Cause Field Validation
    Scenario: Cause field validation

      Given user is on the OneWorkflow login page
      When user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create trouble event
      And user switches to window 1
      Then trouble record form should appear in new tab
      And user clicks on closure under sections
      #Then user validates fault position availbility
      Then multiple values should be available in "Cause" dropdown
      And User selects "Cause" as dropdownValue and should see values for "notreadonly"

      | Dropdown Value                                  | DropdownValuesToBePresent                                                                                                                  |
      | Change Process:Configuration                    | Customer:Other:Other Service Provider:Supplier:TC Field Force:Telia Company:Third Party:Unclear:Vendor                                     |
      | Change Process:Event Suppression                | N/A                                                                                                                                        |
      | Change Process:Human Mistake                    | Customer:Other:Other Service Provider:Supplier:TC Field Force:Telia Company:Third Party:Unclear:Vendor                                     |
      | Change Process:Other                            | Other                                                                                                                                      |
      | Change Process:Planning/Testing                 | Customer:Other:Other Service Provider:Supplier:TC Field Force:Telia Company:Third Party:Unclear:Vendor                                     |
      | Change Process:Routine                          | Customer:Other:Other Service Provider:Supplier:TC Field Force:Telia Company:Third Party:Unclear:Vendor                                     |
      | Change Process:Service Window Exceeded          | Customer:Other:Other Service Provider:Supplier:TC Field Force:Telia Company:Third Party:Unclear:Vendor                                     |
      | Change Process:Traffic Affecting Not Understood | Customer:Other:Other Service Provider:Supplier:TC Field Force:Telia Company:Third Party:Unclear:Vendor                                     |
      | Change Process:Unannounced                      | Customer:Other:Other Service Provider:Supplier:TC Field Force:Telia Company:Third Party:Unclear:Vendor                                     |
      | Change Process:Unclear                          | Customer:N/A:Other:Other Service Provider:Supplier:TC Field Force:Telia Company:Third Party:Unclear:Vendor                                 |
      | Change Process:Wrong input                      | Customer:Other:Other Service Provider:Supplier:TC Field Force:Telia Company:Third Party:Unclear:Vendor                                     |
      | Deliver/RI:Configuration                        | Customer:Other:Other Service Provider:Supplier:TC Field Force:Telia Company:Third Party:Unclear:Vendor                                     |
      | Deliver/RI:Human Mistake                        | Customer:Other:Other Service Provider:Supplier:TC Field Force:Telia Company:Third Party:Unclear:Vendor                                     |
      | Deliver/RI:Other                                | Other                                                                                                                                      |
      | Deliver/RI:Planning/Testing                     | Customer:Other:Other Service Provider:Supplier:TC Field Force:Telia Company:Third Party:Unclear:Vendor                                     |
      | Deliver/RI:Routine                              | Customer:Other:Other Service Provider:Supplier:TC Field Force:Telia Company:Third Party:Unclear:Vendor                                     |
      | Deliver/RI:Unclear                              | Customer:Other:Other Service Provider:Supplier:TC Field Force:Telia Company:Third Party:Unclear:Vendor                                     |
      | Delivery Reclamation:Other                      | Other                                                                                                                                      |
      | Environment:Extreme weather                     | N/A                                                                                                                                        |
      | Environment:Fire                                | N/A                                                                                                                                        |
      | Environment:Flooding                            | N/A                                                                                                                                        |
      | Environment:Lightning                           | N/A                                                                                                                                        |
      | Environment:Other                               | N/A                                                                                                                                        |
      | Environment:Temperature                         | N/A                                                                                                                                        |
      | Hardware Failure:Antenna aligment               | N/A                                                                                                                                        |
      | Hardware Failure:Antenna equipment fault        | N/A                                                                                                                                        |
      | Hardware Failure:Cable                          | N/A                                                                                                                                        |
      | Hardware Failure:Card (unit)                    | N/A                                                                                                                                        |
      | Hardware Failure:Chassis (unit)                 | N/A                                                                                                                                        |
      | Hardware Failure:Connector fault                | N/A                                                                                                                                        |
      | Hardware Failure:Cross connection               | N/A                                                                                                                                        |
      | Hardware Failure:Device (unit)                  | N/A                                                                                                                                        |
      | Hardware Failure:Disc (Unit)                    | N/A                                                                                                                                        |
      | Hardware Failure:Fan (unit)                     | N/A                                                                                                                                        |
      | Hardware Failure:Filter                         | N/A                                                                                                                                        |
      | Hardware Failure:Fuse                           | N/A                                                                                                                                        |
      | Hardware Failure:Grounding                      | N/A                                                                                                                                        |
      | Hardware Failure:Line quality                   | N/A                                                                                                                                        |
      | Hardware Failure:Memory (card)                  | N/A                                                                                                                                        |
      | Hardware Failure:Noise proble,                  | N/A                                                                                                                                        |
      | Hardware Failure:Other                          | N/A                                                                                                                                        |
      | Hardware Failure:Port (unit)                    | N/A                                                                                                                                        |
      | Hardware Failure:Power (unit)                   | N/A                                                                                                                                        |
      | Hardware Failure:Processor (card)               | N/A                                                                                                                                        |
      | Hardware Failure:Signal level                   | N/A                                                                                                                                        |
      | Human Error:Human Error                         | Other:Telia Company                                                                                                                        |
      | Incident Process:Other                          | Customer:Other:Other Service Provider:Supplier:TC Field Force:Telia Company:Third Party:Unclear:Vendor                                     |
      | Logical:Capacity                                | N/A                                                                                                                                        |
      | Logical:Configuration                           | N/A                                                                                                                                        |
      | Logical:Logical connection                      | N/A                                                                                                                                        |
      | Logical:Memory depleted                         | N/A                                                                                                                                        |
      | Logical:Other                                   | Other                                                                                                                                      |
      | Logical:Routing                                 | N/A                                                                                                                                        |
      | N/A:N/A                                         | N/A                                                                                                                                        |
      | No Cause Found:Mobile Coverage                  | N/A                                                                                                                                        |
      | No Cause Found:Monitoring                       | N/A                                                                                                                                        |
      | No Cause Found:No Fault Found                   | N/A                                                                                                                                        |
      | No Cause Found:Other                            | Other                                                                                                                                      |
      | Not a PDB:Not a PDB                             | N/A                                                                                                                                        |
      | Other:Other                                     | Other                                                                                                                                      |
      | Other party responsibility:Other                | Other                                                                                                                                      |
      | Power:Earth leak circuit breaker                | N/A                                                                                                                                        |
      | Power:Human Mistake                             | Customer:Other:Other Service Provider:Supplier:TC Field Force:Telia Company:Third Party:Unclear:Vendor                                     |
      | Power:N/A                                       | N/A                                                                                                                                        |
      | Power:Other                                     | Other                                                                                                                                      |
      | Power:Power Customer Premise                    | N/A:Other                                                                                                                                  |
      | Power:Power Quality                             | N/A                                                                                                                                        |
      | Power:Power Supplier Node                       | N/A                                                                                                                                        |
      | Power:Power Test                                | Customer:Other:Other Service Provider:Supplier:TC Field Force:Telia Company:Third Party:Unclear:Vendor                                     |
      | Preventive Maintenance:Other                    | Other                                                                                                                                      |
      | Preventive Maintenance:Test                     | Customer:Other:Other Service Provider:Supplier:TC Field Force:Third Party:Unclear:Vendor                                                   |
      | Security:DOS Attack                             | Other                                                                                                                                      |
      | Security:Malicious Software                     | Other                                                                                                                                      |
      | Security:Other                                  | Other                                                                                                                                      |
      | Security:Physical Intrusion                     | Other                                                                                                                                      |
      | Security:Theft                                  | Other                                                                                                                                      |
      | Security:Vandalism                              | Other                                                                                                                                      |
      | SNOW:Automatically detected break               | Undefined                                                                                                                                  |
      | SNOW:Customer related                           | Announced Maintenance:Billing:Customer Not Returned:DDOS attack:Environment:Maintenance:Third Party:Unannounced Maintenance:Undefined:User |
      | SNOW:Delivery complaints                        | Undefined                                                                                                                                  |
      | SNOW:Exclude (duplicate)                        | Undefined                                                                                                                                  |
      | SNOW:Force Majeure                              | Undefined                                                                                                                                  |
      | SNOW:Hardware                                   | Accessories:Fixed terminal:Mobile terminal:Modem:Router:Undefined                                                                          |
      | SNOW:Maintenance                                | Announced:Unannounced:Undefined                                                                                                            |
      | SNOW:Network related                            | Access:Configuration:Environment:Node:Undefined                                                                                            |
      | SNOW:No fault found                             | Non-SLA affecting:SLA affecting:Undefined                                                                                                  |
      | SNOW:Other                                      | Missing code:Other                                                                                                                         |
      | SNOW:Power                                      | Customer:Telia:Undefined                                                                                                                   |
      | SNOW:Server                                     | Application:Configuration:Hardware:MDC:Undefined                                                                                           |
      | SNOW:Software                                   | Configuration:Software Fault:Undefined                                                                                                     |
      | SNOW:Telephony                                  | Configuration:Contact Center:Mobile coverage:Mobile related:Software                                                                       |
      | SNOW:Withdrawn                                  | Withdrawn                                                                                                                                  |
      | Software Fault:Bug                              | N/A                                                                                                                                        |
      | Software Fault:Crash                            | N/A                                                                                                                                        |
      | Software Fault:Hang                             | N/A                                                                                                                                        |
      | Software Fault:Other                            | N/A                                                                                                                                        |
      | Technical Error:Technical Error                 | Other:Telia Company                                                                                                                        |
      | Test Ticket:N/A                                 | N/A                                                                                                                                        |
      | User Mistake:Other                              | Other                                                                                                                                      |
      | Withdrawn:Other                                 | Other                                                                                                                                      |