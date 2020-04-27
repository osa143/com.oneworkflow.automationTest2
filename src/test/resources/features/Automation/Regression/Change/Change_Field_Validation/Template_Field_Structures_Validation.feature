@changes @Template_Field_Structure_validation
#Incomplete steps

  Feature: Validation of change template field structure
    Scenario:Validation of change template field structure

      Given user is on the OneWorkflow login page
      And user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create change record
      Then user switches to window 1
      Then change record page should be opened and Change form is displayed
      And User selects "Template" as dropdownValue and should see values for "readonly"
      | DropdownValue | DropdownValuesToBePresent|
      |All:IT:Carrier |Telia Carrier PROD and UAT Database Changes:Telia Carrier UAT Changes|
      |All:IT:CES \| Billing \| Invoicing & Customer Interaction |BDL Std change|
      |All:IT:CES \| Channels \| Platforms & Architecture        |Installation Agora-COTS:Installation Agora-TSE|
      |All:IT:DK \| Data Insight        |Deploy to AWS|
      |All:IT:FI \| Online & Sales       |New Feature or User Story to AccessManager:New Feature or User Story to Billarchive:New Feature or User Story to Omat Sivut:New Feature or User Story to Selleri:New Feature or User Story to Sokudo:New Feature or User Story to Säilä|
      |All:IT:FI \| Provisioning & Service Management|OSS application parameter change                                                                                                                                                                                           |
      |All:IT:FI \| VAS|Viprion security patch                                                                                                                                                                                           |
      |All:IT:Group \| SEO \| TV | Telia Play Standard Change                                                                      |
      |All:IT:INF \| Digital Platform & IAM \| Connections|GESB-SWE-BW                                                           |
      |All:IT:INF \| Network \| Data Center Networks      |Routing and Switching                                                 |
      |All:IT:INF \| Network \| Functionalities & Security|Firewall Orchestration Platform                                       |
      |All:IT:INF \| Network \| Internal Networks|Implemenation of configuration changes in ManageLan Equipment:Implementation of configuration changes in TSRU-VPN-servers                                       |
      |All:IT:CES \| Billing \| Mediation & Policy Manager |Charging Mediation Sweden|
      |All:IT:INF \| Cloud & Platform \| Compute|Automatic Update Management of operating system for both Windows and Linux.                                                          |
      |All:IT:NO \| Customer Care & Sales|Standard Change for KNUT-Customer Care & Sales:Standard Change for POS & Tango Telia Norway|
      |All:IT:NO \| Product & Production Mobile|Standard change for Product & Production Mobile NO|
      |All:IT:NO \| Tech IT Charging and Billing|Standard change for Charging & Billing NO|
      |All:IT:Other| DK RPA Process Automation:TEST TEMPLATE [UAT] - Standard Change|
      |All:IT:PRO \| Resources Management \|Inventories|BMC Discovery Monthly TKU|
      |All:IT:PRO \| Resources Management \|Planning|CDDS standard deployment:Database service (Fenix):Installing a new build of Atoll software|
      |All:IT:SE \| Enterprise\|CIS|CCS-CALLGUIDE-RECORDING:CCS-TSCC-IVR|
      |All:IT:SE \| Enterprise\|TP Family|Touchpoint Family Standard|
      |All:Mobile:3rd Parties|RPA (Robotic Process Automation) - Email to CR|
      |All:Mobile:Billing|Nobill - Customer refund (SE):Nobill - Customer refund (SE):Nobill - Price and parameter change, new campaign, configuration updates (SE)|
      |All:Mobile:Construction Small premises|Femto GW security Audit and Hardening (NO)|
      |All:Mobile:CS Core (Voice)|Administration Licenses:Administration User accounts:Blocking MVNO & SP services:CELLdata in CS Core:Configuration Interfaces & circuits:Configuration Number ranges:Configuration Signaling routing:CS Core Parameter change:Delivery Enterprise Services:Implementation Q&S, IN trigger:Measurements, logs and macros:Reboot of node, server, process:Replacement of faulty HW|
      |All:Mobile:IMS Core|Administration Licenses IMS:Administration User accounts IMS:Blocking MVNO & SP services IMS:Configuration Interfaces & circuits IMS:Configuration Number ranges IMS:Configuration Signaling routing IMS:Delivery Enterprise Services IMS:Implementation Q&S, IN trigger IMS:Measurements, logs and macros IMS:Parameter change IMS:Reboot of node, server, process IMS:Replacement of faulty HW IMS|
      |All:Mobile:IP Transport|Access lists / prefix lists / route policies/ QoS policies:Preparation/tests IP Transport:Standard Interface configuration:Preparation/tests IP Transport:Standard Interface configuration|
      |All:Mobile:PS Core (Data)|Corporate Access single customer change:EPG parameter change:F5 NAT parameter change:Gn DNS Add, modify or remove data:LRF Zone File Update in GMLC Nodes:Preparation/tests PS Core:SACC IP change:SGSN/MME parameter change|
      |All:Mobile:RAN - Externals|RAN Connectivity:RAN Decommissioning:RAN Integration:RAN Modification:RAN Swap |
      |All:Mobile:RAN Ericsson   |Parameter Change |
      |All:Mobile:RAN Huawei   |RAN Huawei Configuration change (limited area):TCH for NB-IoT (NO) |
      |All:Mobile:RAN NSN  |  RAN NSN Configuration change (limited area)|
      |All:Mobile:Service systems|Change SMS routing via HUB:SGW Standard change (FI):SIG Standard change (FI) |
