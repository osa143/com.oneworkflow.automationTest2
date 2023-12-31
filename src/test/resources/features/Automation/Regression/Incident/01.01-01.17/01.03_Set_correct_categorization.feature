@01.03 @Incident  @01
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
    Then multiple statuses "1:Access:BSS:Computer Equipment:Computer Services:Core:Customer Services:DS:External:Hardware:Internal Service:IOT:IT:Location:Miscellaneous:Network:Nokia:OSS:Packet_Transport:Process:Product:SERVER:Service:Service Platform:SITE-LP:Software:Telecom:Transmission:Transport:TV:VAS" should be available in "Category" dropdown
    And user selects Category as "Core"
    Then user validates availability of type dropdown
    And multiple statuses "Fixed_IMS:IP:MESSAGING:Mobile CS Core Network:Mobile IMS Core Network:Mobile PS Core Network:Mobile_CS:NFVI:Other:Presentation:Software:Sync:WLAN:Workflow" should be available in "Type" dropdown
    Then user selects Type as "Mobile PS Core Network"
    When user validates availability of item dropdown
    Then multiple statuses "CMG:CMM:DNS:EPG:GGSN:LOCAL_CORE:NAT:NLS:PCRF:PGW:PM:RADIUS:SGSN:SHAPERS:TPE-CMIPBB" should be available in "Item" dropdown
    And user selects Item as "SGSN"
    When user clicks on sweden checkbox under affected BU's
    When user enters "01.03 Set correct categorization" in Title field
    And user selects request type as "Customer" on trouble event page
    And user enters description as "01.03 set correct categorization"
    And user clicks on save button
    Then ticket should be created and status should be assigned



