@01.03 @Incident1  @01
#passed
# CORE for ST, Core for SIT
Feature: Set correct categorization

  Scenario: Set correct categorization

    Given user is on the OneWorkflow login page
    When user logs in with valid user and password
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create trouble event
    And user switches to window 1
    Then trouble record form should appear in new tab
    When user clicks on CTI details under sections
    And user validates availability of category dropdown
    Then multiple statuses "1:Access:BSS:Computer Equipment:Computer Services:Core:Customer Services:DS:External:Hardware:Internal Service:IOT:IT:Location:Miscellaneous:Network:Nokia:OSS:Packet_Transport:Product:SERVER:Service:SITE-LP:Software:Transmission:Transport:TV:VAS" should be available in "Category" dropdown
    And user selects Category as "Core"
    Then user validates availability of type dropdown
    And multiple statuses "Fixed_IMS:IP:MESSAGING:Mobile CS Core Network:Mobile IMS Core Network:Mobile PS Core Network:Mobile_CS:Mobile_PS:NFVI:Other:Presentation:Software:Sync:WLAN:Workflow" should be available in "Type" dropdown
    Then user selects Type as "Mobile PS Core Network"
    When user validates availability of item dropdown
    Then multiple statuses "DNS:EPG::GGSN:NAT::NLS:PCRF:PGW::PM:RADIUS:SGSN:SHAPERS:TPE-CMIPBB" should be available in "Item" dropdown
    And user selects Item as "SGSN"
