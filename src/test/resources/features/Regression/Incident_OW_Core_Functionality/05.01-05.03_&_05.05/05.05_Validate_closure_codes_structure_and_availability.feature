@05.05_Validate_closure_codes_structure_and_availability @Incident
  #passed
  Feature: validation of closure codes
    Scenario: user validates fault position, cause and action fields on incident ticket

      Given user is on the OneWorkflow login page
      When user logs in with valid user and password
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
        | Carrier Voice | Genband |
        | Customer | Cable/Fibre fault:Configuration failure:Other:Power failure:Telia Owned CPE:Transmission failure:Unclear |
        | Fixed:Carrier Voice | Genband |
        | Fixed:Element Manager | Other:Unclear |
        | Fixed:IMS Core Networks | AFG:CSCF:DSC:IP-Works:Other:SBG:Unclear |
        | Fixed:Packet Networks | Aggregation Switch:DHCP server:DNS server:FTTH node:Int Edge Router:Int Inter-reg Router:IPX:Nat Edge Router:Nat Inter-reg Router:Other:Unclear:xDSL |
        | Fixed:Physical Network | Copper:Fiber:Other:Unclear |
        | Fixed:PSTN | EAR:IC/RSS:IX:KC/RSS:LG:LS:LX:NPDB:Other:TG:TS:Unclear |
        | Fixed:Transmission | Other:PDH:Radiolink:SDH:Synchronization Network:Unclear:xWDM |
        | IT | Application:Backup:Database:Event Management:Firewall:Hardware:Load Balancer:Operating System:Other:Proxy:Remote Access:Router/Switch:Storage:Support Software:Unclear |
        | Mobile:CS Core Networks | EIR Frontend:HLR Frontend:HSS Frontend:MGW:MNP Frontend:MSC:NDB:NEBR:One-NDS:Other:PGW:SCP:STP:Unclear |
        | Mobile:IMS Core Networks | AFG:CSCF:DSC:IP-Works:MTAS:Other:SBG:Unclear |
        | Mobile:Mobile CNDB | Mobile CNDB |
        | Mobile:PS Core Networks | AAA:ePDG:EPG:GLANA CPE:M2M-VPN:NAT:NFVI:Other:PCRF:PM:SGSN/MME:Unclear |
        | Mobile:Radio Access Network | Base Station:BSC:Other:RNC:SIU:Unclear |
        | Mobile:Roaming | DRX:IP/STP:Other:Unclear |
        | Mobile:WLAN Access | AP:NAS:Other:Unclear |
        | N/A | N/A |
        | Other | Other |
        | Other Service Provider | Cable/Fibre fault:Other:Power failure:Transmission failure:Unclear:Voice Underlying Carrier |
        | PDB:PDB | PDB |
        | Position Not Found | Position Not Found |
        | Site Infrastructure | Cooling:Other:Physical Access System:Power System:Unclear |
        | TV:Cable TV | Cable:Cable customer premises:Distribution network amplifier:HFC network (noise):Optical connection cable / connectors:Optical transmission:Other:Other connection cable / connectors:Passive equipment:Power supply:Residential amplifier:Return path amplifier:Unclear |
        | TV:CDN IPTV | Other:Unclear:VOD repository:VOD server |
        | TV:CDN OTT | Other:Unclear:VOD repository:VOD server |
        | TV:OD Content | C More:Cirkus:Curio:Discovery:HBO:NatGeo:Nordisk Film:Other:Paramount:SF Anytime:Turner:Xotix |
        | TV:Platform | Conax:Other:TV Back End Application:TV Back End Database:TV Back End Other:TV Back End Storage:TV Back End T-cat:Unclear:Verimatrix |
        | TV:RHE | Antennas:Edge QAM:External Input signals:Other:Reception equipment:Transmodulation equipment:ULA equipment:Unclear |
        | TV:SHE | Antennas:External Input signals:Multiplexing:Other:Output CTV:Output IPTV:Output OTT:Peripheral systems:Reception:Unclear |
        | TV:Terminal | RGW (Residential Gateway):STB (Set-Top Box) |
        | TV:TV Applications | End User Application |
        | Undefined Telia | Undefined Telia |
        | VAS:ioT | Backend (incl DCP):Mobile App:Other:Unclear |
        | VAS:Service Nodes | Charging:email:IN Node:IVR:Messaging:NSEE:OTA:Other:Roaming:UC:Unclear |

      And User selects "Cause" as dropdownValue and should see values for "readonly"

        | DropdownValue | DropdownValuesToBePresent|
        | Change Process:Configuration | Customer:Other:Other Service Provider:Supplier:TC Field Force:Telia Company:Third Party:Unclear:Vendor |
        | Change Process:Configuration | Customer:Other:Other Service Provider:Supplier:TC Field Force:Telia Company:Third Party:Unclear:Vendor |
        | Change Process:Event Suppression | N/A |
        | Change Process:Human Mistake | Customer:Other:Other Service Provider:Supplier:TC Field Force:Telia Company:Third Party:Unclear:Vendor |
        | Change Process:Other | Other |
        | Change Process:Planning/Testing | Customer:Other:Other Service Provider:Supplier:TC Field Force:Telia Company:Third Party:Unclear:Vendor |
        | Change Process:Routine | Customer:Other:Other Service Provider:Supplier:TC Field Force:Telia Company:Third Party:Unclear:Vendor |
        | Change Process:Service Window Exceeded | Customer:Other:Other Service Provider:Supplier:TC Field Force:Telia Company:Third Party:Unclear:Vendor |
        | Change Process:Traffic Affecting Not Understood | Customer:Other:Other Service Provider:Supplier:TC Field Force:Telia Company:Third Party:Unclear:Vendor |
        | Change Process:Unannounced | Customer:Other:Other Service Provider:Supplier:TC Field Force:Telia Company:Third Party:Unclear:Vendor |
        | Change Process:Unclear | Customer:N/A:Other:Other Service Provider:Supplier:TC Field Force:Telia Company:Third Party:Unclear:Vendor |
        | Change Process:Wrong input | Customer:Other:Other Service Provider:Supplier:TC Field Force:Telia Company:Third Party:Unclear:Vendor |
        | Deliver/RI:Configuration | Customer:Other:Other Service Provider:Supplier:TC Field Force:Telia Company:Third Party:Unclear:Vendor |
        | Deliver/RI:Human Mistake | Customer:Other:Other Service Provider:Supplier:TC Field Force:Telia Company:Third Party:Unclear:Vendor |
        | Deliver/RI:Other | Other |
        | Deliver/RI:Planning/Testing | Customer:Other:Other Service Provider:Supplier:TC Field Force:Telia Company:Third Party:Unclear:Vendor |
        | Deliver/RI:Routine | Customer:Other:Other Service Provider:Supplier:TC Field Force:Telia Company:Third Party:Unclear:Vendor |
        | Deliver/RI:Unclear | Customer:Other:Other Service Provider:Supplier:TC Field Force:Telia Company:Third Party:Unclear:Vendor |
        | Delivery Reclamation:Other | Other |
        | Enviroment:Extreme Weather | N/A |
        | Enviroment:Fire | N/A |
        | Enviroment:Flooding | N/A |
        | Enviroment:Lightning | N/A |
        | Enviroment:Other | N/A |
        | Enviroment:Temperature | N/A |
        | Hardware Failure:Antenna aligment | N/A |
        | Hardware Failure:Antenna equipment fault | N/A |
        | Hardware Failure:Cable | N/A |
        | Hardware Failure:Card (unit) | N/A |
        | Hardware Failure:Chassis (unit) | N/A |
        | Hardware Failure:Connector fault | N/A |
        | Hardware Failure:Cross connection | N/A |
        | Hardware Failure:Device (unit) | N/A |
        | Hardware Failure:Disc (unit) | N/A |
        | Hardware Failure:Fan (unit)  | N/A |
        | Hardware Failure:Filter | N/A |
        | Hardware Failure:Fuse | N/A |
        | Withdrawn:Other | Other |
        | Hardware Failure:Grounding | N/A |
        | Hardware Failure:Line quality | N/A |
        | Hardware Failure:Memory (card) | N/A |
        | Hardware Failure:Noise problem | N/A |
        | Hardware Failure:Other | N/A |
        | Hardware Failure:Port (unit) | N/A |
        | Hardware Failure:Power (unit) | N/A |
        | Hardware Failure:Processor (card) | N/A |
        | Hardware Failure:Signal level | N/A |
        | Incident Process:Other | Customer:Other:Other Service Provider:Supplier:TC Field Force:Telia Company:Third Party:Unclear:Vendor |
        | Logical:Capacity | N/A |
        | Logical:Configuration | N/A |
        | Logical:Logical connection | N/A |
        | Logical:Memory depleted | N/A |
        | Logical:Other | N/A |
        | Logical:Routing | N/A |
        | N/A:N/A | N/A |
        | No Cause Found:Mobile Coverage | N/A |
        | No Cause Found:Monitoring | N/A |
        | No Cause Found:No Fault Found | N/A |
        | No Cause Found:Other | Other |
        | Other:Other | Other |
        | Other party responsibility:Other | Other |
        | Power:Earth leak circuit breaker | N/A |
        | Power:Human Mistake | Customer:Other:Other Service Provider:Supplier:TC Field Force:Telia Company:Third Party:Unclear:Vendor |
        | Power:N/A | N/A |
        | Power:Other | Other |
        | Power:Power Customer Premise | N/A:Other |
        | Power:Power Quality | N/A |
        | Power:Power Supplier Node | N/A |
        | Power:Power Test | Customer:Other:Other Service Provider:Supplier:TC Field Force:Telia Company:Third Party:Unclear:Vendor |
        | Preventive Maintenance:Other | Other |
        | Preventive Maintenance:Test | Customer:Other:Other Service Provider:Supplier:TC Field Force:Third Party:Unclear:Vendor |
        | Security:DOS Attack | Other |
        | Security:Malicious Software | Other |
        | Security:Other | Other |
        | Security:Physical Intrusion | Other |
        | Security:Theft | Other |
        | Security:Vandalism | Other |
        | SNOW:Automatically detected break | Undefined |
        | SNOW:Customer related | Announce Maintenance:Billing:Customer Not Returned:DDOS attack:Environment:Maintenance:Third Party:Unannounced Maintenance:Underfined:User |
        | SNOW:Delivery complaints | Undefined |
        | SNOW:Exclude (duplicate) | Undefined |
        | SNOW:Force Majeure | Undefined |
        | SNOW:Hardware | Accessories:Fixed terminal:Mobile terminal:Modem:Router:Undefined |
        | SNOW:Maintenance | Announced:Unannounced:Undefined |
        | SNOW:Network related | Access:Configuration:Environment:Node:Undefined |
        | SNOW:No fault found | Non-SLA affecting:SLA affecting:Undefined |
        | SNOW:Other | Missing code:Other |
        | SNOW:Power | Customer:Telia:Undefined |
        | SNOW:Server | Application:Configuration:Hardware:MDC:Undefined |
        | SNOW:Software | Configuration:Software Fault:Undefined |
        | SNOW:Telephony | Configuration:Contact Center:Mobile coverage:Mobile related:Software |
        | SNOW:Withdrawn | Withdrawn |
        | Software Fault:Bug | N/A |
        | Software Fault:Crash | N/A |
        | Software Fault:Hang | N/A |
        | Software Fault:Other | N/A |
        | Test Ticket:N/A | N/A |
        | User Mistake:Other | Other |
        | Withdrawn:Other | Other |

      And User selects "Action" as dropdownValue and should see values for "readonly"
        | Alarm configuration change | Other:Telia Company |
        | Auto closed | Automation |
        | Capacity increase | Customer:Other:Other Service Provider |
        | Customer guidance | Other:Telia Company |
        | Customer has repaired | Customer |
        | Duplicate | N/A                  |
        | Fault disappeared by itself | N/A |
        | Final notification done | Telia Company |
        | Level adjustment | Customer:Other:Other Service Provider:Supplier:TC Field Force:Telia Company:Third Party:Unclear:Vendor |
        | N/A | N/A |
        | No Action | N/A |
#        | No faults found ||
        | Other | Other |
        | Other Service Provider has repaired | Other Service Provider |
        | Repair | Customer:Other:Other Service Provider:Supplier:TC Field Force:Telia Company:Third Party:Unclear:Vendor |
        | Replace | Customer:Other:Other Service Provider:Supplier:TC Field Force:Telia Company:Third Party:Unclear:Vendor |
        | Reset | Customer:Other:Other Service Provider:Supplier:TC Field Force:Telia Company:Third Party:Unclear:Vendor |
        | Service change | Customer:Other:Other Service Provider:Telia Company:Unclear |
        | Service termination | Customer:Other:Other Service Provider:Telia Company:Unclear |
        | Software upgrade | Customer:Other:Other Service Provider:Supplier:TC Field Force:Telia Company:Third Party:Unclear:Vendor |



