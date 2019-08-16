@01.03_Set_correct_categorization @Incident
#passed
# CORE for ST, Core for SIT
Feature: Setting of correct categorization

  Scenario: user can set correct categorization

    Given user is on the OneWorkflow login page
    When user logs in with valid username "Change_Automation_1" and password as "Telia@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create trouble event
    And user switches to window 1
    Then trouble record form should appear in new tab
    When user clicks on CTI details under sections
    And user validates availability of category dropdown
    Then multiple statuses "1:Access:Access|Transport:BSS:Computer Equipment:Computer Services:CORE:Customer Services:DS:External:Hardware:Internal Service:IOT:IT:Location:Miscellaneous:Network:Nokia:OSS:Packet_Transport:Product:SERVER:Service:SITE-LP:Software:Transmission:Transport:Transport|Access:TV:VAS" should be available in "Category" dropdown
    And user selects Category as "Core"
    Then user validates availability of type dropdown
    And multiple statuses "Fixed_IMS:IP:MESSAGING:Mobile CS Core Network:Mobile IMS Core Network:Mobile PS Core Network:Mobile_CS:Mobile_PS:NFVI:Other:Performance:Planning:Presentation:Software:WLAN:Workflow" should be available in "Type" dropdown
    Then user selects Type as "Mobile PS Core Network"
    When user validates availability of item dropdown
    Then multiple statuses "DNS:DNS_Mobile_PS:EPG:EPG EPG_Mobile_PS:GGSN:GGSN_Mobile_PS:NAT:NAT_Mobile_PS:NLS:NLS_Mobile_PS:PCRF:PCRF_Mobile_PS:PGW:PGW_Mobile_PS:PM:PM_Mobile_PS:RADIUS:RADIUS_Mobile_PS:SGSN:SGSN_Mobile_PS:SHAPERS:SHAPERS_Mobile_PS:TPE-CMIPBB:TPE-CMIPBB_Mobile_PS" should be available in "Item" dropdown
    And user selects Item as "SGSN"
