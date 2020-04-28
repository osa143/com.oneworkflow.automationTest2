@00.17 @00 #@Incident

Feature: validation owner field structure

  Scenario: validation owner field structure


    Given user is on the OneWorkflow login page
    When user logs in with valid user and password
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create trouble event
    And user switches to window 1
    Then trouble record form should appear in new tab
    When user clicks on owner under sections
    And user validates owner profile field availability
    Then multiple values should be available in "Owner Profile*" dropdown
    And User selects "Owner Profile*" as dropdownValue and should see values for "notreadonly"

      | DropdownValue | DropdownValuesToBePresent|
#      | PLAZA         |                          |
#      | Access network:Mobile:RAN:Common | Mobile Services-DS:NW Radio Quality-NO:RAN Customer Tickets SE |
#      | Access network:Mobile:RAN:Deployment | Rollout NO|
#      | Access network:Mobile:RAN:Deployment SE |NW Deployment Eltel-SE:NW Deployment KPI Team-SE:NW Deployment Netel-SE:NW Deployment Relacom-SE:NW Deployment Scanmast-SE:NW Deployment Support-SE    |
#      | Access network:Mobile:RAN:Design | Design RAN&Core-SE                                                                                                                                                             |
#      | Access network:Mobile:RAN:Ericsson  | RAN Ericsson-Common |
#      | Access network:Mobile:RAN:Huawei | RAN Huawei-Common |
##      | Access network:Mobile:RAN | Acc Mob RAN Ericsson-SE:Acc Mob RAN NSN-SE:Mobile service-FLEN:RAN improve-Common |
#      | Access network:Mobile:RAN:NSN | RAN NSN-Common |
#      | Access network:Mobile:RAN:Planning | NW Planning Last Mile-SE:NW RAN Deployment DK:RAN Engineering-Common:RAN Engineering-SE  |
#      | Access network:Mobile:Transmission | BtB Solution-DK:MBH Design-DK:MBH Fiber-DK:MBH Implementing-DK:MBH Main-DK |
#      | Access network:Mobile:WIFI | Core support Wlan |
#      | Access network:Mobile:WLAN:Common | RAN Telia Wifi |
#      | Access network:Mobile:WLAN | WLAN Agreement:WLAN Coverage:WLAN TG-EL |
#      | BSS:Billing | Amdocs-DK:AOFokus-DK:Axapta-DK:Bill Management-SE:Billing L2-FI:Bruce/Rosetta:Bruce/Rosetta-DK:Charging & Rating-SE:DK Tech IT Billing:DLG NaviBilling:Focus Op-DK:Fokus Finance Approve-DK:Fokus Operations QA-DK:Fokus Ops Business Approve-DK:Fokus Price & Parameters-DK:Fokus Test:Foton-DK:ICH-DK:Invoicing&Cust Interact-SE:KisbiGeneva Operations-DK:KisbiGeneva Price & Para-DK:KisbiGeneva-DK:Mit Tele Navibilling-DK:Ninja-DK:OCS Operation-EE:OCS Operation-SE:Port&Bill -Common:Prepaid-FI:StateEvent-DK:VERO-DK |
#      | BSS:Channels | BSS Ch Vart Telia-SE:Channels L2-FI:Omni Channels-SE:Portal Channels L2-SE |
#      | BSS:CRM | CRM L2-FI:Cust & Order Mgmt -SE |
#      | BSS:Data&Analytics | Data&Analytics L2-FI |
#      | BSS:GDPR | GDPR Manager-DK |
#      | BSS:MicroServices | Microservice-DK |
#      | BSS:NEO | NEO IT Awaiting BU-DK:NEO IT DK Services-DK:NEO IT Ninja-DK:NEO IT Tango/Copa-DK:NEO IT-DK |
#      | BSS:Other | BSS COPE-DK |
#      | BSS | Etray-DK:Online-DK |
#      | BSS:Provisioning | Provisioning_EMANG-SE:Provisioning-SE |
#      | BSS:Sales | Sales&Partner-SE |
##      | Control Center | Incident Manager |
#      | Control Center:Improvement | SA Process Improvements |
#      | Control Center:Monitoring | CC Fixed access-FI:CC Fixed access-SE:CC IP/TV:CC IT:CC Mob Core/IMS/Fixed Voice/IN:CC Mob&Access-Common:CC Monitoring Management:CC WDM |
      | Control Center:Monitoring:Not to be used | CC Monitor FM Connection Issue |
      | Control Center:Performance | CC Perf&Quality:CC Prod&proc |
      | Core:Mobile | Core Production-Common:Test & Verification-Common |
      | Core:Mobile:Mobile CS:Development | Development Voice-Common |
      | Core:Mobile:Mobile CS | Network Design Rejlers PRA-SE:Voice&IMS EAST:Voice&IMS WEST |
      | Core:Mobile:Mobile IP | Mobile Core IP EAST:Mobile Core IP WEST:Mobile Core IP-Common |
      | Core:Mobile:Mobile PS:Development | Development Data-Common |
      | Core:Mobile:Mobile PS | Mob PS Core EAST:Mob PS Core West |
      | Core:Mobile:Operations | NW Core-NO |
      | Core:Mobile:Roaming:Billing | FI_TADIG-FI |
      | Core:Mobile:Roaming | Roaming Operations-Common |
      | Customer Operation | HPSM Estonia |
      | Customer Services:Escalation | WF Escalation L1-SE |
      | Customer Services:Fixed Services | Servicedesk-DK  |
      | Customer Services:Mobile Services | BU Tech Support MFN/OE VoiceSE:Market Expert BSS-DK:Market Expert-DK:Market Expert-FIN:Network Services-NO:SA&O NOC-EE:SA&O SOC-NO |
      | Customer Services:Mobile Services:Common | FI SA&O-FIN:Mobile Tech Care-LIT |
      | Customer Services:Mobile Services:Content | BU Tech Support Content-SE |
      | Customer Services:Mobile Services:Network | BU Tech Support Mobility -FIN:BU Tech Support Network-SE |
      | Customer Services:Mobile Services:NrPort | BU Tech Support Nrport-SE |
      | Customer Services:Mobile Services:SME | BU Tech Support SME-SE |
      | Customer Services:TV Services | TV CO L2-SE |
      | External:Application | External Application CGI |
      | External:CGI | OSS CGI |
      | External:Comarch | Multibella |
      | External:Dataprisma | Dataprisma |
      | External:Geneva | AM Support |
      | External | Keypro |
      | External:TCS | Channels:Ext TCS Billing-FI:Ext TCS OSS-FI |
      | External:tieto | BSS 4:Leam:NAK:OSS1:SMO:Tieto Billing |
      | External:wipro | Alpha2am |
      | External:wipro:TrueSight | Ext Wipro TrueSight |
      | Field Service:Mobile (B2B) | FDC-Common:FS Åland-FI |
      | Infrastructure:Development | IT infra-Common |
      | Infrastructure:Maintenance | Large Production Premises-NO:Siteinfra-DK:Siteinfra-NO:Tech_Sites-SE |
      | IT:Application | Application Identity & Access:Application-NO:Assurance:Billing:Billing-NO:CRM:CTI Admin-FI:Enterprise:IBS-SE:IT App ARS:IT App ART:IT App CA PPM:IT App CDL:IT App Customer Identity:IT App eBS Platform:IT App GRC:IT App HR Engagement:IT App Integration-SE:IT App MDE:IT App RODOD:IT App Telia Finance:JobSchedulling-FI:Middleware:Multibella-FI:NMS:OSS:Portal:Portal-NO:SAP:Security Services-FI:TAC1-NO:Tiksu-FI:Tunnestiimi-FI |
      | IT:Cloud Infrastructure | IT Cloud:IT Cloud TCS:NFVI:Public Cloud |
      | IT:Database | Database-NO:MSSQL L3:MySQL L3:Oracle L3:Oracle/MSSQL/MySQL/PostgreSQL:PostgreSQL L3 |
      | IT:DataCenter | DC Denmark:DC Finland:DC Norway:DC Sweden |
      | IT:Event Management | BMC/TrueSight |
      | IT:FI:CC:Avacon | Delivery |
      | IT:Infra | Backup:SE:Service Development:Software Asset Management:Storage:User Network:Workplace |
      | IT:Network | DNS/DHCP:LAN Services:Load Balancer L2:Load Balancer L3:Routing/Switching L2:Routing/Switching L3:TSIN L2:TSIN L3 |
      | IT:OSS | Keycom-FI:Satellite-FI |
      | IT:Security | Firewall L2:Firewall L3:IT Sec Firewall Auth MobilePAS:PAM:Proxy L2:Proxy L3:Remote Access L2:Remote Access L3 |
      | IT:Security:FW Orchestration | IT Sec FW Orchestration |
      | IT:Server | Linux/Unix L2:Windows L2 |
      | IT:Service | Core-NO:NEO-NO:Service-NO |
      | IT:Workplace | IT Workplace Operations |
      | OSS:Inventory | ADDM-Common:IT CMDB-Common |
      | OSS:Monitoring | OSS Monitoring-Common:OSS Mon-TEMIP:Overview-Common |
      | OSS:Multiple | OSS ADM CGI:OSS Tech Mahindra |
      | OSS:NEMS:Ericsson | RAN Ericsson NEMS-Common |
      | OSS:NEMS:Huawei | RAN Huawei NEMS-Common |
      | OSS:NEMS:NSN | RAN NSN NEMS-Common |
      | OSS:NEMS | RAN Other NEMS-Common |
      | OSS:Performance | OSS Perf Probing:OSS Perf-ENIQ:OSS Performance-Common |
      | OSS:Plan&Pres | OSS Data-Common:OSS Distribution-Common:OSS Optimization-Common:OSS Planning-Common:OSS Presentation-Common |
      | OSS:Remote Access | OSS Netguard |
      | OSS:Workflow | SIA-common:SIA-Tieto |
      | OSS:Workflow:OW | OSS-WF OW Assignment Profiles:OSS Workflow-Common |
      | OSS:Workflow:OW_Support | OW_ANS |
      | Packet Transport:DNS | IP Registry |
      | Packet Transport:Fixed:CDN | Telia CDN |
      | Packet Transport:Mobile | Transport Mobile-Common|
      | Security services:SOC | SOC-Common-L1:SOC-Common-L2:SOC-Common-L3_SE |
      | Third Parties:Mobile | NOKIA_TTN_DK |
      | Transmission:Mobile:Engineering | NW Transmission -ENG |
      | Transmission:Mobile | NW Transmission-NO |
      | TV | TV 3CS:TV Backend:TV Development:TV Editorial-SE:TV Playout |
      | VAS | Application Services |
      | VAS:IN Services | VAS IN CGW:VAS IN Entry:VAS IN Managed Voice:VAS IN Services KY&Cleanmail:VAS IN Services Meridix Hawkey:VAS IN Services NGIN CIVR:VAS IN Services NSEE:VAS IN Services Other:VAS IN Services SGW OCSC SIG:VAS IN Services Touchpoint-DK:VAS IN Services Touchpoint-SE:VAS IN Touchpoint Plus-SE |
      | VAS:ioT | ioT-operation |
      | VAS:MAS:Linux | VAS MAS Linux |
      | VAS:MAS:Windows | VAS MAS Windows |
      | VAS:Messaging Services | VAS Messaging Linux:VAS Messaging Windows |
      | VAS:Mobile:Common:Development | Collaboration Solution-SE |
      | VAS:Mobile:Enterprise | Com Solutions-SE |
      | VAS:Mobile:IN services | IN Services-Common:IN Services-EE |
      | VAS:Mobile:Messaging | Messaging Operation-EE:Messaging Services-Common |
      | VAS:Mobile:Services | 112/114 DK:3de Party Content-DK:Core NW Development-Common:IME-DK:IME-LT:IME-NO:Mobiz Link-DK:Mobiz SP-DK:Mobiz Status-DK:Policy manager-DK:Probiz-DK:Touchpoint Plus-DK:Touchpoint Soho-DK:UBP-DK:UC miscellaneous-DK:VCDR-DK |






    #And User selects "Owner Profile*" as "Access network:Mobile:RAN:Common" and should see "Mobile Services-DS:NW Radio Quality-NO:RAN Customer Tickets SE"
    #And User selects "Owner Profile*" as "Access network:Mobile:RAN:Customer" and should see "RAN Engineering Customer-DK"

