@Fault_Position_Validation

  Feature: Fault position field validation
    Scenario: Fault position field validation

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
      And user clicks on closure under sections
#      Then user validates fault position availibility
      Then multiple values should be available in "Fault Position" dropdown
      And User selects "Fault Position" as dropdownValue and should see values for "notreadonly"

      | DropdownValue                | DropdownValuesToBePresent |
      | Carrier Voice                | Genband                   |
      | Customer                     | Cable/Fibre fault:Configuration failure:Other:Power failure:Telia Owned CPE:Transmission failure:Unclear |
      | Fixed:Carrier Voice          | Genband |
      | Fixed:Element Manager        | Other:Unclear |
      | Fixed:IMS Core Networks      | AFG:CSCF:DSC:IP-Works:Other:SBG:Unclear |
      | Fixed:Packet Networks        | Aggregation Switch:DHCP server:DNS server:FTTH node:Int Edge Router:Int Inter-reg Router:IPX:Nat Edge Router:Nat Inter-reg Router:Other:Unclear:xDSL |
      | Fixed:Physical Network       | Copper:Fiber:Other:Unclear |
      | Fixed:PSTN                   | EAR:IC/RSS:IX:KC/RSS:LG:LS:LX:NPDB:Other:TG:TS:Unclear |
      | Fixed:Transmission           | Other:PDH:Radiolink:SDH:Synchronization Network:Unclear:xWDM |
      | IT                           | Application:Backup:Database:Event Management:Firewall:Hardware:Load Balancer:Operating System:Other:Proxy:Remote Access:Router/Switch:Storage:Support Software:Unclear |
      | Mobile:CS Core Networks      | EIR Frontend:HLR Frontend:HSS Frontend:MGW:MNP Frontend:MSC:NDB:NEBR:One-NDS:Other:PGW:SCP:STP:Unclear |
      | Mobile:IMS Core Networks     | AFG:CSCF:DSC:IP-Works:MTAS:Other:SBG:Unclear |
      | Mobile:Mobile CNDB           | Mobile CNDB                                  |
      | Mobile:PS Core Networks      | AAA:ePDG:EPG:GLANA CPE:M2M-VPN:NAT::NFVI:Other:PCRF:PM:SGSN/MME:Unclear |
      | Mobile:Radio Access Network  | Base Station:BSC:Other:RNC:SIU:Unclear |
      | Mobile:Roaming               | DRX:IP/STP:Other:Unclear |
      | Mobile:WLAN Access           | AP:NAS:Other:Unclear |
      | N/A                          | N/A |
      | Other                        | Other |
      | Other Service Provider       | Cable/Fibre fault:Other:Power failure:Transmission failure:Unclear:Voice Underlying Carrier |
      | PDB:PDB                      | PDB                                                                                         |
      | Position Not Found           | Position Not Found |
      | Site Infrastructure          | Cooling:Other:Physical Access System:Power System:Unclear |
      | TV:Cable TV                  | Cable:Cable customer premises:Distribution network amplifier:HFC network (noise):Optical connection cable / connectors:Optical transmission:Other:Other connection cable / connectors:Passive equipment:Power supply:Residential amplifier:Return path amplifier:Unclear |
      | TV:CDN IPTV                  | Other:Unclear:VOD repository:VOD server |
      | TV:CDN OTT                   | Other:Unclear:VOD repository:VOD server |
      | TV:OD Content                | C More:Cirkus:Curio:Discovery:HBO:NatGeo:Nordisk Film:Other:Paramount:SF Anytime:Turner:Xotix |
      | TV:Platform                  | Conax:Other:TV Back End Application:TV Back End Database:TV Back End Other:TV Back End Storage:TV Back End T-cat:Unclear:Verimatrix |
      | TV:RHE                       | Antennas:Edge QAM:External Input signals:Other:Reception equipment:Transmodulation equipment:ULA equipment:Unclear |
      | TV:SHE                       | Antennas:External Input signals:Multiplexing:Other:Output CTV:Output IPTV:Output OTT:Peripheral systems:Reception:Unclear |
      | TV:Terminal                  | RGW (Residential Gateway):STB (Set-Top Box) |
      | TV:TV Applications           | End User Application |
      | Undefined Telia              | Undefined Telia |
      | VAS:IoT                      | Backend (incl DCP):Mobile App:Other:Unclear |
      | VAS:Service Nodes            | Charging:Email:IN Node:IVR:Messaging:NSEE:OTA:Other:Roaming:UC:Unclear |