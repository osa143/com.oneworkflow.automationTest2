@00.17_Validate_Owner_field_structure #@Incident

Feature: validation of impact field availability and structure

  Scenario: user validates impact field availability and structure


    Given user is on the OneWorkflow login page
    When user logs in with valid username "Change_Automation_1" and password as "Telia@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create trouble event
    And user switches to window 1
    Then trouble record form should appear in new tab
    When user clicks on owner under sections
    And user validates owner profile field availability
    Then multiple values should be available in "Owner Profile*" dropdown
    And User selects "Owner Profile*" as dropdownValue and should see values for "notreadonly"

      | DropdownValue | DropdownValuesToBePresent|
      | Access network:Mobile:RAN:Common | Mobile Services-DS:NW Radio Quality-NO:RAN Customer Tickets SE |
      | Access network:Mobile:RAN:Customer | RAN Engineering Customer-DK                                  |
      | Access network:Mobile:RAN:Deployment | NW RAN Deployment-DK:Roll Out BTB-DK:Roll Out build Eltel-DK:Roll Out orbion-DK:Roll Out Rbld & Rplmnt-DK:Roll Out Relacom-DK|
      | Access network:Mobile:RAN:Deployment SE |NW Deployment Eltel-SE:NW Deployment Netel-SE:NW Deployment Relacom-SE:NW Deployment Scanmast-SE                           |
      | Access network:Mobile:RAN:Ericsson  | RAN Ericsson-Common |
      | Access network:Mobile:RAN:FS | FS Åland-FI |
      | Access network:Mobile:RAN:Huawei | RAN Huawei-Common |
      | Access network:Mobile:RAN | Mobile service-FLEN |
      | Access network:Mobile:RAN:NSN | RAN NSN-Common |
      | Access network:Mobile:RAN | NW Deployment Support-SE |
      | Access network:Mobile:RAN:Planning | NW Planning Last Mile-SE:NW RAN Deployment DK:NW RAN Planning-DK:RAN Engineering-Common:RAN Engineering-SE  |
      | Access network:Mobile:RAN:RAN | RAN improve-Common |
      | Access network:Mobile:WIFI | Core support Wlan |
      | Access network:Mobile:WLAN:Common | RAN Telia Wifi |
      | Access network:Mobile:WLAN | WLAN Agreement |
      | Access network:Mobile:WLAN | WLAN Coverage |
      | Access network:Mobile:WLAN | WLAN TG-EL |
      | BSS:Billing | Amdocs-DK:AOFokus-DK:Axapta-DK:Bill Management-SE:Bruce/Rosetta:Bruce/Rosetta-DK:Charging & Rating-SE:DK Tech IT Billing:DLG NaviBilling:Focus Op-DK:Fokus Finance Approve-DK:Fokus Operations QA-DK:Fokus Operations-DK:Fokus Ops & Dev-DK:Fokus Ops Business Approve-DK:Fokus Price & Parameters-DK:Fokus Test:Invoicing&Cust Interact-SE:KisbiGeneva Operations-DK:KisbiGeneva Price & Para-DK:KisbiGeneva-DK:Mit Tele Navibilling-DK:OCS Operation-EE:OCS Operation-SE:Port&Bill -Common:Prepaid-FI:TAC1-NO:VERO-DK |
      | BSS:Channels | Omni Channels-SE |
      | BSS:CRM | Cust & Order Mgmt -SE |
      | BSS:NEO | NEO IT Awaiting BU-DK:NEO IT DK Services-DK:NEO IT Ninja-DK:NEO IT Tango/Copa-DK:NEO IT-DK |
      | BSS | Online-DK |
      | BSS:Provisioning | Provisioning_EMANG-SE:Provisioning-SE |
      | BSS:Sales | Sales&Partner-SE |
      | Control Center | Incident Manager |
      | Control Center:Monitoring | CC Fixed access-FI:CC Fixed access-SE:CC IP/TV:CC IT:CC Mob Core/IMS/Fixed Voice/IN:CC Mob&Access-Common:CC Monitoring Management: CC WDM |
      | Control Center:Performance | CC Perf&Quality:CC Prod&proc |
      | Core:Mobile | Core Production-Common |
      | Core:Mobile:Mobile CS:Development | Development Voice-Common |
      | Core:Mobile:Mobile CS | Network Design Rejlers PRA-SE:Voice&IMS EAST:Voice&IMS WEST |
      | Core:Mobile:Mobile IP | Mobile Core IP EAST:Mobile Core IP WEST:Mobile Core IP-Common |
      | Core:Mobile:Mobile PS:Development | Development Data-Common |
      | Core:Mobile:Mobile PS | Mob PS Core EAST:Mob PS Core West |
      | Core:Mobile:Operations | NW Core-NO |
      | Core:Mobile:Roaming:Billing | FI_TADIG-FI |
      | Core:Mobile:Roaming | Roaming Operations-Common |
      | Core:Mobile | Test & Verification-Common |
      | Customer Operation | PLAZA |
      | Customer Services:Mobile Services | BU Tech Support MFN/OE VoiceSE:Market Expert BSS-DK:Market:Market Expert-DK:Market Expert-FIN:Network Services-NO:SA&O NOC-EE:SA&O SOC-NO |
      | Customer Services:Mobile Services:Common | FI SA&O-FIN:Mobile Tech Care-LIT |
      | Customer Services:Mobile Services:Content | BU Tech Support Content-SE |
      | Customer Services:Mobile Services:Network | BU Tech Support Mobility -FIN:BU Tech Support Network-SE |
      | Customer Services:Mobile Services:NrPort | BU Tech Support Nrport-SE |
      | Customer Services:Mobile Services:SME | BU Tech Support SME-SE |
      | External:Comarch | Multibella |
      | External:Dataprisma | Dataprisma |
      | External:Geneva | AM Support |
      | External | Keypro |
      | External:logica | Leam |
      | External:tcs | Channels |
      | External:tieto:leam | BSS 4|
      | External:tieto | NAK:SMO:Tieto Billing |
      | External:wipro | Alpha2am |
      | Field Service:Mobile (B2B) | FDC-Common |
      | Infrastructure:Development | IT infra-Common |
      | Infrastructure:Maintenance | Large Production Premises-NO:Siteinfra-NO:Tech_Sites-SE |
      | IOT | Operation                                                                      |
      | IT:Application | Application-NO:Assurance:Billing:Billing-NO:CRM:Enterprise:IT-Application-OSS:JobSchedulling-FI:Middleware:Multibella-FI:NMS:Portal:Portal-NO:SAP:Security Services-FI:Tiksu-FI:Tunnestiimi-FI |
      | IT:Cloud Infrastructure | NFVI:Nimbus/TSVP |
      | IT:Database | Database-NO:MSSQL L3:MySQL L3:Oracle L3:Oracle/MSSQL/MySQL/PostgreSQL:PostgreSQL L3 |
      | IT:DataCenter | DC Denmark:DC Finland:DC Norway:DC Sweden |
      | IT:Event Management | BMC/TrueSight |
      | IT:FI:BB:IT | SA |
      | IT:FI:CC:Avacon | Delivery |
      | IT:Infra | Cloud:NFVI Infra:Service Development:Software Asset Management:User Network:Workplace |
      | IT:Network | DNS/DHCP:LAN Services:Load Balancer L2:Load Balancer L3:Routing/Switching L2:Routing/Switching L3:TSIN L2:TSIN L3 |
      | IT:OSS | Keycom-FI:Satellite-FI |
      | IT:Security | Firewall L2:Firewall L3:PAM:Proxy L2: Proxy L3:Remote Access L2:Remote Access L3 |
      | IT:Server | Linux/Unix L2:Linux/Unix L3:Windows L2:Windows L3 |
      | IT:Service | Core-NO:NEO-NO:Service-NO |
      | it | Backup:SE:Storage |
      | OSS:Distribution | OSS Distribution-Common:OSS-Dist|
      | OSS:Monitoring | OSS Mon-CGI:OSS Monitoring Mob:OSS Monitoring-Common:OSS Mon-TEMIP:OSS-Mon1:OSS-Mon2 |
      | OSS:NEMS:Ericsson | RAN Ericsson NEMS-Common |
      | OSS:NEMS:Huawei | RAN Huawei NEMS-Common |
      | OSS:NEMS:NSN | RAN NSN NEMS-Common |
      | OSS:NEMS | RAN Other NEMS-Common |
      | OSS:Performance | OSS Perf-CGI:OSS Perf-ENIQ:OSS Performance Mob:OSS Performance-Common:OSS-Perf:OSS-Perf2 |
      | OSS:Plan&Pres | GNSV-FI:OSS Optimization-Common:OSS Planning-Common:OSS Presentation-Common:OSS-Plan |
      | OSS:Workflow | OSS-Wflow1:OSS-Wflow2:SIA-common:SIA-Tieto |
      | OSS:Workflow:OW | OSS Workflow-Common |
      | OSS:Workflow:OW_Support | OW_ANS |
      | Packet Transport:Mobile | Transport Mobile-Common|
      | Security services:SOC | SOC-Common-L1:SOC-Common-L2:SOC-Common-L3_SE |
      | Third Parties:Mobile | NOKIA_TTN_DK:Telenor Denmark |
      | Transmission:Mobile:Engineering | NW Transmission -ENG |
      | Transmission:Mobile:Network:Deployment | Roll Out transmission -DK:Roll Out transmission Eltel-DK |
      | Transmission:Mobile | NW Transmission-NO |
      | Transmission:Mobile:Planning | NW Transmission -Plan:NW Transmission-DK |
      | Transmission:Mobile:Radio Link:Planning | MW PLANNING CAPACITY-DK |
      | TV | Backend:Development:Playout |
      | VAS | Application Services:Messaging Services |
      | VAS:IN Services | KY/Cleanmail:Meridix Hawkeye:NGIN CIVR:NSEE:Other:SGW OCSC SIG:Touchpoint DK:Touchpoint DK:Touchpoint Plus SE:Touchpoint SE |
      | VAS:MAS | Linux:Windows |
      | VAS:Mobile:Common:Development | Collaboration Solution-SE |
      | VAS:Mobile:Enterprise | Com Solutions-SE |
      | VAS:Mobile:IN services | IN Services-Common:IN Services-EE |
      | VAS:Mobile:ioT | ioT-Common |
      | VAS:Mobile:Managed Services | Managed Services-Common |
      | VAS:Mobile:Messaging | Messaging Operation-EE:Messaging Services-Common |
      | VAS:Mobile:Services | 112/114 DK:3de Party Content-DK:Core NW Development-Common:IME-DK:IME-LT:IME-NO:Mobiz Link-DK:Mobiz SP-DK:Mobiz Status-DK:Policy manager-DK:Probiz-DK:Touchpoint Plus-DK:Touchpoint Soho-DK:UBP-DK:UC miscellaneous-DK:VCDR-DK |






    #And User selects "Owner Profile*" as "Access network:Mobile:RAN:Common" and should see "Mobile Services-DS:NW Radio Quality-NO:RAN Customer Tickets SE"
    #And User selects "Owner Profile*" as "Access network:Mobile:RAN:Customer" and should see "RAN Engineering Customer-DK"

