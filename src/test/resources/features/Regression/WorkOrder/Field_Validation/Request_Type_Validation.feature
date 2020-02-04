@workorder_field_validation @workorder_Request_Type_field_validation

  Feature:Work Order Request Type field validation
    Scenario: Request Type field validation

      Given user is on the OneWorkflow login page
      And user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create work order
      Then user switches to window 1
      Then multiple statuses "Analysis:Escalation:EXTERNAL - MOBILE:Implementation:Maintenance:Order Spare Part:SA Request:Service Request:Supplier Action:Third Party:Warranty:(clear)" should be available in "Request Type" dropdown
      And User selects "Request Type" as dropdownValue and should see values for "notreadonly"
     | DropdownValue | DropdownValuesToBePresent|
     |Service Request | Application_2OPERATE:Application_ActixOne RNO:Application_AlarmMap:Application_AnalysP/Porch:Application_Atoll:Application_BMC ADDM:Application_Business Service Manager:Application_CAB PORTAL:Application_Cacti:Application_CDDS:Application_Cisco PPM:Application_CNDB Niam:Application_CorNet:Application_Coverage hub:Application_DIS:Application_EchoVault:Application_ehealth:Application_ENIQ:Application_eSOC Core:Application_eSOC Core:Application_Eva FI:Application_GLU Mobility:Application_GNSV:Application_Handover:Application_Hawkeye:Application_HP OpenView:Application_HP Server Övervakning:Application_HP SW BSM:Application_HP SW NAS:Application_HP SW Operations Manager:Application_HP SW Performance:Application_HP SW Performance Manager:Application_HP SW Performance Manager:Application_IPAM:Application_IT CMDB:Application_JUPITER:Application_KALIX:Application_IT CMDB:Application_mBoss:Application_MHV:Application_Monitor Master:Application_mSPEED:Application_Muse:Application_Nagios op5:Application_Neighbor Management Tool:Application_NELLI:Application_NerveCenter:Application_NetCool:Application_Netflow Security Monitoring:Application_NetMRI:Application_Netrac-Helix:Application_NetScout:Application_NMS-NET:Application_NMS-NET-BASTION:Application_NNMi FI:Application_NNMi NO:Application_NNMi SE:Application_Noora:Application_One Workflow:Application_OnSite:Application_OP5:Application_OP5 Appwatch:Application_OSIX:Application_OVERVIEW:Application_Petra:Application_PRS Norway:Application_SAMI:Application_SDI:Application_SevOne:Application_SIA:Application_Snmpc:Application_Splunk TeliaNet:Application_TeMIP:Application_TNT:Application_Traffica:Application_TS Logging and analysis:Application_Zaara:CCIT:Improvement:IT_Application_Assurance:IT_Application_Billing:IT_Application_CRM:IT_Application_Enterprise:IT_Application_Middleware:IT_Application_NMS:IT_Application_OSS:IT_Application_OSS_Tech_Mahindra:IT_Application_Portal:IT_Backup:IT_Database_MySQL L2:IT_Database_Oracle L2:IT_Database_Oracle/MSSQL/MySQL/PostgreSQL_L2:IT_Database_PostgreSQL L2:IT_DC Denmark:IT_DC Finland:IT_DC Norway:IT_DC Sweden:IT_External Application CGI:IT_Infrastructure_Nimbus/TSVP:IT_LAN Services:IT_Load Balancer L2:IT_Load Balancer L3:IT_Network_DNS/DHCP:IT_NFVI:IT_Remote Access L2:IT_Remote Access L3:IT_Routing/Switching L2:IT_Routing/Switching L3:IT_Sec_Firewall_Auth_MobilePASS:IT_Security_Firewall L2:IT_Security_Firewall L3:IT_Security_Proxy L2:IT_Security_Proxy L3:IT_Server_Linux/Unix L2:IT_Server_Windows L2:IT_Server_Windows L2 / Linux/Unix L2:IT_Storage:OSS_WF OW Assignment Profiles:PLAZA:SA Process Improvement:TV_Backend:TV_Playout:VAS_Application Services:VAS_MAS Linux   |
     And user logsOut and accepts alert





