$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Automation/Trouble/00 Incident Record and process output validation/00.06-00.20+05.05_Trouble.feature");
formatter.feature({
  "name": "00.06-00.20 trouble",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@TroubleNewTestCase"
    }
  ]
});
formatter.scenario({
  "name": "00.06-00.20 trouble",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TroubleNewTestCase"
    }
  ]
});
formatter.step({
  "name": "user is on the OneWorkflow login page",
  "keyword": "Given "
});
formatter.match({
  "location": "OWF_LoginPageSteps.userIsOnTheOneWorkflowLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logs in with valid user and password",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_LoginPageSteps.userLogsInWithValidUserAndPassword()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user successfully logged in to OneWorkflow and agent console should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userSuccessfullyLoggedInToOneworkflowAndAgentConsoleShouldBeDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on create trouble event",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnCreateTroubleEvent()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user switches to window 1",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userSwitchesToWindow(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "trouble record form should appear in new tab",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.troubleRecordFormShouldAppearInNewTab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on owner under sections",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksOnOwnerUnderSections()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "multiple values should be available in \"Owner Profile*\" dropdown",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.multipleValuesShouldBeAvailableInDropdown(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects \"Owner Profile*\" as dropdownValue and should see values for \"notreadonly\"",
  "rows": [
    {
      "cells": [
        "DropdownValue",
        "DropdownValuesToBePresent"
      ]
    },
    {
      "cells": [
        "Access network:Mobile:RAN:Common",
        "NW Radio Quality-NO"
      ]
    },
    {
      "cells": [
        "Access network:Home",
        "Access Home Connectivity-EE"
      ]
    },
    {
      "cells": [
        "Access network:Mobile:RAN:Deployment",
        "Rollout NO"
      ]
    },
    {
      "cells": [
        "Access network:Mobile:RAN:Deployment SE",
        "NW Deployment Eltel-SE:NW Deployment KPI Team-SE:NW Deployment Netel-SE:NW Deployment Relacom-SE:NW Deployment Scanmast-SE:NW Deployment Support-SE"
      ]
    },
    {
      "cells": [
        "Access network:Mobile:RAN:Design",
        "Design RAN\u0026Core-SE"
      ]
    },
    {
      "cells": [
        "Access network:Mobile:RAN:Ericsson",
        "RAN Ericsson-Common"
      ]
    },
    {
      "cells": [
        "Access network:Mobile:RAN:Huawei",
        "RAN Huawei-Common"
      ]
    },
    {
      "cells": [
        "Access network:Mobile:RAN:NSN",
        "RAN NSN-Common"
      ]
    },
    {
      "cells": [
        "Access network:Mobile:RAN:Planning",
        "NW Planning Last Mile-SE:NW RAN Deployment DK:RAN Engineering-Common:RAN Engineering-SE"
      ]
    },
    {
      "cells": [
        "Access network:Mobile:Transmission",
        "BtB Solution-DK:MBH Design-DK:MBH Fiber-DK:MBH Implementing-DK:MBH Main-DK"
      ]
    },
    {
      "cells": [
        "Access network:Mobile:WIFI",
        "Core support Wlan"
      ]
    },
    {
      "cells": [
        "Access network:Mobile:WLAN:Common",
        "RAN Telia Wifi"
      ]
    },
    {
      "cells": [
        "BSS:Billing:Policy Manager SE",
        "BSS Bill Policy Manager-SE"
      ]
    },
    {
      "cells": [
        "BSS:Channels",
        "BSS Ch Vart Telia-SE:Channels L2-FI:Omni Channels-SE:Portal Channels L2-SE"
      ]
    },
    {
      "cells": [
        "BSS:CRM",
        "CRM L2-FI:Cust \u0026 Order Mgmt -SE"
      ]
    },
    {
      "cells": [
        "BSS:Data\u0026Analytics",
        "BSS D\u0026A Insight-DK:Data\u0026Analytics L2-FI"
      ]
    },
    {
      "cells": [
        "BSS:GDPR",
        "GDPR Manager-DK"
      ]
    },
    {
      "cells": [
        "BSS:MicroServices",
        "Microservice-DK"
      ]
    },
    {
      "cells": [
        "BSS:NEO",
        "NEO IT Awaiting BU-DK:NEO IT DK Services-DK:NEO IT Ninja-DK:NEO IT Tango/Copa-DK:NEO IT-DK"
      ]
    },
    {
      "cells": [
        "BSS:Other",
        "BSS COPE-DK"
      ]
    },
    {
      "cells": [
        "BSS:Provisioning",
        "Provisioning_EMANG-SE:Provisioning-SE"
      ]
    },
    {
      "cells": [
        "BSS:Sales",
        "Sales\u0026Partner-SE"
      ]
    },
    {
      "cells": [
        "Control Center",
        "Incident Manager"
      ]
    },
    {
      "cells": [
        "Control Center:Improvement",
        "SA Process Improvements"
      ]
    },
    {
      "cells": [
        "Control Center:Monitoring:Not to be used",
        "CC Monitor FM Connection Issue"
      ]
    },
    {
      "cells": [
        "Control Center:Performance",
        "CC Perf\u0026Quality:CC Prod\u0026proc"
      ]
    },
    {
      "cells": [
        "Core:Mobile",
        "Core Production-Common:Test \u0026 Verification-Common"
      ]
    },
    {
      "cells": [
        "Core:Mobile:Mobile CS:Development",
        "Development Voice-Common"
      ]
    },
    {
      "cells": [
        "Core:Mobile:Mobile IP",
        "Mobile Core IP EAST:Mobile Core IP WEST"
      ]
    },
    {
      "cells": [
        "Core:Mobile:Mobile PS:Development",
        "Development Data-Common"
      ]
    },
    {
      "cells": [
        "Core:Mobile:Mobile PS",
        "Mob PS Core EAST:Mob PS Core West"
      ]
    },
    {
      "cells": [
        "Core:Mobile:Operations",
        "NW Core-NO"
      ]
    },
    {
      "cells": [
        "Core:Mobile:Roaming:Billing",
        "FI_TADIG-FI"
      ]
    },
    {
      "cells": [
        "Core:Mobile:Roaming",
        "Roaming Operations-Common"
      ]
    },
    {
      "cells": [
        "Customer Operation",
        "HPSM Estonia"
      ]
    },
    {
      "cells": [
        "Customer Services:Escalation",
        "WF Escalation L1-SE"
      ]
    },
    {
      "cells": [
        "Customer Services:Fixed Services",
        "Servicedesk-DK"
      ]
    },
    {
      "cells": [
        "Customer Services:Mobile Services",
        "BU Tech Support MFN/OE VoiceSE:Market Expert BSS-DK:Market Expert-DK:Market Expert-FIN:Network Services-NO:SA\u0026O NOC-EE:SA\u0026O SOC-NO"
      ]
    },
    {
      "cells": [
        "Customer Services:Mobile Services:Common",
        "FI SA\u0026O-FIN:Mobile Tech Care-LIT"
      ]
    },
    {
      "cells": [
        "Customer Services:Mobile Services:Content",
        "BU Tech Support Content-SE"
      ]
    },
    {
      "cells": [
        "Customer Services:Mobile Services:Network",
        "BU Tech Support Mobility -FIN:BU Tech Support Network-SE"
      ]
    },
    {
      "cells": [
        "Customer Services:Mobile Services:NrPort",
        "BU Tech Support Nrport-SE"
      ]
    },
    {
      "cells": [
        "Customer Services:Mobile Services:SME",
        "BU Tech Support SME-SE"
      ]
    },
    {
      "cells": [
        "Customer Services:TV Services",
        "TV CO L2-SE"
      ]
    },
    {
      "cells": [
        "External:ANS",
        "OW_ANS"
      ]
    },
    {
      "cells": [
        "External:Application",
        "External Application CGI"
      ]
    },
    {
      "cells": [
        "External:CGI",
        "OSS CGI"
      ]
    },
    {
      "cells": [
        "External:Comarch",
        "Multibella"
      ]
    },
    {
      "cells": [
        "External:Dataprisma",
        "Dataprisma"
      ]
    },
    {
      "cells": [
        "External:Geneva",
        "AM Support"
      ]
    },
    {
      "cells": [
        "External",
        "Keypro"
      ]
    },
    {
      "cells": [
        "External:TCS",
        "Channels:Ext TCS Billing-FI:Ext TCS OSS-FI"
      ]
    },
    {
      "cells": [
        "External:wipro:TrueSight",
        "Ext Wipro TrueSight"
      ]
    },
    {
      "cells": [
        "Field Service:Mobile (B2B)",
        "FDC-Common:FS Åland-FI"
      ]
    },
    {
      "cells": [
        "Infrastructure:Development",
        "IT infra-Common"
      ]
    },
    {
      "cells": [
        "Infrastructure:Maintenance",
        "Large Production Premises-NO:Siteinfra-DK:Siteinfra-NO:Tech_Sites-SE"
      ]
    },
    {
      "cells": [
        "IT:Application:Billing",
        "Billing:IT App Bill BDL:IT App Bill BiC:IT App Bill MOP2:IT App Bill MPS/RTS:IT App Bill Reflex:IT App Billing-EE"
      ]
    },
    {
      "cells": [
        "IT:Application:BSS",
        "IT App BSS CeSim:IT App BSS EDWM L1:IT App BSS EDWM L2:IT App BSS E-shop EE:IT App BSS Event: IT App BSS Marketstore:IT App BSS OCC:IT App BSS Produktguiden:IT App BSS Sales_Order Mgmt-EE:IT App BSS RR2R:IT App BSS SAIDA:IT App BSS WebS MultiDevice:IT App Integration BASE"
      ]
    },
    {
      "cells": [
        "IT:Application:Contact Center",
        "IT App CC CIS Operations SP:IT App CC CIS Support"
      ]
    },
    {
      "cells": [
        "IT:Application:CRM",
        "CRM:IT App CRM Alpha:IT App CRM API Market:IT App CRM Apollo:IT App CRM C2B Cache:IT App CRM C2B Services:IT App CRM C2B Caesar:IT App Cust Services-EE:IT App CRM Koda:IT App CRM Kundbild:IT App CRM OMT:IT App CRM OPT:IT App CRM Promis:IT App CRM Rodod UIM:IT App CRM Rodod AIA:IT App CRM Rodod BRM:IT App CRM Rodod OPH:IT App CRM Rodod OSM:IT App CRM Rodod Service Desk:IT App CRM Rodod Siebel:IT App CRM SINN"
      ]
    },
    {
      "cells": [
        "IT:Application:CRM:WOW",
        "IT App CRM WOW AT Test:IT App CRM WOW Func Maint:IT App CRM WOW L1:IT App CRM WOW L2:IT App CRM WOW Maint Hours:IT App CRM WOW Performance"
      ]
    },
    {
      "cells": [
        "IT:Application:Digital Channels",
        "IT App DigCh Agora 2L N\u0026F:IT App DigCh Broadband Sales:IT App DigCh Drools Flow:IT App DigCh Infra:IT App DigCh Mitt Telia:IT App DigCh Mitt Telia App:IT App DigCh Mobile Sales:IT App DigCh Mybusiness:IT App DigCh Order Flows:IT App DigCh Redaktionen:IT App DigCh Support:IT App DigCh Telia Admin:IT App DigCh telia.se:IT App DigCh Vart Telia"
      ]
    },
    {
      "cells": [
        "IT:Application:E2E Solutions",
        "IT App E2ES Fixed Fallout:IT App E2ES Migration:IT App E2ES Mobile Fallout"
      ]
    },
    {
      "cells": [
        "IT:Application:Enterprise Effectiveness",
        "IT App ARS:IT App ART:IT App CA PPM:IT App GRC:IT App HR Engagement:IT App MDE"
      ]
    },
    {
      "cells": [
        "IT:Application:Enterprise Services",
        "IT App ES Dynamics AX-EE"
      ]
    },
    {
      "cells": [
        "IT:Application:ESS",
        "IT App ESS BI-TS L2:IT App ESS BI-TS L1:IT App ESS NetBase\u0026BlueIce L1:IT App ESS NetBase\u0026BlueIce L2:IT App ESS PCM Partner Connect:IT App ESS Rambo:IT App ESS Regnbage:IT App ESS TBM L1:IT App ESS TBM L2"
      ]
    },
    {
      "cells": [
        "IT:Application:Finance",
        "IT App Fi IC Systems:IT App Finance-EE"
      ]
    },
    {
      "cells": [
        "IT:Application:Integration",
        "IT App Integration Chronos:IT App Integration Evy:IT App Integration GESB"
      ]
    },
    {
      "cells": [
        "IT:Application:Inventory",
        "IT App Invent Netw Dev Tool-EE:IT App Inventory Coppar GUI:IT App Inventory CSS:IT App Inventory EAI:IT App Inventory ECM:IT App Inventory EIAS:IT App Inventory Qliksense:IT App Inventory-EE"
      ]
    },
    {
      "cells": [
        "IT:Application:Netadmin",
        "IT App OSS Netadmin"
      ]
    },
    {
      "cells": [
        "IT:Application:OSS",
        "IT-Application-OSS:IT App OSS 1B:IT App OSS Cview-EAI:IT App OSS E-B2B:IT App OSS EEIS:IT App OSS FaDA:IT App OSS Flowview:IT App OSS Goldpen:IT App OSS Herkules:IT App OSS NAC-Julia:IT App OSS NetPro:IT App OSS Service Gateway:IT App OSS SOM -DK:IT App OSS SOM -EE:IT App OSS WebOSS:IT App OSS Websystem Linjenat"
      ]
    },
    {
      "cells": [
        "IT:Application:Portal",
        "Portal:IT App Portal Self Service-EE"
      ]
    },
    {
      "cells": [
        "IT:Application:Security",
        "IT App SecTeliaSign:IT App Security-EE:Security Services-FI"
      ]
    },
    {
      "cells": [
        "IT:Application:SIG",
        "IT App SIG Registerfragor:IT App SIG NAS"
      ]
    },
    {
      "cells": [
        "IT:Application:Supplier Mgmt",
        "IT App SuppM 1B"
      ]
    },
    {
      "cells": [
        "IT:Application:Workflow",
        "IT App WF Helix:IT App WF ServiceNow:IT App WF TNT"
      ]
    },
    {
      "cells": [
        "IT:Cloud Infrastructure",
        "IT Cloud:IT Cloud AWS CIAM-NO:IT Cloud AWS Party\u0026Privacy:IT Cloud TCS:NFVI:Public Cloud"
      ]
    },
    {
      "cells": [
        "IT:Database",
        "Database-NO:IT Database MariaDB L3:IT DB Oracle/PostgreSQL-EE:MSSQL L3:MySQL L3:Oracle L3:PostgreSQL L3"
      ]
    },
    {
      "cells": [
        "IT:DataCenter",
        "DC Denmark:DC Finland:DC Norway:DC Sweden:IT DC Estonia:IT DC OSS-EE"
      ]
    },
    {
      "cells": [
        "IT:FI:CC:Avacon",
        "Delivery"
      ]
    },
    {
      "cells": [
        "IT:Infra",
        "Backup:IT Infra Core-EE:SE:Service Development:Software Asset Management:Storage:User Network:Workplace"
      ]
    },
    {
      "cells": [
        "IT:Network",
        "DNS/DHCP:LAN Services:Load Balancer L2:Load Balancer L3:Routing/Switching L2:Routing/Switching L3:TSIN L2:TSIN L3"
      ]
    },
    {
      "cells": [
        "IT:OSS",
        "Keycom-FI:Satellite-FI"
      ]
    },
    {
      "cells": [
        "IT:Security:FW Orchestration",
        "IT Sec FW Orchestration"
      ]
    },
    {
      "cells": [
        "IT:Server",
        "IT Server Duty Tech-EE:IT Server Netw Dev-EE:Linux/Unix L2:Windows L2"
      ]
    },
    {
      "cells": [
        "IT:Service",
        "Core-NO:NEO-NO:Service-NO"
      ]
    },
    {
      "cells": [
        "IT:Workplace",
        "IT Workplace Enterprise-EE:IT Workplace Operations"
      ]
    },
    {
      "cells": [
        "OSS:Automation",
        "OSS Automation Infra-SE"
      ]
    },
    {
      "cells": [
        "OSS:Inventory",
        "ADDM-Common:IT CMDB-Common"
      ]
    },
    {
      "cells": [
        "OSS:Monitoring",
        "OSS Monitoring-Common:OSS Monitoring-EE:OSS Mon-TEMIP:Overview-Common"
      ]
    },
    {
      "cells": [
        "OSS:Multiple",
        "OSS ADM CGI:OSS Tech Mahindra"
      ]
    },
    {
      "cells": [
        "OSS:NEMS:Ericsson",
        "RAN Ericsson NEMS-Common"
      ]
    },
    {
      "cells": [
        "OSS:NEMS:Huawei",
        "RAN Huawei NEMS-Common"
      ]
    },
    {
      "cells": [
        "OSS:NEMS:NSN",
        "RAN NSN NEMS-Common"
      ]
    },
    {
      "cells": [
        "OSS:Performance",
        "OSS Perf Probing:OSS Perf-ENIQ:OSS Performance-Common"
      ]
    },
    {
      "cells": [
        "OSS:Plan\u0026Pres",
        "OSS Data-Common:OSS Distribution-Common:OSS Optimization-Common:OSS Planning-Common:OSS Presentation-Common"
      ]
    },
    {
      "cells": [
        "OSS:Remote Access",
        "OSS Netguard"
      ]
    },
    {
      "cells": [
        "OSS:Workflow:OW",
        "OSS WF OW Assignment Profiles:OSS WF OW Workflow Infra:OSS Workflow-Common"
      ]
    },
    {
      "cells": [
        "Packet Transport:DNS",
        "IP Registry"
      ]
    },
    {
      "cells": [
        "Packet Transport:Fixed:CDN",
        "Telia CDN"
      ]
    },
    {
      "cells": [
        "Packet Transport:Mobile",
        "Transport Mobile-Common"
      ]
    },
    {
      "cells": [
        "Security services:SOC",
        "SOC-Common-L1:SOC-Common-L2:SOC-Common-L3_SE"
      ]
    },
    {
      "cells": [
        "Third Parties:Mobile",
        "Nokia_TTN_DK"
      ]
    },
    {
      "cells": [
        "Third Parties",
        "Third Party Cygate in OW"
      ]
    },
    {
      "cells": [
        "Transmission:Mobile:Engineering",
        "NW Transmission -ENG"
      ]
    },
    {
      "cells": [
        "Transmission:Mobile",
        "NW Transmission-NO"
      ]
    },
    {
      "cells": [
        "TV",
        "TV 3CS:TV Backend:TV Development:TV Editorial-SE:TV Playout"
      ]
    },
    {
      "cells": [
        "VAS:Application Services",
        "Application Services:VAS Application Services-EE"
      ]
    },
    {
      "cells": [
        "VAS:IMS Services",
        "VAS IMS TCAS"
      ]
    },
    {
      "cells": [
        "VAS:IN Services",
        "VAS IN CGW:VAS IN Entry:VAS IN Managed Voice:VAS IN Services KY\u0026Cleanmail:VAS IN Services Meridix Hawkey:VAS IN Services NGIN CIVR:VAS IN Services NSEE:VAS IN Services Other:VAS IN Services SGW OCSC SIG:VAS IN Services Touchpoint-DK:VAS IN Services Touchpoint-SE:VAS IN Services-EE:VAS IN Touchpoint Plus-SE"
      ]
    },
    {
      "cells": [
        "VAS:IoT",
        "IoT-operation:VAS IoT and MCP-EE"
      ]
    },
    {
      "cells": [
        "VAS:MAS:Linux",
        "VAS MAS Linux"
      ]
    },
    {
      "cells": [
        "VAS:MAS:Windows",
        "VAS MAS Windows"
      ]
    },
    {
      "cells": [
        "VAS:Messaging Services",
        "VAS Messaging Email-EE:VAS Messaging Linux:VAS Messaging Windows:VAS Messaging-EE"
      ]
    },
    {
      "cells": [
        "VAS:Mobile:Common:Development",
        "Collaboration Solution-SE"
      ]
    },
    {
      "cells": [
        "VAS:Mobile:Enterprise",
        "Com Solutions-SE"
      ]
    },
    {
      "cells": [
        "VAS:Mobile:IN services",
        "IN Services-Common:IN Services-EE"
      ]
    },
    {
      "cells": [
        "VAS:Mobile:Messaging",
        "Messaging Operation-EE:Messaging Services-Common"
      ]
    },
    {
      "cells": [
        "VAS:Mobile:Services",
        "112/114 DK:3de Party Content-DK:Core NW Development-Common:IME-DK:IME-LT:IME-NO:Mobiz Link-DK:Mobiz SP-DK:Mobiz Status-DK:Policy manager-DK:Probiz-DK:Touchpoint Plus-DK:Touchpoint Soho-DK:UBP-DK:UC miscellaneous-DK:VCDR-DK"
      ]
    },
    {
      "cells": [
        "Voice:Fixed:PSTN",
        "L2 Fixed Voice-SE"
      ]
    },
    {
      "cells": [
        "Voice:Fixed:VoIP",
        "Voice Fix VoIP Applications-EE:Voice Fix VoIP SAP CCtr-EE:Voice Fix VoIP Services-EE"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userSelectsDropdownNameAsDropdownValueAndShouldSeeValues(String,String,DataTable)"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat pageObjects.BasePage.openDropdownAndGetValues(BasePage.java:303)\r\n\tat pageObjects.BaseRecordPage.verifyDropdownValuesByName(BaseRecordPage.java:701)\r\n\tat pageObjects.BaseRecordPage.verifyMultipleDropdownValues(BaseRecordPage.java:712)\r\n\tat steps.OWF_TroubleEventPageSteps.userSelectsDropdownNameAsDropdownValueAndShouldSeeValues(OWF_TroubleEventPageSteps.java:1087)\r\n\tat ✽.User selects \"Owner Profile*\" as dropdownValue and should see values for \"notreadonly\"(features/Automation/Trouble/00 Incident Record and process output validation/00.06-00.20+05.05_Trouble.feature:31)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
});