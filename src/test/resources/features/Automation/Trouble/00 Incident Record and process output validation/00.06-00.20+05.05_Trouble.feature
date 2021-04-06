@TroubleNewTestCase
  #testcase covers 00.06,00.07,00.08,00.09,00.10 00.17 and 00.20

  Feature: 00.06-00.20 trouble
    Scenario: 00.06-00.20 trouble

      Given user is on the OneWorkflow login page
      When user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create trouble event
      And user switches to window 1
      Then trouble record form should appear in new tab
      And user verifies request type field is visible
      Then multiple statuses "Customer:Customer Reclamation:Event:Internal User:Preventive Maintenance:Stakeholder:Third Party:(clear)" should be available in "Request Type" dropdown
      And User selects "Request Type" as dropdownValue and should see values for "notreadonly"
        | DropdownValue | DropdownValuesToBePresent|
        | Service Request | Service Request:Improvement|

      When user validates template dropdown availability
      Then multiple statuses "Site access registration:Workforce Escalation-SE:(clear)" should be available in "Template" dropdown readonly
      When user validates Title availability
      Then multiple statuses "(no entries in menu)" should be available in "Title" dropdown
      When user validates impact field availability
      Then multiple statuses "No:Minor:Medium:Major:Critical" should be available in "Impact" dropdown readonly
      When user validates importance field
      Then multiple statuses "Critical:High:Average:Low:(clear)" should be available in Importance dropdown
      When user validates fault type dropdown availability
      Then multiple statuses "Access Fault:Application fault:Data Fault:Infra Fault:Network Fault:Power Fault:Roaming-Data Fault:Roaming-Voice Fault:Site Fault:Transmission Fault:TV Fault:Voice Fault:(clear)" should be available in "Fault Type" dropdown
      And user clicks on owner under sections
      Then multiple values should be available in "Owner Profile*" dropdown
      And User selects "Owner Profile*" as dropdownValue and should see values for "notreadonly"

        | DropdownValue | DropdownValuesToBePresent|
#        | PLAZA         |                          |
#        | Access network:Mobile:RAN:Common | NW Radio Quality-NO |
#        | Access network:Home | Access Home Connectivity-EE |
#        | Access network:Mobile:RAN:Deployment | Rollout NO|
#        | Access network:Mobile:RAN:Deployment SE | NW Deployment Eltel-SE:NW Deployment KPI Team-SE:NW Deployment Netel-SE:NW Deployment Relacom-SE:NW Deployment Scanmast-SE:NW Deployment Support-SE    |
#        | Access network:Mobile:RAN:Design | Design RAN&Core-SE                                                                                                                                                             |
#        | Access network:Mobile:RAN:Ericsson  | RAN Ericsson-Common |
#        | Access network:Mobile:RAN:Huawei | RAN Huawei-Common |
#        | Access network:Mobile:RAN | Acc Mob RAN Ericsson-SE:Acc Mob RAN NSN-SE:Mobile service-FLEN:RAN improve-Common |
#        | Access network:Mobile:RAN:NSN | RAN NSN-Common |
#        | Access network:Mobile:RAN:Planning | NW Planning Last Mile-SE:NW RAN Deployment DK:RAN Engineering-Common:RAN Engineering-SE  |
#        | Access network:Mobile:Transmission | BtB Solution-DK:MBH Design-DK:MBH Fiber-DK:MBH Implementing-DK:MBH Main-DK |
#        | Access network:Mobile:WIFI | Core support Wlan |
#        | Access network:Mobile:WLAN:Common | RAN Telia Wifi |
#        | Access network:Mobile:WLAN | WLAN Agreement:WLAN Coverage:WLAN TG-EL |
      # needvalidatemanual | BSS:Billing | Amdocs-DK:AOFokus-DK:Axapta-DK:Bill Management-SE:Billing L2-FI:Bruce/Rosetta:Bruce/Rosetta-DK:Charging & Rating-SE:DK Tech IT Billing:DLG NaviBilling:Focus Op-DK:Fokus Finance Approve-DK:Fokus Operations QA-DK:Fokus Ops Business Approve-DK:Fokus Price & Parameters-DK:Fokus Test:Foton-DK:ICH-DK:Invoicing&Cust Interact-SE:KisbiGeneva Operations-DK:KisbiGeneva Price & Para-DK:KisbiGeneva-DK:Mit Tele Navibilling-DK:Ninja-DK:OCS Operation-EE:OCS Operation-SE:Port&Bill -Common:Prepaid-FI:StateEvent-DK:VERO-DK |
#        | BSS:Billing:Policy Manager SE | BSS Bill Policy Manager-SE                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
#        | BSS:Billing:Payment as a service | Payment as a service |
#        | BSS:Channels | BSS Ch Vart Telia-SE:Channels L2-FI:Omni Channels-SE:Portal Channels L2-SE |
#        | BSS:CRM | CRM L2-FI:Cust & Order Mgmt -SE |
#        | BSS:Data&Analytics | BSS D&A Insight-DK:Data&Analytics L2-FI |
#        | BSS:GDPR | GDPR Manager-DK |
#        | BSS:MicroServices | Microservice-DK |
#        | BSS:NEO | NEO IT Awaiting BU-DK:NEO IT DK Services-DK:NEO IT Ninja-DK:NEO IT Tango/Copa-DK:NEO IT-DK |
#        | BSS:Other | BSS COPE-DK |
#        | BSS | Etray-DK:Online-DK |
#        | BSS:Provisioning | Provisioning_EMANG-SE:Provisioning-SE |
#        | BSS:Sales | Sales&Partner-SE |
#        | Control Center | Incident Manager |
#        | Control Center:Improvement | SA Process Improvements |
#        | Control Center:Monitoring | CC Fixed access-FI:CC Fixed access-SE:CC IP/TV:CC IT:CC Mob Core/IMS/Fixed Voice/IN:CC Mob&Access-Common:CC Monitoring Management:CC WDM |
#        | Control Center:Monitoring:Not to be used | CC Monitor FM Connection Issue |
#        | Control Center:Performance | CC Perf&Quality:CC Prod&proc |
#        | Core:Mobile | Core Production-Common:Test & Verification-Common |
#        | Core:Mobile:Mobile CS:Development | Development Voice-Common |
#        | Core:Mobile:Mobile CS | Network Design Rejlers PRA-SE:Voice&IMS FI_LT:Voice&IMS NO_EE:Voice&IMS SE_DK |
#        | Core:Mobile:Mobile IP | Mobile Core IP EAST:Mobile Core IP WEST |
#        | Core:Mobile:Mobile PS:Development | Development Data-Common |
#        | Core:Mobile:Mobile PS | Mob PS Core EAST:Mob PS Core West |
#        | Core:Mobile:Operations | NW Core-NO |
#        | Core:Mobile:Roaming:Billing | FI_TADIG-FI |
#        | Core:Mobile:Roaming | Roaming Operations-Common |
#        | Customer Operation | HPSM Estonia |
#        | Customer Services:Escalation | WF Escalation L1-SE |
#        | Customer Services:Fixed Services | Servicedesk-DK  |
#        | Customer Services:Mobile Services | BU Tech Support MFN/OE VoiceSE:Market Expert BSS-DK:Market Expert-DK:Market Expert-FIN:Network Services-NO:SA&O NOC-EE:SA&O SOC-NO |
#        | Customer Services:Mobile Services:Common | FI SA&O-FIN:Mobile Tech Care-LIT |
#        | Customer Services:Mobile Services:Content | BU Tech Support Content-SE |
#        | Customer Services:Mobile Services:Network | BU Tech Support Mobility -FIN:BU Tech Support Network-SE |
#        | Customer Services:Mobile Services:NrPort | BU Tech Support Nrport-SE |
#        | Customer Services:Mobile Services:SME | BU Tech Support SME-SE |
#        | Customer Services:TV Services | TV CO L2-SE |
#        | External:ANS  | OW_ANS                  |
#        | External:Application | External Application CGI |
#        | External:CGI | OSS CGI |
#        | External:Comarch | Multibella |
#        | External:Dataprisma | Dataprisma |
#        | External:Geneva | AM Support |
#        | External | Keypro |
#        | External:TCS | Channels:Ext TCS Billing-FI:Ext TCS OSS-FI |
#        | External:wipro:TrueSight | Ext Wipro TrueSight |
#        | Field Service:Mobile (B2B) | FDC-Common:FS Åland-FI |
#        | Infrastructure:Development | IT infra-Common |
#        | Infrastructure:Maintenance | Large Production Premises-NO:Siteinfra-DK:Siteinfra-NO:Tech_Sites-SE |
 # checkmanual      | IT:Application | Application Identity & Access:Application-NO:Assurance:Billing-NO:CTI Admin-FI:Enterprise:IT App CDL:IT App Customer Identity:IT App eBS Platform:IT App Integration-SE:IT App NIAM-Common:IT App RODOD:IT App SIG:IT App Telia Finance:JobSchedulling-FI:Middleware:Multibella-FI:NMS:Portal-NO:SAP:TAC1-NO:Tiksu-FI:Tunnestiimi-FI |
#         | IT:Application:Analytics | IT App Analytics&BI-EE |
#                | IT:Application:Billing | Billing:IT App Bill BDL:IT App Bill BiC:IT App Bill MOP2:IT App Bill MPS/RTS:IT App Bill Reflex:IT App Billing-EE |
#        | IT:Application:BSS | IT App BSS CeSim:IT App BSS CRT:IT App BSS Documentation:IT App BSS EDWM L1:IT App BSS EDWM L2:IT App BSS E-shop EE:IT App BSS Event:IT App BSS Freya:IT App BSS Marketstore:IT App BSS OCC:IT App BSS Produktguiden:IT App BSS Sales_Order Mgmt-EE:IT App BSS RR2R:IT App BSS SAIDA:IT App BSS WebS MultiDevice:IT App Integration BASE |
#        | IT:Application:Contact Center | IT App CC CIS Operations SP:IT App CC CIS Support |
#        | IT:Application:CRM | CRM:IT App CRM Alpha:IT App CRM API Market:IT App CRM Apollo:IT App CRM C2B Cache:IT App CRM C2B Services:IT App CRM C2B Caesar:IT App Cust Services-EE:IT App DevOps Tools:IT App CRM Koda:IT App CRM Kundbild:IT App CRM OMT:IT App CRM OPT:IT App CRM Promis:IT App CRM Rodod UIM:IT App CRM Rodod AIA:IT App CRM Rodod BRM:IT App CRM Rodod OPH:IT App CRM Rodod OSM:IT App CRM Rodod Service Desk:IT App CRM Rodod Siebel:IT App CRM SINN:IT App CRM UOR |
#        | IT:Application:CRM:WOW | IT App CRM WOW AT Test:IT App CRM WOW Func Maint:IT App CRM WOW L1:IT App CRM WOW L2:IT App CRM WOW Maint Hours:IT App CRM WOW Performance |
#        | IT:Application:Digital Channels | IT App DigCh Agora 2L N&F:IT App DigCh Broadband Sales:IT App DigCh Drools Flow:IT App DigCh Infra:IT App DigCh Infra Online:IT App DigCh Mitt Telia:IT App DigCh Mitt Telia App:IT App DigCh Mobile Sales:IT App DigCh Mybusiness:IT App DigCh Order Flows:IT App DigCh Redaktionen:IT App DigCh Support:IT App DigCh Telia Admin:IT App DigCh telia.se:IT App DigCh Vart Telia |
#        | IT:Application:E2E Solutions | IT App E2ES Fixed Fallout:IT App E2ES Migration:IT App E2ES Mobile Fallout |
#        | IT:Application:Enterprise Effectiveness | IT App ARS:IT App ART:IT App CA PPM:IT App GRC:IT App HR Engagement:IT App MDE |
#        | IT:Application:Enterprise Services | IT App ES Dynamics AX-EE:IT App ES InfoArchive |
#        | IT:Application:ESS | IT App ESS BI-TS L2:IT App ESS BI-TS L1:IT App ESS NetBase&BlueIce L1:IT App ESS NetBase&BlueIce L2:IT App ESS PCM Partner Connect:IT App ESS Rambo:IT App ESS Regnbage:IT App ESS TBM L1:IT App ESS TBM L2 |
#        | IT:Application:Finance | IT App Fi IC Systems:IT App Finance-EE |
#        | IT:Application:Integration | IT App Integration Chronos:IT App Integration Evy:IT App Integration GESB |
#        | IT:Application:Inventory | IT App Invent H2 SPOCs:IT App Invent Netw Dev Tool-EE:IT App Inventory ArkivX:IT App Inventory Coppar GUI:IT App Inventory CSS:IT App Inventory EAI:IT App Inventory ECM:IT App Inventory EIAS:IT App Inventory Qliksense:IT App Inventory TelSIMS:IT App Inventory-EE |
#        | IT:Application:Knightec  | Touchpoint SE SM and AW                                                                                                                                                                        |
        #        | IT:Application:Netadmin  | IT App OSS Netadmin |
#        | IT:Application:OSS | IT-Application-OSS:IT App OSS 1B:IT App OSS Bemo:IT App OSS Cview-EAI:IT App OSS E-B2B:IT App OSS EEIS:IT App OSS FaDA:IT App OSS Flowview:IT App OSS Goldpen:IT App OSS Helix:IT App OSS Herkules:IT App OSS NAC-Julia:IT App OSS NetPro:IT App OSS Service Gateway:IT App OSS Slice:IT App OSS SOM -DK:IT App OSS SOM -EE:IT App OSS SOM-NO:IT App OSS WebOSS:IT App OSS Websystem Linjenat |
#        | IT:Application:Portal | Portal:IT App Portal Self Service-EE |
#        | IT:Application:Security | IT App SecTeliaSign:IT App Security-EE:Security Services-FI |
        | IT:Application:SIG | IT App SIG Registerfragor:IT App SIG NAS |
#        | IT:Application:Supplier Mgmt | IT App SuppM 1B |
#        | IT:Application:Workflow | IT App WF Helix:IT App WF ServiceNow:IT App WF TNT |
#        | IT:Cloud Infrastructure | IT Cloud:IT Cloud AWS Party&Privacy:IT Cloud MANO:IT Cloud TCS:NFVI:Public Cloud |
#        | IT:Database | Database-NO:IT Database MariaDB L3:IT DB Oracle/PostgreSQL-EE:MSSQL L3:MySQL L3:Oracle L3:PostgreSQL L3 |
#        | IT:DataCenter | DC Denmark:DC Finland:DC Norway:DC Sweden:IT DC Estonia:IT DC OSS-EE |
#        | IT:FI:CC:Avacon | Delivery |
#        | IT:Infra | Backup:IT Infra Core-EE:SE:Service Development:Software Asset Management:Storage:User Network:Workplace |
#        | IT:Network | DNS/DHCP:LAN Services:Load Balancer L2:Load Balancer L3:Routing/Switching L2:Routing/Switching L3:TSIN L2:TSIN L3 |
        | IT:OSS | Keycom-FI:Satellite-FI |
#        | IT:Security | Firewall L2:Firewall L3:IT Sec Firewall Auth MobilePAS:IT Security Site Access:PAM:Proxy L2:Proxy L3:Remote Access L2:Remote Access L3 |
#        | IT:Security:FW Orchestration | IT Sec FW Orchestration |
#        | IT:Server | IT Server Duty Tech-EE:IT Server Netw Dev-EE:Linux/Unix L2:Windows L2 |
#        | IT:Service | Core-NO:NEO-NO:Service-NO |
#        | IT:Workplace | IT Workplace Enterprise-EE:IT Workplace Operations |
#        | OSS:Automation | OSS Automation Infra-SE |
#        | OSS:Inventory | ADDM-Common:IT CMDB-Common |
#        | OSS:Monitoring | OSS Mon Truesight Overview:OSS Monitoring-Common:OSS Monitoring-EE:OSS Mon-TEMIP:Overview-Common |
#        | OSS:Multiple | OSS ADM CGI:OSS Tech Mahindra |
#        | OSS:NEMS:Ericsson | RAN Ericsson NEMS-Common |
#        | OSS:NEMS:Huawei | RAN Huawei NEMS-Common |
#        | OSS:NEMS:NSN | RAN NSN NEMS-Common |
#        | OSS:NEMS | RAN Other NEMS-Common |
#        | OSS:Performance | OSS Perf Probing:OSS Perf-ENIQ:OSS Performance-Common |
#        | OSS:Plan&Pres | OSS Data-Common:OSS Distribution-Common:OSS Optimization-Common:OSS Planning-Common:OSS Presentation-Common |
#        | OSS:Remote Access | OSS Netguard |
#        | OSS:Workflow | OSS WF Trouble Ticket-EE:SIA -common:SIA-Tieto |
#        | OSS:Workflow:OW | OSS WF OW Assignment Profiles:OSS WF OW Workflow Infra:OSS Workflow-Common|
#        | Packet Transport:DNS | IP Registry |
#        | Packet Transport:Fixed:CDN | Telia CDN |
#        | Packet Transport:Mobile | Transport Mobile-Common|
#        | Security services:SOC | SOC-Common-L1:SOC-Common-L2:SOC-Common-L3_SE |
#        | Third Parties:Mobile | Nokia_TTN_DK |
        | Third Parties        | Third Party Cygate in OW |
#        | Transmission:Mobile:Engineering | NW Transmission -ENG |
#        | Transmission:Mobile | NW Transmission-NO |
#        | TV | TV 3CS:TV Backend:TV Development:TV Editorial-SE:TV Playout |
#        | VAS:Application Services | Application Services:VAS Application Services-EE |
#        | VAS:IMS Services | VAS IMS TCAS |
#        | VAS:IN Services | VAS IN CGW:VAS IN Entry:VAS IN Managed Voice:VAS IN Services KY&Cleanmail:VAS IN Services Meridix Hawkey:VAS IN Services NGIN CIVR:VAS IN Services NSEE:VAS IN Services Other:VAS IN Services SGW OCSC SIG:VAS IN Services Touchpoint-DK:VAS IN Services Touchpoint-SE:VAS IN Services-EE:VAS IN Touchpoint Plus-SE |
#        | VAS:IoT | IoT-operation:VAS IoT and MCP-EE:VAS IoT CloudOps:VAS Iot Devices:VAS IoT DevOps |
#        | VAS:MAS:Linux | VAS MAS Linux |
#        | VAS:MAS:Windows | VAS MAS Windows |
#        | VAS:Messaging Services | VAS Messaging Email-EE:VAS Messaging Linux:VAS Messaging Windows:VAS Messaging-EE |
#        | VAS:Mobile:Common:Development | Collaboration Solution-SE |
#        | VAS:Mobile:Enterprise | Com Solutions-SE |
#        | VAS:Mobile:IN services | IN Services-Common:IN Services-EE |
#        | VAS:Mobile:Messaging | Messaging Operation-EE:Messaging Services-Common |
#        | VAS:Mobile:Services | 112/114 DK:3de Party Content-DK:Core NW Development-Common:IME-DK:IME-LT:IME-NO:Mobiz Link-DK:Mobiz SP-DK:Mobiz Status-DK:Policy manager-DK:Probiz-DK:Touchpoint Plus-DK:Touchpoint Soho-DK:UBP-DK:UC miscellaneous-DK:VCDR-DK |
#        | Voice:Fixed:Pabx    | Voice Fix PABX Alcatel:Voice Fix PABX Ascom:Voice Fix PABX Avaya Aura:Voice Fix Avaya Call S:Voice Fix PABX Avaya CS1000:Voice Fix PABX Avaya IP-Office:Voice Fix PABX Avaya Signal S:Voice Fix PABX Cisco:Voice Fix PABX Competella:Voice Fix PABX Mitel CMG:Voice Fix PABX Mitel MiCC:Voice Fix PABX Mitel Mxone:Voice Fix PABX Mitel Mxone:Voice Fix PABX Mitel OneBox:Voice Fix PABX Tellus:Voice Fix PABX Trio:Voice Fix PABX Vision80/20                                                                                                                                                                                                                    |
#         | Voice:Fixed:PSTN | L2 Fixed Voice-SE     |
#        | Voice:Fixed:VoIP    | Voice Fix VoIP Applications-EE:Voice Fix VoIP SAP CCtr-EE:Voice Fix VoIP Services-EE |
#         | Voice:Fixed      | Voice Fixed ACE L3    |

#      When user clicks on sweden checkbox under affected BU's
#      And user enters "Test case 05.03 Event End Time" in Title field in Trouble event
#      And user selects request type as "Customer" on trouble event page
#      And user enters description as "Test case 05.03 Event End Time"
#      And user clicks on save button
#      Then ticket should be created and status should be assigned
#      When user changes status to "Cleared" on trouble event page
#      And User selects "Fault Position" as dropdownValue and should see values for "notreadonly"

#        | DropdownValue | DropdownValuesToBePresent|
#        | Carrier Voice | Genband |
#        | Customer      | Cable/Fibre fault:Configuration failure:Other:Power failure:Telia Owned CPE:Transmission failure:Unclear |
#        | Carrier Voice | Genband |
#        | Customer | Cable/Fibre fault:Configuration failure:Other:Power failure:Telia Owned CPE:Transmission failure:Unclear |
#        | Fixed:Carrier Voice | Genband |
#        | Fixed:Element Manager | Other:Unclear |
#        | Fixed:IMS Core Networks | AFG:CSCF:DSC:IP-Works:Other:SBG:Unclear |
#        | Fixed:Packet Networks | Aggregation Switch:DHCP server:DNS server:FTTH node:Int Edge Router:Int Inter-reg Router:IPX:Nat Edge Router:Nat Inter-reg Router:Other:Unclear:xDSL |
#        | Fixed:Physical Network | Copper:Fiber:Other:Unclear |
#        | Fixed:PSTN | EAR:IC/RSS:IX:KC/RSS:LG:LS:LX:NPDB:Other:TG:TS:Unclear |
#        | Fixed:Transmission | Other:PDH:Radiolink:SDH:Synchronization Network:Unclear:xWDM |
#        | IT | Application:Backup:Database:Event Management:Firewall:Hardware:Load Balancer:Operating System:Other:Proxy:Remote Access:Router/Switch:Storage:Support Software:Unclear |
#        | Mobile:CS Core Networks | EIR Frontend:HLR Frontend:HSS Frontend:MGW:MNP Frontend:MSC:NDB:NEBR:One-NDS:Other:PGW:SCP:STP:Unclear |
#        | Mobile:IMS Core Networks | AFG:CSCF:DSC:IP-Works:MTAS:Other:SBG:Unclear |
#        | Mobile:Mobile CNDB | Mobile CNDB |
#        | Mobile:PS Core Networks | AAA:CMG:CMM:ePDG:EPG:GLANA CPE:M2M-VPN:NAT:NFVI:Other:PCRF:PM:SGSN/MME:Unclear |
#        | Mobile:Radio Access Network | Base Station:BSC:Other:RNC:SIU:Unclear |
#        | Mobile:Roaming | DRX:IP/STP:Other:Unclear |
#        | Mobile:WLAN Access | AP:NAS:Other:Unclear |
#        | N/A | N/A |
#        | Other | Other |
#        | Other Service Provider | Cable/Fibre fault:Other:Power failure:Transmission failure:Unclear:Voice Underlying Carrier |
#        | PDB:PDB | PDB |
#        | Position Not Found | Position Not Found |
#        | Site Infrastructure | Cooling:Other:Physical Access System:Power System:Unclear |
#        | TV:Cable TV | Cable:Cable customer premises:Distribution network amplifier:HFC network (noise):Optical connection cable / connectors:Optical transmission:Other:Other connection cable / connectors:Passive equipment:Power supply:Residential amplifier:Return path amplifier:Unclear |
#        | TV:CDN IPTV | Other:Unclear:VOD repository:VOD server |
#        | TV:CDN OTT | Other:Unclear:VOD repository:VOD server |
#        | TV:OD Content | C More:Cirkus:Curio:Discovery:HBO:NatGeo:Nordisk Film:Other:Paramount:SF Anytime:Turner:Xotix |
#        | TV:Platform | Conax:Other:TV Back End Application:TV Back End Database:TV Back End Other:TV Back End Storage:TV Back End T-cat:Unclear:Verimatrix |
#        | TV:RHE | Antennas:Edge QAM:External Input signals:Other:Reception equipment:Transmodulation equipment:ULA equipment:Unclear |
#        | TV:SHE | Antennas:External Input signals:Multiplexing:Other:Output CTV:Output IPTV:Output OTT:Peripheral systems:Reception:Unclear |
#        | TV:Terminal | RGW (Residential Gateway):STB (Set-Top Box) |
#        | TV:TV Applications | End User Application |
#        | Undefined Telia | Undefined Telia |
#        | VAS:IoT | Backend (incl DCP):Mobile App:Other:Unclear |
#        | VAS:Service Nodes | Charging:Email:IN Node:IVR:Messaging:NSEE:OTA:Other:Roaming:UC:Unclear |

#      And User selects "Cause" as dropdownValue and should see values for "readonly"
#
#        | DropdownValue | DropdownValuesToBePresent|
#        | Change Process:Configuration | Customer:Other:Other Service Provider:Supplier:TC Field Force:Telia Company:Third Party:Unclear:Vendor |
#        | Change Process:Configuration | Customer:Other:Other Service Provider:Supplier:TC Field Force:Telia Company:Third Party:Unclear:Vendor |
#        | Change Process:Event Suppression | N/A |
#        | Change Process:Human Mistake | Customer:Other:Other Service Provider:Supplier:TC Field Force:Telia Company:Third Party:Unclear:Vendor |
#        | Change Process:Other | Other |
#        | Change Process:Planning/Testing | Customer:Other:Other Service Provider:Supplier:TC Field Force:Telia Company:Third Party:Unclear:Vendor |
#        | Change Process:Routine | Customer:Other:Other Service Provider:Supplier:TC Field Force:Telia Company:Third Party:Unclear:Vendor |
#        | Change Process:Service Window Exceeded | Customer:Other:Other Service Provider:Supplier:TC Field Force:Telia Company:Third Party:Unclear:Vendor |
#        | Change Process:Traffic Affecting Not Understood | Customer:Other:Other Service Provider:Supplier:TC Field Force:Telia Company:Third Party:Unclear:Vendor |
#        | Change Process:Unannounced | Customer:Other:Other Service Provider:Supplier:TC Field Force:Telia Company:Third Party:Unclear:Vendor |
#        | Change Process:Unclear | Customer:N/A:Other:Other Service Provider:Supplier:TC Field Force:Telia Company:Third Party:Unclear:Vendor |
#        | Change Process:Wrong input | Customer:Other:Other Service Provider:Supplier:TC Field Force:Telia Company:Third Party:Unclear:Vendor |
#        | Deliver/RI:Configuration | Customer:Other:Other Service Provider:Supplier:TC Field Force:Telia Company:Third Party:Unclear:Vendor |
#        | Deliver/RI:Human Mistake | Customer:Other:Other Service Provider:Supplier:TC Field Force:Telia Company:Third Party:Unclear:Vendor |
#        | Deliver/RI:Other | Other |
#        | Deliver/RI:Planning/Testing | Customer:Other:Other Service Provider:Supplier:TC Field Force:Telia Company:Third Party:Unclear:Vendor |
#        | Deliver/RI:Routine | Customer:Other:Other Service Provider:Supplier:TC Field Force:Telia Company:Third Party:Unclear:Vendor |
#        | Deliver/RI:Unclear | Customer:Other:Other Service Provider:Supplier:TC Field Force:Telia Company:Third Party:Unclear:Vendor |
#        | Delivery Reclamation:Other | Other |
#        | Environment:Extreme weather | N/A |
#        | Environment:Fire | N/A |
#        | Environment:Flooding | N/A |
#        | Environment:Lightning | N/A |
#        | Environment:Other | N/A |
#        | Environment:Temperature | N/A |
#        | Hardware Failure:Antenna aligment | N/A |
#        | Hardware Failure:Antenna equipment fault | N/A |
#        | Hardware Failure:Cable | N/A |
#        | Hardware Failure:Card (unit) | N/A |
#        | Hardware Failure:Chassis (unit) | N/A |
#        | Hardware Failure:Connector fault | N/A |
#        | Hardware Failure:Cross connection | N/A |
#        | Hardware Failure:Device (unit) | N/A |
#        | Hardware Failure:Disc (Unit) | N/A |
#        | Hardware Failure:Fan (unit)  | N/A |
#        | Hardware Failure:Filter | N/A |
#        | Hardware Failure:Fuse | N/A |
#        | Withdrawn:Other | Other |
#        | Hardware Failure:Grounding | N/A |
#        | Hardware Failure:Line quality | N/A |
#        | Hardware Failure:Memory (card) | N/A |
#        | Hardware Failure:Noise problem | N/A |
#        | Hardware Failure:Other | N/A |
#        | Hardware Failure:Port (unit) | N/A |
#        | Hardware Failure:Power (unit) | N/A |
#        | Hardware Failure:Processor (card) | N/A |
#        | Hardware Failure:Signal level | N/A |
#        | Incident Process:Other | Customer:Other:Other Service Provider:Supplier:TC Field Force:Telia Company:Third Party:Unclear:Vendor |
#        | Logical:Capacity | N/A |
#        | Logical:Configuration | N/A |
#        | Logical:Logical connection | N/A |
#        | Logical:Memory depleted | N/A |
#        | Logical:Other | Other |
#        | Logical:Routing | N/A |
#        | N/A:N/A | N/A |
#        | No Cause Found:Mobile Coverage | N/A |
#        | No Cause Found:Monitoring | N/A |
#        | No Cause Found:No Fault Found | N/A |
#        | No Cause Found:Other | Other |
#        | Other:Other | Other |
#        | Other party responsibility:Other | Other |
#        | Power:Earth leak circuit breaker | N/A |
#        | Power:Human Mistake | Customer:Other:Other Service Provider:Supplier:TC Field Force:Telia Company:Third Party:Unclear:Vendor |
#        | Power:N/A | N/A |
#        | Power:Other | Other |
#        | Power:Power Customer Premise | N/A:Other |
#        | Power:Power Quality | N/A |
#        | Power:Power Supplier Node | N/A |
#        | Power:Power Test | Customer:Other:Other Service Provider:Supplier:TC Field Force:Telia Company:Third Party:Unclear:Vendor |
#        | Preventive Maintenance:Other | Other |
#        | Preventive Maintenance:Test | Customer:Other:Other Service Provider:Supplier:TC Field Force:Third Party:Unclear:Vendor |
#        | Security:DOS Attack | Other |
#        | Security:Malicious Software | Other |
#        | Security:Other | Other |
#        | Security:Physical Intrusion | Other |
#        | Security:Theft | Other |
#        | Security:Vandalism | Other |
#        | SNOW:Automatically detected break | Undefined |
#        | SNOW:Customer related | Announced Maintenance:Billing:Customer Not Returned:DDOS attack:Environment:Maintenance:Third Party:Unannounced Maintenance:Undefined:User |
#        | SNOW:Delivery complaints | Undefined |
#        | SNOW:Exclude (duplicate) | Undefined |
#        | SNOW:Force majeure | Undefined |
#        | SNOW:Hardware | Accessories:Fixed terminal:Mobile terminal:Modem:Router:Undefined |
#        | SNOW:Maintenance | Announced:Unannounced:Undefined |
#        | SNOW:Network related | Access:Configuration:Environment:Node:Undefined |
#        | SNOW:No fault found | Non-SLA affecting:SLA affecting:Undefined |
#        | SNOW:Other | Missing code:Other |
#        | SNOW:Power | Customer:Telia:Undefined |
#        | SNOW:Server | Application:Configuration:Hardware:MDC:Undefined |
#        | SNOW:Software | Configuration:Software Fault:Undefined |
#        | SNOW:Telephony | Configuration:Contact Center:Mobile coverage:Mobile related:Software |
#        | SNOW:Withdrawn | Withdrawn |
#        | Software Fault:Bug | N/A |
#        | Software Fault:Crash | N/A |
#        | Software Fault:Hang | N/A |
#        | Software Fault:Other | N/A |
#        | Test Ticket:N/A | N/A |
#        | User Mistake:Other | Other |
#        | Withdrawn:Other | Other |
#        | Technical Error:Technical Error | Other:Telia Company |
#        | Not a PDB:Not a PDB             | N/A                 |
#        | Human Error:Human Error         | Other:Telia Company |
#
#      And User selects "Action" as dropdownValue and should see values for "readonly"
#        | Alarm configuration change | Other:Telia Company |
#        | Auto closed | Automation |
#        | Capacity increase | Customer:Other:Other Service Provider:Telia Company:Third Party |
#        | Customer guidance | Other:Telia Company |
#        | Customer has repaired | Customer |
#        | Duplicate | N/A                  |
#        | Fault disappeared by itself | N/A |
#        | Final notification done | Telia Company |
#        | Level adjustment | Customer:Other:Other Service Provider:Supplier:TC Field Force:Telia Company:Third Party:Unclear:Vendor |
#        | N/A | N/A |
#        | No Action | N/A:Telia Company |
##        | No faults found |             |
#        | Other | Other |
#        | Other Service Provider has repaired | Other Service Provider |
#        | Repair | Customer:Other:Other Service Provider:Supplier:TC Field Force:Telia Company:Third Party:Unclear:Vendor |
#        | Replace | Customer:Other:Other Service Provider:Supplier:TC Field Force:Telia Company:Third Party:Unclear:Vendor |
#        | Reset | Customer:Other:Other Service Provider:Supplier:TC Field Force:Telia Company:Third Party:Unclear:Vendor |
#        | Service change | Customer:Other:Other Service Provider:Telia Company:Unclear |
#        | Service termination | Customer:Other:Other Service Provider:Telia Company:Unclear |
#        | Software upgrade | Customer:Other:Other Service Provider:Supplier:TC Field Force:Telia Company:Third Party:Unclear:Vendor |
